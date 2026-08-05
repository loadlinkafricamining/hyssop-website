import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { LifestyleInterlude } from "@/components/sections/lifestyle-interlude";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Hyssop's biodegradable home care products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-20 pb-24 lg:pt-28 lg:pb-32">
        <Container size="narrow" className="flex flex-col items-center gap-8 text-center">
          <Eyebrow>Our story</Eyebrow>
          <h1 className="font-serif text-4xl leading-[1.15] font-light text-ink sm:text-5xl">
            A quieter approach to clean.
          </h1>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container size="wide">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <p className="text-sm tracking-[0.14em] text-ink-soft uppercase">
              Why we started
            </p>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Most cleaning products ask you to choose: something that
                actually works, or something gentle enough for your hands, your
                home, your water. We didn&rsquo;t think that trade-off should
                exist.
              </p>
              <p>
                Hyssop is built around plant-derived ingredients that perform
                where it counts — cutting grease, lifting grime, leaving
                surfaces genuinely clean — and break down naturally once
                they&rsquo;ve done their job. Nothing harsh your family has to
                tiptoe around. Nothing that lingers where it shouldn&rsquo;t.
              </p>
              <p>
                We&rsquo;d rather make one product well than a dozen
                indifferently. Every formula earns its place on the shelf
                before it earns a name.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="What we stand for"
        title="What guides every formula"
        className="border-t border-border bg-beige py-24 lg:py-32"
      />

      <LifestyleInterlude />
      <FinalCta />
    </div>
  );
}
