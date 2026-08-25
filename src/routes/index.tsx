import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  CTASection,
  ProcessTimeline,
  ProjectCard,
  ServicesGrid,
  StatsBand,
  TechStack,
  TestimonialsSection,
  WhyChooseUs,
} from "@/components/site/sections";
import { projects } from "@/data/projects";

const title = "WebMakers | Web Development Company in Kenya";
const description =
  "WebMakers is a Kenyan web development company building business websites, e-commerce stores, booking platforms and custom web applications that grow revenue.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Hero() {
  return (
    <section className="surface-ink relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -left-40 top-10 size-[32rem] rounded-full bg-primary/30 blur-[120px]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-32 bottom-0 size-[28rem] rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Sparkles className="size-3.5" />
              Freelance software studio · Kenya
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              We Build Websites That{" "}
              <span className="text-gradient-accent">Build Businesses.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              WebMakers designs and develops high-performance websites and digital platforms that
              help businesses, institutions and entrepreneurs attract customers, sell more and grow
              online.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Start Your Project <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-ink-foreground transition-colors duration-300 hover:bg-white/10"
              >
                See Our Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm text-ink-muted">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-accent" />
                <dt className="sr-only">Performance</dt>
                <dd>Sub-second load times</dd>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-accent" />
                <dt className="sr-only">Support</dt>
                <dd>Support after launch</dd>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-accent" />
                <dt className="sr-only">Delivery</dt>
                <dd>Design + engineering in one team</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="float-slow relative">
            <img
              src={heroVisual}
              alt="WebMakers website and mobile app design shown on a laptop and smartphone"
              width={1280}
              height={1024}
              fetchPriority="high"
              className="w-full rounded-3xl border border-white/10 shadow-lift"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden rounded-2xl border border-white/10 bg-[oklch(0.22_0.03_192)]/90 px-5 py-4 shadow-lift backdrop-blur-md sm:block">
            <p className="font-display text-2xl font-bold text-ink-foreground">98%</p>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">Client satisfaction</p>
          </div>
          <div className="absolute -top-5 right-2 hidden rounded-2xl border border-white/10 bg-[oklch(0.22_0.03_192)]/90 px-5 py-4 shadow-lift backdrop-blur-md md:block">
            <p className="font-display text-2xl font-bold text-accent">50+</p>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">Projects delivered</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesGrid />

      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Work"
            title="See Our Work"
            subtitle="Real digital experiences designed to help businesses stand out, sell more and operate better."
          />
          <div className="mt-16 space-y-20 lg:space-y-28">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View all 10 projects <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessTimeline />
      <TechStack />
      <TestimonialsSection limit={3} />
      <CTASection />
    </>
  );
}
