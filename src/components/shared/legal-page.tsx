import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-16 sm:py-20">
      <Container className="mx-auto flex max-w-2xl flex-col gap-8">
        <SectionHeading title={title} description={`Last updated: ${updated}`} />
        <div className="flex flex-col gap-5 text-sm leading-relaxed text-ink-soft [&_h2]:pt-2 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-ink [&_strong]:text-ink">
          {children}
        </div>
      </Container>
    </div>
  );
}
