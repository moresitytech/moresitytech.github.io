import type { Metadata } from "next";
import { ContactClient } from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. We'll reply within 24 hours with next steps.",
  keywords: ["contact, get in touch, inquiry, project request, consultation"],
  openGraph: {
    title: "Contact — Moresity Tech",
    description: "Start a project, book a discovery call, or say hello.",
    url: "https://tech.moresityholdings.com.np/contact",
  },
};

export default function ContactPage() {
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
                name: "Contact",
                item: "https://tech.moresityholdings.com.np/contact",
              },
            ],
          }),
        }}
      />
      <ContactClient />
    </>
  );
}
