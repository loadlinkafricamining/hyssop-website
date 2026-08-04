import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-[11px]",
        lg: "h-14 px-10",
        icon: "h-10 w-10",
      },
      variant: {
        primary: "bg-olive-dark text-cream hover:bg-olive-deep",
        secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]",
        ghost:
          "h-auto rounded-none px-0 text-sm font-normal normal-case tracking-normal text-ink underline decoration-ink/30 decoration-1 underline-offset-4 hover:decoration-ink",
        inverse: "bg-cream text-ink hover:bg-cream/90",
        mustard: "bg-oak text-ink hover:bg-oak-dark",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
