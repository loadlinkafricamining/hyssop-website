import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/shared/accordion";
import { ProductActions } from "@/components/shop/product-actions";
import { ProductGallery } from "@/components/shop/product-gallery";
import { StickyAddToCart } from "@/components/shop/sticky-add-to-cart";
import { getProductBySlug, products } from "@/content/products";
import { formatZAR } from "@/lib/utils";
import { productJsonLd } from "@/lib/structured-data";

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
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="pt-8 pb-24 lg:pt-12 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <Container className="flex flex-col gap-12 lg:gap-16">
        <Link
          href="/shop"
          className="inline-flex w-fit items-center gap-1 text-[13px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-ink"
        >
          <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.4} /> Back to shop
        </Link>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <ProductGallery src={product.image} alt={`${product.name} — ${product.scent}`} />

          <div id="product-info" className="flex flex-col gap-6">
            <Badge>{product.category}</Badge>
            <h1 className="font-serif text-4xl leading-tight font-light text-ink lg:text-5xl">
              {product.name}
            </h1>
            <p className="text-lg text-ink-soft">{product.tagline}</p>
            <div className="flex items-center gap-4 text-sm tracking-wide text-ink-soft uppercase">
              <span>{product.scent}</span>
              <span aria-hidden className="text-travertine">
                /
              </span>
              <span>{product.size}</span>
            </div>
            <p className="font-serif text-2xl text-ink">{formatZAR(product.priceCents)}</p>

            <ProductActions slug={product.slug} />

            <p className="max-w-md leading-relaxed text-ink-soft">{product.description}</p>

            <Accordion
              className="mt-4"
              defaultOpenFirst
              items={[
                {
                  title: "Benefits",
                  content: (
                    <ul className="flex flex-col gap-1.5">
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Ingredients",
                  content: <p>{product.ingredients}</p>,
                },
                {
                  title: "Directions",
                  content: (
                    <ol className="flex flex-col gap-1.5">
                      {product.directions.map((step, i) => (
                        <li key={step}>
                          {i + 1}. {step}
                        </li>
                      ))}
                    </ol>
                  ),
                },
                {
                  title: "Shipping & returns",
                  content: (
                    <p>
                      Delivery timelines are confirmed at checkout. Damaged or
                      incorrect items can be returned within 7 days — see our{" "}
                      <Link href="/legal/refund-policy" className="underline">
                        refund policy
                      </Link>
                      .
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </Container>

      <StickyAddToCart product={product} />
    </div>
  );
}
