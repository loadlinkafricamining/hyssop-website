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
        "text-xs font-semibold uppercase tracking-[0.28em] text-olive",
        className,
      )}
    >
      {children}
    </p>
  );
}
