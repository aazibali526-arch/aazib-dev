export interface NavLink {
  label: string;
  href: string;
}

export const headerLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const headerCta: NavLink = {
  label: "Let’s Work Together",
  href: "/contact",
};