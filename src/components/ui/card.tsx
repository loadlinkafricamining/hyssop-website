import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-sm border border-border bg-cream", className)}
      {...props}
    />
  );
}

export { Card };
