import type { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a senior team of engineers, designers and product thinkers crafting software that lasts. Learn our story, values and team.",
  keywords: ["software studio", "team", "mission", "values", "engineers", "designers"],
  openGraph: {
    title: "About — Moresity Tech",
    description: "Our story, mission and the team behind Moresity Tech.",
    url: "https://tech.moresityholdings.com.np/about",
  },
};

export default function AboutPage() {
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
                name: "About",
                item: "https://tech.moresityholdings.com.np/about",
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
            "@type": "Organization",
            name: "Moresity Tech",
            url: "https://tech.moresityholdings.com.np/",
            description:
              "Senior software studio building enterprise SaaS, web, mobile and AI products",
            foundingDate: "2025-04-01",
            founders: [
              {
                "@type": "Person",
                name: "Saurav Dhoju",
                jobTitle: "Co-Founder & Frontend Lead",
                email: "saurav@moresity.tech",
                telephone: "+977-9808827451",
              },
              {
                "@type": "Person",
                name: "Abishek Suwal",
                jobTitle: "Co-Founder & Backend Architect",
                email: "abishek@moresity.tech",
                telephone: "+977-9849099814",
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bhaktapur",
              addressCountry: "NP",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Business Development",
              telephone: "+977-9808827451",
              email: "info@moresity.com",
            },
          }),
        }}
      />
      <AboutClient />
    </>
  );
}
