import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
const SECTIONS = [
  {
    title: "General",
    items: [
      { q: "What kind of company is Moresity Tech?", a: "A senior software studio. We design, engineer and scale SaaS, web, mobile and AI products for ambitious teams." },
      { q: "Where are you based?", a: "We're remote-first with hubs in San Francisco, Lisbon, and Singapore. Our team spans 4 continents." },
      { q: "Do you sign NDAs?", a: "Yes — happy to sign a mutual NDA before we share or hear anything sensitive." },
    ],
  },
  {
    title: "Services",
    items: [
      { q: "What services do you offer?", a: "Web & SaaS development, mobile apps, AI solutions, cloud/DevOps, UI/UX design, SEO and digital marketing." },
      { q: "Do you build MVPs?", a: "Yes — we run focused MVP sprints for early-stage teams looking to validate quickly without cutting corners." },
      { q: "Can you embed in our existing team?", a: "Absolutely. We embed senior engineers, designers and PMs into your team for as long as you need." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "How do you price engagements?", a: "Most projects are scoped as fixed-price phases or monthly retainers. We share clear estimates after discovery." },
      { q: "What's a typical project budget?", a: "Engagements usually range from $25k for focused sprints to $200k+ for multi-quarter builds." },
      { q: "Do you offer equity-only deals?", a: "Occasionally, for missions we believe in deeply. Most engagements are cash-based." },
    ],
  },
  {
    title: "Support",
    items: [
      { q: "Do you offer post-launch support?", a: "Yes — most clients continue with us via a maintenance or growth retainer." },
      { q: "What's your response time?", a: "We reply to inquiries within 24 hours, and active clients have same-day support during business hours." },
      { q: "Can we own the code?", a: "Yes — all code, designs and assets are yours from day one, with no lock-in." },
    ],
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Moresity Tech" },
      { name: "description", content: "Answers about engagements, pricing, process, services and support at Moresity Tech." },
      { name: "keywords", content: "FAQ, frequently asked questions, pricing, services, support" },
      { property: "og:title", content: "FAQ — Moresity Tech" },
      { property: "og:description", content: "Frequently asked questions about working with us." },
      { property: "og:url", content: "https://tech.moresityholdings.com.np/faq" },
    ],
    links: [{ rel: "canonical", href: "https://tech.moresityholdings.com.np/faq" }],
    scripts: [{
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
            name: "FAQ",
            item: "https://tech.moresityholdings.com.np/faq",
          },
        ],
      }),
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: SECTIONS.flatMap((s) =>
          s.items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        ),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Answers, <span className="text-gradient">organized.</span></>}
            description="Common questions about our work, process, pricing and support."
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10 md:px-6">
        {SECTIONS.map((section, si) => (
          <div key={section.title} className="mt-12">
            <Reveal>
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {section.title}
              </h2>
            </Reveal>
            <div className="mt-5 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface-elevated">
              {section.items.map((it, i) => {
                const id = `${si}-${i}`;
                const isOpen = open === id;
                return (
                  <div key={it.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-secondary/60"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold md:text-lg">{it.q}</span>
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-surface">
                        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-muted-foreground md:text-base">{it.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-foreground p-10 text-background md:p-14">
            <div className="grid gap-6 md:grid-cols-[1.5fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Still have questions?</h2>
                <p className="mt-2 text-sm text-background/70">We usually reply within a few hours.</p>
              </div>
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:scale-[1.02] transition-transform">
                Get in touch <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
