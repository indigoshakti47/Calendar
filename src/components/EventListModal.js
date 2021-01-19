import React from "react";
import { connect } from "react-redux";

import { openDay, openList, deleteAllAppointments } from "../redux/actions";
import { slugTimeToHuman } from "../utils/dateUtils";
import Event from "./Event";
import "../styles/EventModal.scss";

function EventListModal({
  openedList,
  openDay,
  openList,
  appointments,
  deleteAllAppointments,
}) {
  function openDayModal() {
    openDay(openedList);
    openList(null);
  }

  const dayAppointments = appointments[openedList];
  const dayDate = slugTimeToHuman(openedList);

  return (
    <div className={`modal ${!!openedList ? "show" : ""}`}>
      <div className="modal__backdrop" onClick={() => openList(null)}></div>
      <div className="modal__dialog">
        <div className="modal__header">
          <h2>All reminders on {dayDate}</h2>
          <a className="hover-text" onClick={openDayModal}>
            Add reminder
          </a>
        </div>
        
        {dayAppointments && dayAppointments.length ? (
          
          [
            dayAppointments.map((appointment, i) => (
              <Event
                key={i}
                appointment={appointment}
                index={i}
                day={openedList}
              />
            )),
            <div class="delete-all-container">
            <button key={0} className="delete-all" onClick={() => deleteAllAppointments(openedList)}>
              Delete all
            </button>
            </div>
          ]
        ) : (
          <div>
          <h5>
            Oops, looks like there are no planned reminders for {dayDate} , if
            you'd like, create one!
          </h5>
            <iframe className="gif" src="https://giphy.com/embed/XaExByjWTK1V2HgDfh"></iframe>
          </div>
          
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ openedList, appointments }) => ({
  openedList,
  appointments
});

export default connect(mapStateToProps, {
  openDay,
  openList,
  deleteAllAppointments
})(EventListModal);
