import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Hyssop products, orders, and delivery.",
};

export default function FaqPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="mx-auto flex max-w-2xl flex-col gap-10">
        <SectionHeading
          align="center"
          eyebrow="Support"
          title="Frequently asked questions"
        />
        <FaqAccordion />
      </Container>
    </div>
  );
}
