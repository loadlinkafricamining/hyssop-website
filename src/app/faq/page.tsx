import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Hyssop products, orders, and delivery.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="py-20 lg:py-28">
      <Container size="narrow" className="flex flex-col gap-12">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Support"
          title="Frequently asked questions"
        />
        <FaqAccordion />
      </Container>
    </div>
  );
}
