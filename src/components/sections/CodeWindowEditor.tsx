"use client";

import { Code2 } from "lucide-react";
import { codeWindow } from "@/data/codeWindow";
import { cn } from "@/lib/utils";
import { renderCodeLine } from "@/components/sections/codeWindowSyntax";
import type { CodeWindowSelection } from "@/components/sections/codeWindowSyntax";
const editorLineCount = 9;

interface CodeWindowEditorProps {
  code: string;
  cursor: number;
  selection: CodeWindowSelection | null;
  showCaret: boolean;
}

export function getCodeLocation(code: string, cursor: number) {
  const prefix = code.slice(0, cursor);
  const lastLineBreak = prefix.lastIndexOf("\n");

  return {
    line: prefix.split("\n").length,
    column: cursor - lastLineBreak,
  };
}

function getAutocomplete(code: string, cursor: number) {
  const query = code.slice(0, cursor).match(/[A-Za-z]+$/)?.[0];
  if (!query) return null;

  const suggestions = codeWindow.suggestions.filter((suggestion) =>
    suggestion.startsWith(query),
  );
  return suggestions.length ? suggestions : null;
}

export function CodeWindowEditor({
  code,
  cursor,
  selection,
  showCaret,
}: CodeWindowEditorProps) {
  const lines = code.split("\n");
  const lineStarts: number[] = [];
  let offset = 0;
  for (const line of lines) {
    lineStarts.push(offset);
    offset += line.length + 1;
  }

  const location = getCodeLocation(code, cursor);
  const autocomplete = getAutocomplete(code, cursor);
  const rowCount = Math.max(editorLineCount, lines.length);

  return (
    <div className="overflow-hidden p-4">
      {Array.from({ length: rowCount }, (_, lineIndex) => {
        const line = lines[lineIndex] ?? "";
        const lineStart = lineStarts[lineIndex] ?? code.length;
        const activeLine = lineIndex === location.line - 1;
        const lineAutocomplete = activeLine ? autocomplete : null;
        const cursorColumn = cursor - lineStart;

        return (
          <div
            key={lineIndex}
            className={cn("relative flex", activeLine && "bg-code-current-line")}
          >
            <span className="mr-4 w-6 shrink-0 select-none text-right text-code-muted">
              {lineIndex + 1}
            </span>
            <div className="code-window-line-scroll min-w-0 flex-1">
              <span className="whitespace-pre">
                {renderCodeLine(
                  line || " ",
                  lineStart,
                  cursor,
                  selection,
                  showCaret && activeLine,
                )}
              </span>
            </div>
            {lineAutocomplete ? (
              <div
                className="code-window-autocomplete absolute bottom-full z-10 border border-code-border bg-code-bg py-1 text-[12px] leading-5"
                style={{
                  left: `min(calc(2.5rem + ${cursorColumn}ch), calc(100% - 13rem))`,
                }}
              >
                {lineAutocomplete.map((suggestion, suggestionIndex) => (
                  <div
                    key={suggestion}
                    className={cn(
                      "flex items-center gap-2 px-2",
                      suggestionIndex === 0 &&
                        "bg-code-current-line text-code-accent",
                    )}
                  >
                    <Code2 size={12} className="shrink-0 text-code-accent" aria-hidden="true" />
                    <span>{suggestion}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
