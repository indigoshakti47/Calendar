import React, {useState, useEffect} from "react";
import CalendarHeader from "./CalendarHeader.js";
import Day from "./Day.js";

import { weekdays, months } from "../constants/Dates";

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function createArray(date) {
  return new Array(
    daysInMonth(date.getMonth(), date.getFullYear())
  ).fill(null);
}

export default function Calendar() {

  const [dateSelected, setDateSelected] = useState(new Date());
  const [monthSelected, setMonthSelected] = useState("");

  const days = createArray(dateSelected);

  const firstDay = new Date(dateSelected.getFullYear(), dateSelected.getMonth(), 1);

  const daysToSkip = new Array(firstDay.getDay() > 0 ? firstDay.getDay() - 1 : 6).fill(null)

  const month = months[dateSelected.getMonth()];

  useEffect(() => {
    setMonthSelected(month)
  }, [month])

  
  function nextMonth(){
    const next = new Date(dateSelected.getFullYear(), dateSelected.getMonth()+1, 1);
    console.log(dateSelected.getFullYear(), dateSelected.getMonth()+1)
    setDateSelected(next);
    setMonthSelected(next.getMonth())
  }

  function lastMonth(){
    let last;
    console.log(dateSelected.getMonth())
    if(dateSelected.getMonth() === 0) last = new Date(dateSelected.getFullYear() - 1, dateSelected.getMonth()+11, 1);
    else last = new Date(dateSelected.getFullYear(), dateSelected.getMonth()-1, 1);

    setDateSelected(last);
    setMonthSelected(last.getMonth())
  }

  return (
    <>
      <h1>{`${monthSelected} ${dateSelected.getFullYear()}`}</h1>
      <div className="calendar">
        {weekdays.map((weekday) => (
          <CalendarHeader key={weekday}>{weekday}</CalendarHeader>
        ))}
        {daysToSkip.map((_) => (
          <p></p>
        ))}
        {days.map((day, index) => (
          <Day key={index}> {index + 1}</Day>
        ))}
      </div>
      <button onClick={lastMonth}>
        Previous
      </button>
      <button onClick={nextMonth}>
        Next
      </button>
    </>
  );
}
