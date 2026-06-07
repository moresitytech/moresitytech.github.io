import type { Metadata } from "next";
import { ProjectsClient } from "@/components/pages/ProjectsClient";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Selected case studies of SaaS, AI, fintech and mobile products we've designed and engineered for clients worldwide.",
  keywords: ["case studies, portfolio, projects, SaaS, web development, mobile apps"],
  openGraph: {
    title: "Work — Moresity Tech",
    description: "Featured case studies and outcomes.",
    url: "https://tech.moresityholdings.com.np/projects",
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
