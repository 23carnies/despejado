import React, { Component } from 'react';
import FormaDeBuscar from './FormaDeBuscar';
import TiempoTarjeta from './TiempoTarjeta';
import { porCiudadYPaís, delSol } from '../../services/api-calls';
import '../../scss/main.css';

class PreguntaDelTiempo extends Component {
    state = { 
        tiempoDatos: null,
        datosDelSol: null
    }

    
    encargarTiempoDatos = async (formData) => {
        const tiempoDatos = await porCiudadYPaís(formData)
        let lat = tiempoDatos.coord.lat;
        let lon = tiempoDatos.coord.lon;
        this.encargarDelSol(lat,lon)
        this.setState({tiempoDatos: tiempoDatos})
    }

    encargarDelSol = async (lat, lon) => {
        const datosDelSol = await delSol(lat,lon)
        console.log(datosDelSol.results.surise)
        this.setState({datosDelSol:datosDelSol})
    }

    render() { 
        return ( 
            <section className="form">
            <FormaDeBuscar encargarTiempoDatos={this.encargarTiempoDatos} />
            {(this.state.tiempoDatos !== null) ?
                <TiempoTarjeta
                    tiempoDatos={this.state.tiempoDatos}
                    datosDelSol={this.state.datosDelSol}
                />
            :
            <p className="welcome">Bienvenidos, por favor ponga su ciudad y país.</p>
            }
            </section>
         );
    }
}
 
export default PreguntaDelTiempo;