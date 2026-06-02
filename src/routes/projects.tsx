import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import juriImage1 from "@/assets/JuriInc/juri-1.png";
import juriImage2 from "@/assets/JuriInc/juri-2.png";
import juriImage3 from "@/assets/JuriInc/juri-3.png";
import juriImage4 from "@/assets/JuriInc/juri-4.png";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work & Case Studies — Moresity Tech" },
      {
        name: "description",
        content:
          "Selected case studies of SaaS, AI, fintech and mobile products we've designed and engineered for clients worldwide.",
      },
      { property: "og:title", content: "Work — Moresity Tech" },
      { property: "og:description", content: "Featured case studies and outcomes." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  client: string;
  tag: "SaaS" | "Mobile" | "Web";
  desc: string;
  metric: string;
  tech: string[];
  images?: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Ecommerce",
    client: "Juri Inc.",
    tag: "Web",
    desc: "B2B marketplace with custom product builder and real-time inventory sync.",
    metric: "",
    tech: [],
    images: [juriImage1, juriImage2, juriImage3, juriImage4],
    link: "https://juriinc.com.np/",
  },
  {
    title: "Invomaster",
    client: "Moresity Mart",
    tag: "SaaS",
    desc: "B2B marketplace with custom product builder and real-time inventory sync.",
    metric: "",
    tech: [],
  },
  {
    title: "Accounting Inventory",
    client: "",
    tag: "Web",
    desc: "Finance and stock operations dashboard built for trading workflows and quick daily reporting.",
    metric: "",
    tech: [],
  },
];

const FILTERS = ["All", "SaaS", "Web", "Ecommerce"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const items = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Outcomes, not <span className="text-gradient">aesthetics-only.</span>
              </>
            }
            description="A small slice of products our teams have shipped over the last few years."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap gap-2 rounded-full border border-border bg-surface-elevated p-1.5 w-fit shadow-soft">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f ? "text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <ProjectCardLink href={p.link ?? "/contact"} external={Boolean(p.link)}>
                  <ProjectCardMedia project={p} />
                  <div className="p-5 md:p-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="rounded-full border border-border bg-background/50 px-2 py-2">
                          {p.tag}
                        </span>
                        <span className="rounded-full border border-border bg-background/50 px-2 py-2">
                          {p.client}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-[1.55rem] font-semibold tracking-tight md:text-[1.65rem]">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ProjectCardLink>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-surface-elevated p-10 text-center md:p-14">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Your project, here next.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-sm text-muted-foreground md:text-base">
              Tell us what you're building. We'll reply with thoughts and next steps within 24
              hours.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:scale-[1.02] transition-transform"
            >
              Start a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ProjectCardMedia({ project }: { project: Project }) {
  const images = project.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/8] overflow-hidden bg-gradient-mesh">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="absolute inset-0 grid place-items-center font-display text-4xl font-semibold tracking-tight text-foreground/15 md:text-[2.75rem]">
          {project.title.split(" ")[0]}
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 text-xs font-medium backdrop-blur">
          {project.tag}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full border border-border bg-surface-elevated/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] backdrop-blur">
          Featured
        </div>
        <div className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-foreground text-background opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${project.title} preview ${activeIndex + 1}`}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/12 via-transparent to-transparent" />
      <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
        {project.tag}
      </div>
      <div className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-foreground text-background opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="size-4" />
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur">
        {images.map((image, index) => (
          <span
            key={image}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex ? "w-5 bg-foreground" : "w-1.5 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCardLink({
  href,
  external,
  children,
}: {
  href: string;
  external: boolean;
  children: ReactNode;
}) {
  const className = "block h-full text-left";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
