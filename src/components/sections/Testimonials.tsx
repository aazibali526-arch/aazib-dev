import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { Section } from "@/components/shared/Section";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { testimonials, testimonialsSection } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section label="Testimonials" background="alt">
      <SectionIntro {...testimonialsSection.intro} />
      <TestimonialCarousel
        items={testimonials}
        labels={testimonialsSection.labels}
      />
    </Section>
  );
}