"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Clock, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";

const POSTS = [
  {
    title: "Designing SaaS dashboards that don't slow down at scale",
    category: "Engineering",
    read: 8,
    author: "Liam Pereira",
    excerpt:
      "Performance budgets, virtualized lists, and why your TTFB matters more than your animation.",
  },
  {
    title: "RAG in production: lessons from 14 deployments",
    category: "AI",
    read: 12,
    author: "Noah Bennett",
    excerpt:
      "Chunking strategies, eval harnesses, and the unglamorous infra work that makes agents reliable.",
  },
  {
    title: "The compounding ROI of a real design system",
    category: "Design",
    read: 6,
    author: "Yuki Tanaka",
    excerpt: "A design system isn't a Figma library — it's an interface contract between teams.",
  },
  {
    title: "From 0 to product-market fit in 90 days",
    category: "Product",
    read: 10,
    author: "Amara Okafor",
    excerpt: "How we structure focused MVP sprints with founders pre-seed and beyond.",
  },
  {
    title: "Why we still pick boring databases",
    category: "Engineering",
    read: 5,
    author: "Liam Pereira",
    excerpt: "Postgres + a clear schema beats most exotic stacks for 95% of products.",
  },
  {
    title: "Shipping faster without lowering the bar",
    category: "Team",
    read: 7,
    author: "Amara Okafor",
    excerpt: "Rituals, calendars and small team structure that compound over months.",
  },
];

const CATS = ["All", "Engineering", "AI", "Design", "Product", "Team"] as const;

export function BlogClient() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [q, setQ] = useState("");
  const filtered = POSTS.filter(
    (p) => (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()),
  );
  const [featured, ...rest] = filtered;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="Insights"
            title={
              <>
                Field notes from the <span className="text-gradient">building floor.</span>
              </>
            }
            description="Essays on engineering, design and team craft — written by the people doing the work."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2 rounded-full border border-border bg-surface-elevated p-1.5 w-fit">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  cat === c
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-full rounded-full border border-border bg-surface-elevated py-2.5 pl-11 pr-4 text-sm outline-none focus:border-foreground/40"
            />
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <Reveal>
            <article className="group relative grid overflow-hidden rounded-3xl border border-border bg-surface-elevated md:grid-cols-[1.1fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-mesh md:aspect-auto">
                <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
                <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2.5 py-0.5">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" /> {featured.read} min
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium">By {featured.author}</span>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read article <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <StaggerItem key={p.title}>
              <Link
                href="/blog"
                className="group block overflow-hidden rounded-3xl border border-border bg-surface-elevated transition-all hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-mesh">
                  <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
                  <span className="absolute left-4 top-4 rounded-full bg-surface-elevated/80 px-3 py-1 text-xs font-medium backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" /> {p.read} min
                    </span>
                    <span>·</span>
                    <span>{p.author}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-gradient">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-foreground p-10 text-background md:p-14">
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Get our best essays, monthly.
                </h2>
                <p className="mt-3 text-sm text-background/70">
                  One thoughtful note from the team. No spam. Unsubscribe in one click.
                </p>
              </div>
              <form
                className="flex items-center gap-2 rounded-full bg-background p-1.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none"
                />
                <button className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
