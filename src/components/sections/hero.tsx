import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/content/products";

export function Hero() {
  const featured = products[0];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-olive-light/20 blur-3xl" />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow className="inline-flex items-center gap-2">
            <Leaf className="h-3.5 w-3.5" /> Biodegradable · Plant-powered
          </Eyebrow>
          <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Clean living,
            <br />
            pure results.
          </h1>
          <p className="max-w-md text-lg text-ink-soft">
            Hyssop makes home care products that are tough on grease, gentle
            on hands, and kind to the planet — for homes and businesses that
            care about what goes down the drain.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/shop" className={buttonVariants({ size: "lg" })}>
              Shop the range
            </Link>
            <Link
              href="/about"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-6 rounded-[2.5rem] bg-olive/10" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border-soft bg-paper p-10 shadow-xl shadow-ink/5">
            <Image
              src={featured.image}
              alt={`${featured.name} — ${featured.scent}`}
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 420px, 80vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
