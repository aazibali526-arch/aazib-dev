export type CodeTone = "text" | "muted" | "key" | "value";

export interface CodeToken {
  text: string;
  tone: CodeTone;
}

export interface CodeWindowContent {
  title: string;
  tab: string;
  ariaLabel: string;
  lines: CodeToken[][];
}

export const codeWindow: CodeWindowContent = {
  title: "aazib-dev",
  tab: "developer.ts",
  ariaLabel:
    "Code snippet describing Aazib Ali, a freelance developer in Islamabad who builds websites, mobile apps, and AI solutions.",
  lines: [
    [
      { text: "const", tone: "key" },
      { text: " developer ", tone: "text" },
      { text: "= {", tone: "muted" },
    ],
    [
      { text: "  name", tone: "key" },
      { text: ": ", tone: "muted" },
      { text: '"Aazib Ali"', tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [
      { text: "  role", tone: "key" },
      { text: ": ", tone: "muted" },
      { text: '"Freelance Developer"', tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [
      { text: "  location", tone: "key" },
      { text: ": ", tone: "muted" },
      { text: '"Islamabad, Pakistan"', tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [
      { text: "  services", tone: "key" },
      { text: ": [", tone: "muted" },
    ],
    [
      { text: '    "Web Development"', tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [
      { text: '    "Mobile App Development"', tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [
      { text: '    "AI & LLM Solutions"', tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [{ text: "  ],", tone: "muted" }],
    [
      { text: "  openForFreelance", tone: "key" },
      { text: ": ", tone: "muted" },
      { text: "true", tone: "value" },
      { text: ",", tone: "muted" },
    ],
    [{ text: "};", tone: "muted" }],
  ],
};