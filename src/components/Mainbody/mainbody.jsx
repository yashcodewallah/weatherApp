import React from 'react'
import Entry from './entry/entry'
import "./mainbody.css";
import Data from "./data/data";



export default function Mainbody(props) {
  return (
    <div className='mainbody-container'>
    {(props.body) ?(
        <Entry setLocation={props.setLocation} setBody={props.setBody} />
    ):(
       <Data data={props.data} setBody={props.setBody}/>
        )
        }
    </div>
  )
}
