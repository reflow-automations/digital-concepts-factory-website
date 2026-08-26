"use client";

/**
 * ReadMore — uitklapbaar verdiepingsblok onder een introductietekst.
 *
 * Gevraagd door de klant (revisieronde 2026-08, punt 37c op Talent behouden):
 * "Ik zie graag na bovenstaande introductietekst een mogelijkheid om door te
 * lezen over de HR-trend... Kan je een link of iets met 'Lees verder' maken
 * naar deze onderstaande tekst. Of een apart blok."
 *
 * Gekozen vorm: inklapbaar blok in de pagina zelf, zodat de introtekst kort
 * blijft en de verdieping één klik verderop staat zonder paginawissel.
 */

import { useId, useState } from "react";

export type ReadMoreBlock = {
  /** Kop boven het tekstblok. Optioneel: losse alinea's hebben er geen. */
  heading?: string;
  paragraphs: string[];
  /** Bronvermelding onder dit blok. */
  source?: string;
};

export default function ReadMore({
  label,
  labelOpen,
  blocks,
  closing,
}: {
  label: string;
  labelOpen: string;
  blocks: ReadMoreBlock[];
  closing?: { heading: string; text: string };
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group inline-flex items-center gap-3 text-[14px] tracking-tight text-cobalt hover:text-cobalt-bright transition-colors cursor-pointer"
      >
        <span className="link-underline">{open ? labelOpen : label}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          aria-hidden
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 5l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {open && (
        <div
          id={panelId}
          className="mt-8 border-t border-mist pt-8 space-y-8 text-text text-[16px] leading-[1.65]"
        >
          {blocks.map((b, i) => (
            <div key={i}>
              {b.heading && (
                <h3 className="display-section text-[clamp(1.15rem,1.6vw,1.4rem)] text-ink mb-3">
                  {b.heading}
                </h3>
              )}
              <div className="space-y-4">
                {b.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {b.source && (
                <p className="text-[12px] text-muted mt-3">{b.source}</p>
              )}
            </div>
          ))}

          {closing && (
            <div className="border-t border-mist pt-6">
              <p className="text-ink font-medium mb-1">{closing.heading}</p>
              <p>{closing.text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
