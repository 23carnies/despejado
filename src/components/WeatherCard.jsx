import React from 'react'

const WeatherCard = ({ weatherData }) => {
    return ( 
        <>
        <div>
            <h3>Weather for {weatherData.name}</h3>
            <h4>Current Weather: {weatherData.weather.main}</h4>
            <h4>Current Temperature: {((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(0) + `°F`}</h4>
            <h5>Feels like: {((weatherData.main.feels_like - 273.15) * 9/5 + 32).toFixed(0) + `°F`}</h5>
            <h4>Humidity: {weatherData.main.humidity}</h4>
            <h4>Wind: {weatherData.wind.speed}</h4>
            <h4>Sunrise: {weatherData.sys.sunrise}</h4>
            <h4>Sunset: {weatherData.sys.sunset}</h4>
        </div>
        </>
     );
}
 
export default WeatherCard;