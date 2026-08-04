import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";

export function PhilosophyStatement() {
  return (
    <section className="py-32 lg:py-48">
      <Container size="narrow" className="flex flex-col items-center gap-10 text-center">
        <Eyebrow>Our philosophy</Eyebrow>
        <p className="font-serif text-3xl leading-[1.35] font-light italic text-ink sm:text-4xl lg:text-5xl">
          We didn&rsquo;t think you should have to choose between something
          that works and something that&rsquo;s kind to your home.
        </p>
        <div className="h-px w-12 bg-travertine" />
        <p className="max-w-sm text-sm leading-relaxed tracking-wide text-ink-soft uppercase">
          Clean living, pure results
        </p>
      </Container>
    </section>
  );
}
