import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection, ServicesGrid, TechStack, WhyChooseUs } from "@/components/site/sections";

const title = "Services | Website & Software Development in Kenya | WebMakers";
const description =
  "Business websites, e-commerce development, school websites, tourism and booking platforms, custom web applications and business management systems built in Kenya.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital Products, Engineered End to End"
        subtitle="We design, build, launch and maintain websites and software for businesses, institutions and entrepreneurs across Kenya and beyond."
      />
      <ServicesGrid />
      <WhyChooseUs />
      <TechStack />
      <CTASection />
    </>
  );
}
