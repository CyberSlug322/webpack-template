import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from './reducers/repoReducer'
import Timer from './timer'

const App = (props) => {
    const dispatch = useDispatch()

    const onCountClick = () => {
        dispatch(setCount(5))
    }
    const a = 'abc'
    return (
        <div>
            <button onClick={()=>onCountClick()}>counter</button>
            
            <Timer>
            {(a) => <span>{a}</span>}
            </Timer>
            
        </div>
    )
}


export default App