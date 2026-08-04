import { Hero } from "@/components/sections/hero";
import { PhilosophyStatement } from "@/components/sections/philosophy-statement";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { LifestyleInterlude } from "@/components/sections/lifestyle-interlude";
import { FinalCta } from "@/components/sections/final-cta";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophyStatement />
      <FeaturedProduct />
      <FeatureGrid eyebrow="Why Hyssop" title="What guides every formula" />
      <LifestyleInterlude />
      <FinalCta />
      <NewsletterSection />
    </>
  );
}
