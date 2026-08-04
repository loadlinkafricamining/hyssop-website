import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export function Accordion({
  items,
  className,
  defaultOpenFirst = false,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpenFirst?: boolean;
}) {
  return (
    <div className={cn("flex flex-col divide-y divide-border border-y border-border", className)}>
      {items.map((item, index) => (
        <details key={item.title} className="group py-5" open={defaultOpenFirst && index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium tracking-wide text-ink uppercase [&::-webkit-details-marker]:hidden">
            {item.title}
            <span className="text-lg leading-none text-ink-soft transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-4 text-sm leading-relaxed text-ink-soft">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
