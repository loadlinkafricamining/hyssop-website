import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/content/site-config";
import { isEmailConfigured, sendEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  if (isEmailConfigured()) {
    await sendEmail({
      to: siteConfig.contact.email,
      subject: `New message from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    }).catch(() => null);
  }

  return NextResponse.json({ ok: true });
}
