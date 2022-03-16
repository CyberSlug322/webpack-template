import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from './reducers/repoReducer'
import AdvancedTimer from './AdvancedTimer';

const App = () => {
    const dispatch = useDispatch() 
    const onCountClick = () => {
        dispatch(setCount(5))     
    }
    
    return (
        <div> 
            <button onClick={onCountClick()}>counter</button>
            <AdvancedTimer/>       
        </div>
    )
}

export default App