import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Coffee, Heart, GraduationCap, Globe, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Moresity Tech" },
      {
        name: "description",
        content:
          "Join a senior team building software that matters. Open roles in engineering, design and AI.",
      },
      { name: "keywords", content: "careers, jobs, hiring, engineering, design, remote work" },
      { property: "og:title", content: "Careers — Moresity Tech" },
      { property: "og:description", content: "Open roles and what it's like to work with us." },
      { property: "og:url", content: "https://tech.moresityholdings.com.np/careers" },
    ],
    links: [{ rel: "canonical", href: "https://tech.moresityholdings.com.np/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://tech.moresityholdings.com.np/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Careers",
              item: "https://tech.moresityholdings.com.np/careers",
            },
          ],
        }),
      },
    ],
  }),
  component: CareersPage,
});

type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
};

const ROLES: Role[] = [
  // {
  //   title: "Senior Product Engineer",
  //   team: "Engineering",
  //   location: "Remote · Global",
  //   type: "Full-time",
  // },
  // { title: "Staff AI Engineer", team: "AI", location: "Remote · EU / US", type: "Full-time" },
  // { title: "Product Designer", team: "Design", location: "Lisbon / Remote", type: "Full-time" },
  // {
  //   title: "Engineering Manager, Platform",
  //   team: "Engineering",
  //   location: "SF / Remote",
  //   type: "Full-time",
  // },
  // { title: "Mobile Engineer (iOS)", team: "Mobile", location: "Remote · Global", type: "Contract" },
  // { title: "Design Engineer", team: "Design", location: "Remote · Global", type: "Full-time" },
];

const PERKS = [
  {
    icon: Globe,
    title: "Remote-first, async by default",
    desc: "Work from anywhere with 4 hours overlap with your team.",
  },
  {
    icon: Heart,
    title: "Health & wellbeing",
    desc: "Full medical, dental, vision, plus a monthly wellness budget.",
  },
  {
    icon: GraduationCap,
    title: "Learning budget",
    desc: "$2,500/year for books, courses and conferences.",
  },
  { icon: Coffee, title: "Real time off", desc: "Unlimited PTO with a 4-week minimum, enforced." },
  {
    icon: Sparkles,
    title: "Top equipment",
    desc: "Your pick of laptop, displays and home-office setup.",
  },
  {
    icon: MapPin,
    title: "Annual retreat",
    desc: "A week together each year in a new place. Last year: Lisbon.",
  },
];

const STEPS = [
  { n: "01", t: "Intro chat", d: "30 minutes with our team to learn about you." },
  { n: "02", t: "Craft interview", d: "Deep dive on past work and a paid trial task." },
  { n: "03", t: "Team day", d: "Half-day with the team you'd join, on real problems." },
  { n: "04", t: "Offer", d: "Decision and offer within a week of team day." },
];

function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="Careers"
            title={
              <>
                Build with a team that <span className="text-gradient">values craft over chaos.</span>
              </>
            }
            description="We hire deliberately, keep teams small, and choose work that rewards focus, ownership, and long-term quality."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-border bg-surface-elevated p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Senior first</p>
              <h3 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                We only hire when the role genuinely changes the product.
              </h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                That means fewer openings, stronger teams, and the freedom to deliver at a high bar. If your work is thoughtful, user-centered, and built to last, let’s talk.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
              >
                Send us a note <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-border bg-background/80 p-7 shadow-soft">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">What we hire for</p>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  <li>Problem solvers who act like owners.</li>
                  <li>People who care about readability, speed, and scale.</li>
                  <li>Team members who make collaboration feel easy.</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-border bg-background/80 p-7 shadow-soft">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">What you can expect</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Fast decisions, honest feedback, and a hiring process built to uncover strong, practical experience — not perfect resumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <SectionHeader
          eyebrow="Open roles"
          title={ROLES.length > 0 ? "Current opportunities." : "No current openings."}
        />
        {ROLES.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ROLES.map((r) => (
              <Link
                key={r.title}
                to="/contact"
                className="group overflow-hidden rounded-[2rem] border border-border bg-surface-elevated p-7 transition hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{r.team}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {r.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-background">
                    Apply <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full border border-border px-3 py-2">{r.location}</span>
                  <span className="rounded-full border border-border px-3 py-2">{r.type}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-surface-elevated p-12 shadow-soft">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-primary opacity-10 blur-3xl" aria-hidden />
            <div className="relative text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Keep us in mind</p>
              <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground">
                No active hiring right now.
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                We only open roles when the timing is right and the team truly needs another senior creator. If you want to stay connected, send us a note and we’ll reach out when the next role fits.
              </p>
              <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
                >
                  Contact us
                </Link>
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeader eyebrow="Perks" title="Benefits that help you do better work." />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="rounded-[2rem] border border-border bg-surface-elevated p-8 shadow-soft"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Hiring process" title="How we move from first chat to offer." />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="rounded-[2rem] border border-border bg-surface-elevated p-7 shadow-soft">
              <span className="font-display text-xs tracking-[0.28em] text-muted-foreground">{s.n}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
