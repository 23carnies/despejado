import React, { Component } from 'react'
import SearchForm from './SearchForm'
import WeatherCard from './WeatherCard'
import { getByCityCountry } from '../services/api-call'

class WeatherQuery extends Component {
    state = { 
        weatherData: []
     }

    handleWeatherQuery = async (formData) => {
        const weatherData = await getByCityCountry(formData)
        console.log(weatherData)
        this.setState({weatherData: weatherData})
    }


    render() { 
        return ( 
            <>
            <SearchForm handleWeatherQuery={this.handleWeatherQuery} />
            
            </>
         );
    }
}
 
export default WeatherQuery;


