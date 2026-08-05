import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import { formatZAR } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group flex flex-col gap-5">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.scent}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[11px] tracking-[0.14em] text-ink-soft uppercase">
          {product.category} &middot; {product.scent}
        </p>
        <h3 className="font-serif text-xl font-normal text-ink">{product.name}</h3>
        <p className="text-sm text-ink-soft">{formatZAR(product.priceCents)}</p>
      </div>
    </Link>
  );
}
