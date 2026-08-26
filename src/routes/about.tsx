import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aboutStudio from "@/assets/about-studio.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, StatsBand, TechStack, WhyChooseUs } from "@/components/site/sections";

const title = "About WebMakers | Website Designers & Developers in Kenya";
const description =
  "WebMakers combines design, software engineering and business thinking to build digital products that solve real business problems for Kenyan companies and institutions.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const pillars = [
  {
    title: "Design",
    body: "Interfaces that look credible on the first scroll and stay usable on the tenth visit.",
  },
  {
    title: "Software Engineering",
    body: "Clean, maintainable code — not page builders stitched together with plugins.",
  },
  {
    title: "Business Thinking",
    body: "We ask what the site has to earn before we ask what it should look like.",
  },
  {
    title: "Performance",
    body: "Optimised images, lean bundles and fast pages on real Kenyan mobile networks.",
  },
  {
    title: "User Experience",
    body: "Every flow tested against the one action the visitor actually came to complete.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WebMakers"
        title="We Don't Just Build Websites. We Build Digital Businesses."
        subtitle="WebMakers is a freelance software development studio working with businesses, institutions and entrepreneurs who need their digital presence to do real commercial work."
      />

      <section className="section-y bg-background">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutStudio}
              alt="WebMakers design and development workspace with website layouts and code on screen"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Five disciplines, one delivery team
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Most projects fail in the gap between the people who design and the people who
                build. WebMakers closes that gap: the same team that maps your business goals
                designs the interface, writes the code, tests it and keeps it running after launch.
              </p>
            </Reveal>
            <dl className="mt-9 space-y-5">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="rounded-2xl border border-border bg-card p-5 transition-shadow duration-500 hover:shadow-soft">
                    <dt className="font-display text-base font-semibold text-foreground">
                      {p.title}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={200}>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-deep hover:shadow-glow"
              >
                Let's Build Something Great <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand />
      <WhyChooseUs />
      <TechStack />
      <CTASection />
    </>
  );
}
