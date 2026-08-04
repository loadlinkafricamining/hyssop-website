import { NextResponse } from "next/server";
import { z } from "zod";
import { getProductBySlug } from "@/content/products";
import { siteConfig } from "@/content/site-config";
import { buildPayfastRedirect, isPayfastConfigured } from "@/lib/payments/payfast";
import { formatZAR } from "@/lib/utils";
import { isEmailConfigured, sendEmail } from "@/lib/email";

const checkoutSchema = z.object({
  items: z
    .array(z.object({ slug: z.string(), quantity: z.number().int().min(1) }))
    .min(1),
  buyer: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6),
    address: z.string().min(1),
  }),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid order details." }, { status: 400 });
  }

  const { items, buyer } = parsed.data;

  const resolvedItems = items.map((item) => ({
    item,
    product: getProductBySlug(item.slug),
  }));

  if (resolvedItems.some(({ product }) => !product)) {
    return NextResponse.json({ error: "Cart contains an unknown item." }, { status: 400 });
  }

  const subtotalCents = resolvedItems.reduce(
    (total, { item, product }) => total + product!.priceCents * item.quantity,
    0,
  );

  const orderSummary = resolvedItems
    .map(({ item, product }) => `${item.quantity} x ${product!.name} (${product!.scent})`)
    .join(", ");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

  if (isPayfastConfigured()) {
    const redirectUrl = buildPayfastRedirect({
      amount: subtotalCents / 100,
      itemName: `${siteConfig.name} order — ${orderSummary}`.slice(0, 100),
      buyerFirstName: buyer.firstName,
      buyerLastName: buyer.lastName,
      buyerEmail: buyer.email,
      returnUrl: `${siteUrl}/checkout/success`,
      cancelUrl: `${siteUrl}/checkout/cancelled`,
      notifyUrl: `${siteUrl}/api/webhooks/payfast`,
      customStr1: buyer.address,
    });

    return NextResponse.json({ mode: "payfast" as const, redirectUrl });
  }

  const message = [
    `New order from ${buyer.firstName} ${buyer.lastName}`,
    orderSummary,
    `Total: ${formatZAR(subtotalCents)}`,
    `Delivery address: ${buyer.address}`,
    `Email: ${buyer.email}`,
    `Phone: ${buyer.phone}`,
  ].join("\n");

  if (isEmailConfigured()) {
    await sendEmail({
      to: siteConfig.contact.email,
      subject: `New order — ${orderSummary}`,
      text: message,
    }).catch(() => null);
  }

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return NextResponse.json({ mode: "whatsapp" as const, redirectUrl: whatsappUrl });
}
