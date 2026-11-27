import { ProcessList } from "@/components/sections/ProcessList";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { IconNode } from "@/components/ui/IconNode";
import { processSection, processSteps } from "@/data/process";

export function Process() {
  return (
    <Section label="Process">
      <SectionIntro {...processSection.intro} />
      <div className="mx-auto max-w-3xl">
        <ProcessList>
          {processSteps.map((step) => (
            <li
              key={step.title}
              className="process-step flex gap-3.5 pb-6 last:pb-0 md:gap-4 md:pb-7 lg:gap-4.5 lg:pb-8"
            >
              <IconNode
                icon={step.icon}
                variant="process"
                className="relative z-10"
              />
              <Reveal className="min-w-0">
                <h3 className="flex min-h-(--node) items-center font-display text-lg font-semibold leading-[1.3] text-ink-900 md:text-xl lg:text-2xl">
                  {step.title}
                </h3>
                <p className="font-body text-sm font-normal leading-[1.6] text-slate-600 md:text-base lg:text-lg">
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ProcessList>
      </div>
    </Section>
  );
}