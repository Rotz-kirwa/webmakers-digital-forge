import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Gauge,
  Globe,
  GraduationCap,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Plane,
  Ruler,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  extraServices,
  processSteps,
  services,
  site,
  stats,
  technologies,
  testimonials,
  whyChooseUs,
} from "@/data/site";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  GraduationCap,
  Plane,
  Code2,
  LayoutDashboard,
  Ruler,
  Smartphone,
  Gauge,
  TrendingUp,
  Layers,
  LifeBuoy,
};

/* ---------------------------------- Stats --------------------------------- */

export function StatsBand() {
  return (
    <section className="surface-ink relative overflow-hidden">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-16 md:py-20">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Social proof
          </span>
          <h2 className="mt-4 text-2xl font-bold text-ink-foreground sm:text-3xl">
            Trusted Digital Solutions for Ambitious Businesses
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 lg:grid-cols-4">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Services -------------------------------- */

export function ServicesGrid({ withExtras = true }: { withExtras?: boolean }) {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="What We Build"
          subtitle="From a first business website to an operational system running a company's day-to-day, we design and engineer digital products that earn their keep."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Globe;
            return (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  to="/contact"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
                >
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="relative inline-flex size-13 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {withExtras ? (
          <Reveal className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">We also build:</span>
            {extraServices.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/* ------------------------------- Portfolio -------------------------------- */

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <Reveal className="group">
      <article
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
          flipped && "lg:[&>*:first-child]:order-2",
        )}
      >
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="relative block overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift"
          aria-label={`View ${project.name} case study`}
        >
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            width={1280}
            height={800}
            className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-primary-deep/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-display text-lg font-semibold text-ink-foreground">
              {project.name}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
              View Project <ArrowUpRight className="size-4" />
            </span>
          </span>
        </Link>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {project.industry}
          </span>
          <h3 className="mt-5 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="transition-colors hover:text-primary"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-deep hover:shadow-glow"
          >
            View Project <ArrowRight className="size-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

/* --------------------------------- Why us --------------------------------- */

export function WhyChooseUs() {
  return (
    <section className="section-y bg-secondary/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why WebMakers"
          title="Why Businesses Choose WebMakers"
          subtitle="Six commitments that show up in every project we deliver."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon] ?? Ruler;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Process -------------------------------- */

export function ProcessTimeline({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={cn("section-y relative overflow-hidden", dark ? "surface-ink" : "bg-background")}>
      {dark ? <div className="grid-lines absolute inset-0" aria-hidden="true" /> : null}
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Our Process"
          tone={tone}
          title="How a WebMakers Project Runs"
          subtitle="A clear, six-stage path from first conversation to a launched product — with no black boxes in between."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 90}
              className={cn(
                "group relative p-8 transition-colors duration-500",
                dark ? "bg-[oklch(0.21_0.03_192)] hover:bg-[oklch(0.25_0.04_190)]" : "bg-card hover:bg-secondary",
              )}
            >
              <span
                className={cn(
                  "font-display text-4xl font-bold transition-colors duration-500",
                  dark ? "text-white/15 group-hover:text-accent" : "text-border group-hover:text-primary",
                )}
              >
                {step.number}
              </span>
              <h3
                className={cn(
                  "mt-4 text-xl font-semibold",
                  dark ? "text-ink-foreground" : "text-foreground",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  dark ? "text-ink-muted" : "text-muted-foreground",
                )}
              >
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------ Technologies ------------------------------ */

export function TechStack() {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technology"
          align="center"
          title="Built With Modern, Proven Technology"
          subtitle="We choose tools for longevity and performance — not novelty."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 40}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-7 transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/325b5c`}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  width={32}
                  height={32}
                  className="size-8 opacity-80 transition-all duration-400 group-hover:scale-110 group-hover:opacity-100"
                />
                <span className="text-center text-xs font-semibold text-foreground">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

export function TestimonialsSection({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="section-y bg-secondary/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Results, in the words of the businesses we build for."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}, {t.company} · {t.industry}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ---------------------------------- */

export function CTASection() {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <Reveal className="surface-ink relative overflow-hidden rounded-[2rem] px-7 py-16 shadow-lift md:px-16 md:py-24">
          <div className="grid-lines absolute inset-0" aria-hidden="true" />
          <span
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
              Have an Idea? <span className="text-gradient-accent">Let's Build It.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              Whether you need a business website, online store or a custom digital platform,
              WebMakers can turn your idea into a high-performing digital experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight className="size-4" />
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors duration-300 hover:bg-white/10"
              >
                Talk to WebMakers
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
