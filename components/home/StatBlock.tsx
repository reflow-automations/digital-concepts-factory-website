import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChapterMark from "@/components/ChapterMark";
import CountUp from "@/components/CountUp";

type StatMarker = "bar" | "arc" | "dots" | "wave";

interface Stat {
  label: string;
  detail: string;
  source: string;
  marker: StatMarker;
  // Rendered value spec
  value: React.ReactNode;
}

function MarkerBar() {
  return (
    <svg width="48" height="64" viewBox="0 0 48 64" aria-hidden>
      <rect x="0" y="40" width="8" height="24" fill="#2A82AC" />
      <rect x="14" y="24" width="8" height="40" fill="#2A82AC" opacity="0.7" />
      <rect x="28" y="8" width="8" height="56" fill="#2A82AC" opacity="0.45" />
    </svg>
  );
}

function MarkerArc() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="26" stroke="#F6F0E5" strokeOpacity="0.15" strokeWidth="2" fill="none" />
      <path
        d="M32 6 A26 26 0 0 1 32 58"
        stroke="#2A82AC"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <text x="32" y="36" textAnchor="middle" className="font-mono" fontSize="9" fill="#F6F0E5" letterSpacing="1">
        50%
      </text>
    </svg>
  );
}

function MarkerDots() {
  return (
    <svg width="72" height="48" viewBox="0 0 72 48" aria-hidden>
      <g fill="#2A82AC">
        <circle cx="6" cy="40" r="3" opacity="0.4" />
        <circle cx="18" cy="32" r="3" opacity="0.55" />
        <circle cx="30" cy="24" r="3" opacity="0.7" />
        <circle cx="42" cy="16" r="3" opacity="0.85" />
        <circle cx="54" cy="10" r="3.5" />
        <circle cx="66" cy="6" r="4" />
      </g>
    </svg>
  );
}

function MarkerWave() {
  return (
    <svg width="80" height="44" viewBox="0 0 80 44" aria-hidden>
      <path
        d="M0 36 Q10 36 14 24 T28 12 T42 6 T56 14 T70 30 T80 36"
        stroke="#2A82AC"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="42" cy="6" r="3" fill="#2A82AC" />
    </svg>
  );
}

function renderMarker(m: StatMarker) {
  switch (m) {
    case "bar": return <MarkerBar />;
    case "arc": return <MarkerArc />;
    case "dots": return <MarkerDots />;
    case "wave": return <MarkerWave />;
  }
}

const STATS: Stat[] = [
  {
    label: "Minimale besparing per behouden medewerker",
    detail:
      "Vervangingskosten bedragen 40% tot 200% van het bruto jaarsalaris. Bij modaal inkomen (€48.000) ligt de ondergrens al op €19.200 per medewerker.",
    source: "Gallup · Randstad",
    marker: "bar",
    value: (
      <CountUp
        value={19200}
        prefix="€"
        thousands
      />
    ),
  },
  {
    label: "Reductie aanbestedingskosten",
    detail:
      "Met onze digitale innovatie voor (Europees) aanbesteden kunnen interne kosten en doorlooptijden met de helft worden teruggebracht.",
    source: "DCF onderzoek",
    marker: "arc",
    value: (
      <CountUp
        value={50}
        word="tot"
        suffix="%"
      />
    ),
  },
  {
    label: "Verzuimkosten per medewerker per jaar",
    detail:
      "Gemiddelde kosten van ziekteverzuim in Nederland, exclusief de indirecte gevolgen voor productiviteit, teams en continuïteit.",
    source: "TNO · ArboNed",
    marker: "wave",
    value: (
      <CountUp
        value={4500}
        secondValue={7000}
        prefix="€"
        thousands
        separator="—"
      />
    ),
  },
  {
    label: "Bereik DOOH-netwerk per maand",
    detail:
      "Afhankelijk van locaties en campagne-opzet bereiken onze DOOH-schermen 250.000 tot 2 miljoen kandidaten per maand, vooral in de Randstad.",
    source: "DCF netwerk",
    marker: "dots",
    value: (
      <CountUp value={2} suffix=" mln+" />
    ),
  },
];

export default function StatBlock() {
  return (
    <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden>
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <ChapterMark
                number="03"
                label="De cijfers"
                className="text-paper/50 mb-8"
              />
              <h2 className="display-section text-[clamp(2rem,4vw,3.25rem)] text-paper">
                Innovatie die{" "}
                <em className="font-display italic font-light text-cobalt-bright">
                  rekent
                </em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={120}>
              <p className="text-paper/70 text-[16px] leading-[1.6] max-w-md">
                Strategisch HR, slimme inkoop en onderscheidende marketing
                drukken direct door in groei, continuïteit en rendement.
                Een aantal cijfers ter onderbouwing.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-ink p-10 lg:p-12 h-full flex flex-col group hover:bg-antraciet transition-colors duration-300">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] md:text-[10px] uppercase tracking-[0.14em] text-paper/40">
                    {s.source}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-6 mb-6">
                  <div className="display-numeric text-paper text-[clamp(2.25rem,5.2vw,4.5rem)] leading-none">
                    {s.value}
                  </div>
                  <div className="shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {renderMarker(s.marker)}
                  </div>
                </div>

                <div className="text-paper text-[14px] font-medium tracking-tight mb-3">
                  {s.label}
                </div>

                <p className="text-paper/60 text-[14px] leading-[1.55] max-w-md">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Subtle outbound CTA after the stats, link to deeper page */}
        <Reveal delay={200}>
          <div className="mt-14 pt-8 border-t border-paper/15 flex flex-wrap items-center justify-between gap-4">
            <p className="text-paper/60 text-[14px] leading-[1.5] max-w-xl">
              Cijfers vertalen naar uw eigen situatie? Wij rekenen het graag voor u door.
            </p>
            <Link
              href="/talent-behouden#bereken"
              className="group inline-flex items-center gap-3 text-[13px] tracking-tight text-paper hover:text-cobalt-bright transition-colors"
            >
              <span className="link-underline">Bereken uw besparingspotentieel</span>
              <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
