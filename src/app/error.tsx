"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          Something went sideways.
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We hit an unexpected error. Try again, or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={reset}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
