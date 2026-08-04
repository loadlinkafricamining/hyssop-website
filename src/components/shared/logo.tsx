import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif text-2xl tracking-tight",
        inverted ? "text-cream" : "text-ink",
        className,
      )}
    >
      hyssop
    </Link>
  );
}
