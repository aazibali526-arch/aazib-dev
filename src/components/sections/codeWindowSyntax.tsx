import type { ReactNode } from "react";
import type { CodeTone } from "@/data/codeWindow";

const toneClasses: Record<CodeTone, string> = {
  text: "text-code-text",
  muted: "text-code-muted",
  keyword: "text-code-keyword",
  function: "text-code-accent",
  string: "text-code-string",
  variable: "text-code-variable",
  property: "text-code-property",
  comment: "text-code-muted",
};

const tokenPattern =
  /\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\bconst\b|\bbuild\b|\bdeveloper\b|\b(?:name|role|location)\b|[{}()[\].,:;=]|\s+|./g;

export interface CodeWindowSelection {
  start: number;
  end: number;
}

function getTokenTone(token: string): CodeTone {
  if (token.startsWith("//")) return "comment";
  if (token.startsWith('"') || token.startsWith("'")) return "string";
  if (token === "const") return "keyword";
  if (token === "build") return "function";
  if (token === "developer") return "variable";
  if (/^(name|role|location)$/.test(token)) return "property";
  if (/^[{}()[\].,:;=]$/.test(token)) return "muted";
  return "text";
}

function renderTokens(text: string, keyPrefix: string): ReactNode[] {
  return (text.match(tokenPattern) ?? []).map((token, index) => (
    <span
      key={`${keyPrefix}-${index}-${token}`}
      className={toneClasses[getTokenTone(token)]}
    >
      {token}
    </span>
  ));
}

export function renderCodeLine(
  text: string,
  lineStart: number,
  cursor: number,
  selection: CodeWindowSelection | null,
  showCaret: boolean,
): ReactNode[] {
  const points = new Set([0, text.length]);
  const cursorOffset =
    cursor >= lineStart && cursor <= lineStart + text.length
      ? cursor - lineStart
      : -1;

  if (cursorOffset >= 0) points.add(cursorOffset);

  const selectionStart =
    selection && selection.start >= lineStart && selection.start <= lineStart + text.length
      ? selection.start - lineStart
      : -1;
  const selectionEnd =
    selection && selection.end >= lineStart && selection.end <= lineStart + text.length
      ? selection.end - lineStart
      : -1;

  if (selectionStart >= 0) points.add(selectionStart);
  if (selectionEnd >= 0) points.add(selectionEnd);

  const boundaries = [...points].sort((left, right) => left - right);
  const output: ReactNode[] = [];

  boundaries.forEach((start, index) => {
    if (showCaret && start === cursorOffset) {
      output.push(
        <span key={`caret-${start}`} className="code-window-caret" aria-hidden="true" />,
      );
    }

    const end = boundaries[index + 1];
    if (end === undefined || start === end) return;

    const content = renderTokens(text.slice(start, end), `segment-${start}`);
    if (selectionStart >= 0 && selectionEnd >= 0 && start >= selectionStart && end <= selectionEnd) {
      output.push(
        <span key={`selection-${start}`} className="bg-code-selection text-code-tab-text">
          {content}
        </span>,
      );
    } else {
      output.push(...content);
    }
  });

  return output;
}
