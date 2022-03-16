import React from 'react'
import Timer from './Timer'
import { useState } from "react";

const AdvancedTimer = () => {
    const settings = {secondsPerClick: 6}
    const [timeInput, setTimeInput] = useState('')
    const [timeLeft, setTimeLeft] = useState(0);

    const onTimerCompleted = () => {
        setTimeLeft(0)
    }

    const onTimerStartClick = () => {
        setTimeLeft(timeInput)
        setTimeInput('')
    }
    return (
        <div>
        <input value={timeInput} onChange={(e) => setTimeInput(e.target.value)}></input>
        <button onClick={onTimerStartClick}>start</button>
        <button onClick={()=>setTimeLeft(0)}>refresh</button> 
        <Timer
        id="timer-1"
        settings={settings}
        onComplete={onTimerCompleted}
        time = {timeLeft}        
        >
            {(hours, minutes, seconds) => <span>{seconds} seconds</span>}
        </Timer>
        
    </div>
    )
}


export default AdvancedTimer


