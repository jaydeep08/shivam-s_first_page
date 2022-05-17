import React from 'react';
import './header.css';
import { useState, useEffect } from "react";

function Header(){
  const [data, setData] = useState(null);

  useEffect(() => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=042ca2d4adbf47b08a153518221705&q=India&aqi=no`)
   .then((response) => response.json()).then((daata)=>{
       setData(daata);
   });
 }, []);
console.log(data);
    return <>

<h1 style={{color:"rgb(146, 93, 15)",backgroundColor:"lightgreen",textAlign:"center"}}>Weather Forcast</h1>



<div className="card container">
  <img style={{width:"100px",height:"100px"}} src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png" alt="Avatar"  />
  <div class="container">
  <h4><b>country: {data.location.country}</b></h4> 
  <h4><b>{data.location.name}</b></h4> 
  <p>Date: {data.current.last_updated}</p> 
  <p>Humidity: {data.current.humidity}</p> 
  <p>Temperature: {data.current.temp_c} Celsius &#47; {data.current.temp_f} Fahrenheit </p> 
  <p>Wind: {data.current.wind_kph} kph</p> 
 
  </div>
</div>
    </>
}
export default Header;