export type CodeTone =
  | "text"
  | "muted"
  | "keyword"
  | "function"
  | "string"
  | "variable"
  | "property"
  | "comment";

export interface CodeWindowContent {
  title: string;
  tab: string;
  tabLanguage: string;
  ariaLabel: string;
  initialCode: string;
  suggestions: readonly string[];
  services: readonly string[];
  status: {
    branch: string;
    problems: string;
    line: string;
    column: string;
    spaces: string;
    language: string;
  };
}

export const codeWindow: CodeWindowContent = {
  title: "about-me.ts - aazib-dev",
  tab: "about-me.ts",
  tabLanguage: "TS",
  ariaLabel:
    "Animated TypeScript editor showing Aazib Ali's developer profile and rotating services.",
  initialCode: `const developer = {
  name: "Aazib Ali",
  role: "Full Stack & App Developer",
  location: "Pakistan",
};

// what I do
build("Web Development");`,
  suggestions: ["build", "buildSite", "buildApp"],
  services: [
    "Web Development",
    "Mobile App Development",
    "AI-Powered Applications",
    "API & Backend Development",
    "Building Digital Products",
  ],
  status: {
    branch: "main",
    problems: "0 problems",
    line: "Ln",
    column: "Col",
    spaces: "Spaces: 2",
    language: "TypeScript",
  },
};
