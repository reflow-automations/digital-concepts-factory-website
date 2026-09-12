import type { ReactNode } from "react";

/**
 * Renders `text` with the first occurrence of `accent` wrapped in an <em>
 * carrying `className` (the site's cobalt-italic signature). Pure, no hooks,
 * so it works in both server and client components.
 */
export default function Accent({
  text,
  accent,
  className,
}: {
  text: string;
  accent?: string | readonly string[];
  className: string;
}): ReactNode {
  if (!accent) return text;
  const accents = typeof accent === "string" ? [accent] : accent;
  const matches = accents.filter(Boolean).map((value) => ({ value, index: text.indexOf(value) }))
    .filter(({ index }) => index >= 0).sort((a, b) => a.index - b.index);
  const parts: ReactNode[] = [];
  let cursor = 0;
  for (const { value, index } of matches) {
    if (index < cursor) continue;
    parts.push(text.slice(cursor, index));
    // Give italic letter overhang room without changing the actual sentence.
    parts.push(<em key={index} className={`dcf-accent ${className}`}>{value}</em>);
    cursor = index + value.length;
  }
  parts.push(text.slice(cursor));
  return <>{parts}</>;
}
