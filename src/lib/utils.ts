import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Deterministic formatting (no Intl) — Node's and the browser's ICU data can
// disagree on en-ZA's decimal separator, which causes hydration mismatches.
export function formatZAR(amountInCents: number) {
  const [whole, decimals] = (amountInCents / 100).toFixed(2).split(".");
  const withThousands = whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `R ${withThousands}.${decimals}`;
}
