"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart-context";
import { getProductBySlug } from "@/content/products";
import { formatZAR } from "@/lib/utils";

const checkoutSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  address: z.string().min(5, "Enter your delivery address"),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

function navigateTo(url: string) {
  window.location.href = url;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotalCents, clear, hydrated } = useCart();
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutValues>({ resolver: zodResolver(checkoutSchema) });

  React.useEffect(() => {
    if (hydrated && items.length === 0) router.replace("/cart");
  }, [hydrated, items.length, router]);

  const onSubmit = async (values: CheckoutValues) => {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, buyer: values }),
      });

      if (!response.ok) throw new Error("Could not process your order.");

      const data = (await response.json()) as { redirectUrl: string };
      clear();
      navigateTo(data.redirectUrl);
    } catch {
      setError("Something went wrong. Please try again or reach us on WhatsApp.");
      setSubmitting(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="py-16">
      <Container className="grid gap-12 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Checkout" title="Your details" />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" {...register("firstName")} />
                {errors.firstName ? (
                  <p className="text-xs text-red-600">{errors.firstName.message}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" {...register("lastName")} />
                {errors.lastName ? (
                  <p className="text-xs text-red-600">{errors.lastName.message}</p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email ? (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone ? (
                <p className="text-xs text-red-600">{errors.phone.message}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="address">Delivery address</Label>
              <Input id="address" {...register("address")} />
              {errors.address ? (
                <p className="text-xs text-red-600">{errors.address.message}</p>
              ) : null}
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <Button type="submit" size="lg" disabled={submitting} className="mt-2">
              {submitting ? "Processing…" : "Place order"}
            </Button>
            <p className="text-xs text-ink-soft">
              Payments are processed securely via PayFast. If online payment
              isn&apos;t available yet, we&apos;ll confirm your order and
              payment details over WhatsApp.
            </p>
          </form>
        </div>

        <div className="flex h-fit flex-col gap-4 rounded-2xl border border-border-soft bg-paper p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Order summary
          </p>
          <ul className="flex flex-col gap-3">
            {items.map((item) => {
              const product = getProductBySlug(item.slug);
              if (!product) return null;
              return (
                <li key={item.slug} className="flex justify-between text-sm">
                  <span className="text-ink-soft">
                    {item.quantity} × {product.name}
                  </span>
                  <span className="font-medium text-ink">
                    {formatZAR(product.priceCents * item.quantity)}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between border-t border-border-soft pt-4 text-sm font-semibold text-ink">
            <span>Subtotal</span>
            <span>{formatZAR(subtotalCents)}</span>
          </div>
          <Link href="/cart" className="text-xs text-ink-soft underline">
            Edit cart
          </Link>
        </div>
      </Container>
    </div>
  );
}
