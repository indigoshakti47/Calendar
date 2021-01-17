import React, { useState } from "react";
import { connect } from "react-redux";

import { openDay, openList } from '../redux/actions'
import "../styles/EventModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCircle } from "@fortawesome/free-solid-svg-icons";

function EventListModal({
  openedList,
  openDay,
  openList
}) {
  function openDayModal() {
    openDay(openedList);
    openList(null);
  }

  return (
    <div className={`modal ${!!openedList ? "show" : ""}`}>
      <div
        className="modal__backdrop"
        onClick={() => openList(null)}
      ></div>
      <div className="modal__dialog">
        <div className="modal__header">
          <h2>All events for {openedList}</h2>
          <a className="hover-text" onClick={openDayModal}>
            Add event
          </a>
        </div>
        <div className="event-container">
          <input type="text" name="eventName" className="editable-input"/>
          <FontAwesomeIcon icon={faTrashAlt} className="small-icon" />
        </div>
        <FontAwesomeIcon icon={faCircle} className="small-icon" />
        <small>10 min ago</small>
        <p>LA</p>
        <p>MAP</p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ openedList }) => ({
  openedList,
});

export default connect(mapStateToProps, { openDay, openList })(EventListModal);
