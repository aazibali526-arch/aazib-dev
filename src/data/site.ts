export interface SocialLink {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  role: string;
  location: string;
  positioning: string;
  builtWith: string[];
  copyrightYear: number;
  email: string;
  phone: string;
  socials: SocialLink[];
}

export const site: Site = {
  name: "Aazib Ali",
  role: "Freelance Developer",
  location: "Islamabad, Pakistan",
  positioning:
    "Helping businesses streamline workflows and grow with fast websites, custom mobile applications, and AI solutions.",
  builtWith: ["Next.js", "Tailwind CSS"],
  copyrightYear: 2026,
  email: "aazibali.dev@gmail.com",
  phone: "+92 371 2426373",
  socials: [],
};