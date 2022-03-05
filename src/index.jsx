import "./style.scss"
import App from "./App.jsx"

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './reducers/index'

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
