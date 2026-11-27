import { codeWindow } from "@/data/codeWindow";
import type { CodeTone } from "@/data/codeWindow";
import { cn } from "@/lib/utils";

const toneClasses: Record<CodeTone, string> = {
  text: "text-code-text",
  muted: "text-code-muted",
  key: "text-code-accent",
  value: "text-code-tab-text",
};

export function CodeWindow() {
  const { title, tab, ariaLabel, lines } = codeWindow;

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="w-full border-2 border-code-border bg-code-bg font-mono text-[13.5px] leading-[1.7] text-code-text"
    >
      <div className="relative flex h-[2.7em] items-center gap-2 px-4">
        <span className="size-[0.82em] rounded-circle bg-dot-red" />
        <span className="size-[0.82em] rounded-circle bg-dot-yellow" />
        <span className="size-[0.82em] rounded-circle bg-dot-green" />
        <span className="absolute inset-x-0 text-center text-code-title">
          {title}
        </span>
      </div>

      <div className="flex h-[2.6em] items-stretch border-y border-code-border">
        <span className="flex items-center border-t-2 border-code-accent px-4 text-code-tab-text">
          {tab}
        </span>
      </div>

      <div className="overflow-x-auto p-4">
        {lines.map((tokens, lineIndex) => (
          <div key={lineIndex} className="flex">
            <span className="mr-4 w-6 shrink-0 select-none text-right text-code-muted">
              {lineIndex + 1}
            </span>
            <span className="whitespace-pre">
              {tokens.map((token, tokenIndex) => (
                <span key={tokenIndex} className={cn(toneClasses[token.tone])}>
                  {token.text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}