"use client";

import * as React from "react";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/content/products";
import { useCart } from "@/lib/cart-context";
import { formatZAR, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function StickyAddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 backdrop-blur-md transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-base text-ink">{product.name}</span>
          <span className="text-sm text-ink-soft">{formatZAR(product.priceCents)}</span>
        </div>
        <Button onClick={() => addItem(product.slug, 1)}>
          <ShoppingBag className="h-4 w-4" strokeWidth={1.4} />
          Add to cart
        </Button>
      </div>
    </div>
  );
}
