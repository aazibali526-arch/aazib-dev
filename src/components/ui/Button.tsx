import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "ghost"
  | "outline"
  | "accent"
  | "link"
  | "submit";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  fullWidthOnMobile?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButtonProps
  extends ButtonOwnProps,
    Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> {
  href?: undefined;
}

interface ButtonAsLinkProps
  extends ButtonOwnProps,
    Omit<ComponentPropsWithoutRef<"a">, keyof ButtonOwnProps | "href"> {
  href: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const base =
  "inline-flex items-center justify-center font-mono font-medium leading-[1.4] text-[15px] md:text-base transition-colors duration-500 ease-smooth disabled:cursor-not-allowed disabled:opacity-60";

const solid = "min-h-12 rounded-btn border-2 px-7 py-3.5";
const accent = cn(
  solid,
  "border-blue-600 bg-blue-600 text-white hover:border-blue-700 hover:bg-blue-700",
);

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    solid,
    "border-white bg-white text-ink-950 hover:border-ink-950 hover:bg-ink-950 hover:text-white focus-visible:outline-white",
  ),
  ghost: cn(
    solid,
    "btn-shine btn-shine-ink border-white bg-transparent text-white hover:bg-white hover:text-ink-950 focus-visible:outline-white",
  ),
  outline: cn(
    solid,
    "btn-shine btn-shine-blue border-blue-600 bg-transparent text-blue-600 hover:text-blue-700",
  ),
  accent,
  submit: accent,
  link: "m-0 min-h-11 border-0 bg-transparent p-0 text-blue-600 leading-[1.5] tracking-[0.02px] transition-transform duration-[1300ms] ease-smooth motion-safe:hover:-translate-y-1 lg:text-lg",
};

function isInternal(href: string): boolean {
  return (href.startsWith("/") && !href.startsWith("//")) || href.startsWith("#");
}

export function Button({
  variant = "primary",
  fullWidthOnMobile = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    fullWidthOnMobile && "w-full md:w-auto",
    className,
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;

    if (isInternal(href)) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

    const isExternalWeb = /^(https?:)?\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternalWeb
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type, ...buttonProps } = rest;
  return (
    <button
      type={type ?? (variant === "submit" ? "submit" : "button")}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}