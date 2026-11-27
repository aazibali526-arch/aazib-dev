import { Button } from "@/components/ui/Button";
import { closingCta } from "@/data/cta";

export function ClosingCTA() {
  return (
    <section
      aria-label="Get in touch"
      className="hero px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-300">
        <div className="flex max-w-3xl flex-col items-start gap-4 rounded-card border border-glass-cta-border bg-linear-110 from-glass-cta-from to-glass-cta-to px-[18px] py-5 md:px-[26px] md:py-7 lg:px-8 lg:py-9">
          <h2 className="font-display text-[32px] font-semibold leading-[1.2] text-white md:text-4xl lg:text-[40px]">
            {closingCta.title}
          </h2>
          <p className="font-body text-lg font-normal leading-[1.6] text-on-glass">
            {closingCta.text}
          </p>
          <Button fullWidthOnMobile href={closingCta.cta.href}>
            {closingCta.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}