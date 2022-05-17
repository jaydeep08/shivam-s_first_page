import React from 'react';
import './header.css';
import { useState, useEffect } from "react";

function Header(){
  const [data, setData] = useState({
  location: {
    name: "New Delhi",
    region: "Delhi",
    country: "India",
    lat: 28.6,
    lon: 77.2,
    tz_id: "Asia/Kolkata",
    localtime_epoch: 1652771916,
    localtime: "2022-05-17 12:48"
  },
  current: {
    last_updated_epoch: 1652767200,
    last_updated: "2022-05-17 11:30",
    temp_c: 39.0,
    temp_f: 102.2,
    is_day: 1,
    condition: {
      text: "Overcast",
      icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
      code: 1009
    },
    wind_mph: 5.6,
    wind_kph: 9.0,
    wind_degree: 280,
    wind_dir: "W",
    pressure_mb: 1002.0,
    pressure_in: 29.59,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 19,
    cloud: 0,
    feelslike_c: 38.5,
    feelslike_f: 101.2,
    vis_km: 3.5,
    vis_miles: 2.0,
    uv: 10.0,
    gust_mph: 6.5,
    gust_kph: 10.4
  }
});
 
  
  useEffect(() => {
    try {
      fetch(`https://api.weatherapi.com/v1/current.json?key=042ca2d4adbf47b08a153518221705&q=India&aqi=no`)
   .then((response) => response.json()).then((daata)=>{
       setData(daata);
   }).catch((error)=>{
     console.log(error)
     
   });
    } catch (error) {
      
    }
  
 }, []);
console.log(data);
    return <>

<h1 style={{color:"rgb(146, 93, 15)",backgroundColor:"lightgreen",textAlign:"center"}}>Weather Forcast</h1>



<div className="card container">
  <img style={{width:"100px",height:"100px"}} src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png" alt="Avatar"  />
  <div class="container">
  <h4><b>country : {data.location.country}</b></h4> 
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