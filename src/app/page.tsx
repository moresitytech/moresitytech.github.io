import type { Metadata } from "next";
import { HomeClient } from "@/components/pages/HomeClient";

export const metadata: Metadata = {
  title: "Moresity Tech — Premium Software, SaaS & AI Studio",
  description:
    "We design and engineer enterprise-grade software products — SaaS platforms, mobile apps, AI tools, and digital experiences that scale.",
  keywords: [
    "SaaS development",
    "web development",
    "mobile apps",
    "AI solutions",
    "software studio",
    "Nepal",
  ],
  alternates: {
    canonical: "https://tech.moresityholdings.com.np/",
  },
  openGraph: {
    title: "Moresity Tech — Premium Software, SaaS & AI Studio",
    description:
      "We design and engineer enterprise-grade software products — SaaS platforms, mobile apps, AI tools, and digital experiences that scale.",
    url: "https://tech.moresityholdings.com.np/",
    images: [
      {
        url: "https://tech.moresityholdings.com.np/logo3-transparent.png",
        width: 1200,
        height: 630,
        alt: "Moresity Tech - Premium Software Studio",
      },
    ],
  },
};

export default function HomePage() {
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
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Moresity Tech",
            image: "https://tech.moresityholdings.com.np/logo.png",
            description:
              "Premium software studio building enterprise SaaS, web, mobile and AI products",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bhaktapur",
              addressCountry: "NP",
            },
            telephone: "+977-9808827451",
            email: "info@moresity.com",
            url: "https://tech.moresityholdings.com.np/",
            areaServed: ["World"],
            knowsAbout: [
              "Web Development",
              "SaaS Development",
              "Mobile App Development",
              "AI Solutions",
              "Cloud Infrastructure",
              "UI/UX Design",
              "Digital Marketing",
              "SEO Optimization",
            ],
          }),
        }}
      />
      <HomeClient />
    </>
  );
}
