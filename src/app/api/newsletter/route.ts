import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/content/site-config";
import { isEmailConfigured, sendEmail } from "@/lib/email";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (isEmailConfigured()) {
    await sendEmail({
      to: siteConfig.contact.email,
      subject: "New newsletter signup",
      text: `New newsletter signup: ${parsed.data.email}`,
    }).catch(() => null);
  }

  return NextResponse.json({ ok: true });
}
