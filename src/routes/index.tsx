import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Search,
  Megaphone,
  LineChart,
  Star,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moresity Tech — Premium Software, SaaS & AI Studio" },
      {
        name: "description",
        content:
          "We design and engineer enterprise-grade software products — SaaS platforms, mobile apps, AI tools, and digital experiences that scale.",
      },
      { property: "og:title", content: "Moresity Tech — Premium Software Studio" },
      {
        property: "og:description",
        content: "Enterprise-grade SaaS, web, mobile and AI products for ambitious teams.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-performance web apps with modern stacks, polished to the pixel.",
  },
  {
    icon: Sparkles,
    title: "SaaS Platforms",
    desc: "Multi-tenant systems, billing, dashboards, and infrastructure built to scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS & Android products users actually keep on their home screen.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "LLM agents, RAG pipelines, and ML features embedded in your product.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Reliable, observable systems on AWS, GCP, and edge runtimes.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Design systems and product flows engineered for conversion and clarity.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical SEO, schema, performance — built so customers find you.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Growth strategy, campaigns and content that compound over time.",
  },
];

const projects = [
  {
    tag: "ERP",
    title: "Accounting Inventory System",
    desc: "Comprehensive accounting and inventory management system focused for trading companies.",
    metric: "Trading Company Solution",
  },
  {
    tag: "POS",
    title: "Invomaster POS",
    desc: "Point-of-sale system designed for trading businesses, retail stores, and restaurants.",
    metric: "Multi-Business Support",
  },
  {
    tag: "Ecommerce",
    title: "Juri Incorporation Website",
    desc: "Custom ecommerce platform and corporate website developed for Juri Incorporation.",
    metric: "Custom Web Solution",
  },
];

const stats = [
  { v: "Launched 2026", l: "Studio founded" },
  { v: "Accepting clients", l: "Now taking work" },
  { v: "Fast sprints", l: "One week discovery" },
  { v: "Maintenance", l: "Ongoing support" }
];

const logos = ["Juri Incorporate", "Moresity Mart"];

const testimonials = [
  // {
  //   quote:
  //     "Moresity delivered a reliable accounting and inventory system that streamlined our daily trading operations and improved efficiency across departments.",
  //   author: "Juri Incorporation",
  //   role: "Trading Company",
  // },
  // {
  //   quote:
  //     "The Invomaster POS system helped us manage sales, billing, and restaurant operations smoothly with an easy-to-use interface.",
  //   author: "Juri Incorporation",
  //   role: "Retail & Restaurant Operations",
  // },
  {
    quote:
      "Their team developed a modern ecommerce website for our business that perfectly matched our brand and operational needs.",
    author: "Juri Incorporation",
    role: "Ecommerce Platform Client",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We map the problem space, users, and constraints. No assumptions.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Interaction, brand and information architecture, prototyped in days.",
  },
  {
    step: "03",
    title: "Engineer",
    desc: "Production-grade code with CI, tests, and observability from day one.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Iterate on real usage. Optimize for retention, performance and growth.",
  },
];

const faqs = [
  {
    q: "How do engagements usually start?",
    a: "We begin with a focused 1-week discovery sprint to align on scope, success metrics and architecture before any commitment.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — from pre-seed MVPs to Series-B replatforms. We tailor the team shape and pace to your stage.",
  },
  {
    q: "What stacks do you typically use?",
    a: "TypeScript, React, Next.js, Node, Go, Postgres, and modern AI/ML tooling. We pick what fits, not what's trending.",
  },
  {
    q: "Can you augment our existing team?",
    a: "Absolutely. We embed senior engineers, designers and product partners into your team for as long as you need.",
  },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 md:px-6 md:pt-24">
          <Reveal>
            <Eyebrow>New · 2026 collective</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]">
              Product-grade software, <span className="text-gradient">shipped.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              A senior team shipping SaaS, AI, and mobile products for ambitious teams.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Start a project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                View our work
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          {/* Floating hero card */}
          <div className="relative mt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-surface-elevated p-2 shadow-elegant"
            >
              <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
                {stats.slice(0, 3).map((s) => (
                  <div
                    key={s.l}
                    className="bg-surface-elevated p-8 flex flex-col items-center justify-center text-center"
                    aria-label={`${s.l}: ${s.v}`}
                  >
                    <div className="font-display text-xl font-semibold tracking-tight md:text-3xl">
                      {s.v}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -inset-x-12 -top-12 -z-10 h-40 bg-gradient-mesh opacity-60 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-y border-border bg-surface py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by teams at
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="marquee flex w-max items-center gap-14">
              {[...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-semibold tracking-tight text-muted-foreground/1000 md:text-2xl"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-28 md:px-6">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              One studio. <span className="text-muted-foreground">Every surface.</span>
            </>
          }
          description="A senior team that designs, ships and scales — without the agency handoffs."
        />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="group relative bg-surface-elevated p-7 transition-colors hover:bg-secondary"
            >
              <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:-translate-y-0.5">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Selected work" title={<>Products our partners are proud of.</>} />
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              All case studies <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <Link
                to="/projects"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-surface-elevated p-8 transition-all hover:shadow-elegant"
              >
                <div
                  className="absolute inset-0 bg-gradient-mesh opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {p.tag}
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground md:text-base">{p.desc}</p>
                  <div className="mt-8 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    {p.metric}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* PROCESS */}
      <section className="relative mx-auto max-w-7xl px-4 py-28 md:px-6">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A process built for shipping, <span className="text-gradient">not slides.</span>
            </>
          }
        />
        <div className="relative mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="bg-surface-elevated p-7">
              <span className="font-display text-xs font-medium tracking-widest text-muted-foreground">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Why Moresity"
            title={
              <>
                Senior team. Calm process.{" "}
                <span className="text-muted-foreground">Outsized outcomes.</span>
              </>
            }
            description="We're not an agency. We're an embedded product team that ships in your codebase, with your standards."
          />
          <Stagger className="grid gap-3" staggerChildren={0.06}>
            {[
              "Senior-only engineers and designers — no juniors hidden in the staffing plan.",
              "Weekly demos and decisions, never a 60-page status report.",
              "Production-grade quality: type-safety, tests, observability and CI on day one.",
              "Long-term partnership model — over 90% of our work is from repeat clients.",
            ].map((line) => (
              <StaggerItem
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface-elevated p-5"
              >
                <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </div>
                <p className="text-sm text-foreground/90 md:text-base">{line}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.l} className="bg-surface-elevated p-8 text-center">
              <div className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {s.v}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-28 md:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>The kind of partner you write home about.</>}
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.author}
              className="rounded-3xl border border-border bg-surface-elevated p-7 shadow-soft"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-pretty text-base font-medium leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid size-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-semibold text-primary-foreground">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-28 md:px-6">
        <SectionHeader eyebrow="FAQ" title="Answers, before you ask." align="center" />
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface-elevated">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-secondary/60"
                  aria-expanded={open}
                >
                  <span className="font-display text-base font-semibold md:text-lg">{f.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-surface">
                    {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm text-muted-foreground md:text-base">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-foreground p-10 text-background md:p-16">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden />
            <div
              className="absolute -right-20 -top-20 size-72 rounded-full bg-primary/30 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                  Have an ambitious idea? <span className="opacity-70">Let's build it.</span>
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-sm text-background/70 md:text-base">
                  We take on a small, deliberate number of new projects each quarter. Tell us about
                  yours.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
                >
                  Book a discovery call
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <p className="text-xs text-background/60">
                  Replies within 24 hours · No sales pressure
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
