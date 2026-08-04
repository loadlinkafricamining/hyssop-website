import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
