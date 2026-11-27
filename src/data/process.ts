import { ClipboardList, Code, LifeBuoy, MessageSquare, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IntroContent } from "@/data/types";

export interface ProcessStep {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const processSection: { intro: IntroContent } = {
  intro: {
    eyebrow: "How I Work",
    title: "A Clear Path From Idea to Launch",
    lead: "Every project follows the same five steps, so you always know what is done and what comes next.",
  },
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery Call",
    text: "We talk through your goals, users, and budget so I understand exactly what success looks like.",
    icon: MessageSquare,
  },
  {
    title: "Plan & Scope",
    text: "I turn the conversation into a clear scope, timeline, and milestones you can approve.",
    icon: ClipboardList,
  },
  {
    title: "Design & Build",
    text: "I build in short cycles and share working progress, so you see real results early.",
    icon: Code,
  },
  {
    title: "Test & Launch",
    text: "I test across devices and browsers, fix what breaks, and take the project live.",
    icon: Rocket,
  },
  {
    title: "Ongoing Support",
    text: "After launch I stay available for fixes, updates, and the next set of improvements.",
    icon: LifeBuoy,
  },
];