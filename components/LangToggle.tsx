"use client";

import { useLanguage } from "@/lib/i18n/provider";
import type { Lang } from "@/lib/i18n/config";

const LABELS: { code: Lang; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
];

/**
 * Language switch — NL / EN. Matches the site's mono-eyebrow styling.
 * `tone="light"` for use on the dark footer/ink backgrounds.
 */
export default function LangToggle({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const { lang, setLang } = useLanguage();

  const active = tone === "light" ? "text-paper" : "text-cobalt";
  const idle =
    tone === "light"
      ? "text-paper/45 hover:text-paper"
      : "text-muted hover:text-ink";

  return (
    <div
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ${className}`}
      role="group"
      aria-label="Language"
    >
      {LABELS.map((item, i) => (
        <span key={item.code} className="inline-flex items-center gap-1.5">
          {i > 0 && <span className="opacity-30">/</span>}
          <button
            type="button"
            onClick={() => setLang(item.code)}
            aria-pressed={lang === item.code}
            className={`tap-safe tap-safe-sm transition-colors duration-200 ${
              lang === item.code ? active : idle
            }`}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}
