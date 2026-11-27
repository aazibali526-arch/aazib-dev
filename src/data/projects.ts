import type { NavLink } from "@/data/nav";
import type { IntroContent } from "@/data/types";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export interface WorkSection {
  intro: IntroContent;
  cta: NavLink;
}

export const workSection: WorkSection = {
  intro: {
    eyebrow: "Selected Work",
    title: "Projects That Solve Real Problems",
    lead: "A look at recent builds, from the problem to the result.",
  },
  cta: { label: "Explore All Projects", href: "/portfolio" },
};

// OWNER: replace every placeholder with a real project. Never invent clients or metrics (CONTENT.md).
const placeholder = "Add one sentence on the problem solved and the real result.";

export const projects: Project[] = [
  { slug: "project-one", title: "Project Title One", category: "Web Development.", description: placeholder },
  { slug: "project-two", title: "Project Title Two", category: "Web Development.", description: placeholder },
  { slug: "project-three", title: "Project Title Three", category: "Mobile App.", description: placeholder },
  { slug: "project-four", title: "Project Title Four", category: "Mobile App.", description: placeholder },
  { slug: "project-five", title: "Project Title Five", category: "AI Solution.", description: placeholder },
  { slug: "project-six", title: "Project Title Six", category: "AI Solution.", description: placeholder },
];