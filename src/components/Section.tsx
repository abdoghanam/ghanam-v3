import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("w-full px-4", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
