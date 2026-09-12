"use client";

import Reveal from "@/components/Reveal";
import { usePick } from "@/lib/i18n/provider";
import { home } from "@/content/home";

const CLIENTS = [
  "Coolblue",
  "ING",
  "IKEA",
  "MediaMarkt",
  "CBR",
  "OGER",
  "Club Med",
  "Douglas",
  "Volvo",
  "Audi",
  "Volkswagen",
  "SEAT",
  "Porsche",
];

export default function ClientsMarquee() {
  const t = usePick(home).clients;
  return (
    <section className="py-20 lg:py-24 bg-paper-deep border-y border-mist overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 mb-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {t.eyebrow}
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="flex marquee-track" style={{ width: "fit-content" }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex items-center gap-12 px-12 shrink-0"
            >
              <span className="display-section text-[clamp(1.5rem,2.5vw,2.25rem)] text-ink/85 whitespace-nowrap">
                {c}
              </span>
              <span className="w-1 h-1 bg-cobalt rounded-full shrink-0" />
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper-deep to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper-deep to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
