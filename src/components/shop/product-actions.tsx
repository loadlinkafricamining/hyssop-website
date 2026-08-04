"use client";

import * as React from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";

export function ProductActions({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-border">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="flex h-11 w-11 items-center justify-center text-ink-soft transition-colors hover:text-ink"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="flex h-11 w-11 items-center justify-center text-ink-soft transition-colors hover:text-ink"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button
          size="lg"
          onClick={() => {
            addItem(slug, quantity);
            setAdded(true);
            setQuantity(1);
            window.setTimeout(() => setAdded(false), 2000);
          }}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to cart
        </Button>
      </div>
      {added ? (
        <p className="text-sm font-medium text-olive-dark">Added to your cart.</p>
      ) : null}
    </div>
  );
}
