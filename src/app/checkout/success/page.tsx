import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Order confirmed",
};

export default function CheckoutSuccessPage() {
  return (
    <Container className="flex flex-col items-center gap-6 py-28 text-center lg:py-36">
      <CheckCircle2 className="h-10 w-10 text-olive" strokeWidth={1.25} />
      <h1 className="font-serif text-3xl font-light text-ink">Thank you for your order</h1>
      <p className="max-w-md text-ink-soft">
        We&apos;ve received your payment and will be in touch shortly to
        confirm delivery. Thank you for supporting clean living.
      </p>
      <Link href="/shop" className={buttonVariants()}>
        Continue shopping
      </Link>
    </Container>
  );
}
