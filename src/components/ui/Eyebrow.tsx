import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

const base = "font-mono text-sm font-medium leading-[1.4] md:text-base";

const tones = {
  dark: "w-fit self-start rounded-pill border border-glass-eyebrow-border bg-linear-110 from-glass-eyebrow-from to-glass-eyebrow-to px-5 py-[7px] text-white",
  light: "w-fit self-start rounded-pill border border-border-strong bg-white px-5 py-[7px] text-blue-700",
} as const;

export function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  return <p className={cn(base, tones[tone], className)}>{children}</p>;
}