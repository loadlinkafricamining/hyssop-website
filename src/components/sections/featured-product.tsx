import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/content/products";
import { formatZAR } from "@/lib/utils";

export function FeaturedProduct() {
  const product = products[0];

  return (
    <section className="bg-cream-soft py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] border border-border-soft bg-paper p-10">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.scent}`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 420px, 80vw"
            />
          </div>

          <div className="flex flex-col items-start gap-5">
            <SectionHeading
              eyebrow="Now available"
              title={product.name}
              description={product.tagline}
            />
            <p className="text-ink-soft">{product.description}</p>
            <ul className="flex flex-col gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 text-olive" /> {feature}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-2">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
