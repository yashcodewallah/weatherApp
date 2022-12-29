import React from 'react'
import Logo from './weather.png'
import "./navbar.css";

export default function navbar() {

return (
<div className='nav-container'>
<div><img src={Logo } alt="logo" style={{'maxHeight':'70px'}}></img></div>
<div className='nav-heading'>WeatherApp</div>
    </div>
)
}
