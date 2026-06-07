import type { Metadata } from "next";
import { ServicesClient } from "@/components/pages/ServicesClient";

export const metadata: Metadata = {
  title: "Services — Web, SaaS, Mobile, AI",
  description:
    "End-to-end services: web & SaaS development, mobile apps, AI solutions, cloud, design, SEO and digital marketing.",
  keywords: [
    "web development",
    "SaaS",
    "mobile apps",
    "AI",
    "cloud",
    "design",
    "SEO",
    "digital marketing",
  ],
  openGraph: {
    title: "Services — Moresity Tech",
    description: "Web, SaaS, mobile, AI, cloud, design, SEO, marketing.",
    url: "https://tech.moresityholdings.com.np/services",
  },
};

export default function ServicesPage() {
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
                name: "Services",
                item: "https://tech.moresityholdings.com.np/services",
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
            "@type": "Service",
            name: "Software Development & Consulting",
            provider: {
              "@type": "Organization",
              name: "Moresity Tech",
            },
            areaServed: ["World"],
            offers: [
              {
                "@type": "Offer",
                name: "Web Development",
                description: "Performance-obsessed web apps with modern TypeScript stacks",
              },
              {
                "@type": "Offer",
                name: "SaaS Platforms",
                description:
                  "Multi-tenant systems, billing, dashboards and infrastructure that scale",
              },
              {
                "@type": "Offer",
                name: "Mobile Apps",
                description: "Native-feeling iOS & Android products",
              },
              {
                "@type": "Offer",
                name: "AI Solutions",
                description: "LLM agents, RAG, fine-tuning and ML features",
              },
              {
                "@type": "Offer",
                name: "Cloud & DevOps",
                description: "Reliable platforms on AWS, GCP and edge runtimes",
              },
              {
                "@type": "Offer",
                name: "UI / UX Design",
                description: "Brand-grade product design and design systems",
              },
              {
                "@type": "Offer",
                name: "SEO Optimization",
                description: "Technical SEO, schema, performance and content strategy",
              },
              {
                "@type": "Offer",
                name: "Digital Marketing",
                description: "Paid, organic and lifecycle growth programs",
              },
            ],
          }),
        }}
      />
      <ServicesClient />
    </>
  );
}
