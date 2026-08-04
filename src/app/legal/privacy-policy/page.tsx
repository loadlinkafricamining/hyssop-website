import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="4 August 2026">
      <p>
        This is a general template and should be reviewed against the
        Protection of Personal Information Act (POPIA) and your actual data
        practices before publishing.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you place an order, contact us, or sign up for updates, we
        collect information such as your name, email address, phone number,
        and delivery address.
      </p>

      <h2>How we use it</h2>
      <p>
        We use this information to process and deliver your orders, respond
        to enquiries, and — where you&apos;ve opted in — send updates about
        {` ${siteConfig.name}`}. We do not sell your personal information.
      </p>

      <h2>Third parties</h2>
      <p>
        Payments are processed by PayFast. Transactional emails may be sent
        via a third-party email provider. These providers only receive the
        information needed to complete their function.
      </p>

      <h2>Your rights</h2>
      <p>
        Under POPIA, you have the right to access, correct, or request
        deletion of your personal information. Contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="text-ink underline">
          {siteConfig.contact.email}
        </a>{" "}
        to make a request.
      </p>
    </LegalPage>
  );
}
