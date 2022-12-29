import React, { useState } from 'react'
import "./entry.css"
export default function Entry(props) {
  const [temp, setTemp] = useState("")
  

  const handleChange = (event) => {
    setTemp(event.target.value)
  }
  const handleSubmit = (event) => {
    if(!temp){
      alert("please enter data")
    }else{
    props.setLocation(temp)
    props.setBody(false);
  }
  }

  return (
    <div className='form-entry-container'>
      <form id="form1">
        <input placeholder='location' value={temp} onChange={handleChange} style={{ 'borderRadius': '5px','height':'20px', 'marginRight': '15px', 'border': '1px solid black' }}></input>
        <input type="button" onClick={handleSubmit} value="GO" style={{ 'borderRadius': '5px' }}></input>
      </form>
    </div>
  )
}
