// utils/getYearMonthDurationBase.ts
import dayjs from "dayjs";

export type YMDLabel = {
  year: string;
  years: string;
  month: string;
  months: string;
};

export default function getYearMonthDurationBase({
  startDate,
  endDate,
  labels,
}: {
  startDate: string;
  endDate: string;
  labels: YMDLabel;
}): string {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const totalMonths = end.diff(start, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const result: string[] = [];

  if (years > 0) result.push(`${years} ${years > 1 ? labels.years : labels.year}`);
  if (months > 0) result.push(`${months} ${months > 1 ? labels.months : labels.month}`);

  if (result.length === 0) result.push(`0 ${labels.months}`);

  return result.join(" ");
}
