import type { Metadata } from "next";
import { Providers } from "./Providers";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import "../styles.css";

export const metadata: Metadata = {
  title: {
    default: "Moresity Tech — Premium Software, SaaS & AI Studio",
    template: "%s — Moresity Tech",
  },
  description: "Enterprise-grade software studio building SaaS, web, mobile and AI products",
  keywords: [
    "SaaS development",
    "web development",
    "mobile apps",
    "AI solutions",
    "software studio",
    "Nepal",
  ],
  authors: [
    { name: "Saurav Dhoju" },
    { name: "Abishek Suwal" },
    { name: "Rupesh Mahat" },
    { name: "Nikil Shrestha" },
  ],
  creator: "Moresity Tech",
  metadataBase: new URL("https://tech.moresityholdings.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moresity Tech — Premium Software Studio",
    description: "Enterprise-grade SaaS, web, mobile and AI products for ambitious teams.",
    url: "https://tech.moresityholdings.com.np/",
    siteName: "Moresity Tech",
    type: "website",
    images: [
      {
        url: "https://tech.moresityholdings.com.np/logo3-transparent.png",
        width: 1200,
        height: 630,
        alt: "Moresity Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moresity Tech — Premium Software Studio",
    description: "Enterprise-grade SaaS, web, mobile and AI products.",
  },
  other: {
    "google-site-verification": "google4ce39e9424ce6c15",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Moresity Tech",
              url: "https://tech.moresityholdings.com.np/",
              logo: "https://tech.moresityholdings.com.np/logo.png",
              description:
                "Enterprise-grade software studio building SaaS, web, mobile and AI products",
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
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://tech.moresityholdings.com.np/",
              name: "Moresity Tech",
              description:
                "Software studio building enterprise-grade SaaS, web, mobile and AI solutions",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://tech.moresityholdings.com.np/search?q={search_term_string}",
                },
                query_input: "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="relative min-h-screen">
            <ScrollProgress />
            <Navbar />
            <main id="main" className="min-h-screen pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
