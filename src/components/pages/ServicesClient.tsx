"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Search,
  Megaphone,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Performance-obsessed web apps with modern TypeScript stacks.",
  },
  {
    icon: Sparkles,
    title: "SaaS Platforms",
    desc: "Multi-tenant systems, billing, dashboards and infrastructure that scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS & Android products on React Native or Swift/Kotlin.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Brand-grade product design and design systems that scale across teams.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "LLM agents, RAG, fine-tuning and product features powered by ML.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Reliable platforms on AWS, GCP and edge runtimes, with observability built in.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical SEO, schema, performance and content strategy that ranks.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid, organic and lifecycle programs to compound growth.",
  },
];

const tech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Postgres",
  "Cloudflare",
  "React Native",
  "ASP.NET Core",
  "ASP.NET MVC",
  "SQL Server",
  "ASP.NET Web API",
];

const benefits = [
  "Senior-only team, end to end",
  "Type-safe, tested, observable code",
  "Weekly demos and decisions",
  "Production launches, not prototypes",
  "Design and engineering, in one room",
  "Ongoing partnership beyond launch",
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "1-week sprint to align scope, users and success metrics.",
  },
  { step: "02", title: "Architect", desc: "Technical and product architecture, prototyped early." },
  {
    step: "03",
    title: "Build",
    desc: "Bi-weekly releases. Production-grade quality from day one.",
  },
  { step: "04", title: "Optimize", desc: "Iterate on real usage. Performance, retention, growth." },
];

export function ServicesClient() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Everything you need to ship, <span className="text-gradient">in one team.</span>
              </>
            }
            description="From the first whiteboard sketch to scaling under real load — we cover the full lifecycle of building software."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="group bg-surface-elevated p-7 transition-colors hover:bg-secondary"
            >
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Process" title="How we deliver." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06} className="bg-surface-elevated p-7">
              <span className="font-display text-xs tracking-widest text-muted-foreground">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader eyebrow="Benefits" title="What partnering with us looks like." />
          <Stagger className="grid gap-3">
            {benefits.map((b) => (
              <StaggerItem
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface-elevated p-5"
              >
                <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                  <Check className="size-3.5" />
                </div>
                <p className="text-sm md:text-base">{b}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Technologies" title="The stacks we love." />
        <div className="mt-10 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-foreground p-10 text-background md:p-14">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" aria-hidden />
            <div className="relative grid gap-6 md:grid-cols-[1.5fr_auto] md:items-center">
              <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Need a senior team that can start in two weeks?
              </h2>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:scale-[1.02] transition-transform"
              >
                Book a consultation{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
