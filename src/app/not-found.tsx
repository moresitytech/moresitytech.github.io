"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative z-10 max-w-lg text-center">
        <p className="font-display text-[8rem] font-semibold leading-none tracking-tighter text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          This page drifted into the void.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The URL you&apos;re looking for doesn&apos;t exist, or has been moved.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02]"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
