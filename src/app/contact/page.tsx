import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig, whatsappLink } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hyssop — questions, orders, or stockist enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-20 lg:py-28">
      <Container size="wide" className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="flex flex-col gap-10">
          <SectionHeading
            as="h1"
            eyebrow="Get in touch"
            title="We'd love to hear from you"
            description="Questions about a product, a bulk order for your business, or just want to say hi — reach out."
          />
          <ul className="flex flex-col gap-4 border-t border-border pt-8">
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <Mail className="h-4 w-4 text-olive" strokeWidth={1.25} />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <Phone className="h-4 w-4 text-olive" strokeWidth={1.25} />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-ink">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-soft">
              <MessageCircle className="h-4 w-4 text-olive" strokeWidth={1.25} />
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
              <MapPin className="h-4 w-4 text-olive" strokeWidth={1.25} />
              {siteConfig.contact.address}
            </li>
          </ul>
        </div>

        <ContactForm />
      </Container>
    </div>
  );
}
