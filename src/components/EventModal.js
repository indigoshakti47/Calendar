import React, { useState } from "react";
import { connect } from "react-redux";

import { closeDay } from "../redux/actions";
import EventsModal from "./EventsModal";
import ColorPicker from "./ColorPicker";
import Input from "./Input";
import Time from "./Time";
import "../styles/EventModal.scss";

function EventModal({ openedDay, closeDay, showDayModal, setShowDayModal }) {
  const [showEventsModal, setShowEventsModal] = useState(false);

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    city: "",
    time: "",
  });

  const openEventsModal = () => {
    setShowDayModal(false);
    setShowEventsModal(true);
  };

  const closeDayModal = () => {
    setEventData({ title: "", description: "", city: "", time: "" });
    closeDay(null);
    setShowDayModal(false);
  };

  return (
    <>
      <EventsModal
        showEventsModal={showEventsModal}
        setShowEventsModal={setShowEventsModal}
        showDayModal={showDayModal}
        setShowDayModal={setShowDayModal}
      />
      <div className={`modal ${showDayModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={closeDayModal}></div>
        <div className="modal__dialog">
          <div className="modal__header">
            <h2>Add event for {`${openedDay}`}</h2>
            <a className="hover-text" onClick={openEventsModal}>
              Show all
            </a>
          </div>
          <Input
            name="Title"
            eventData={eventData}
            setEventData={setEventData}
          />
          <Input
            name="Description"
            eventData={eventData}
            setEventData={setEventData}
          />
          <Input
            name="City"
            eventData={eventData}
            setEventData={setEventData}
          />
          <div className="modal__double-column">
            {/* <Input name="Time" /> */}
            <Time name="Time" />
            <ColorPicker />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ openedDay }) => ({
  openedDay,
});

export default connect(mapStateToProps, { closeDay })(EventModal);
