import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { openList } from '../redux/actions';
import { getcityWeather } from '../apis/Weather'
import { getDaystoSkip, getNextMonth, getLastMonth, getDaysInMonthArray, getDayColor } from '../utils/dateUtils';
import CalendarHeader from "./CalendarHeader.js";
import EventModal from "./EventModal";
import EventListModal from "./EventListModal";
import Day from "./Day.js";
import "../styles/Calendar.scss";
import { weekdays, months } from "../constants/Dates";

function Calendar({ globalCity, openList, appointments }) {
  const [dateSelected, setDateSelected] = useState(new Date());
  const [weather, setWeather] = useState([]);
  const today = new Date();
  
  useEffect(() => {
    getWeather();
  }, [globalCity]);

  const getWeather = async () => {
    const weatherData = await getcityWeather(globalCity);
    setWeather(weatherData);
  }

  const days = getDaysInMonthArray(dateSelected);

  const daysToSkip = getDaystoSkip(dateSelected);
  const moveToNextMonth = () => setDateSelected(getNextMonth(dateSelected));

  const moveToLastMonth = () => setDateSelected(getLastMonth(dateSelected));

  return (
    <>
      <EventListModal />
      <EventModal />
      <div className="calendar" >
        <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={moveToLastMonth}
            className="hover-icon"
        />
        <div className="calendar__grid">
          <h1 className="month">{`${months[dateSelected.getMonth()]} ${dateSelected.getFullYear()}`}</h1>
          {weekdays.map((weekday) => (
            <CalendarHeader key={weekday}>{weekday}</CalendarHeader>
          ))}
          {daysToSkip.map((_, i) => (
            <p key={i}></p>
          ))}
          {days.map((_, index) => (
            <Day
              key={index}
              color={getDayColor(today, dateSelected, index + 1)}
              weatherIcon={weather[`${dateSelected.getFullYear()}_${dateSelected.getMonth()}_${index}`]}
              onDayClick={() => openList(`${dateSelected.getFullYear()}_${dateSelected.getMonth()}_${index + 1}`)}
              appointments={appointments[`${dateSelected.getFullYear()}_${dateSelected.getMonth()}_${index + 1}`]}
            > {index + 1}</Day>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={moveToNextMonth}
          className="hover-icon"
        />
      </div>
    </>
  );
}

const mapStateToProps = ({ globalCity, appointments }) => ({
  globalCity,
  appointments
});

export default connect(mapStateToProps, { openList })(Calendar);
