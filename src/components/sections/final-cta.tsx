import Link from "next/link";
import { Leaf } from "lucide-react";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-olive-dark py-16 text-cream sm:py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <Leaf className="h-8 w-8 text-mustard" />
        <h2 className="max-w-lg font-serif text-3xl sm:text-4xl">
          Experience the power of pure cleaning.
        </h2>
        <p className="max-w-md text-cream/75">
          Thank you for supporting clean living — for your home, and for the
          planet.
        </p>
        <Link href="/shop" className={buttonVariants({ variant: "mustard", size: "lg" })}>
          Shop now
        </Link>
      </Container>
    </section>
  );
}
