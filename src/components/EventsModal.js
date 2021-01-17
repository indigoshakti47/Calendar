import React from "react";
import { connect } from "react-redux";

import "../styles/EventModal.scss";

function EventsModal({ openedDay, showEventsModal, setShowEventsModal, showDayModal, setShowDayModal }) {

  function openDayModal(){
    setShowEventsModal(false);   
    setShowDayModal(true); 
  }

  return (
    <div className={`modal ${!!showEventsModal ? "show" : ""}`}>
      <div className="modal__backdrop" onClick={() => setShowEventsModal(false)}></div>
      <div className="modal__dialog">
        <div className="modal__header">
          <h2>All events for {openedDay}</h2>
          <a className="hover-text" onClick={openDayModal}>Add event</a>
        </div>
        
      </div>
    </div>
  );
}

const mapStateToProps = ({ openedDay }) => ({
  openedDay,
});

export default connect(mapStateToProps, null)(EventsModal);