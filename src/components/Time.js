import React, { useState } from 'react'
import TimePicker from 'react-time-picker'

export default function Time() {
    const [value, onChange] = useState('11:47');
    return (
        <div>
            <TimePicker onChange={onChange} value={value}/>
        </div>
    )
}
