import Image from "next/image";
import { Container } from "@/components/shared/container";

export function LifestyleInterlude() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="wide">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-beige p-8 lg:p-12">
            <Image
              src="/brand/lifestyle-counter-styled.jpg"
              alt="Hyssop dishwashing liquid styled on a travertine counter with eucalyptus and lemons"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0" />
            <p className="relative z-[2] max-w-sm font-serif text-2xl leading-snug font-light text-cream lg:text-3xl">
              Made for the counter you don&rsquo;t want to hide.
            </p>
          </div>
          <div className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-beige p-8 lg:p-12">
            <Image
              src="/brand/lifestyle-kitchen-sink.jpg"
              alt="Hyssop dishwashing liquid on a kitchen sink counter beside a brass tap and eucalyptus"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0" />
            <p className="relative z-[2] text-[11px] tracking-[0.2em] text-cream/80 uppercase">
              Kitchen &middot; Counter &middot; Ritual
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
