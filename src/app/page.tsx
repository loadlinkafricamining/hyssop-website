import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { BrandStory } from "@/components/sections/brand-story";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <FeaturedProduct />
      <BrandStory />
      <FinalCta />
    </>
  );
}
