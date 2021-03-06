import React from 'react';
import '../../scss/main.css'
import SkeletonWeather from '../Skeleton/SkeletonWeather'
import SkeletonSun from '../Skeleton/SkeletonSun'

const TiempoTarjeta = ({ tiempoDatos, datosDelSol }) => {

    let weather = ['Clear', 'Mist', 'Clouds', 'Rain', 'Snow']
    let clima = ['Despejado', 'Niebla', 'Nubes', 'Lluvia', 'Nieve']

    return ( 
        <div className="card">
        <div className="card__español">
            <div className="card__inner">
            {!tiempoDatos ?
            <SkeletonWeather />
            :
            <>    
                <h3>El tiempo para {tiempoDatos.name}</h3>
                <h4>El tiempo actual: {clima[weather.indexOf(tiempoDatos.weather[0].main)]}</h4>
                <h4>La temperatura: {(tiempoDatos.main.temp).toFixed(0)}℃</h4>
                <h5>Siente como: {(tiempoDatos.main.feels_like).toFixed(0)}℃</h5>
                <h4>La humedad: {tiempoDatos.main.humidity}%</h4>
                <h4>El viento: 
                    {tiempoDatos.wind.speed}km/h
                    {/* {tiempoDatos.wind.deg} */}
                </h4>
                {!datosDelSol ?
                <SkeletonSun />
                :
                <>
                <h4>El amanecer: {datosDelSol.results.sunrise} UTC</h4>
                <h4>El atardecer: {datosDelSol.results.sunset} UTC</h4>
                </>
            }
            </>
                }
            </div>
        </div>

        </div>
     );
}
 
export default TiempoTarjeta;