import "./style.scss"
import "./app.jsx"
import React from 'react'
import {render} from 'react-dom'

render (
    <App/>,
    document.getElementById('root')
)
const headline = "Welcome to the page of webbb";
document.querySelector('body').innerText = headline;
const a = (abc) => abc;
console.log(a + 'a');