import React from "react";
import Accordion from "./Accordion";
import "../styles/Reminder.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MotivationalQuote from "./MotivationalQuote";

const data = {
  today: "Coding callenge",
  details:
    "You need to create a calendar from scratch and do some other things with a weather API",
};
export default function Reminders() {
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
      <Accordion today={data.today} details={data.details} />
    </div>
  );
}
