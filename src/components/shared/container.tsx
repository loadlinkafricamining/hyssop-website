import { cn } from "@/lib/utils";

const SIZES = {
  default: "max-w-6xl",
  wide: "max-w-[90rem]",
  narrow: "max-w-2xl",
} as const;

export function Container({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: keyof typeof SIZES;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 lg:px-12", SIZES[size], className)}>
      {children}
    </div>
  );
}
