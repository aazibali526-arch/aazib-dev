import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  label: string;
  background?: "base" | "alt";
  className?: string;
  children: ReactNode;
}

const backgrounds = {
  base: "bg-surface-50",
  alt: "bg-surface-100",
} as const;

export function Section({
  label,
  background = "base",
  className,
  children,
}: SectionProps) {
  return (
    <section
      aria-label={label}
      className={cn(
        "px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20",
        backgrounds[background],
        className,
      )}
    >
      <div className="mx-auto max-w-300">{children}</div>
    </section>
  );
}