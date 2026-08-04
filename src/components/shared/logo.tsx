import Link from "next/link";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-1 font-serif text-2xl text-ink",
        className,
      )}
    >
      <span>hyssop</span>
      <Leaf className="mb-3 h-4 w-4 -rotate-12 text-olive transition-transform group-hover:rotate-0" />
    </Link>
  );
}
