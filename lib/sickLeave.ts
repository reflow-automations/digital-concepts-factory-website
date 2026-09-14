// Client-side, indicative calculation (ArboNed method). Percentages at the boundary use 0-100.
// Both constants are the only knobs: change them here when ArboNed updates its indication
// or when a different working-day basis is chosen.
export const workingDaysPerEmployee = 260;
export const costPerAbsenceDay = 360;

export function calculateSickLeave({ employees, absencePercent, reductionPercent }: {
  employees: number; absencePercent: number; reductionPercent: number;
}) {
  const safe = (value: number, max = Number.MAX_SAFE_INTEGER) =>
    Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : 0;
  const count = Math.floor(safe(employees));
  const absence = safe(absencePercent, 100);
  const reduction = safe(reductionPercent, 100) / 100;
  const availableDays = count * workingDaysPerEmployee;
  const currentAbsenceDays = availableDays * absence / 100;
  const currentCosts = currentAbsenceDays * costPerAbsenceDay;
  const futureAbsenceDays = currentAbsenceDays * (1 - reduction);
  const futureCosts = futureAbsenceDays * costPerAbsenceDay;
  const savings = currentCosts * reduction;
  return {
    availableDays, currentAbsenceDays, currentCosts,
    futureAbsencePercent: absence * (1 - reduction),
    futureAbsenceDays, futureCosts,
    savedDays: currentAbsenceDays - futureAbsenceDays,
    savings,
    savingsPerEmployee: count > 0 ? savings / count : 0,
  };
}
