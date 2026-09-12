// Client-side, indicative calculation. Percentages at the boundary use 0-100.
export const indirectCostFactor = 1.18;

export function calculateSickLeave({ employees, salary, absencePercent, reductionPercent }: {
  employees: number; salary: number; absencePercent: number; reductionPercent: number;
}) {
  const safe = (value: number, max = Number.MAX_SAFE_INTEGER) =>
    Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : 0;
  const count = Math.floor(safe(employees));
  const absence = safe(absencePercent, 100);
  const reduction = safe(reductionPercent, 100) / 100;
  const payroll = count * safe(salary);
  const directCosts = payroll * absence / 100;
  const currentCosts = directCosts * indirectCostFactor;
  const savings = currentCosts * reduction;
  return {
    payroll, directCosts, currentCosts,
    futureAbsencePercent: absence * (1 - reduction),
    futureCosts: currentCosts - savings,
    savings,
    savingsPerEmployee: count > 0 ? savings / count : 0,
  };
}
