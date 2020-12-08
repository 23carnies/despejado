import React, { Component } from 'react'
import SearchForm from './SearchForm'
import WeatherCard from './WeatherCard'
import { getByCityCountry } from '../../services/api-calls'
import '../../scss/main.css'

class WeatherQuery extends Component {
    state = { 
        weatherData: null
     }

    handleWeatherQuery = async (formData) => {
        const weatherData = await getByCityCountry(formData)
        // console.log(weatherData)
        this.setState({weatherData: weatherData})
    }


    render() { 
        return ( 
            <section className="form">
            <SearchForm handleWeatherQuery={this.handleWeatherQuery} />
            {(this.state.weatherData !== null) ?
            // <p>weather data here</p>
            <WeatherCard 
                weatherData={this.state.weatherData}
            />
            // : (this.state.weatherData.message === 'city not found') ?
            // <p>Sorry, could not find that city. Make sure you are 
            //     entering city name and two letter country code.</p>
            :
            <p>Welcome, please enter your City and Country.</p>
            }
            </section>
        );
    }
}
 
export default WeatherQuery;


