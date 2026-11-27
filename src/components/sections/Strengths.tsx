import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { IconNode } from "@/components/ui/IconNode";
import { strengths, strengthsSection } from "@/data/strengths";

export function Strengths() {
  return (
    <Section label="Strengths" background="alt">
      <SectionIntro {...strengthsSection.intro} />
      <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-x-3 gap-y-3.5 md:gap-x-4 md:gap-y-4 lg:gap-x-6 lg:gap-y-4.5">
        {strengths.map((item, index) => (
          <li key={item.label}>
            <Reveal delay={(index % 2) * 100}>
              <div className="flex items-center gap-2.5 md:gap-3 lg:gap-3.5">
                <IconNode icon={item.icon} variant="strength" />
                <span className="font-display text-[15px] font-semibold leading-[1.3] text-ink-900 md:text-base lg:text-lg">
                  {item.label}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}