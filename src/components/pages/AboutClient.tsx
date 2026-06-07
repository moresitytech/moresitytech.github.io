"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowRight, Compass, Heart, Sparkles, Shield } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Clarity over cleverness",
    desc: "We choose the simplest solution that gets the job done — and write it down.",
  },
  {
    icon: Heart,
    title: "Care, deeply",
    desc: "Quality is a craft. We sweat the details so users don't have to think.",
  },
  {
    icon: Sparkles,
    title: "Ship to learn",
    desc: "Real usage beats internal debate. We move in weekly cycles, not quarters.",
  },
  {
    icon: Shield,
    title: "Long horizons",
    desc: "We optimize for the partnership a year out, never the easy win this sprint.",
  },
];

const timeline = [
  {
    year: "Apr 2025",
    title: "Founded",
    desc: "Started as a 4-partner studio focused on building modern SaaS and custom digital products.",
  },
  {
    year: "May 2025",
    title: "First Client Project",
    desc: "Built a customizable CMS-powered ecommerce platform for Juri Incorporate.",
  },
  {
    year: "Jun 2025",
    title: "Product Launch",
    desc: "Launched InvoMaster, our invoicing and business management product for modern retailers.",
  },
  {
    year: "Jul 2025",
    title: "Moresity Mart Partnership",
    desc: "Moresity Mart adopted InvoMaster to streamline inventory, billing, and daily operations.",
  },
  {
    year: "2026",
    title: "Growing Studio",
    desc: "Continuing as a lean 4-partner team delivering scalable web platforms and business software.",
  },
];

const leaders = [
  {
    name: "Saurav Dhoju",
    role: "Co-Founder & Frontend Lead",
    bio: "Designs premium product experiences, front-end architecture, and developer-first workflows.",
    email: "saurav@moresity.tech",
    phone: "+977-9808827451",
  },
  {
    name: "Abishek Suwal",
    role: "Co-Founder & Backend Architect",
    bio: "Builds reliable APIs, infrastructure, and scalable systems for fast-growing products.",
    email: "abishek@moresity.tech",
    phone: "+977-9849099814",
  },
  {
    name: "Rupesh Mahat",
    role: "Co-Founder & Head of Quality",
    bio: "Owns testing, release readiness, and the standards that keep every product stable.",
    email: "rupesh@moresity.tech",
    phone: "+977-9768407212",
  },
  {
    name: "Nikil Shrestha",
    role: "Co-Founder & Project Lead",
    bio: "Connects product strategy, design systems, and client insights into clear outcomes.",
    email: "nikil@moresity.tech",
    phone: "+977-9764781448",
  },
];

export function AboutClient() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="About us"
            title={
              <>
                A studio for teams who{" "}
                <span className="text-gradient">care how it&apos;s made.</span>
              </>
            }
            description="We bring together senior engineers, designers and product thinkers to build software that compounds in value — for years, not just launches."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface-elevated p-8 md:grid-cols-2 md:p-12">
          <Reveal>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Mission
            </h3>
            <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Build software so well-considered, people can feel it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Vision
            </h3>
            <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              A world where the best products come from small, senior, deeply-caring teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Our values" title="What we won't compromise on." />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="rounded-3xl border border-border bg-surface-elevated p-7"
            >
              <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Timeline" title="A short history." />
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" aria-hidden />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
                >
                  <div className="pl-12 md:pl-0 md:text-right">
                    <span className="font-display text-3xl font-semibold tracking-tight text-gradient md:text-4xl">
                      {t.year}
                    </span>
                  </div>
                  <div className="pl-12 md:pl-12">
                    <div
                      className="absolute left-2.5 top-2 size-3 rounded-full bg-gradient-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2"
                      aria-hidden
                    />
                    <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Leadership" title="The people you'll actually work with." />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {leaders.map((p) => (
            <StaggerItem
              key={p.name}
              className="group overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-background font-display text-sm font-semibold shadow-soft">
                {p.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="mt-4">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{p.bio}</p>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href={`mailto:${p.email}`}
                    className="block text-sm font-medium text-foreground underline decoration-muted-foreground/30 decoration-1 underline-offset-4"
                  >
                    {p.email}
                  </a>
                  <a
                    href={`tel:${p.phone.replace(/[^+0-9]/g, "")}`}
                    className="block text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {p.phone}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-surface-elevated p-10 md:p-14">
            <div className="grid gap-6 md:grid-cols-[1.5fr_auto] md:items-center">
              <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Want to work together?
              </h2>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:scale-[1.02] transition-transform"
              >
                Start a conversation{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
