import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative z-10 max-w-lg text-center">
        <p className="font-display text-[8rem] font-semibold leading-none tracking-tighter text-gradient">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight">This page drifted into the void.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The URL you're looking for doesn't exist, or has been moved.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02]"
          >
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight">Something went sideways.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We hit an unexpected error. Try again, or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;
const launchAt = new Date("2026-06-02T20:00:00");
const launchLabel = "June 2, 2026 at 8:00 PM";

type CountdownState = {
  total: number;
  hours: string;
  minutes: string;
  seconds: string;
};

type LaunchInfo = {
  label: string;
  timezone: string;
};

function getCountdownState(target: Date): CountdownState {
  const total = Math.max(target.getTime() - Date.now(), 0);
  const hours = Math.floor(total / (1000 * 60 * 60));
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function getLaunchInfo(target: Date): LaunchInfo {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local time";

  try {
    return {
      label: new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(target),
      timezone,
    };
  } catch {
    return {
      label: launchLabel,
      timezone,
    };
  }
}

function useCountdown(target: Date) {
  const [countdown, setCountdown] = useState(() => getCountdownState(target));

  useEffect(() => {
    const update = () => setCountdown(getCountdownState(target));
    update();

    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return countdown;
}

function LaunchGate({ countdown, launchInfo }: { countdown: CountdownState; launchInfo: LaunchInfo }) {
  return (
    <div className="relative flex min-h-dvh items-center overflow-hidden bg-background px-4 py-10">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-75" aria-hidden />
      <div className="absolute inset-0 noise opacity-20" aria-hidden />
      <motion.div
        className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        animate={{ y: [0, 24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-[2rem] border border-border/80 p-6 shadow-elegant sm:p-8 lg:p-12"
        >
          <div className="absolute right-6 top-6 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Timezone: {launchInfo.timezone}
          </div>

          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_60%,transparent)]" />
              Launch countdown
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Opening at <span className="text-gradient">8:00 PM</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base lg:text-lg">
              The website unlocks automatically at {launchInfo.label}. Until then, this screen keeps
              the launch moment front and center with a live countdown.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-soft sm:p-6"
              >
                <div
                  className="font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl"
                  aria-live="polite"
                  suppressHydrationWarning
                >
                  {item.value}
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full border border-border bg-surface-elevated px-3 py-1.5">
              Launch time: {launchInfo.label}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-surface-elevated px-3 py-1.5">
              Refresh once if the site has not switched after 8 PM
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function LaunchRevealOverlay() {
  const burstRings = [
    { className: "left-[10%] bottom-0 size-3", delay: 0 },
    { className: "left-[22%] bottom-0 size-4", delay: 0.18 },
    { className: "left-[36%] bottom-0 size-3", delay: 0.32 },
    { className: "left-[50%] bottom-0 size-4", delay: 0.08 },
    { className: "right-[36%] bottom-0 size-3", delay: 0.22 },
    { className: "right-[22%] bottom-0 size-4", delay: 0.38 },
    { className: "right-[10%] bottom-0 size-3", delay: 0.5 },
  ];

  const streaks = [
    { left: "8%", delay: 0 },
    { left: "16%", delay: 0.12 },
    { left: "26%", delay: 0.28 },
    { left: "38%", delay: 0.06 },
    { left: "50%", delay: 0.2 },
    { left: "62%", delay: 0.34 },
    { left: "74%", delay: 0.14 },
    { left: "86%", delay: 0.3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.4, delay: 3.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background px-4"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <motion.div
        className="absolute left-1/2 bottom-[-4rem] h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [0.92, 1.18, 1], opacity: [0.55, 0.95, 0.35], y: [0, -70, -18] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-2rem] left-1/4 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -120, -180], x: [0, 10, 0], opacity: [0.2, 0.8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
      />
      {streaks.map((streak, index) => (
        <motion.span
          key={`streak-${index}`}
          className="absolute bottom-0 h-36 w-1 rounded-full bg-primary/80 shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          style={{ left: streak.left }}
          initial={{ opacity: 0, y: 0, scaleY: 0.2 }}
          animate={{ opacity: [0, 1, 0], y: [0, -160, -260], scaleY: [0.2, 1.25, 0.55] }}
          transition={{ duration: 1.8, delay: streak.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      {burstRings.map((dot, index) => (
        <motion.span
          key={`burst-${index}`}
          className={`absolute rounded-full bg-primary shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_70%,transparent)] ${dot.className}`}
          animate={{ y: [0, -28, -140], opacity: [0.25, 1, 0], scale: [0.55, 1.15, 0.7] }}
          transition={{ duration: 2.3, delay: dot.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative max-w-xl rounded-[2rem] border border-border/80 px-8 py-8 text-center shadow-elegant sm:px-10 sm:py-10"
      >
        <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full border border-border bg-surface-elevated shadow-soft">
          <span className="size-3 rounded-full bg-primary shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_75%,transparent)]" />
        </div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Party time
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Welcome in. The launch is officially live.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          Thanks for waiting. The celebration blasts upward from the bottom before the full website opens.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="rounded-full border border-border bg-surface-elevated px-3 py-1.5">Bottom-to-top blast</span>
          <span className="rounded-full border border-border bg-surface-elevated px-3 py-1.5">Celebration mode</span>
          <span className="rounded-full border border-border bg-surface-elevated px-3 py-1.5">Enjoy the site</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  head: () => ({
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#3b82f6" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "format-detection", content: "telephone=no" },
      // Google Search Console verification (if needed)
      { name: "google-site-verification", content: "YOUR_GOOGLE_VERIFICATION_CODE" },
      // Language
      { "http-equiv": "Content-Language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "https://tech.moresityholdings.com.np/" },
      { rel: "sitemap", href: "/sitemap.xml", type: "application/xml" },
      { rel: "alternate", hrefLang: "en", href: "https://tech.moresityholdings.com.np/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Moresity Tech",
          url: "https://tech.moresityholdings.com.np/",
          logo: "https://tech.moresityholdings.com.np/logo.png",
          description: "Enterprise-grade software studio building SaaS, web, mobile and AI products",
          sameAs: [
            "https://www.linkedin.com/company/moresity-tech",
            "https://twitter.com/moresity_tech",
            "https://github.com/moresity",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Business Development",
            telephone: "+977-9808827451",
            email: "info@moresity.com",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bhaktapur",
            addressCountry: "NP",
          },
          foundingDate: "2025-04-01",
          founder: [
            { "@type": "Person", name: "Saurav Dhoju" },
            { "@type": "Person", name: "Abishek Suwal" },
            { "@type": "Person", name: "Rupesh Mahat" },
            { "@type": "Person", name: "Nikil Shrestha" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://tech.moresityholdings.com.np/",
          name: "Moresity Tech",
          description: "Software studio building enterprise-grade SaaS, web, mobile and AI solutions",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://tech.moresityholdings.com.np/search?q={search_term_string}",
            },
            query_input: "required name=search_term_string",
          },
        }),
      },
    ],
  }),
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const countdown = useCountdown(launchAt);
  const launchInfo = getLaunchInfo(launchAt);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    if (countdown.total > 0) {
      setShowReveal(false);
      return;
    }

    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setShowReveal(true);
      localStorage.setItem("hasSeenWelcome", "true");
      const timer = window.setTimeout(() => setShowReveal(false), 5000);
      return () => window.clearTimeout(timer);
    } else {
      setShowReveal(false);
    }
  }, [countdown.total]);

  if (countdown.total > 0) {
    return <LaunchGate countdown={countdown} launchInfo={launchInfo} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-dvh overflow-hidden">
        <ScrollProgress />
        <Navbar />
        <main id="main" className="min-h-dvh pt-24">
          <Outlet />
        </main>
        <Footer />
        {showReveal ? <LaunchRevealOverlay /> : null}
      </div>
    </QueryClientProvider>
  );
}
