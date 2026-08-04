import { Resend } from "resend";

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendEmail(options: {
  to: string;
  subject: string;
  text: string;
}) {
  if (!isEmailConfigured()) return { skipped: true as const };

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.EMAIL_FROM ?? "orders@hyssop.example.co.za";

  await resend.emails.send({
    from,
    to: options.to,
    subject: options.subject,
    text: options.text,
  });

  return { skipped: false as const };
}
