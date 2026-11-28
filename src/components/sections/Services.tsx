import { Section } from "@/components/shared/Section";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services, servicesSection } from "@/data/services";

export function Services() {
  return (
    <Section label="Services">
      <SectionIntro {...servicesSection.intro} />
      <div className="grid gap-4 md:max-lg:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.slug}
            icon={service.icon}
            title={service.title}
            tagline={service.tagline}
            description={service.description}
            image={service.image}
            link={{ href: service.href, label: service.linkLabel }}
            hoverIconOnCard
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center md:mt-8 lg:mt-10">
        <Button variant="accent" href={servicesSection.cta.href}>
          {servicesSection.cta.label}
        </Button>
      </div>
    </Section>
  );
}