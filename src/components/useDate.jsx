import { useState } from "react";

export function useDate(initialDate) {
  const [date, setDate] = useState(initialDate);

  function addDays(days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);
  }

  function addMonths(days) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + days);
    setDate(newDate);
  }

  return {
    date,
    addDays,
    addMonths
  };
}
