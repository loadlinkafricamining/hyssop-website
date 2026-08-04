import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import { formatZAR } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg hover:shadow-ink/5">
      <Link href={`/shop/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-cream-soft p-8">
          <Image
            src={product.image}
            alt={`${product.name} — ${product.scent}`}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          />
        </div>
        <div className="flex flex-col gap-1 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive">
            {product.category} · {product.scent}
          </p>
          <h3 className="font-serif text-xl text-ink">{product.name}</h3>
          <p className="text-sm text-ink-soft">{product.size}</p>
          <p className="mt-2 text-base font-semibold text-ink">
            {formatZAR(product.priceCents)}
          </p>
        </div>
      </Link>
    </Card>
  );
}
