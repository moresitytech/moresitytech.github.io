import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, Play } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Stories — Moresity Tech" },
      { name: "description", content: "What clients say about partnering with Moresity Tech — video stories, written reviews and real outcomes." },
      { name: "keywords", content: "testimonials, reviews, client feedback, success stories, case studies" },
      { property: "og:title", content: "Client stories — Moresity Tech" },
      { property: "og:description", content: "Reviews and stories from our clients." },
      { property: "og:url", content: "https://tech.moresityholdings.com.np/testimonials" },
    ],
    links: [{ rel: "canonical", href: "https://tech.moresityholdings.com.np/testimonials" }],
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
              name: "Testimonials",
              item: "https://tech.moresityholdings.com.np/testimonials",
            },
          ],
        }),
      },
    ],
  }),
  component: TestimonialsPage,
});

const QUOTES = [
  { quote: "Moresity rebuilt our platform in 9 weeks. Our activation tripled the quarter after launch.", author: "Sarah Kim", role: "CPO, Lumen" },
  { quote: "Easily the most thoughtful engineering team we've ever partnered with.", author: "David Alvarez", role: "CTO, Northwind" },
  { quote: "They ship like a founding team. The bar for quality is unreal.", author: "Priya Raman", role: "Head of Product, Helios" },
  { quote: "Senior, calm, and shockingly fast. A genuine extension of our team.", author: "Marcus Chen", role: "VP Eng, Atlas" },
  { quote: "Best engineering partner we've ever worked with — across two companies.", author: "Elena Volkov", role: "Founder, Orbit" },
  { quote: "The polish and care show up in every PR. Our users feel it.", author: "Jacob Tan", role: "Director, Vector" },
];

const VIDEOS = [
  { title: "How Lumen tripled activation", author: "Sarah Kim · CPO", time: "3:42" },
  { title: "Building Northwind's payments core", author: "David Alvarez · CTO", time: "5:11" },
  { title: "Helios on the rebuild that worked", author: "Priya Raman · Head of Product", time: "4:28" },
];

function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="Testimonials"
            title={<>Quiet teams. <span className="text-gradient">Loud results.</span></>}
            description="A few words from the partners who trust us with their products."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <SectionHeader eyebrow="Video stories" title="In their own words." />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface-elevated">
                <div className="relative aspect-video overflow-hidden bg-gradient-mesh">
                  <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
                  <button className="absolute inset-0 grid place-items-center" aria-label="Play video">
                    <span className="grid size-16 place-items-center rounded-full bg-foreground text-background shadow-elegant transition-transform group-hover:scale-110">
                      <Play className="size-6 translate-x-0.5 fill-current" />
                    </span>
                  </button>
                  <span className="absolute bottom-3 right-3 rounded-full bg-surface-elevated/90 px-2.5 py-0.5 text-xs font-medium backdrop-blur">{v.time}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">{v.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{v.author}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow="Reviews" title="What our clients say." />
        <Stagger className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {QUOTES.map((t, i) => (
            <StaggerItem key={i} className="mb-6 break-inside-avoid rounded-3xl border border-border bg-surface-elevated p-7 shadow-soft">
              <Quote className="size-7 text-primary/40" />
              <div className="mt-4 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
              </div>
              <p className="mt-4 text-pretty text-base font-medium leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid size-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-semibold text-primary-foreground">
                  {t.author.split(" ").map(n => n[0]).join("")}
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

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-surface-elevated p-10 text-center md:p-14">
            <div className="mx-auto flex w-fit items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-5 fill-current" />)}
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              4.9 / 5 average across 80+ engagements
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              We earn long-term partnerships by delivering work our clients are excited to show their boards.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
