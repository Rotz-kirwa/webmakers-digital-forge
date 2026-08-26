import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/sections";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | WebMakers" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — ${project.industry} Case Study | WebMakers`;
    const description = project.summary.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: CaseStudy,
});

function ProjectNotFound() {
  return (
    <div className="container-page flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This case study doesn't exist or has moved.</p>
      <Link
        to="/work"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Back to our work
      </Link>
    </div>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? projects[0]!;

  return (
    <>
      <section className="surface-ink relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -right-32 -top-24 size-[26rem] rounded-full bg-accent/15 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <Reveal className="mt-8 max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {project.industry}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.07] text-ink-foreground sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              {project.summary}
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <img
              src={project.image}
              alt={project.alt}
              width={1280}
              height={800}
              className="w-full rounded-3xl border border-white/10 shadow-lift"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <Reveal key={m.label}>
                <p className="font-display text-3xl font-bold text-accent">{m.value}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-ink-muted">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-page grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Challenge</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Solution</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Result</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.result}</p>
            </Reveal>
            <Reveal>
              <img
                src={project.image}
                alt={`${project.name} interface detail`}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full rounded-3xl border border-border object-cover shadow-soft"
              />
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h2 className="text-lg font-semibold text-foreground">Key Features</h2>
                <ul className="mt-5 space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h2 className="text-lg font-semibold text-foreground">Technology</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/work/$slug"
                params={{ slug: next.slug }}
                className="group block rounded-3xl border border-border bg-secondary/60 p-7 transition-colors hover:border-primary/30"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Next project
                </span>
                <span className="mt-3 block font-display text-xl font-semibold text-foreground">
                  {next.name}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
