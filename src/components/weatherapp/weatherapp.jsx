import React, { useState } from "react";
import "./weatherapp.css";

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {
    let api_key = "24ab190122bf9de9f2554c6a430ad07b";

    const [wicon,setwicon] = useState(cloud_icon)
    const search = async ()=> {
        const element = document.getElementsByClassName("city-input")
        // console.log(element)
        // const element1 = document.getElementsByClassName("city-input1")
        // console.log(element1[0].value)
        if (element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
    
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind_rate = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = Math.floor(data.main.humidity) + "%" ;
        wind_rate[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + " C";
        location[0].innerHTML = data.name;
    
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setwicon(clear_icon)
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setwicon(cloud_icon)
        }
        else if(data.weather[0].icon === "01d" || data.weather[0].icon === "03n"){
            setwicon(drizzle_icon)
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setwicon(drizzle_icon)
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setwicon(rain_icon)
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setwicon(rain_icon)
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setwicon(snow_icon)
        }
        else{
            setwicon(clear_icon)
        }
    
    }
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="searchicon" />
        </div>
      </div>
      <input type="text" className="city-input1" />
      <img src={wicon} alt="" />
      <div className="weather-temp"></div>
      <div className="weather-location"></div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">6 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
