import type { NavLink } from "@/data/nav";

export interface ClosingCtaContent {
  title: string;
  text: string;
  cta: NavLink;
}

export const closingCta: ClosingCtaContent = {
  title: "Let’s Build Something That Works",
  text: "Tell me what you need and I will get back to you with clear next steps.",
  cta: { label: "Contact Me", href: "/contact" },
};