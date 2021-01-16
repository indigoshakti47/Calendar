import React from "react";
import Accordion from "./Accordion";
import "../styles/Reminder.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
        <h5 className="open-close">
          <span>See more</span>
          <FontAwesomeIcon icon={faChevronDown} className="small-icon" />
        </h5>
      </div>
      <Accordion today={data.today} details={data.details} />
    </div>
  );
}
