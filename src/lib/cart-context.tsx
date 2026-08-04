"use client";

import * as React from "react";
import { getProductBySlug } from "@/content/products";

export type CartItem = {
  slug: string;
  quantity: number;
};

const STORAGE_KEY = "hyssop-cart";
const listeners = new Set<() => void>();

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

let snapshot: CartItem[] = readStoredCart();
const EMPTY_CART: CartItem[] = [];

function commit(next: CartItem[]) {
  snapshot = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

type CartContextValue = {
  items: CartItem[];
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
  hydrated: boolean;
};

const CartContext = React.createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = items !== EMPTY_CART;

  const addItem = React.useCallback((slug: string, quantity = 1) => {
    const existing = snapshot.find((item) => item.slug === slug);
    const next = existing
      ? snapshot.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + quantity } : item,
        )
      : [...snapshot, { slug, quantity }];
    commit(next);
  }, []);

  const removeItem = React.useCallback((slug: string) => {
    commit(snapshot.filter((item) => item.slug !== slug));
  }, []);

  const setQuantity = React.useCallback((slug: string, quantity: number) => {
    if (quantity <= 0) {
      commit(snapshot.filter((item) => item.slug !== slug));
      return;
    }
    commit(snapshot.map((item) => (item.slug === slug ? { ...item, quantity } : item)));
  }, []);

  const clear = React.useCallback(() => commit([]), []);

  const { count, subtotalCents } = React.useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const product = getProductBySlug(item.slug);
        if (!product) return acc;
        return {
          count: acc.count + item.quantity,
          subtotalCents: acc.subtotalCents + product.priceCents * item.quantity,
        };
      },
      { count: 0, subtotalCents: 0 },
    );
  }, [items]);

  const value = React.useMemo(
    () => ({ items, addItem, removeItem, setQuantity, clear, count, subtotalCents, hydrated }),
    [items, addItem, removeItem, setQuantity, clear, count, subtotalCents, hydrated],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
