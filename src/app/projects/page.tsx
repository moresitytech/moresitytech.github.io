import type { Metadata } from "next";
import { ProjectsClient } from "@/components/pages/ProjectsClient";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Selected case studies of SaaS, AI, fintech and mobile products we've designed and engineered for clients worldwide.",
  keywords: ["case studies, portfolio, projects, SaaS, web development, mobile apps"],
  alternates: {
    canonical: "https://tech.moresityholdings.com.np/projects",
  },
  openGraph: {
    title: "Work & Case Studies — Moresity Tech",
    description:
      "Selected case studies of SaaS, AI, fintech and mobile products we've designed and engineered for clients worldwide.",
    url: "https://tech.moresityholdings.com.np/projects",
    images: [
      {
        url: "https://tech.moresityholdings.com.np/logo3-transparent.png",
        width: 1200,
        height: 630,
        alt: "Moresity Tech Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
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
                name: "Projects",
                item: "https://tech.moresityholdings.com.np/projects",
              },
            ],
          }),
        }}
      />
      <ProjectsClient />
    </>
  );
}
