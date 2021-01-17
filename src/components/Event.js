import React, { useState } from "react";
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import { deleteAppointment, editAppointment } from '../redux/actions';
import "../styles/EventModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Event({ appointment, index, day, deleteAppointment, editAppointment }) {
  const [formData, setFormData] = useState({ ...appointment });
  const deleteA = async () => {
    const {isConfirmed} = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    });

    if (!isConfirmed) return;

    deleteAppointment(day, index);

    Swal.fire(
      'Deleted!',
      'Your event has been deleted.',
      'success'
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    editAppointment(day, index, name, value);
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className="event__container">
      <div className="event">
        <FontAwesomeIcon icon={faCircle} style={{color: appointment.color}} className="small-icon" />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="editable-input"
        />
        <button className="delete-button" onClick={deleteA}>
          <FontAwesomeIcon icon={faTrashAlt} className="small-icon" />
        </button>
      </div>
      <span className="event__time">{appointment.time}</span>
      <div>
          <input
            placeholder="You need to create a new calendar from scratch"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="editable-input"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="small-icon" />
          <span>{appointment.city.name}, {appointment.city.country}</span>
        </div>
    </div>
  );
}

export default connect(null, { deleteAppointment, editAppointment })(Event);
