export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const headerLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "AI & LLM Solutions", href: "/services/ai-llm-solutions" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Resources",
    children: [
      { label: "FAQs", href: "/faqs" },
      { label: "Schedule Consultation", href: "/schedule" },
    ],
  },
];

export const headerCta: NavLink = {
  label: "Contact Me",
  href: "/contact",
};