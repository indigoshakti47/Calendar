import React from "react";
import { connect } from "react-redux";

import { formatToday, getDate } from "../utils/dateUtils";
import Accordion from "./Accordion";
import "../styles/Reminder.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MotivationalQuote from "./MotivationalQuote";
import '../styles/Day.scss'

function Reminders({ children, color, weatherIcon, onDayClick, appointments }) {

  const appointmentsObject = Object.keys(appointments);
  const today = new Date();
  //Tiemstamp of 3 days for upcoming reminders
  const timestamp = new Date().getTime() + (3 * 24 * 60 * 60 * 1000)

  const todayAppointments = () => {
    const slugTimeToday = `${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
    const appointmentsToday = Object.values(appointments[slugTimeToday])
    return appointmentsToday.map((appointment, index) => {
      const appointmentInfo = appointments[appointment];
      return(
      <Accordion key={index} day={slugTimeToday} index={index} appointments={appointment} />
    )})
  }

  const upComingAppointments = () => {
  
    const todayTimestamp = formatToday(today).getTime();
    return appointmentsObject.map((appointment, index) => {
      const [year, month, day] = appointment.split('_');
      const reminderDateTimestamp = getDate(year, month, day).getTime();
      const appointmentInfo = appointments[appointment];

      return(
        (reminderDateTimestamp > todayTimestamp && reminderDateTimestamp < timestamp) && appointmentInfo.length > 0 ?
        appointmentInfo.map((app, i) => {
          console.log(app)
        return(
          <Accordion key={i} day={appointment} index={i} appointments={app} />
        )})
         : ""
    )})
  }

  return (
    <div>
      <div className="reminders-header-container">
        <h3 className="reminders-header">Reminders</h3>
      </div>
      <div className="reminders-header-container quote-container">
        <h5 className="quote">
          <MotivationalQuote/>
        </h5>
      </div>
      <div className="reminders-header-container">
        <h3 className="reminders-header">Today</h3>
      </div>
      {Object.keys(appointments).length > 0 ? todayAppointments() : ""}
      <div className="reminders-header-container">
        <h3 className="reminders-header">Upcoming</h3>
      </div>
      {Object.keys(appointments).length > 0 ? upComingAppointments() : ""}

    </div>
  );
}

const mapStateToProps = ({ appointments }) => ({
  appointments,
});

export default connect(mapStateToProps, null)(Reminders);
