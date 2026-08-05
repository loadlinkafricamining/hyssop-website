import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/content/products";
import { formatZAR } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedProduct() {
  const product = products[0];

  return (
    <section className="bg-beige py-24 lg:py-32">
      <Container size="wide">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.scent}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 80vw"
            />
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col items-start gap-6">
            <Eyebrow>Now available</Eyebrow>
            <h2 className="font-serif text-4xl leading-[1.1] font-normal text-ink sm:text-5xl">
              {product.name}
            </h2>
            <p className="text-lg text-ink-soft">{product.tagline}</p>
            <p className="max-w-md leading-relaxed text-ink-soft">
              {product.description}
            </p>
            <ul className="flex flex-col gap-2 border-t border-border pt-6">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm tracking-wide text-ink-soft uppercase"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 pt-4">
              <p className="font-serif text-2xl text-ink">
                {formatZAR(product.priceCents)}
              </p>
              <Link
                href={`/shop/${product.slug}`}
                className={buttonVariants({ variant: "primary" })}
              >
                Shop now
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
