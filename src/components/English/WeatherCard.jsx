import React from 'react'
import '../../scss/main.css'

const WeatherCard = ({ weatherData }) => {



    return ( 
        <div className="card">
        <div className="card__english">
            <div className="card__inner">
                <h3>Weather for {weatherData.name}</h3>
                <h4>Current Weather: {weatherData.weather[0].main}</h4>
                <h4>Current Temperature: {weatherData.main.temp}℉</h4>
                <h5>Feels like: {weatherData.main.feels_like}℉</h5>
                <h4>Humidity: {weatherData.main.humidity}</h4>
                <h4>Wind: 
                    {weatherData.wind.speed}mph--
                    {weatherData.wind.deg}
                    </h4>
                <h4>Sunrise: {weatherData.sys.sunrise.toLocaleString('en-US')}</h4>
                <h4>Sunset: {weatherData.sys.sunset.toLocaleString('en-US')}</h4>
            </div>
        </div>
        </div>
     );
}
 
export default WeatherCard;


// degToDir = (num) => {
//     let angle = Math.floor((num / 22.5) + 0.5);
//     const dir = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
//     return dir[(angle % 16)];
// }

{/* <h4>Wind: {weatherData.wind.speed}{degToCompass({weatherData.wind.deg})}</h4> */}
