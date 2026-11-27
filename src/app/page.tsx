import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { CodeWindow } from "@/components/sections/CodeWindow";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Strengths } from "@/components/sections/Strengths";
import { TechCarousel } from "@/components/sections/TechCarousel";
import { Testimonials } from "@/components/sections/Testimonials";
import { Work } from "@/components/sections/Work";
import { homeHero } from "@/data/hero";

export default function Home() {
  return (
    <main>
      <Hero {...homeHero} visual={<CodeWindow />} />
      <Services />
      <TechCarousel />
      <Work />
      <Process />
      <Strengths />
      <Testimonials />
      <ClosingCTA />
    </main>
  );
}