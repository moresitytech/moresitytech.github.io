import process from "node:process";

// Server-only config.
//
// In Next.js, this file can be used to manage server-side environment variables.
// Use process.env INSIDE a function or handler to ensure values are read correctly.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers. Wrap reads in a function.
//   - NEXT_PUBLIC_ prefix: config readable from both client and server.
//   - process.env without prefix: server-side only secrets.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}
