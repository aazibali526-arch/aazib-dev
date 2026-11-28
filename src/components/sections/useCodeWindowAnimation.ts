"use client";

import { useEffect, useRef, useState } from "react";
import { codeWindow } from "@/data/codeWindow";

interface SelectionRange {
  start: number;
  end: number;
}

type AnimationPhase = "typing" | "correction" | "wait" | "selection" | "service";

const typoCode = codeWindow.initialCode.replace("developer", "developr");

function getTypingDelay(character: string, index: number): number {
  if (character === "\n") return 220;
  if (",;{}()".includes(character)) return 85;
  if (character === " ") return 32 + (index % 3) * 8;
  return 38 + (index % 5) * 7;
}

function getServiceRange(code: string, service: string): SelectionRange {
  const quotedService = `"${service}"`;
  const start = code.indexOf(quotedService);

  if (start < 0) {
    throw new Error(`Could not find the active CodeWindow service: ${service}`);
  }

  return { start: start + 1, end: start + 1 + service.length };
}

export function useCodeWindowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState(codeWindow.initialCode);
  const [cursor, setCursor] = useState(codeWindow.initialCode.length);
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const codeRef = useRef(codeWindow.initialCode);
  const selectionRef = useRef<SelectionRange | null>(null);
  const animationStartedRef = useRef(false);
  const phaseRef = useRef<AnimationPhase>("typing");
  const typedIndexRef = useRef(0);
  const serviceIndexRef = useRef(0);
  const serviceStartRef = useRef(0);
  const serviceTypedIndexRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry?.isIntersecting ?? false),
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const applyCode = (nextCode: string, nextCursor = nextCode.length) => {
      codeRef.current = nextCode;
      setCode(nextCode);
      setCursor(nextCursor);
    };

    const applySelection = (nextSelection: SelectionRange | null) => {
      selectionRef.current = nextSelection;
      setSelection(nextSelection);
    };

    if (prefersReducedMotion) {
      applyCode(codeWindow.initialCode);
      applySelection(null);
      animationStartedRef.current = false;
      phaseRef.current = "typing";
      typedIndexRef.current = 0;
      serviceIndexRef.current = 0;
      return;
    }

    if (!isInView) return;

    if (!animationStartedRef.current) {
      animationStartedRef.current = true;
      phaseRef.current = "typing";
      typedIndexRef.current = 0;
      applyCode("");
      applySelection(null);
    }

    let active = true;
    let timer: number | undefined;

    const schedule = (delay: number) => {
      timer = window.setTimeout(runStep, delay);
    };

    const runStep = () => {
      if (!active) return;

      switch (phaseRef.current) {
        case "typing": {
          if (typedIndexRef.current >= typoCode.length) {
            phaseRef.current = "correction";
            schedule(300);
            return;
          }

          typedIndexRef.current += 1;
          const nextCode = typoCode.slice(0, typedIndexRef.current);
          applyCode(nextCode);
          const currentLine = nextCode.slice(nextCode.lastIndexOf("\n") + 1);
          const delay =
            currentLine === "build"
              ? 500
              : getTypingDelay(typoCode[typedIndexRef.current - 1], typedIndexRef.current);
          schedule(delay);
          return;
        }

        case "correction":
          applyCode(codeWindow.initialCode);
          phaseRef.current = "wait";
          schedule(1000);
          return;

        case "wait": {
          const service = codeWindow.services[serviceIndexRef.current];
          const nextSelection = getServiceRange(codeRef.current, service);
          applySelection(nextSelection);
          applyCode(codeRef.current, nextSelection.end);
          phaseRef.current = "selection";
          schedule(550);
          return;
        }

        case "selection": {
          const activeSelection = selectionRef.current;
          if (!activeSelection) {
            throw new Error("CodeWindow selection state was lost during animation.");
          }

          const nextCode =
            codeRef.current.slice(0, activeSelection.start) +
            codeRef.current.slice(activeSelection.end);
          serviceStartRef.current = activeSelection.start;
          serviceTypedIndexRef.current = 0;
          serviceIndexRef.current =
            (serviceIndexRef.current + 1) % codeWindow.services.length;
          applySelection(null);
          applyCode(nextCode, activeSelection.start);
          phaseRef.current = "service";
          schedule(90);
          return;
        }

        case "service": {
          const service = codeWindow.services[serviceIndexRef.current];
          if (serviceTypedIndexRef.current >= service.length) {
            phaseRef.current = "wait";
            schedule(1600);
            return;
          }

          const character = service[serviceTypedIndexRef.current];
          const insertionPoint = serviceStartRef.current + serviceTypedIndexRef.current;
          const nextCode =
            codeRef.current.slice(0, insertionPoint) +
            character +
            codeRef.current.slice(insertionPoint);
          serviceTypedIndexRef.current += 1;
          applyCode(nextCode, insertionPoint + 1);
          schedule(getTypingDelay(character, serviceTypedIndexRef.current));
          return;
        }
      }
    };

    schedule(animationStartedRef.current && typedIndexRef.current > 0 ? 0 : 500);

    return () => {
      active = false;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [isInView, prefersReducedMotion]);

  return {
    code,
    containerRef,
    cursor,
    isInView,
    prefersReducedMotion,
    selection,
  };
}
