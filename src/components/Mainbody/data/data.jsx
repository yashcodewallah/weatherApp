import React from 'react'
import "./data.css";

export default function Data(props) {
  const { name, main: { temp, feels_like, temp_min, temp_max, humidity }, weather } = props.data;
  const [first_ele_weather] = weather;
const { main } = first_ele_weather;
  return (
    <div className='data-container'>
    <div className='data-left'>
      <div className='location-name'>{name}</div>
      <div className='weather'>{main}</div>
      <input type="submit" onClick={() => props.setBody(true)} value="Back" className='button'></input>
      </div>

      <div className='data-right'>
      <div className='location-temp'>temp-{temp}</div>
      <div className='location-temp'>feels-like={feels_like}</div>
      <div className='location-temp'>min_temp={temp_min}</div>
      <div className='location-temp'>max_temp={temp_max}</div>
      <div className='location-temp'>humidity={humidity}</div>
     </div>
     </div>
    )
  }