import React, { useEffect, useState } from 'react'

export default function Eleven() {

  const [weather, setWeather] = useState(null);

  useEffect(()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a4c168b3372fd369da1b1e3a672b193e`)
        .then((response) => response.json())
        .then((data) => setWeather(data));
      })    
    }
  },[])

  return (
     <div>
       {weather ? (
        <div>
            <h2>Current Weather</h2>
            <p>Temprature:{weather.main.temp}</p>
            <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ): (
        <p>Loading</p>
      )
        
      }
     </div>
  )
}
