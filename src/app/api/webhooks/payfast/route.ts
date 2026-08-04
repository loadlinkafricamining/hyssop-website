import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site-config";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  if (!formData) return NextResponse.json({ ok: false }, { status: 400 });

  const paymentStatus = formData.get("payment_status");
  const itemName = formData.get("item_name");
  const amountGross = formData.get("amount_gross");
  const email = formData.get("email_address");

  if (paymentStatus === "COMPLETE") {
    await sendEmail({
      to: siteConfig.contact.email,
      subject: `Payment received — ${itemName}`,
      text: `Payment of R${amountGross} confirmed for ${itemName}.\nBuyer: ${email}`,
    }).catch(() => null);
  }

  return NextResponse.json({ ok: true });
}
