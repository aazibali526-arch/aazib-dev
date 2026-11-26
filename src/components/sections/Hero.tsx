import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { HeroContent } from "@/data/hero";

export function Hero({
  title,
  eyebrow,
  lead,
  primaryCta,
  secondaryCta,
}: HeroContent) {
  return (
    <section className="hero px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-36 lg:px-10 lg:pb-20 lg:pt-40">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-4 text-center lg:items-start lg:text-left">
        {eyebrow ? (
          <Eyebrow className="self-center lg:self-start">{eyebrow}</Eyebrow>
        ) : null}

        <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-surface-50 md:text-[56px] lg:text-[64px]">
          {title}
        </h1>

        {lead ? (
          <p className="max-w-2xl font-body text-sm font-normal leading-[1.6] text-surface-50 md:text-base lg:text-lg">
            {lead}
          </p>
        ) : null}

        {primaryCta || secondaryCta ? (
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:justify-center lg:justify-start">
            {primaryCta ? (
              <Button fullWidthOnMobile href={primaryCta.href}>
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button fullWidthOnMobile variant="ghost" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}