import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse Hyssop's range of biodegradable home care products.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          as="h1"
          eyebrow="The range"
          title="Shop Hyssop"
          description="Every product is formulated to work hard on the job and easy on everything else."
        />
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
