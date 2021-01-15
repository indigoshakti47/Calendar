import React from 'react'
import '../styles/Calendar.scss'

export default function CalendarHeader({ children }) {
    return (
        <div className="calendar-header">
            <h3>
            {children}
            </h3>
        </div>
    )
}
