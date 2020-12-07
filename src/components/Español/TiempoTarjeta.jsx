import React from 'react';
import '../../scss/main.css'

const TiempoTarjeta = ({ tiempoDatos }) => {


    return ( 
        <>
        <div className="card--español">
            <div className="card__inner">
                <h3>El tiempo para {tiempoDatos.name}</h3>
                <h4>El tiempo actual: {tiempoDatos.weather[0].main}</h4>
                <h4>La temperatura: {(tiempoDatos.main.temp).toFixed(0)}℃</h4>
                <h5>Siente como: {(tiempoDatos.main.feels_like).toFixed(0)}℃</h5>
                <h4>La humedad: {tiempoDatos.main.humidity}%</h4>
                <h4>El viento: 
                    {tiempoDatos.wind.speed}km/h--
                    {tiempoDatos.wind.deg}
                </h4>
                <h4>El amanecer: {tiempoDatos.sys.sunrise}</h4>
                <h4>El atardecer: {tiempoDatos.sys.sunset}</h4>
            </div>
        </div>

        </>
     );
}
 
export default TiempoTarjeta;