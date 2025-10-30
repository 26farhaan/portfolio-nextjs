import dayjs from "dayjs";
import { getTranslations } from "next-intl/server";

export default async function getYearMonthDuration({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}): Promise<string> {
  const tGlobal = await getTranslations();
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const totalMonths = end.diff(start, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const result = [];

  if (years > 0) result.push(`${years} ${tGlobal("years")}`);
  if (months > 0) result.push(`${months} ${tGlobal("months")}`);

  // Jika sama persis (0 tahun 0 bulan)
  if (result.length === 0) result.push(`0 ${tGlobal("months")}`);

  return result.join(" ");
}
