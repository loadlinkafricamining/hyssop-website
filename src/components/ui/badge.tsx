import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-olive/30 bg-olive/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-olive-dark",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
