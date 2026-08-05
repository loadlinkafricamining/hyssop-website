import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/content/products";
import { cn } from "@/lib/utils";

export function Hero() {
  const featured = products[0];

  return (
    <section className="texture-grain -mt-20 flex min-h-[92vh] flex-col justify-end overflow-hidden bg-gradient-to-b from-beige via-ivory to-ivory pt-40 lg:-mt-24 lg:min-h-screen lg:pt-48">
      <Container className="grid flex-1 items-center gap-16 pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pb-28">
        <div
          className="relative z-[2] order-2 flex flex-col items-start gap-7 lg:order-1"
          style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <Eyebrow>Biodegradable &middot; Plant-derived</Eyebrow>
          <h1 className="font-serif text-[11vw] leading-[0.98] font-light tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Clean
            <br />
            living,
            <br />
            <span className="italic">pure</span> results.
          </h1>
          <p className="max-w-xs text-base leading-relaxed text-ink-soft">
            Home care, considered. Formulated with plant-derived ingredients,
            made for the homes that notice the difference.
          </p>
          <Link
            href="/shop"
            className={cn(buttonVariants({ size: "lg" }), "mt-3")}
          >
            Discover the range
          </Link>
        </div>

        <div
          className="relative z-[2] order-1 mx-auto aspect-[4/5] w-full max-w-sm lg:order-2 lg:max-w-none"
          style={{ animation: "fade-in 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
        >
          <Image
            src={featured.image}
            alt={`${featured.name} — ${featured.scent}`}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 80vw"
          />
        </div>
      </Container>
    </section>
  );
}
