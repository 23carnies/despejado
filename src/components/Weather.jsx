import React, { Component } from 'react';

class Weather extends Component {
    state = {  }

    componentDidMount() {
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city},${req.body.country}&appid=${process.env.WEATHER_API_KEY}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data))
    }

    render() { 
        return ( 
            <>
        {weatherData ?
        <div>
            <h3>Weather for {weatherData.name}</h3>
            <h4>Current Weather: {weatherData.weather.main}</h4>
            <h4>Current Temperature: {weatherData.main.temp}</h4>
            <h5>Feels like: {weatherData.main.feels_like}</h5>
            <h4>Humidity: {weatherData.main.humidity}</h4>
            <h4>Wind: {weatherData.wind.speed}</h4>
            <h4>Sunrise: {weatherData.sys.sunrise}</h4>
            <h4>Sunset: {weatherData.sys.sunset}</h4>
        </div>
            :
            <p>Loading...</p>
        }
        </>
         );
    }
}
 
export default Weather;