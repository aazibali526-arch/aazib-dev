export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export interface FooterLinks {
  pages: NavLink[];
  services: NavLink[];
}

export const headerLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
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

export const footerLinks: FooterLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "FAQs", href: "/faqs" },
    { label: "Schedule Consultation", href: "/schedule" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "AI & LLM Solutions", href: "/services/ai-llm-solutions" },
  ],
};

export const privacyLink: NavLink = {
  label: "Privacy Policy",
  href: "/privacy",
};