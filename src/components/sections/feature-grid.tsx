import { Droplet, Leaf, Recycle, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Tough on grease",
    description: "Cuts through baked-on grime without needing a second scrub.",
  },
  {
    icon: Droplet,
    title: "Gentle on hands",
    description: "Plant-derived formulas that won't dry out or irritate skin.",
  },
  {
    icon: Leaf,
    title: "Clean & safe",
    description: "No harsh chemicals — safe around kids, pets, and pipes.",
  },
  {
    icon: Recycle,
    title: "Biodegradable",
    description: "Breaks down naturally, so it's kinder to waterways.",
  },
];

export function FeatureGrid({
  eyebrow,
  title,
  className = "py-24 lg:py-32",
}: {
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <Container className="flex flex-col gap-16">
        {title ? (
          <SectionHeading align="center" eyebrow={eyebrow} title={title} />
        ) : null}
        <RevealGroup className="grid divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title: featureTitle, description }) => (
            <RevealItem
              key={featureTitle}
              className="flex flex-col items-start gap-4 px-2 py-8 first:pl-0 sm:px-8 sm:first:pl-0"
            >
              <Icon className="h-6 w-6 text-olive" strokeWidth={1.25} />
              <h3 className="font-serif text-lg font-normal text-ink">
                {featureTitle}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
