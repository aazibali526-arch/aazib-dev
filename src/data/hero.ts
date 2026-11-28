import type { NavLink } from "@/data/nav";

export interface HeroContent {
  title: string;
  eyebrow?: string;
  lead?: string;
  primaryCta?: NavLink;
  secondaryCta?: NavLink;
}

export const homeHero: HeroContent = {
  eyebrow: "Open to Remote Work",
  title: "Hi, I’m Aazib. I Build Web, Mobile & AI Solutions.",
  lead: "I design and build fast websites, custom mobile applications, and AI solutions that streamline workflows and help your business grow.",
  primaryCta: { label: "Let's Work Together", href: "/contact" },
  secondaryCta: { label: "Explore My Work", href: "/portfolio" },
};