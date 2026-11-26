import { Globe, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconNode } from "@/components/ui/IconNode";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Reveal } from "@/components/shared/Reveal";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Hero } from "@/components/sections/Hero";
import { homeHero } from "@/data/hero";

// TEMP: UI preview with placeholder copy. Real copy goes in src/data/*.
const previewCards = [
  { title: "Web Development", tagline: "Your Website, Built to Perform.", withImage: true, withLink: true },
  { title: "Mobile App Development", tagline: "Placeholder Tagline.", withImage: true, withLink: true },
  { title: "AI & LLM Solutions", tagline: "Placeholder Tagline.", withImage: true, withLink: true },
  { title: "Project Title Here", tagline: "Web App.", small: true, withLink: true },
  { title: "Another Project Title", tagline: "Mobile App.", small: true, withLink: true },
  { title: "Minimal Card", withLink: false },
];

const previewStrengths = [
  { label: "Clean Code", icon: Globe },
  { label: "Fast Delivery", icon: Smartphone },
  { label: "Clear Communication", icon: Zap },
  { label: "Reliable Support", icon: Globe },
  { label: "Scalable Builds", icon: Smartphone },
  { label: "Modern Stack", icon: Zap },
];

const description =
  "Placeholder copy to check wrapping, justification and spacing across the mobile, tablet and desktop breakpoints.";

export default function Home() {
  return (
    <main>
      <Hero {...homeHero} />

      <section
        aria-label="Eyebrow and icon node preview"
        className="bg-surface-100 px-5 py-8 md:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-300 flex-col gap-6">
          <Eyebrow tone="light">A Bit About Me</Eyebrow>
          <div className="flex items-center gap-4">
            <IconNode icon={Globe} variant="process" />
            <IconNode icon={Smartphone} variant="process" />
            <IconNode icon={Zap} variant="process" />
            <span aria-hidden="true" className="w-6" />
            <IconNode icon={Globe} variant="strength" />
            <IconNode icon={Smartphone} variant="strength" />
            <IconNode icon={Zap} variant="strength" />
          </div>
        </div>
      </section>

      <section
        aria-label="Card preview"
        className="bg-surface-50 px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-300">
          <SectionIntro
            className="mb-6 md:mb-8 lg:mb-10"
            eyebrow="My Services"
            title="Placeholder Section Title"
            lead="Placeholder lead paragraph to check centering, line length and wrapping of a longer intro across all three breakpoints."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {previewCards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                tagline={card.tagline}
                taglineSize={card.small ? "small" : "default"}
                description={description}
                image={
                  card.withImage
                    ? { src: "/globe.svg", alt: "", width: 64, height: 64 }
                    : undefined
                }
                link={card.withLink ? { href: "/about", label: "Learn More →" } : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Form preview"
        className="bg-surface-100 px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-300">
          <div className="flex max-w-xl flex-col gap-4 rounded-card border border-border bg-white p-5 shadow-card md:p-8">
            <Input id="preview-name" label="Your Name" placeholder="Aazib Ali" />
            <Input
              id="preview-email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              status="error"
              message="Please enter a valid email address."
            />
            <Input
              id="preview-subject"
              label="Subject"
              placeholder="Project inquiry"
              status="success"
              message="Looks good."
            />
            <Input id="preview-disabled" label="Disabled" placeholder="Not editable" disabled />
            <Textarea
              id="preview-message"
              label="Your Message"
              placeholder="Tell me about your project…"
            />
            <Button variant="submit" fullWidthOnMobile className="self-start">
              Send Message
            </Button>
          </div>
        </div>
      </section>

      <section
        aria-label="Reveal preview"
        className="bg-surface-50 px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid max-w-300 grid-cols-2 gap-x-3 gap-y-3.5 md:gap-x-4 md:gap-y-4 lg:gap-x-6 lg:gap-y-[18px]">
          {previewStrengths.map((item, index) => (
            <Reveal key={item.label} delay={(index % 2) * 100}>
              <div className="flex items-center gap-2.5 md:gap-3 lg:gap-3.5">
                <IconNode icon={item.icon} variant="strength" />
                <span className="font-display text-[15px] font-semibold leading-[1.3] text-ink-900 md:text-base lg:text-lg">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}