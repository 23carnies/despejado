import React from 'react'
import '../../scss/main.css'

const WeatherCard = ({ weatherData, sunData }) => {


    return ( 
        <div className="card">
        <div className="card__english">
            <div className="card__inner">
                <h3>Weather for {weatherData.name}</h3>
                <h4>Current Weather: {weatherData.weather[0].main}</h4>
                <h4>Current Temperature: {weatherData.main.temp.toFixed(0)}℉</h4>
                <h5>Feels like: {weatherData.main.feels_like.toFixed(0)}℉</h5>
                <h4>Humidity: {weatherData.main.humidity}%</h4>
                <h4>Wind: 
                    {weatherData.wind.speed}mph
                    {/* {weatherData.wind.deg} */}
                    </h4>
                {!sunData ?
                <p>loading...</p>
                : 
                <>
                <h4>Sunrise: {sunData.results.sunrise} UTC</h4>
                <h4>Sunset: {sunData.results.sunset} UTC</h4>
                </>
                }
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
