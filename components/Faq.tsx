"use client";

/**
 * Faq — accessible accordion in DCF editorial style.
 * Receives already-picked (language-resolved) items; renders its own bilingual
 * section labels via usePick. Single-open accordion, reduced-motion friendly
 * (height animates via grid-rows, which respects prefers-reduced-motion poorly
 * on its own, so transitions are kept short and non-essential).
 */

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { usePick } from "@/lib/i18n/provider";
import type { FaqItem } from "@/content/faq";

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const eyebrow = usePick({ nl: "Goed om te weten", en: "Good to know" });
  const heading = usePick({
    nl: "Veelgestelde vragen",
    en: "Frequently asked questions",
  });

  if (!items?.length) return null;

  return (
    <section className="py-24 lg:py-32 bg-paper-deep border-y border-mist">
      <div className="mx-auto max-w-4xl px-6 lg:px-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-6">
            {eyebrow}
          </p>
          <h2 className="display-section text-[clamp(1.75rem,3vw,2.5rem)] text-ink mb-12">
            {heading}
          </h2>
        </Reveal>

        <dl className="border-t border-mist">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div className="border-b border-mist">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="display-section text-[1.05rem] lg:text-[1.2rem] text-ink pr-2">
                        {item.q}
                      </span>
                      <span
                        className={`mt-1 shrink-0 text-cobalt transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <path
                            d="M10 4v12M4 10h12"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="square"
                            fill="none"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-text/85 text-[15px] leading-[1.65] pb-6 max-w-3xl whitespace-pre-line">
                        {item.a}
                      </p>
                    </div>
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
