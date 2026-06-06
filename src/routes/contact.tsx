import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Clock, Send, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Moresity Tech" },
      {
        name: "description",
        content: "Tell us about your project. We'll reply within 24 hours with next steps.",
      },
      { name: "keywords", content: "contact, get in touch, inquiry, project request, consultation" },
      { property: "og:title", content: "Contact — Moresity Tech" },
      {
        property: "og:description",
        content: "Start a project, book a discovery call, or say hello.",
      },
      { property: "og:url", content: "https://tech.moresityholdings.com.np/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tech.moresityholdings.com.np/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
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
      },
    ],
  }),
  component: ContactPage,
});

const CARDS = [
  { icon: Mail, title: "Email", value: "info@moresity.com", href: "mailto:info@moresity.com" },
  { icon: Phone, title: "Phone", value: "+977 9808827451", href: "tel:+9779808827451" },
  { icon: MapPin, title: "Office", value: "Bhaktapur · Nepal" },
  { icon: Clock, title: "Hours", value: "Mon — Fri · 9am to 7pm local" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (!name || name.length > 100) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
    if (!message || message.length > 2000) errs.message = "Please add a short message.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE as string | undefined;
      const userId = import.meta.env.VITE_EMAILJS_USER as string | undefined;

      const templateParams = {
        from_name: name,
        from_email: email,
        company,
        message,
      } as Record<string, string>;

      if (serviceId && templateId && userId) {
        // Debug info to help diagnose why sends may fail
        console.info("EmailJS config:", { serviceId, templateId, userId });
        console.info("EmailJS templateParams:", templateParams);

        // Initialize EmailJS SDK with public key and send
        try {
          emailjs.init(userId);
        } catch (initErr: unknown) {
          console.warn("EmailJS init warning", initErr);
        }

        emailjs
          .send(serviceId, templateId, templateParams)
          .then(() => {
            setSent(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setSent(false), 5000);
          })
          .catch((err: unknown) => {
            console.error("EmailJS send error", err);
            setErrors({ form: "Failed to send message. Please try again later." });
          });
      } else {
        // Fallback for local/dev if EmailJS not configured
        console.warn("EmailJS not configured. Set VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE, VITE_EMAILJS_USER.");
        setSent(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSent(false), 5000);
      }
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Let's build <span className="text-gradient">something good.</span>
              </>
            }
            description="Tell us about your project, your team and what success looks like. We reply within 24 hours."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="rounded-3xl border border-border bg-surface-elevated p-8 shadow-soft md:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Project inquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields required.</p>
            <form className="mt-8 grid gap-5" onSubmit={onSubmit} noValidate>
              <Field label="Your name" name="name" error={errors.name} />
              <Field label="Work email" name="email" type="email" error={errors.email} />
              <Field label="Company" name="company" optional />
              {/* <div>
                <label className="mb-1.5 block text-sm font-medium">Project budget</label>
                <select
                  name="budget"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
                >
                  {["< $25k", "$25k — $75k", "$75k — $200k", "$200k+"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div> */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Tell us about the project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40 ${errors.message ? "border-destructive" : "border-border"}`}
                  placeholder="Goals, audience, timeline, any links…"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
              >
                {sent ? (
                  <>
                    <Check className="size-4" /> Sent — we'll reply shortly
                  </>
                ) : (
                  <>
                    Send message{" "}
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CARDS.map(({ icon: Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href ?? "#"}
                  className="block rounded-2xl border border-border bg-surface-elevated p-5 transition-colors hover:bg-secondary"
                >
                  <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <Icon className="size-4" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {title}
                  </p>
                  <p className="mt-1 text-sm font-medium">{value}</p>
                </a>
              ))}
            </Reveal>

            <Reveal
              delay={0.1}
              className="overflow-hidden rounded-3xl border border-border bg-surface-elevated"
            >
              <div className="relative aspect-[4/3] bg-gradient-mesh">
                <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-full border border-border bg-surface-elevated/90 px-4 py-2 text-sm font-medium shadow-soft backdrop-blur">
                    <MapPin className="mr-2 inline size-4 text-primary" />
                    Bhaktapur · Nepal
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={0.15}
              className="rounded-3xl border border-border bg-foreground p-7 text-background"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-background/60">
                Prefer a call?
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                Book a 30-min discovery slot
              </h3>
              <p className="mt-2 text-sm text-background/70">
                Pick a time that works. No prep needed.
              </p>
              <button className="mt-5 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:scale-[1.02] transition-transform">
                Open Calendar →
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label} {optional && <span className="text-muted-foreground">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground/40 ${error ? "border-destructive" : "border-border"}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
