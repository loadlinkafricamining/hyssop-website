import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  if (inverted) {
    return (
      <Link
        href="/"
        className={cn("font-serif text-2xl tracking-tight text-cream", className)}
      >
        hyssop
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("block", className)}>
      <Image
        src="/brand/logo-wordmark.png"
        alt="Hyssop"
        width={222}
        height={97}
        priority
        className="h-9 w-auto lg:h-10"
      />
    </Link>
  );
}
