// Role-duration helpers for the Experience timeline.
// Dates use the data file's "Mon YYYY" format; "Present" means the build date,
// so durations refresh on every redeploy (the site is statically exported).

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Aug 2024" → 24295 (a month index, year * 12 + month). "Present" → current month. */
function monthIndex(label: string): number {
  if (label === "Present") {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [month, year] = label.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month);
}

/**
 * Inclusive month count between two labels.
 * @example monthsBetween("Aug 2024", "Mar 2026") // 20
 * @example monthsBetween("Feb 2023", "Jul 2024") // 18
 */
export function monthsBetween(start: string, end: string): number {
  return monthIndex(end) - monthIndex(start) + 1;
}

/**
 * Human-readable duration.
 * @example formatMonths(20) // "1 yr 8 mos"
 * @example formatMonths(6)  // "6 mos"
 * @example formatMonths(24) // "2 yrs"
 */
export function formatMonths(total: number): string {
  const years = Math.floor(total / 12);
  const months = total % 12;
  return [
    years ? `${years} yr${years > 1 ? "s" : ""}` : "",
    months ? `${months} mo${months > 1 ? "s" : ""}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}
