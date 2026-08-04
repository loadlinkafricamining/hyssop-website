import type { Metadata } from "next";
import Link from "next/link";
import { XCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Order cancelled",
};

export default function CheckoutCancelledPage() {
  return (
    <Container className="flex flex-col items-center gap-6 py-28 text-center lg:py-36">
      <XCircle className="h-10 w-10 text-ink-soft" strokeWidth={1.25} />
      <h1 className="font-serif text-3xl font-light text-ink">Your order was cancelled</h1>
      <p className="max-w-md text-ink-soft">
        No payment was taken. Your cart is still saved if you&apos;d like to
        try again.
      </p>
      <Link href="/cart" className={buttonVariants()}>
        Back to cart
      </Link>
    </Container>
  );
}
