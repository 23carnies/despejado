import React from 'react';

const TiempoTarjeta = ({ weatherData }) => {
    return ( 
        <>
        <div>
            <h3>El tiempo para {weatherData.name}</h3>
            <h4>El tiempo actual: {weatherData.weather.main}</h4>
            <h4>La temperatura: {weatherData.main.temp}</h4>
            <h5>Siente como: {weatherData.main.feels_like}</h5>
            <h4>La humedad: {weatherData.main.humidity}</h4>
            <h4>El viento: {weatherData.wind.speed}</h4>
            <h4>El amanecer: {weatherData.sys.sunrise}</h4>
            <h4>El atardecer: {weatherData.sys.sunset}</h4>
        </div>

        </>
     );
}
 
export default TiempoTarjeta;