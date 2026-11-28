import { BrainCircuit, Code2, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CardImage } from "@/components/ui/Card";
import type { NavLink } from "@/data/nav";
import type { IntroContent } from "@/data/types";

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  linkLabel: string;
  icon: LucideIcon;
  image?: CardImage;
}

export interface ServicesSection {
  intro: IntroContent;
  cta: NavLink;
}

export const servicesSection: ServicesSection = {
  intro: {
    eyebrow: "Services & Solutions",
    title: "Websites, Apps & AI Built Around Your Goals",
    lead: "I take your idea from first sketch to a working product, so you get something that earns its place in your business.",
  },
  cta: { label: "Explore All Services", href: "/services" },
};

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "Your Website, Built to Perform.",
    description:
      "I build fast, responsive websites with Next.js that rank in search and turn visitors into inquiries. You get clean code you own and can grow.",
    href: "/services/web-development",
    linkLabel: "Learn More →",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps People Keep Using.",
    description:
      "I build iOS and Android apps from first screen to store launch. You get a smooth, reliable app and a release process you can trust.",
    href: "/services/mobile-app-development",
    linkLabel: "Learn More →",
  },
  {
    slug: "ai-llm-solutions",
    icon: BrainCircuit,
    title: "AI & LLM Solutions",
    tagline: "Practical AI For Real Workflows.",
    description:
      "I add AI assistants, LLM integrations, and workflow automation to your existing tools. You get less manual work and answers your team can rely on.",
    href: "/services/ai-llm-solutions",
    linkLabel: "Learn More →",
  },
];