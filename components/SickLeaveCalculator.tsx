"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n/provider";
import { calculateSickLeave, costPerAbsenceDay, workingDaysPerEmployee } from "@/lib/sickLeave";
import CTA from "@/components/CTA";

const copy = {
  nl: {
    eyebrow: "Bereken uw besparing op ziekteverzuim",
    heading: "Wat kost ziekteverzuim uw organisatie?",
    intro: "Vul uw situatie in en ontdek uw huidige verzuimkosten en potentiële jaarlijkse besparing.",
    employees: "Aantal medewerkers",
    absence: "Huidig ziekteverzuim (%)", reduction: "Verwachte verlaging ziekteverzuim",
    absenceDays: "verzuimdagen per jaar", daysBasis: "op basis van", workingDays: "werkdagen per medewerker",
    relative: "De verlaging is relatief: 5% verzuim wordt bij 25% verlaging 3,75%.",
    current: "Uw huidige verzuimkosten", after: "Verzuimkosten na verlaging",
    saving: "Potentiële besparing", yearly: "per jaar", newRate: "Nieuw ziekteverzuim",
    fewerDays: "verzuimdagen minder per jaar",
    perEmployee: "besparing per medewerker per jaar", slider: "schuifregelaar",
    costPerDay: "gemiddelde indicatie per verzuimdag",
    method: "Indicatieve berekening op basis van het aantal medewerkers, {days} werkdagen per medewerker per jaar, het ziekteverzuimpercentage en gemiddelde kosten van {cost} per verzuimdag. Volgens ArboNed bestaan deze kosten onder meer uit loondoorbetaling, vervanging, mogelijk omzet- of productiviteitsverlies en, bij langdurig verzuim, begeleiding en re-integratie. Werkelijke kosten en besparingen verschillen per organisatie, sector, functie en verzuimduur.",
    source: "Bron: ArboNed, 'Verzuim verlagen' (bijgewerkt 18 juni 2026)", cta: "Bespreek uw besparingspotentieel",
  },
  en: {
    eyebrow: "Calculate your potential sick leave savings",
    heading: "What does sick leave cost your organisation?",
    intro: "Enter your organisation's details to see your current sick leave costs and potential annual savings.",
    employees: "Number of employees",
    absence: "Current sick leave (%)", reduction: "Expected reduction in sick leave",
    absenceDays: "sick leave days per year", daysBasis: "based on", workingDays: "working days per employee",
    relative: "The reduction is relative: a 25% reduction takes 5% sick leave to 3.75%.",
    current: "Your current sick leave costs", after: "Sick leave costs after reduction",
    saving: "Potential savings", yearly: "per year", newRate: "New sick leave rate",
    fewerDays: "fewer sick leave days per year",
    perEmployee: "saved per employee per year", slider: "slider",
    costPerDay: "average indication per sick leave day",
    method: "Indicative calculation based on the number of employees, {days} working days per employee per year, the sick leave rate and average costs of {cost} per sick leave day. According to ArboNed these costs include continued salary payment, replacement, possible loss of revenue or productivity and, for long-term absence, guidance and reintegration. Actual costs and savings vary by organisation, sector, role and duration of absence.",
    source: "Source: ArboNed, 'Verzuim verlagen' (updated 18 June 2026)", cta: "Discuss your potential savings",
  },
};

function NumericControl({ label, value, onChange, min, max, step, index, sliderLabel, hint }: {
  label: string; value: number; onChange: (n: number) => void;
  min: number; max: number; step: number; index: string; sliderLabel: string; hint?: ReactNode;
}) {
  const id = useId();
  const [draft, setDraft] = useState(String(value));
  useEffect(() => setDraft(String(value)), [value]);
  const number = Number(draft);
  const valid = draft.trim() !== "" && Number.isFinite(number) && number >= min && number <= max;
  return <div className="mb-9">
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
        <span className="text-cobalt mr-2">{index}</span>{label}
      </label>
      <input id={id} type="number" min={min} max={max} step={step} value={draft}
        aria-invalid={!valid}
        onChange={(e) => {
          const raw = e.target.value;
          setDraft(raw);
          const next = Number(raw);
          if (raw !== "" && Number.isFinite(next) && next >= min && next <= max) onChange(next);
        }}
        onBlur={() => {
          const next = draft === "" || !Number.isFinite(number) ? value : Math.min(max, Math.max(min, number));
          const rounded = step === 1 ? Math.round(next) : Math.round(next * 100) / 100;
          onChange(rounded); setDraft(String(rounded));
        }}
        className="w-32 min-h-11 rounded-lg border border-mist bg-paper px-3 py-2 text-right text-ink font-medium focus:outline-2 focus:outline-cobalt"
      />
    </div>
    <input type="range" aria-label={label + " " + sliderLabel}
      min={min} max={max} step={step} value={value}
      onChange={(e) => { const n = Number(e.target.value); onChange(n); setDraft(String(n)); }}
      className="w-full accent-cobalt min-h-8 cursor-pointer" />
    <div className="flex justify-between text-[11px] text-muted font-mono"><span>{min}</span><span>{max}</span></div>
    {hint && <p className="mt-3 text-[13px] text-muted leading-relaxed">{hint}</p>}
  </div>;
}

export default function SickLeaveCalculator() {
  const lang = useLang();
  const t = copy[lang];
  const locale = lang === "nl" ? "nl-NL" : "en-GB";
  const [employees, setEmployees] = useState(100);
  const [absence, setAbsence] = useState(5);
  const [reduction, setReduction] = useState(25);
  const result = calculateSickLeave({ employees, absencePercent: absence, reductionPercent: reduction });
  const euro = (n: number) => new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  // Remove binary floating-point noise before display rounding (5.1 x 0.75 = 3.825).
  const percent = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(Number(n.toFixed(8))) + "%";
  const days = (n: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(Number(n.toFixed(8)));
  const method = t.method
    .replace("{days}", new Intl.NumberFormat(locale).format(workingDaysPerEmployee))
    .replace("{cost}", euro(costPerAbsenceDay));
  return <section id="bereken" className="py-20 lg:py-28 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-20">
      <p className="eyebrow text-cobalt mb-6">{t.eyebrow}</p>
      <h2 className="display-section text-[clamp(1.85rem,3vw,2.75rem)] text-ink max-w-3xl mb-5">{t.heading}</h2>
      <p className="text-text text-[16px] leading-relaxed max-w-2xl mb-12">{t.intro}</p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <NumericControl label={t.employees} value={employees} onChange={setEmployees} min={1} max={10000} step={1} index="01" sliderLabel={t.slider} />
          <NumericControl label={t.absence} value={absence} onChange={setAbsence} min={1} max={12} step={0.1} index="02" sliderLabel={t.slider}
            hint={<><span data-testid="sick-leave-days" className="text-ink font-medium">{days(result.currentAbsenceDays)}</span> {t.absenceDays} ({t.daysBasis} {workingDaysPerEmployee} {t.workingDays})</>} />
          <fieldset aria-describedby="sick-leave-relative">
            <legend className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-4"><span className="text-cobalt mr-2">03</span>{t.reduction}</legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[10,15,20,25].map(n => <label key={n} className={`cursor-pointer relative flex items-center justify-center gap-2 rounded-lg border p-4 text-ink ${reduction===n ? "border-cobalt bg-cobalt/5" : "border-mist"}`}>
                <input type="radio" name="sick-leave-reduction" value={n} checked={reduction===n} onChange={() => setReduction(n)} className="accent-cobalt" />
                <span>{n}%</span>
              </label>)}
            </div>
            <p id="sick-leave-relative" className="text-[13px] text-muted leading-relaxed mt-4">{t.relative}</p>
          </fieldset>
        </div>
        <div className="lg:col-span-5 bg-ink text-paper rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-8 shadow-[0_28px_60px_-20px_rgba(45,31,20,0.32)]"
          role="status" aria-live="polite" aria-atomic="true" data-testid="sick-leave-results">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/65 mb-3">{t.current}</p>
            <p data-testid="sick-leave-current" className="display-numeric text-[clamp(1.6rem,3vw,2.8rem)] break-words">{euro(result.currentCosts)}</p>
            <p className="text-[13px] text-paper/65">{t.yearly}</p>
            <p className="mt-4 text-[13px] text-paper/80">{euro(costPerAbsenceDay)} {t.costPerDay}</p>
          </div>
          <div className="border-t border-paper/15 pt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/65 mb-3">{t.after}</p>
            <p data-testid="sick-leave-after" className="display-numeric text-[clamp(1.6rem,3vw,2.8rem)] break-words">{euro(result.futureCosts)}</p>
            <p className="text-[13px] text-paper/65">{t.yearly}</p>
            <p className="mt-4 text-[13px] text-paper/80">{t.newRate}: <span data-testid="sick-leave-rate">{percent(result.futureAbsencePercent)}</span></p>
          </div>
          <div className="border-t border-paper/15 pt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/80 mb-3">{t.saving}</p>
            <p data-testid="sick-leave-saving" className="display-numeric font-semibold text-[clamp(1.9rem,3.5vw,3.2rem)] text-[#65b6d5] break-words">{euro(result.savings)}</p>
            <p className="text-[13px] text-paper/80">{t.yearly}</p>
            <p className="text-[12px] text-paper/65 mt-4"><span data-testid="sick-leave-saved-days">{days(result.savedDays)}</span> {t.fewerDays}</p>
            <p className="text-[12px] text-paper/65 mt-1">{euro(result.savingsPerEmployee)} {t.perEmployee}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-mist flex flex-wrap items-start justify-between gap-6">
        <p className="text-[12px] text-muted leading-relaxed max-w-2xl">
          {method}{" "}
          <a className="underline underline-offset-2 hover:text-cobalt" href="https://www.arboned.nl/thema/verzuim-verlagen" target="_blank" rel="noopener noreferrer">{t.source}</a>
        </p>
        <CTA href="/contact" variant="underline">{t.cta}</CTA>
      </div>
    </div>
  </section>;
}
