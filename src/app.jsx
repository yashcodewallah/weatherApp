import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar/navbar"
import Mainbody from "./components/Mainbody/mainbody"
import Footer from "./components/Footer/footer"
import axios from "axios"
import "./app.css"
export default function App() {
  const [data,setData]=useState({})
  const [body,setBody]=useState(true);
  const [location, setLocation] = useState("");


 useEffect(()=>{
  // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},india&APPID=bb5d60ed47c7bb0bd975702067c80ed4`)
  // .then(response=> response.json())
  //  .then(data=> setData(data)) },[location]
   
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},india&APPID=bb5d60ed47c7bb0bd975702067c80ed4`)
  .then(data=>{
    // console.log(data.data)
    setData(data.data)})},[location] 
   )

  return (
    <div className='app-container'>
        <Navbar />
        <div className='body-container'>
        <Mainbody  setLocation={setLocation} data={data} body={body} setBody={setBody} />
        
        </div>
        <Footer />
    </div>
  )
}
