import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: string;
  eyebrow?: string;
  lead?: string;
  headingLevel?: "h2" | "h3";
  className?: string;
}

export function SectionIntro({
  title,
  eyebrow,
  lead,
  headingLevel: Heading = "h2",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-6 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-8 lg:mb-10",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone="light" className="self-center">
          {eyebrow}
        </Eyebrow>
      ) : null}

      <Heading className="font-display text-[32px] font-semibold leading-[1.2] text-ink-900 md:text-4xl lg:text-[40px]">
        {title}
      </Heading>

      {lead ? (
        <p className="font-body text-sm leading-[1.6] text-slate-600 md:text-base lg:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}