import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" updated="4 August 2026">
      <p>
        This is a general template and should be reviewed against the
        Consumer Protection Act before publishing.
      </p>

      <h2>Damaged or incorrect items</h2>
      <p>
        If your order arrives damaged, faulty, or different from what you
        ordered, contact us within 7 days of delivery with your order
        details and photos. We&apos;ll arrange a replacement or refund.
      </p>

      <h2>Change of mind</h2>
      <p>
        For hygiene and safety reasons, we can only accept change-of-mind
        returns on unopened, unused products within 7 days of delivery.
        Return shipping costs are the customer&apos;s responsibility unless
        the item is faulty.
      </p>

      <h2>Refunds</h2>
      <p>
        Approved refunds are processed back to your original payment method
        within 7–10 business days.
      </p>

      <h2>Contact</h2>
      <p>
        To start a return or refund, reach out to{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline">
          {siteConfig.contact.email}
        </a>{" "}
        or via WhatsApp.
      </p>
    </LegalPage>
  );
}
