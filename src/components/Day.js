import React from 'react'
import '../styles/Day.scss'

export default function Day({ children, weatherIcon, onDayClick }) {
    return (
        <div className="day" onClick={onDayClick}>
            <div className="day__header">
                <span className="day__title">{children}</span>
                { weatherIcon && <img alt="weather icon" src={weatherIcon}></img> }
            </div>
            <p className="reminder-calendar">Coding</p>
        </div>
    )
}