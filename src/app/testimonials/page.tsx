import type { Metadata } from "next";
import { TestimonialsClient } from "@/components/pages/TestimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials & Stories",
  description:
    "What clients say about partnering with Moresity Tech — video stories, written reviews and real outcomes.",
  keywords: ["testimonials, reviews, client feedback, success stories, case studies"],
  openGraph: {
    title: "Client stories — Moresity Tech",
    description: "Reviews and stories from our clients.",
    url: "https://tech.moresityholdings.com.np/testimonials",
  },
};

export default function TestimonialsPage() {
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
                name: "Testimonials",
                item: "https://tech.moresityholdings.com.np/testimonials",
              },
            ],
          }),
        }}
      />
      <TestimonialsClient />
    </>
  );
}
