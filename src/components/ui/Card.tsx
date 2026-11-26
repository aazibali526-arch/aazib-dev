import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CardImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CardLink {
  href: string;
  label: string;
}

export interface CardProps {
  title: string;
  description: string;
  tagline?: string;
  taglineSize?: "default" | "small";
  image?: CardImage;
  link?: CardLink;
  headingLevel?: "h2" | "h3" | "h4";
  className?: string;
}

export function Card({
  title,
  description,
  tagline,
  taglineSize = "default",
  image,
  link,
  headingLevel: Heading = "h3",
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 rounded-card border border-border bg-white p-4 shadow-card",
        "transition-[border-color,box-shadow] duration-500 ease-smooth",
        "hover:border-border-strong hover:shadow-card-hover",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-auto w-[18%] md:w-auto lg:w-[24%]"
        />
      ) : null}

      <Heading className="font-display text-lg font-semibold leading-[1.3] text-ink-900 md:text-xl lg:text-2xl">
        {title}
      </Heading>

      {tagline ? (
        <p
          className={cn(
            "-mt-3 font-tag font-normal leading-[1.6] text-ink-900",
            taglineSize === "small" ? "text-xs" : "text-base",
          )}
        >
          {tagline}
        </p>
      ) : null}

      <p className="text-justify font-body text-[13px] leading-[1.6] text-slate-600 md:text-sm lg:text-base">
        {description}
      </p>

      {link ? (
        <div className="flex flex-col">
          <hr className="m-0 border-0 border-t border-border-strong" />
          <div className="flex justify-end">
            <Button variant="link" href={link.href}>
              {link.label}
            </Button>
          </div>
        </div>
      ) : null}
    </article>
  );
}