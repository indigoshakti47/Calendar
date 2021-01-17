import React, { useState } from 'react';
import AlertModal from './AlertModal';
import '../styles/Form.scss';

export default function Input({ name, eventData, setEventData }) {

  const [showAlertModal, setShowAlertModal] = useState(false)

  const labelId = name.trim().toLowerCase();

  const setFormData = (e) => {
    console.log(e.target.value.length);
    if (
      (labelId === "title" && e.target.value.length > 30) ||
      (labelId === "description" && e.target.value.length > 60)
    )
      setShowAlertModal(true);
    else setEventData({ ...eventData, [labelId]: e.target.value });
  };

  return (
    <>
      <AlertModal showAlertModal={showAlertModal} setShowAlertModal={setShowAlertModal}>{`The ${labelId} is too long.`}</AlertModal>
      <div className="input-field">
        <label className="form-label" htmlFor={labelId}>
          {name}
        </label>
        <input
          type="text"
          id={labelId}
          className="form-control"
          value={eventData[labelId]}
          onChange={(e) => setFormData(e)}
        ></input>
      </div>
    </>
  );
}
