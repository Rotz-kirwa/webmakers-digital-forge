import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection, StatsBand, TestimonialsSection } from "@/components/site/sections";

const title = "Client Testimonials | WebMakers Web Development Kenya";
const description =
  "Read what business owners, schools, hotels and property managers say about working with WebMakers on their websites, stores and management systems.";

export const Route = createFileRoute("/testimonials")({
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
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by Businesses That Measure Results"
        subtitle="Every project below is a working product with a client who depends on it daily."
      />
      <TestimonialsSection />
      <StatsBand />
      <CTASection />
    </>
  );
}
