import React from "react";
import { useState } from "react";
import "./getintouch.css";
import map from "../../Assets/map.png";
import { send } from 'emailjs-com';

function GetInTouch() {
  const [Name, setName] = useState("")
const [Email, setEmail] = useState("")
const [Number, setNumber] = useState("")
const [Message  , setMessage] = useState("")
  function Sendmsg() {
    console.log(Name,Email,Number,Message)
 
    send("service_yv3p2f9","template_r7fxafq",{
      name: Name,
      email: Email,
      phone: Number,
      message: Message,
      },"Www0ZG6CaurvjKOpl")
      setEmail("")
      setName("")
      setNumber("")
      setMessage("")
  }
  return (
    <div className="getintouch" id="contactUs">
      <h5>GET IN TOUCH WITH US</h5>
      <h3>Schedule Appointment</h3>
      <div className="getintouch-content">
        <div className="sendamessage">
          <span>Send us Message</span>
          <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="number" placeholder="Mobile Number" onChange={(e)=>setNumber(e.target.value)}/>
          <textarea placeholder="Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
          <button onClick={Sendmsg}>Send</button>
        </div>
        <div className="map">
          <img src={map} />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
