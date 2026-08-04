import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="4 August 2026">
      <p>
        This is a general template and should be reviewed against the
        Consumer Protection Act and your actual business practices before
        publishing.
      </p>

      <h2>Using this site</h2>
      <p>
        By using this site, you agree to provide accurate information when
        placing an order or contacting us, and to use the site only for
        lawful purposes.
      </p>

      <h2>Orders and pricing</h2>
      <p>
        All prices are listed in South African Rand (ZAR) and may change
        without notice. An order is only confirmed once payment has been
        received or, where payment is arranged directly, once we&apos;ve
        confirmed the order with you.
      </p>

      <h2>Product information</h2>
      <p>
        We do our best to describe our products accurately, including
        ingredients and usage. Colours and packaging may vary slightly from
        images shown on the site.
      </p>

      <h2>Liability</h2>
      <p>
        {siteConfig.name} is not liable for indirect or consequential loss
        arising from the use of our products outside of their intended
        purpose or instructions.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of South Africa.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline">
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
