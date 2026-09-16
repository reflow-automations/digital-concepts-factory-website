// Client-side, indicative calculation (ArboNed method). Percentages at the boundary use 0-100.
// Both constants are the only knobs: change them here when ArboNed updates its indication
// or when a different working-day basis is chosen.
// workingDaysPerFte is roughly 52 weeks x 5 weekdays; it is an assumption, not measured days
// after holidays and public holidays (client feedback 2026-09-16, point 5).
export const workingDaysPerFte = 260;
export const costPerAbsenceDay = 360;

export function calculateSickLeave({ fte, absencePercent, reductionPercent }: {
  fte: number; absencePercent: number; reductionPercent: number;
}) {
  const safe = (value: number, max = Number.MAX_SAFE_INTEGER) =>
    Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : 0;
  // Fractional FTE is allowed: two employees of 0.5 FTE count as 1 FTE (feedback 2026-09-16, point 4).
  const count = safe(fte);
  const absence = safe(absencePercent, 100);
  const reduction = safe(reductionPercent, 100) / 100;
  const availableDays = count * workingDaysPerFte;
  const currentAbsenceDays = availableDays * absence / 100;
  const currentCosts = currentAbsenceDays * costPerAbsenceDay;
  const futureAbsenceDays = currentAbsenceDays * (1 - reduction);
  const futureCosts = futureAbsenceDays * costPerAbsenceDay;
  const savings = currentCosts * reduction;
  return {
    availableDays, currentAbsenceDays, currentCosts,
    // Relative reduction: 5.4% at 10% becomes 4.86%, not 5.4 minus 10 percentage points.
    futureAbsencePercent: absence * (1 - reduction),
    futureAbsenceDays, futureCosts,
    savedDays: currentAbsenceDays - futureAbsenceDays,
    savings,
    savingsPerFte: count > 0 ? savings / count : 0,
  };
}

// Parse a number the way a visitor types it in the given locale.
// nl-NL: "1.500" -> 1500, "5,4" -> 5.4, "37,5" -> 37.5. en-GB: "1,500" -> 1500, "5.4" -> 5.4.
// A lone separator followed by exactly three digits is read as a thousands separator;
// anything else is read as the decimal separator, so "5.4" still works for a Dutch visitor.
export function parseLocaleNumber(raw: string, locale: string): number {
  const text = raw.trim().replace(/\s/g, "");
  if (text === "") return NaN;
  const decimal = locale.startsWith("nl") ? "," : ".";
  const thousands = decimal === "," ? "." : ",";
  const hasDecimal = text.includes(decimal);
  const hasThousands = text.includes(thousands);
  let normalised = text;
  if (hasDecimal) {
    normalised = text.split(thousands).join("").replace(decimal, ".");
  } else if (hasThousands) {
    const parts = text.split(thousands);
    const groupedThousands = parts.slice(1).every((p) => p.length === 3);
    normalised = groupedThousands ? parts.join("") : parts.join(".");
  }
  return Number(normalised);
}
