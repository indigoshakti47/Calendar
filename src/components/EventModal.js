import React from "react";
import { connect } from "react-redux";

import { closeDay } from '../redux/actions'
import ColorPicker from './ColorPicker'
import Input from './Input';
import "../styles/EventModal.scss";

function EventModal({ openedDay, closeDay }) {
  return (
    <div className={`modal ${!!openedDay ? "show" : ""}`}>
      <div className="modal__backdrop" onClick={closeDay}></div>
      <div className="modal__dialog">
        <div className='modal__header'>
          <h2>Modal title</h2>
          <a className="hover-text">Show all</a>
        </div>
        <Input name="Title" />
        <Input name="Description" />
        <Input name="City" />
        <div className="modal__double-column">
          <Input name="Time" />
          <ColorPicker />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ openedDay }) => ({
  openedDay,
});

export default connect(mapStateToProps, { closeDay })(EventModal);
