import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection, ProjectCard, StatsBand } from "@/components/site/sections";
import { projects } from "@/data/projects";

const title = "Our Work | Website & Software Portfolio | WebMakers Kenya";
const description =
  "Explore 10 WebMakers projects: safari tourism sites, e-commerce stores, school websites, real estate platforms, hotel booking sites, dashboards and business systems.";

export const Route = createFileRoute("/work/")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="See Our Work"
        subtitle="Real digital experiences designed to help businesses stand out, sell more and operate better."
      />
      <section className="section-y bg-background">
        <div className="container-page space-y-20 lg:space-y-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
      <StatsBand />
      <CTASection />
    </>
  );
}
