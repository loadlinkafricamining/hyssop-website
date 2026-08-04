import { Container } from "@/components/shared/container";

/**
 * A textural, photography-ready interlude. Swap the two panels for real
 * lifestyle photography when it's available — the layout and captions
 * are already built for it.
 */
export function LifestyleInterlude() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="wide">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="texture-grain relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-gradient-to-br from-stone via-travertine to-beige p-8 lg:aspect-auto lg:p-12">
            <p className="relative z-[2] max-w-sm font-serif text-2xl leading-snug font-light text-ink lg:text-3xl">
              Made for the counter you don&rsquo;t want to hide.
            </p>
          </div>
          <div className="texture-grain relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-gradient-to-br from-olive/80 via-olive-dark to-ink p-8 lg:aspect-auto lg:p-12">
            <p className="relative z-[2] text-[11px] tracking-[0.2em] text-cream/70 uppercase">
              Kitchen &middot; Counter &middot; Ritual
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
