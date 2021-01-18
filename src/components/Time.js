import React from 'react'
import TimePicker from 'react-time-picker'

export default function Time({ onChange, value, name }) {
    return (
        <div>
            <TimePicker onChange={onChange} value={value} name={name} />
        </div>
    )
}
