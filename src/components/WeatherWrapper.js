import React from 'react'

export const WeatherWrapper = ({weatherData}) => {
  return (
    <div className='WeatherWrapper'>
        
        <h2> Location: {weatherData.name}, {weatherData.sys.country} </h2>
        <h3>- - - - - - - - - - - - - - - - - - - - - -</h3>
        <h3> Temperature (C): {Math.round(weatherData.main.temp)} °C</h3>
        <h3> Temperature (F): {Math.round(weatherData.main.temp*1.8+32)} °F</h3>
        
        <h3> Humidity: {weatherData.main.humidity}</h3>
        <h3>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h3>
        <h3>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h3>


    </div>
  )
}
