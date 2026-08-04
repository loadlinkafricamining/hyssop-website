import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Hyssop's biodegradable home care products.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Leaf className="h-8 w-8 text-olive" />
          <SectionHeading
            align="center"
            eyebrow="Our story"
            title="Clean living, pure results"
          />
          <p className="max-w-2xl text-ink-soft">
            Hyssop started with a simple frustration: most cleaning products
            ask you to choose between something that actually works and
            something that&apos;s gentle on your hands, your home, and the
            environment. We didn&apos;t think that trade-off should exist.
          </p>
          <p className="max-w-2xl text-ink-soft">
            Every formula is built around plant-derived ingredients that
            perform where it counts — cutting grease, lifting grime, leaving
            surfaces genuinely clean — while breaking down naturally once
            they&apos;ve done their job. No harsh chemicals your family has to
            tiptoe around, and nothing that lingers where it shouldn&apos;t.
          </p>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="What we stand for"
        title="What guides every formula"
        className="bg-cream-soft py-16 sm:py-20"
      />

      <FinalCta />
    </div>
  );
}
