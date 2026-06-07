import type { Metadata } from "next";
import { FAQClient } from "@/components/pages/FAQClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about engagements, pricing, process, services and support at Moresity Tech.",
  keywords: ["FAQ, frequently asked questions, pricing, services, support"],
  openGraph: {
    title: "FAQ — Moresity Tech",
    description: "Frequently asked questions about working with us.",
    url: "https://tech.moresityholdings.com.np/faq",
  },
};

const SECTIONS = [
  {
    title: "General",
    items: [
      {
        q: "What kind of company is Moresity Tech?",
        a: "A senior software studio. We design, engineer and scale SaaS, web, mobile and AI products for ambitious teams.",
      },
      {
        q: "Where are you based?",
        a: "We're remote-first with hubs in San Francisco, Lisbon, and Singapore. Our team spans 4 continents.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes — happy to sign a mutual NDA before we share or hear anything sensitive.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        q: "What services do you offer?",
        a: "Web & SaaS development, mobile apps, AI solutions, cloud/DevOps, UI/UX design, SEO and digital marketing.",
      },
      {
        q: "Do you build MVPs?",
        a: "Yes — we run focused MVP sprints for early-stage teams looking to validate quickly without cutting corners.",
      },
      {
        q: "Can you embed in our existing team?",
        a: "Absolutely. We embed senior engineers, designers and PMs into your team for as long as you need.",
      },
    ],
  },
  {
    title: "Pricing",
    items: [
      {
        q: "How do you price engagements?",
        a: "Most projects are scoped as fixed-price phases or monthly retainers. We share clear estimates after discovery.",
      },
      {
        q: "What's a typical project budget?",
        a: "Engagements usually range from $25k for focused sprints to $200k+ for multi-quarter builds.",
      },
      {
        q: "Do you offer equity-only deals?",
        a: "Occasionally, for missions we believe in deeply. Most engagements are cash-based.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        q: "Do you offer post-launch support?",
        a: "Yes — most clients continue with us via a maintenance or growth retainer.",
      },
      {
        q: "What's your response time?",
        a: "We reply to inquiries within 24 hours, and active clients have same-day support during business hours.",
      },
      {
        q: "Can we own the code?",
        a: "Yes — all code, designs and assets are yours from day one, with no lock-in.",
      },
    ],
  },
];

export default function FAQPage() {
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
                name: "FAQ",
                item: "https://tech.moresityholdings.com.np/faq",
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
            "@type": "FAQPage",
            mainEntity: SECTIONS.flatMap((s) =>
              s.items.map((i) => ({
                "@type": "Question",
                name: i.q,
                acceptedAnswer: { "@type": "Answer", text: i.a },
              })),
            ),
          }),
        }}
      />
      <FAQClient />
    </>
  );
}
