import Link from "next/link";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function FinalCta() {
  return (
    <section className="bg-olive-dark py-24 text-cream lg:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-8">
          <h2 className="max-w-lg font-serif text-3xl leading-tight font-light sm:text-4xl">
            A quieter kind of clean, ready for your counter.
          </h2>
          <Link href="/shop" className={buttonVariants({ variant: "mustard", size: "lg" })}>
            Shop the range
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
