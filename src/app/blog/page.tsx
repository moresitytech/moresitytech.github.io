import type { Metadata } from "next";
import { BlogClient } from "@/components/pages/BlogClient";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description:
    "Essays and field notes on building modern software: SaaS, AI, performance, design systems and team craft.",
  keywords: ["software engineering, SaaS, AI, design systems, product development, blog"],
  alternates: {
    canonical: "https://tech.moresityholdings.com.np/blog",
  },
  openGraph: {
    title: "Insights — Moresity Tech",
    description: "Field notes on building modern software.",
    url: "https://tech.moresityholdings.com.np/blog",
    images: [
      {
        url: "https://tech.moresityholdings.com.np/logo3-transparent.png",
        width: 1200,
        height: 630,
        alt: "Moresity Tech Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Blog",
                item: "https://tech.moresityholdings.com.np/blog",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Moresity Tech Blog",
            description: "Essays and field notes on building modern software",
            publisher: {
              "@type": "Organization",
              name: "Moresity Tech",
            },
          }),
        }}
      />
      <BlogClient />
    </>
  );
}
