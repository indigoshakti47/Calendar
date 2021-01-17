import React from 'react'
import '../styles/Day.scss'

export default function Day({ children, color, weatherIcon, onDayClick, appointments }) {
    return (
        <div className="day" style={{backgroundColor: color}} onClick={onDayClick}>
            <div className="day__header">
                <span className="day__title">{children}</span>
                { weatherIcon && <img alt="weather icon" src={weatherIcon}></img> }
            </div>
            {appointments && appointments.map(
                ({ color, title }, i) => <p key={i} className="day__reminder" style={{ background: color }}>{title}</p>
            )}
        </div>
    )
}