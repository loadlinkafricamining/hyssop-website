import { Droplet, Leaf, Recycle, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

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
    title: "Biodegradable formula",
    description: "Breaks down naturally, so it's kinder to waterways.",
  },
];

export function FeatureGrid({
  eyebrow,
  title,
  className = "py-16 sm:py-20",
}: {
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <Container className="flex flex-col gap-10">
        {title ? (
          <SectionHeading align="center" eyebrow={eyebrow} title={title} />
        ) : null}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title: featureTitle, description }) => (
            <div key={featureTitle} className="flex flex-col items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-olive/30 bg-olive/10 text-olive-dark">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-lg text-ink">{featureTitle}</h3>
              <p className="text-sm text-ink-soft">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
