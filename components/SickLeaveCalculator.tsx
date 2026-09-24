"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n/provider";
import { calculateSickLeave, costPerAbsenceDay, parseLocaleNumber, workingDaysPerFte } from "@/lib/sickLeave";
import CTA from "@/components/CTA";

// Reduction options in the order the client asked for (feedback 2026-09-16, point 2); 10% is the default.
const reductionOptions = [0, 10, 15, 20, 25, 50];

const copy = {
  nl: {
    eyebrow: "Bereken uw besparing op ziekteverzuim",
    heading: "Wat kost ziekteverzuim uw organisatie?",
    intro: "Vul uw situatie in en ontdek uw geschatte verzuimkosten en potentiële jaarlijkse besparing.",
    fte: "Aantal medewerkers (fte)",
    fteHint: "Vul het totale aantal fte in; twee medewerkers van ieder 0,5 fte tellen samen als 1 fte.",
    absence: "Huidig ziekteverzuim (%)", reduction: "Verwachte verlaging ziekteverzuim",
    absenceDays: "indicatieve verzuimdagen per jaar, op basis van {days} dagen per fte",
    relative: "Een relatieve verlaging van {reduction} brengt uw verzuim van {from} naar {to}.",
    current: "Geschatte huidige verzuimkosten", after: "Geschatte verzuimkosten na verlaging",
    saving: "Potentiële jaarlijkse besparing", yearly: "per jaar", newRate: "Nieuw ziekteverzuim",
    fewerDays: "verzuimdagen minder per jaar",
    perFte: "besparing per fte per jaar", slider: "schuifregelaar",
    costPerDay: "gemiddelde indicatie per verzuimdag",
    method: "Indicatieve berekening op basis van het aantal fte, {days} dagen per fte per jaar (circa 52 weken x 5 weekdagen, geen exact aantal gewerkte dagen na vakantie en feestdagen), het ziekteverzuimpercentage en een gemiddelde indicatie van {cost} per verzuimdag. Volgens ArboNed hangt dit bedrag onder meer samen met loondoorbetaling, vervanging en mogelijk omzet- of productiviteitsverlies; bij langdurig verzuim kunnen begeleiding en re-integratie bijkomen. De uitkomst is een schatting, geen gemeten bedrag: werkelijke kosten en besparingen verschillen per organisatie, sector, functie en verzuimduur.",
    source: "Bron: ArboNed - Verzuim verlagen", cta: "Bespreek uw besparingspotentieel",
  },
  en: {
    eyebrow: "Calculate your potential sick leave savings",
    heading: "What does sick leave cost your organisation?",
    intro: "Enter your organisation's details to see your estimated sick leave costs and potential annual savings.",
    fte: "Number of employees (FTE)",
    fteHint: "Enter the total number of FTEs; two employees of 0.5 FTE each count as 1 FTE.",
    absence: "Current sick leave (%)", reduction: "Expected reduction in sick leave",
    absenceDays: "indicative sick leave days per year, based on {days} days per FTE",
    relative: "A relative reduction of {reduction} takes your sick leave from {from} to {to}.",
    current: "Estimated current sick leave costs", after: "Estimated sick leave costs after reduction",
    saving: "Potential annual savings", yearly: "per year", newRate: "New sick leave rate",
    fewerDays: "fewer sick leave days per year",
    perFte: "saved per FTE per year", slider: "slider",
    costPerDay: "average indication per sick leave day",
    method: "Indicative calculation based on the number of FTEs, {days} days per FTE per year (roughly 52 weeks x 5 weekdays, not the exact number of days worked after holidays and public holidays), the sick leave rate and an average indication of {cost} per sick leave day. According to ArboNed this amount reflects continued salary payment, replacement and possible loss of revenue or productivity; for long-term absence, guidance and reintegration may be added. The result is an estimate, not a measured amount: actual costs and savings vary by organisation, sector, role and duration of absence.",
    source: "Source: ArboNed - Verzuim verlagen (Dutch)", cta: "Discuss your potential savings",
  },
};

function fill(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce((s, [k, v]) => s.replace(`{${k}}`, v), template);
}

function NumericControl({ label, value, onChange, min, max, step, sliderStep, index, sliderLabel, locale, hint, description }: {
  label: string; value: number; onChange: (n: number) => void;
  min: number; max: number; step: number; sliderStep?: number; index: string; sliderLabel: string; locale: string;
  hint?: ReactNode; description?: string;
}) {
  const id = useId();
  const descriptionId = useId();
  // Text field instead of type=number so the visitor sees locale formatting:
  // 1.500 and 5,4 in Dutch, 1,500 and 5.4 in English (client feedback 2026-09-16).
  const format = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(n);
  const [draft, setDraft] = useState(format(value));
  useEffect(() => setDraft(format(value)), [value, locale]); // eslint-disable-line react-hooks/exhaustive-deps
  const number = parseLocaleNumber(draft, locale);
  const valid = Number.isFinite(number) && number >= min && number <= max;
  const decimals = step === 1 ? 0 : step === 0.1 ? 1 : 2;
  const roundTo = (n: number) => Number(n.toFixed(decimals));
  return <div className="mb-9">
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <label htmlFor={id} className="font-mono text-[12px] uppercase tracking-[0.1em] text-text">
        <span className="text-cobalt mr-2">{index}</span>{label}
      </label>
      <input id={id} type="text" inputMode="decimal" value={draft}
        aria-invalid={!valid} aria-describedby={description ? descriptionId : undefined}
        onChange={(e) => {
          const raw = e.target.value;
          setDraft(raw);
          const next = parseLocaleNumber(raw, locale);
          if (Number.isFinite(next) && next >= min && next <= max) onChange(roundTo(next));
        }}
        onBlur={() => {
          const next = !Number.isFinite(number) ? value : Math.min(max, Math.max(min, number));
          const rounded = roundTo(next);
          onChange(rounded); setDraft(format(rounded));
        }}
        className="w-32 min-h-11 rounded-lg border border-mist bg-paper px-3 py-2 text-right text-ink font-medium focus:outline-2 focus:outline-cobalt"
      />
    </div>
    {description && <p id={descriptionId} className="-mt-1 mb-4 text-[14px] text-text leading-relaxed">{description}</p>}
    <input type="range" aria-label={label + " " + sliderLabel}
      min={min} max={max} step={sliderStep ?? step} value={value}
      onChange={(e) => { const n = Number(e.target.value); onChange(n); setDraft(format(n)); }}
      className="w-full accent-cobalt min-h-8 cursor-pointer" />
    <div className="flex justify-between text-[12px] text-text font-mono"><span>{format(min)}</span><span>{format(max)}</span></div>
    {hint && <p className="mt-3 text-[14px] text-text leading-relaxed">{hint}</p>}
  </div>;
}

export default function SickLeaveCalculator() {
  const lang = useLang();
  const t = copy[lang];
  const locale = lang === "nl" ? "nl-NL" : "en-GB";
  const [fte, setFte] = useState(100);
  const [absence, setAbsence] = useState(5);
  const [reduction, setReduction] = useState(10);
  const result = calculateSickLeave({ fte, absencePercent: absence, reductionPercent: reduction });
  const euro = (n: number) => new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  // Remove binary floating-point noise before display rounding (5.4 x 0.9 = 4.86).
  const percent = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(Number(n.toFixed(8))) + "%";
  const days = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(Number(n.toFixed(8)));
  const integer = (n: number) => new Intl.NumberFormat(locale).format(n);
  const method = fill(t.method, { days: integer(workingDaysPerFte), cost: euro(costPerAbsenceDay) });
  // Same computed value as the result block, so text and numbers never disagree (feedback point 1).
  const relative = fill(t.relative, { reduction: percent(reduction), from: percent(absence), to: percent(result.futureAbsencePercent) });
  return <section id="bereken" className="py-20 lg:py-28 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-20">
      <p className="eyebrow text-cobalt mb-6">{t.eyebrow}</p>
      <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink max-w-3xl mb-5">{t.heading}</h2>
      <p className="text-text text-[16px] leading-relaxed max-w-2xl mb-12">{t.intro}</p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <NumericControl label={t.fte} value={fte} onChange={setFte} min={1} max={10000} step={0.1} sliderStep={1} index="01" sliderLabel={t.slider} locale={locale}
            description={t.fteHint} />
          <NumericControl label={t.absence} value={absence} onChange={setAbsence} min={1} max={50} step={0.1} index="02" sliderLabel={t.slider} locale={locale}
            hint={<><span data-testid="sick-leave-days" className="text-ink font-medium">{days(result.currentAbsenceDays)}</span> {fill(t.absenceDays, { days: integer(workingDaysPerFte) })}</>} />
          <fieldset aria-describedby="sick-leave-relative">
            <legend className="font-mono text-[12px] uppercase tracking-[0.1em] text-text mb-4"><span className="text-cobalt mr-2">03</span>{t.reduction}</legend>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {reductionOptions.map(n => <label key={n} className={`cursor-pointer relative flex items-center justify-center gap-2 rounded-lg border px-2 py-4 text-ink ${reduction===n ? "border-cobalt bg-cobalt/5" : "border-mist"}`}>
                <input type="radio" name="sick-leave-reduction" value={n} checked={reduction===n} onChange={() => setReduction(n)} className="accent-cobalt shrink-0" />
                <span className="whitespace-nowrap">{n}%</span>
              </label>)}
            </div>
            <p id="sick-leave-relative" data-testid="sick-leave-relative" className="text-[14px] text-text leading-relaxed mt-4">{relative}</p>
          </fieldset>
        </div>
        <div className="lg:col-span-5 bg-ink text-paper rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-8 shadow-[0_28px_60px_-20px_rgba(45,31,20,0.32)]"
          role="status" aria-live="polite" aria-atomic="true" data-testid="sick-leave-results">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/75 mb-3">{t.current}</p>
            <p data-testid="sick-leave-current" className="display-numeric text-[clamp(1.6rem,3vw,2.8rem)] break-words">{euro(result.currentCosts)}</p>
            <p className="text-[13px] text-paper/75">{t.yearly}</p>
            <p className="mt-4 text-[13px] text-paper/85">{euro(costPerAbsenceDay)} {t.costPerDay}</p>
          </div>
          <div className="border-t border-paper/15 pt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/75 mb-3">{t.after}</p>
            <p data-testid="sick-leave-after" className="display-numeric text-[clamp(1.6rem,3vw,2.8rem)] break-words">{euro(result.futureCosts)}</p>
            <p className="text-[13px] text-paper/75">{t.yearly}</p>
            <p className="mt-4 text-[13px] text-paper/85">{t.newRate}: <span data-testid="sick-leave-rate">{percent(result.futureAbsencePercent)}</span></p>
          </div>
          <div className="border-t border-paper/15 pt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/85 mb-3">{t.saving}</p>
            <p data-testid="sick-leave-saving" className="display-numeric font-semibold text-[clamp(1.9rem,3.5vw,3.2rem)] text-[#65b6d5] break-words">{euro(result.savings)}</p>
            <p className="text-[13px] text-paper/85">{t.yearly}</p>
            <p className="text-[13px] text-paper/75 mt-4"><span data-testid="sick-leave-saved-days">{days(result.savedDays)}</span> {t.fewerDays}</p>
            <p className="text-[13px] text-paper/75 mt-1"><span data-testid="sick-leave-per-fte">{euro(result.savingsPerFte)}</span> {t.perFte}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-mist flex flex-wrap items-start justify-between gap-6">
        <p className="text-[14px] text-text leading-relaxed max-w-2xl">
          {method}{" "}
          <a className="underline underline-offset-2 text-cobalt hover:text-cobalt-bright font-medium" href="https://www.arboned.nl/thema/verzuim-verlagen" target="_blank" rel="noopener noreferrer">{t.source}</a>
        </p>
        <CTA href="/contact" variant="underline">{t.cta}</CTA>
      </div>
    </div>
  </section>;
}
