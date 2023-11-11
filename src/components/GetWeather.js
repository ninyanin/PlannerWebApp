import React, { useEffect, useState } from 'react'
import env from './env';
import { WeatherWrapper } from './WeatherWrapper';



export const GetWeather = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        

        await fetch(`${env.base}weather?lat=${lat}&lon=${long}&units=metric&APPID=${env.key}`)
        .then(res => res.json())
        .then(result => {
            setData(result)
            console.log(result);
        });
        }
        fetchData();
    }, [lat,long])
  
    return (
      <div className="GetWeather">
          <h1> Weather </h1>
          {(typeof data.main != 'undefined') ? (
              <WeatherWrapper weatherData={data}/>
          ) : (
            <div></div>
          )}
  
      </div>
    );
}
