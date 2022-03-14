import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from './reducers/repoReducer'
import Timer from './timer'
import { useState } from "react";


const App = () => {
    const [time, setTime] = useState(5);
    const dispatch = useDispatch()
    const settings = {secondsPerClick: 6}
    const onTimerCompleted = () => {
        setTime(0)
    }
    const onCountClick = () => {
        dispatch(setCount(5))
        
    }
    
    

    
    return (
        <div>
            <button onClick={onCountClick()}>counter</button>
            <button onClick={()=>setTime(5)}>start </button>
            <button onClick={()=>setTime(0)}>refresh</button> 
            <Timer
            id="timer-1"
            settings={settings}
            onComplete={onTimerCompleted}
            time = {time}        
            >
                {(hours, minutes, seconds) => <span>{seconds} seconds</span>}
            </Timer>
            
        </div>
    )
}


export default App