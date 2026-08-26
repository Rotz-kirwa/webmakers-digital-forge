import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

const title = "Contact WebMakers | Start a Website Project in Kenya";
const description =
  "Tell WebMakers about your project: business website, e-commerce store, booking platform or custom web application. Email hello@webmakers.co.ke or message us on WhatsApp.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something That Matters."
        subtitle="Send us the shape of your project and we'll come back with a clear scope, timeline and cost — usually within one business day."
      />

      <section className="section-y bg-background">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground">Reach us directly</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-primary" />
                  <span>
                    <span className="block font-medium text-foreground">Email</span>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <span>
                    <span className="block font-medium text-foreground">Location</span>
                    <span className="text-muted-foreground">{site.location}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 text-primary" />
                  <span>
                    <span className="block font-medium text-foreground">Response time</span>
                    <span className="text-muted-foreground">Within one business day</span>
                  </span>
                </li>
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-deep hover:shadow-glow"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="surface-ink relative overflow-hidden rounded-3xl p-7">
              <div className="grid-lines absolute inset-0" aria-hidden="true" />
              <h2 className="relative text-lg font-semibold text-ink-foreground">
                What happens next
              </h2>
              <ol className="relative mt-5 space-y-4 text-sm text-ink-muted">
                <li>1. We read your brief and clarify anything missing.</li>
                <li>2. You get a scope, timeline and fixed quote.</li>
                <li>3. We agree a start date and begin discovery.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
