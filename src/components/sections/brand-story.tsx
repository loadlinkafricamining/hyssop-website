import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Eyebrow>Our promise</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
          Made with care. Inspired by nature.
        </h2>
        <p className="max-w-xl text-ink-soft">
          Every Hyssop formula starts with a simple question: does it need to
          be this harsh to work this well? Usually, the answer is no. We
          build our products around plant-derived ingredients that perform —
          without compromising on what&apos;s safe for your home and the
          environment.
        </p>
        <Link href="/about" className={buttonVariants({ variant: "outline" })}>
          Read our story
        </Link>
      </Container>
    </section>
  );
}
