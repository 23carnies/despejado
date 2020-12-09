import React, { Component } from 'react'
import SearchForm from './SearchForm'
import WeatherCard from './WeatherCard'
import { getByCityCountry, getSun } from '../../services/api-calls'
import '../../scss/main.css'

class WeatherQuery extends Component {
    state = { 
        weatherData: null,
        sunData: null
     }

    handleWeatherQuery = async (formData) => {
        const weatherData = await getByCityCountry(formData)
        let lat = weatherData.coord.lat;
        let lon = weatherData.coord.lon;
        this.handleGetSun(lat,lon)
        this.setState({weatherData: weatherData})
    }

    handleGetSun = async (lat, lon) => {
        const sunData = await getSun(lat, lon)
        console.log(sunData.results.sunrise)
        this.setState({sunData: sunData})
    }


    render() { 
        return ( 
            <section className="form">
            <SearchForm handleWeatherQuery={this.handleWeatherQuery} />
            {(this.state.weatherData !== null) ?
            <WeatherCard 
                weatherData={this.state.weatherData}
                sunData={this.state.sunData}
            />
            // : (this.state.weatherData.message === 'city not found') ?
            // <p>Sorry, could not find that city. Make sure you are 
            //     entering city name and two letter country code.</p>
            :
            <p className="welcome">Welcome, please enter your City and Country.</p>
            }
            </section>
        );
    }
}
 
export default WeatherQuery;


