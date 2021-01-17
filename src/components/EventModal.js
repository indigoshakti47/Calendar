import React, { useState } from "react";
import { connect } from "react-redux";

import { openList, closeDay, addAppointment } from "../redux/actions";
import { slugTimeToHuman } from '../utils/dateUtils';

import City from './City'
import ColorPicker from "./ColorPicker";
import Input from "./Input";
import Time from "./Time";
import "../styles/EventModal.scss";

function EventModal({ openedDay, closeDay, addAppointment, openList }) {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    city: "",
    time: "11:47",
    color: ""
  });

  const openEventsModal = () => {
    openList(openedDay);
    closeDayModal();
  }

  const closeDayModal = () => {
    setEventData({ title: "", description: "", city: "", time: "" });
    closeDay(null);
  };

  const handleChange = ({ target }) => {
    setEventData({
      ...eventData,
      [target.name]: target.value
    })
  }

  const handleCustomChange = (prop) => (data) => {
    setEventData({
      ...eventData,
      [prop]: data
    })
  }

  const createAppointment = () => {
    addAppointment(openedDay, eventData);
    closeDayModal();
  }

  return (
    <>
      <div className={`modal ${!!openedDay ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={closeDayModal}></div>
        <div className="modal__dialog">
          <div className="modal__header">
            <h2>Add reminder on {`${slugTimeToHuman(openedDay)}`}</h2>
            <a className="hover-text" onClick={openEventsModal}>
              Show all
            </a>
          </div>
          <Input
            name="Title"
            value={eventData['title']}
            onChange={handleChange}
          />
          <Input
            name="Description"
            value={eventData['description']}
            onChange={handleChange}
          />
          <Input
            name="City"
            as={City}
            onChange={handleCustomChange('city')}
          />
          <div className="modal__double-column">
            <Input as={Time} name="Time" onChange={handleCustomChange('time')} />
            <ColorPicker value={eventData['color']} onChange={handleCustomChange('color')} />
          </div>
          <div>
            <button className="submit-btn" onClick={createAppointment}>
             Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ openedDay }) => ({
  openedDay,
});

export default connect(mapStateToProps, { openList, closeDay, addAppointment })(EventModal);
