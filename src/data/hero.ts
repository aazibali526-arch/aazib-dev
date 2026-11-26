import type { NavLink } from "@/data/nav";

export interface HeroContent {
  title: string;
  eyebrow?: string;
  lead?: string;
  primaryCta?: NavLink;
  secondaryCta?: NavLink;
}

export const homeHero: HeroContent = {
  eyebrow: "Open For Freelance",
  title: "Freelance Developer in Islamabad Building Websites, Apps & AI",
  lead: "I design and build fast websites, custom mobile applications, and AI solutions that streamline workflows and help your business grow.",
  primaryCta: { label: "Contact Me", href: "/contact" },
  secondaryCta: { label: "Explore My Work", href: "/portfolio" },
};