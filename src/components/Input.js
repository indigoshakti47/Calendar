import React from 'react'
import '../styles/Form.scss'

export default function Input({ name }) {
  const labelId = name.trim().toLowerCase();
  return (
    <div className="input-field">
      <label className="form-label" htmlFor={labelId}>{name}</label>
      <input type="text" id={labelId} className="form-control"></input>
    </div>
  )
}
