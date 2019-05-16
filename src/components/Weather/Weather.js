import React from 'react'
const Weather = (props) => 
    <li>
        {props.weather.timezone}
        <p>{props.weather.currently.temperature} degrees</p>
        <p>{props.weather.currently.precipProbability}</p>
    </li>

export default Weather