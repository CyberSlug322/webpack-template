import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from './reducers/repoReducer'
import Timer from './timer'

const App = () => {
    const dispatch = useDispatch()
    const settings = {secondsPerClick: 6}
    const onTimerCompleted = () => {
        return <div>Time's up!</div>
    }
    const onCountClick = () => {
        dispatch(setCount(5))
    }
    return (
        <div>
            <button onClick={()=>onCountClick()}>counter</button>
            
            <Timer
            id="timer-1"
            settings={settings}
            onComplete={onTimerCompleted}         
            >
                {(hours, minutes, seconds) => <span>{seconds} seconds</span>}
            </Timer>
            
        </div>
    )
}


export default App