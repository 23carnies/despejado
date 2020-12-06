import React from 'react';

const TiempoTarjeta = ({ tiempoDatos }) => {
    return ( 
        <>
        <div>
            <h3>El tiempo para {tiempoDatos.name}</h3>
            <h4>El tiempo actual: {tiempoDatos.weather.main}</h4>
            <h4>La temperatura: {(tiempoDatos.main.temp).toFixed(0)}℃</h4>
            <h5>Siente como: {(tiempoDatos.main.feels_like).toFixed(0)}℃</h5>
            <h4>La humedad: {tiempoDatos.main.humidity}%</h4>
            <h4>El viento: {tiempoDatos.wind.speed}</h4>
            <h4>El amanecer: {tiempoDatos.sys.sunrise}</h4>
            <h4>El atardecer: {tiempoDatos.sys.sunset}</h4>
        </div>

        </>
     );
}
 
export default TiempoTarjeta;