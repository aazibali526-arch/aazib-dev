import { Section } from "@/components/shared/Section";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { projects, workSection } from "@/data/projects";

export function Work() {
  return (
    <Section label="Work" background="alt">
      <SectionIntro {...workSection.intro} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            tagline={project.category}
            taglineSize="small"
            description={project.description}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center md:mt-8 lg:mt-10">
        <Button variant="outline" href={workSection.cta.href}>
          {workSection.cta.label}
        </Button>
      </div>
    </Section>
  );
}