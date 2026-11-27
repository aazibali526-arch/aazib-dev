"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ProcessListProps {
  children: ReactNode;
}

const TRIGGER_RATIO = 0.6;

export function ProcessList({ children }: ProcessListProps) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const steps = Array.from(list.children) as HTMLElement[];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = list.getBoundingClientRect();
      const raw = reduceMotion
        ? 1
        : (window.innerHeight * TRIGGER_RATIO - top) / height;
      const progress = Math.min(1, Math.max(0, raw));
      const segments = Math.max(steps.length - 1, 1);

      steps.forEach((step, index) => {
        const fill = Math.min(1, Math.max(0, progress * segments - index));
        step.style.setProperty("--fill", fill.toFixed(3));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <ol ref={listRef} className="relative">
      {children}
    </ol>
  );
}