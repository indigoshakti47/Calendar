import React from 'react'
import '../styles/Day.scss'

export default function Day({ children, weatherIcon }) {
    return (
        <div className="day">
            <div className="day__header">
                <span className="day__title">{children}</span>
                { weatherIcon && <img alt="weather icon" src={weatherIcon}></img> }
            </div>
        </div>
    )
}
