"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { getProductBySlug } from "@/content/products";
import { formatZAR, cn } from "@/lib/utils";

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotalCents } = useCart();

  if (items.length === 0) {
    return (
      <Container className="flex flex-col items-center gap-6 py-28 text-center">
        <ShoppingBag className="h-8 w-8 text-ink-soft" strokeWidth={1.25} />
        <SectionHeading
          as="h1"
          align="center"
          title="Your cart is empty"
          description="Browse the range and add something to your cart."
        />
        <Link href="/shop" className={buttonVariants()}>
          Shop the range
        </Link>
      </Container>
    );
  }

  return (
    <div className="py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading as="h1" eyebrow="Your cart" title="Review your order" />

        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {items.map((item) => {
              const product = getProductBySlug(item.slug);
              if (!product) return null;
              return (
                <li key={item.slug} className="flex items-center gap-5 py-7">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-beige p-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="font-serif text-lg font-normal text-ink">{product.name}</p>
                    <p className="text-sm text-ink-soft">
                      {product.scent} &middot; {product.size}
                    </p>
                    <p className="text-sm text-ink-soft">{formatZAR(product.priceCents)}</p>
                  </div>
                  <div className="flex items-center rounded-full border border-border">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="flex h-9 w-9 items-center justify-center text-ink-soft hover:text-ink"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                    >
                      <Minus className="h-3.5 w-3.5" strokeWidth={1.4} />
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      className="flex h-9 w-9 items-center justify-center text-ink-soft hover:text-ink"
                      onClick={() => setQuantity(item.slug, item.quantity + 1)}
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={1.4} />
                    </button>
                  </div>
                  <button
                    type="button"
                    aria-label="Remove item"
                    className="flex h-9 w-9 items-center justify-center text-ink-soft hover:text-ink"
                    onClick={() => removeItem(item.slug)}
                  >
                    <Trash2 className="h-4 w-4" strokeWidth={1.4} />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex h-fit flex-col gap-4 border border-border bg-cream p-7">
            <div className="flex items-center justify-between text-sm text-ink-soft">
              <span>Subtotal</span>
              <span className="text-ink">{formatZAR(subtotalCents)}</span>
            </div>
            <p className="text-xs leading-relaxed text-ink-soft">
              Shipping and delivery details are confirmed at checkout.
            </p>
            <Link
              href="/checkout"
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              Checkout
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
