export interface SocialLink {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
}

export const site: Site = {
  name: "Aazib Ali",
  role: "Freelance Developer",
  location: "Islamabad, Pakistan",
  email: "aazibali.dev@gmail.com",
  phone: "+92 371 2426373",
  socials: [],
};