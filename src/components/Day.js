import React from 'react'
import '../styles/Day.scss'

export default function Day({ children, color, weatherIcon, onDayClick }) {
    return (
        <div className="day" style={{backgroundColor: color}} onClick={onDayClick}>
            <div className="day__header">
                <span className="day__title">{children}</span>
                { weatherIcon && <img alt="weather icon" src={weatherIcon}></img> }
            </div>
            <p className="reminder-calendar">Coding</p>
        </div>
    )
}