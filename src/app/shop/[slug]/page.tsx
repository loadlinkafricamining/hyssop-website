import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { ProductActions } from "@/components/shop/product-actions";
import { getProductBySlug, products } from "@/content/products";
import { formatZAR } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="py-12 sm:py-16">
      <Container className="flex flex-col gap-10">
        <Link
          href="/shop"
          className="inline-flex w-fit items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <ChevronLeft className="h-4 w-4" /> Back to shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-border-soft bg-paper p-12">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.scent}`}
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Badge>{product.category}</Badge>
            <h1 className="font-serif text-4xl text-ink">{product.name}</h1>
            <p className="text-lg text-ink-soft">{product.tagline}</p>
            <div className="flex items-center gap-4 text-sm text-ink-soft">
              <span>{product.scent} scent</span>
              <span aria-hidden>·</span>
              <span>{product.size}</span>
            </div>
            <p className="font-serif text-3xl text-ink">
              {formatZAR(product.priceCents)}
            </p>

            <ProductActions slug={product.slug} />

            <p className="text-ink-soft">{product.description}</p>

            <ul className="flex flex-col gap-2 border-t border-border-soft pt-5">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 text-olive" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
