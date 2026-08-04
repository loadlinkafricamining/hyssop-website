import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.32em] text-ink-soft",
        className,
      )}
    >
      {children}
    </p>
  );
}
