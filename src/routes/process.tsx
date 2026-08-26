import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection, ProcessTimeline, TechStack } from "@/components/site/sections";

const title = "Our Process | How WebMakers Builds Websites | Kenya";
const description =
  "Discover, strategize, design, develop, test, launch: the six-stage WebMakers process for delivering websites, e-commerce stores and business systems in Kenya.";

export const Route = createFileRoute("/process")({
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
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A Process Built for Predictable Launches"
        subtitle="You always know what stage your project is in, what we need from you next, and what ships at the end of it."
      />
      <ProcessTimeline tone="light" />
      <TechStack />
      <CTASection />
    </>
  );
}
