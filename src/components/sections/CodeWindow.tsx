"use client";

import { CircleAlert, GitBranch, X } from "lucide-react";
import { codeWindow } from "@/data/codeWindow";
import { useCodeWindowAnimation } from "@/components/sections/useCodeWindowAnimation";
import { CodeWindowEditor, getCodeLocation } from "@/components/sections/CodeWindowEditor";

export function CodeWindow() {
  const {
    code,
    containerRef,
    cursor,
    isInView,
    prefersReducedMotion,
    selection,
  } = useCodeWindowAnimation();

  const location = getCodeLocation(code, cursor);
  const showCaret = isInView && !prefersReducedMotion;

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={codeWindow.ariaLabel}
      className="w-full overflow-hidden border-2 border-code-border bg-code-bg font-mono text-[13.5px] leading-[1.7] text-code-text"
    >
      <div className="relative flex h-[2.7em] items-center gap-2 px-4">
        <span className="size-[0.82em] rounded-circle bg-dot-red" aria-hidden="true" />
        <span className="size-[0.82em] rounded-circle bg-dot-yellow" aria-hidden="true" />
        <span className="size-[0.82em] rounded-circle bg-dot-green" aria-hidden="true" />
        <span className="absolute inset-x-0 text-center text-[11px] text-code-title sm:text-[13.5px]">
          {codeWindow.title}
        </span>
      </div>

      <div className="flex h-[2.6em] items-stretch border-y border-code-border">
        <span className="flex items-center gap-2 border-t-2 border-code-accent px-4 text-code-tab-text">
          <span className="text-code-accent">{codeWindow.tabLanguage}</span>
          <span>{codeWindow.tab}</span>
          <X size={12} aria-hidden="true" />
        </span>
      </div>

      <CodeWindowEditor
        code={code}
        cursor={cursor}
        selection={selection}
        showCaret={showCaret}
      />

      <div className="flex h-[1.7em] items-center justify-between border-t border-code-border px-4 text-code-muted">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <GitBranch size={12} aria-hidden="true" />
            {codeWindow.status.branch}
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <CircleAlert size={12} aria-hidden="true" />
            {codeWindow.status.problems}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            {codeWindow.status.line} {location.line}, {codeWindow.status.column}{" "}
            {location.column}
          </span>
          <span className="hidden md:inline">{codeWindow.status.spaces}</span>
          <span className="hidden sm:inline">{codeWindow.status.language}</span>
        </div>
      </div>
    </div>
  );
}
