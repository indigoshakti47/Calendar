import React, {useEffect, useState} from 'react'
import { getQuoteData } from "../apis/Quotes";
import '../styles/Reminder.scss'

export default function MotivationalQuote() {

    const [motivationalQuote, setMotivationalQuote] = useState("");

    useEffect(() => {
      getQuoteData().then(res => setMotivationalQuote(res.content));
    }, [])

    return (
        <div>
             <blockquote>{motivationalQuote}</blockquote>
        </div>
    )
}
