export interface TechSection {
  label: string;
  items: string[];
}

// OWNER: confirm this list. Logo files are not added yet, so names are shown as text.
export const techSection: TechSection = {
  label: "Technologies",
  items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
};