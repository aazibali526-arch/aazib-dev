"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { cardSurface } from "@/components/ui/cardStyles";
import type { Testimonial, TestimonialsSection } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  items: Testimonial[];
  labels: TestimonialsSection["labels"];
}

interface ControlProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}

function Control({ label, disabled, onClick, children }: ControlProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-11 items-center justify-center rounded-circle border border-border-strong bg-white text-blue-600 transition-[background-color,border-color,color] duration-300 ease-smooth enabled:hover:border-blue-600 enabled:hover:bg-blue-600 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}

export function TestimonialCarousel({ items, labels }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const subscribe = useCallback(
    (notify: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", notify).on("reInit", notify);
      return () => {
        emblaApi.off("select", notify).off("reInit", notify);
      };
    },
    [emblaApi],
  );

  const canScrollPrev = useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollPrev() ?? false,
    () => false,
  );
  const canScrollNext = useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollNext() ?? false,
    () => false,
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
    >
      <div ref={emblaRef} className="-my-3 overflow-hidden py-3">
        <div className="-ml-4 flex">
          {items.map((item, index) => (
            <div
              key={item.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${items.length}`}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <figure className={cn(cardSurface, "h-full")}>
                <figcaption className="flex flex-col">
                  <span className="font-display text-lg font-semibold leading-[1.3] text-ink-900 md:text-xl lg:text-2xl">
                    {item.name}
                  </span>
                  <span className="font-tag text-base font-normal leading-[1.6] text-ink-900">
                    {item.company}
                  </span>
                </figcaption>
                <blockquote className="text-justify font-body text-[13px] leading-[1.6] text-slate-600 md:text-sm lg:text-base">
                  {item.review}
                </blockquote>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4 md:mt-8 lg:mt-10">
        <Control
          label={labels.previous}
          disabled={!canScrollPrev}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft aria-hidden="true" strokeWidth={2} className="size-5" />
        </Control>
        <Control
          label={labels.next}
          disabled={!canScrollNext}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight aria-hidden="true" strokeWidth={2} className="size-5" />
        </Control>
      </div>
    </div>
  );
}