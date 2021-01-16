import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader.js";
import Day from "./Day.js";
import "../styles/Calendar.scss";
import { weekdays, months } from "../constants/Dates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Gets the number of days in a specific month.
 *
 * @param {number} month Integer -month.
 * @param {number} year Integer -year.
 *
 * @return {Date} A date with the number of days in the month.
 */
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Creates an empty array with the size of the number of days in a given month
 *
 * @param {Date} date The date wanted to get the array going.
 *
 * @return {Array} An array with the number of days in a month.
 */
function createDaysInMonthArray(date) {
  return new Array(daysInMonth(date.getMonth(), date.getFullYear())).fill(null);
}

/**
 * Creates an empty array with the days that need to be skipped
 *
 * @param {Date} firstDay The day the month begins.
 *
 * @return {Array} An array with the number of days to skip.
 */
function createDaysToSkipArray(firstDay) {
  return new Array(firstDay.getDay() > 0 ? firstDay.getDay() - 1 : 6).fill(
    null
  );
}

export default function Calendar() {
  const [dateSelected, setDateSelected] = useState(new Date());
  const [monthSelected, setMonthSelected] = useState("");

  const days = createDaysInMonthArray(dateSelected);

  const firstDay = new Date(
    dateSelected.getFullYear(),
    dateSelected.getMonth(),
    1
  );

  const daysToSkip = createDaysToSkipArray(firstDay);

  const month = months[dateSelected.getMonth()];

  useEffect(() => {
    setMonthSelected(month);
  }, [month]);

  /**
   * Function to move to the next month of the calendar
   */
  function nextMonth() {
    //Get the next month based upon the actual date.
    const next = new Date(
      dateSelected.getFullYear(),
      dateSelected.getMonth() + 1,
      1
    );

    //Date's data
    setDateSelected(next);
    setMonthSelected(next.getMonth());
  }

  /**
   * Function to go back one month in the calendar
   */
  function lastMonth() {
    let last;

    //If the current month is January, go back to the previous year
    if (dateSelected.getMonth() === 0)
      last = new Date(
        dateSelected.getFullYear() - 1,
        dateSelected.getMonth() + 11,
        1
      );
    else
      last = new Date(
        dateSelected.getFullYear(),
        dateSelected.getMonth() - 1,
        1
      );

    //Set the dates data
    setDateSelected(last);
    setMonthSelected(last.getMonth());
  }

  return (
    <>
      <div className="calendar" >
        <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={lastMonth}
            className="hover-icon"
        />
        <div className="calendar__grid">
          <h1 className="month">{`${monthSelected} ${dateSelected.getFullYear()}`}</h1>
          {weekdays.map((weekday) => (
            <CalendarHeader key={weekday}>{weekday}</CalendarHeader>
          ))}
          {daysToSkip.map((_) => (
            <p></p>
          ))}
          {days.map((day, index) => (
            <Day key={index}> {index + 1} </Day>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextMonth}
          className="hover-icon"
        />
      </div>
    </>
  );
}
