import {
  Clock,
  Code,
  LifeBuoy,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IntroContent } from "@/data/types";

export interface Strength {
  label: string;
  icon: LucideIcon;
}

export const strengthsSection: { intro: IntroContent } = {
  intro: {
    eyebrow: "Why Work With Me",
    title: "What You Can Count On",
    lead: "These are the habits I bring to every project, whatever the size.",
  },
};

export const strengths: Strength[] = [
  { label: "Clean, Maintainable Code", icon: Code },
  { label: "Clear Communication", icon: MessageCircle },
  { label: "Mobile-First Builds", icon: Smartphone },
  { label: "Fast Page Loads", icon: Zap },
  { label: "Honest Timelines", icon: Clock },
  { label: "Reliable Support", icon: LifeBuoy },
  { label: "SEO-Ready Pages", icon: Search },
  { label: "Secure By Default", icon: ShieldCheck },
];