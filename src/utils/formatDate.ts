import { Value } from "../components/Calendar/CustomCalendar";

export const formatDate = (date: Value): string => {
  const formatSingleDate = (date: Date) => {
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();

    // Get the day of the week in Korean
    const dayOfWeek = date.toLocaleDateString("ko-KR", { weekday: "short" });

    // Format the string
    return `${year}.${month}.${day} (${dayOfWeek})`;
  };
  if (date instanceof Date) {
    return formatSingleDate(date);
  } else return "";
};
