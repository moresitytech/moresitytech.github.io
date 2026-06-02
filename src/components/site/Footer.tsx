import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Facebook } from "lucide-react";

const COLS = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Web Development" },
      { to: "/services", label: "Mobile Apps" },
      { to: "/services", label: "SaaS Platforms" },
      { to: "/services", label: "AI & Cloud" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/projects", label: "Case Studies" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/faq", label: "FAQ" },
      { to: "/blog", label: "Insights" },
    ],
  },
] as const;

const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61590387095016",
    Icon: Facebook,
  },
  { name: "Instagram", url: "https://www.instagram.com/moresity.tech/", Icon: Instagram },
  // { name: "Twitter", url: "https://twitter.com/", Icon: Twitter },
  { name: "GitHub", url: "https://github.com/", Icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="flex items-center">
              <div className="relative size-12 w-12 h-12 overflow-hidden rounded-full bg-transparent shadow-elegant">
                <img
                  src="/logo3-transparent.png"
                  alt="Moresity logo"
                  className="w-full h-full object-contain bg-transparent"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/logo3.png";
                  }}
                />
              </div>
              <span className="font-display text-base font-bold tracking-tight text-[#26015f]">
                Moresity<span className="text-[#f1645b]">.tech</span>
              </span>{" "}
            </Link>
            <p className="mt-5 max-w-sm text-pretty text-sm text-muted-foreground">
              We design, engineer and scale software products for ambitious teams — from SaaS
              platforms to AI-native experiences.
            </p>

            <form
              className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border bg-surface-elevated p-1.5 shadow-soft"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
                aria-label="Email address"
              />
              <button className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.02]">
                Subscribe <ArrowUpRight className="size-3.5" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="grid size-9 place-items-center rounded-full border border-border bg-surface-elevated text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l, i) => (
                    <li key={i}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Moresity Tech. Crafted with intent.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
