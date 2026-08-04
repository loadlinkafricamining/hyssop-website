import { faqs } from "@/content/faqs";

export function FaqAccordion() {
  return (
    <div className="flex flex-col divide-y divide-border border-y border-border">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-normal text-ink [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="text-xl text-ink-soft transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-ink-soft">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
