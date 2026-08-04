import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig, whatsappLink } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hyssop — questions, orders, or stockist enquiries.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Get in touch"
            title="We'd love to hear from you"
            description="Questions about a product, a bulk order for your business, or just want to say hi — reach out."
          />
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <Mail className="h-4 w-4 text-olive" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <Phone className="h-4 w-4 text-olive" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-ink">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <MessageCircle className="h-4 w-4 text-olive" />
              <a
                href={whatsappLink("Hi Hyssop, I have a question about your products.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <MapPin className="h-4 w-4 text-olive" /> {siteConfig.contact.address}
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border-soft bg-paper p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
