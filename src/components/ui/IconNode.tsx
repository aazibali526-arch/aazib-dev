import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconNodeVariant = "process" | "strength";

interface IconNodeProps {
  icon: LucideIcon;
  variant?: IconNodeVariant;
  className?: string;
}

const base =
  "flex shrink-0 items-center justify-center rounded-circle border border-border-strong bg-surface-100 text-blue-600 transition-[background-color,border-color,color,box-shadow] ease-[ease] hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-ring-node-hover";

const sizes: Record<IconNodeVariant, { node: string; icon: string }> = {
  process: {
    node: "size-9 duration-[600ms] md:size-10 lg:size-11",
    icon: "size-4 md:size-[18px] lg:size-5",
  },
  strength: {
    node: "size-8 duration-500 md:size-[34px] lg:size-9",
    icon: "size-3.5 md:size-4 lg:size-[18px]",
  },
};

export function IconNode({
  icon: Icon,
  variant = "process",
  className,
}: IconNodeProps) {
  const { node, icon } = sizes[variant];

  return (
    <span className={cn(base, node, className)}>
      <Icon aria-hidden="true" strokeWidth={2} className={icon} />
    </span>
  );
}