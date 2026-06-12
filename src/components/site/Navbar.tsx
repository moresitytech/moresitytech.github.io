"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : false;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-transparent px-4 py-2 transition-all duration-300",
            scrolled && "glass border-border shadow-soft",
          )}
        >
          <Link href="/" className="group flex items-center ">
            <div className="relative size-12 w-12 h-12 overflow-hidden rounded-full bg-transparent shadow-elegant">
              <img
                src="/logo3-transparent.png"
                alt="Moresity logo"
                className="w-full h-full object-contain bg-transparent dark:invert"
                decoding="async"
              />
            </div>
            <span className="font-display text-base font-bold tracking-tight text-[#26015f] dark:text-white">
              Moresity<span className="text-[#f1645b]">.tech</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const isActive =
                pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                    isActive ? "bg-secondary text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid size-9 place-items-center rounded-full border border-border bg-surface-elevated/60 text-muted-foreground transition-colors hover:text-foreground"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link
              href="/contact"
              className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex"
            >
              Start a projects
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-9 place-items-center rounded-full border border-border bg-surface-elevated/60 lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-border bg-surface-elevated/95 p-3 backdrop-blur-lg lg:hidden shadow-soft"
            >
              <div className="grid gap-1">
                {NAV.map((item) => {
                  const isActive =
                    pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
                  return (
                    <Link
                      key={item.to}
                      href={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                        isActive ? "bg-secondary text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
