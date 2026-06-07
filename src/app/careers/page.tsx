import type { Metadata } from "next";
import { CareersClient } from "@/components/pages/CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a senior team building software that matters. Open roles in engineering, design and AI.",
  keywords: ["careers, jobs, hiring, engineering, design, remote work"],
  openGraph: {
    title: "Careers — Moresity Tech",
    description: "Open roles and what it's like to work with us.",
    url: "https://tech.moresityholdings.com.np/careers",
  },
};

export default function CareersPage() {
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
                name: "Careers",
                item: "https://tech.moresityholdings.com.np/careers",
              },
            ],
          }),
        }}
      />
      <CareersClient />
    </>
  );
}
