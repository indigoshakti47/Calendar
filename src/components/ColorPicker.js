import React from 'react';
import '../styles/ColorPicker.scss';

export default function ColorPicker({ value, onChange }) {
  const colors = ['#6DA4CC','#6DCCAF','#AF6DCC','#CCBD6D','#CC6D87' ];
  return (
    <div className="color-picker">
      <span className="color-picker__title">Color code</span>
      <div className="color-picker__elements">
        {
          colors.map((color) => (
            <span
              onClick={() => onChange(color)}
              key={color}
              className={`color-picker__item ${color === value ? 'active': ''}`}
              style={{ background: color }}>
              </span>
          ))
        }
      </div>
    </div>
  )
}
