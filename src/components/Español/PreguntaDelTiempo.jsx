import React, { Component } from 'react';
import FormaDeBuscar from './FormaDeBuscar';
import TiempoTarjeta from './TiempoTarjeta';
import { porCiudadYPaís } from '../../services/api-calls';
import '../../scss/main.css';

class PreguntaDelTiempo extends Component {
    state = { 
        tiempoDatos: null
     }

    encargarTiempoDatos = async (formData) => {
        const tiempoDatos = await porCiudadYPaís(formData)
        // console.log(tiempoDatos)
        this.setState({tiempoDatos: tiempoDatos})
    }

    render() { 
        return ( 
            <>
            <FormaDeBuscar encargarTiempoDatos={this.encargarTiempoDatos} />
            {(this.state.tiempoDatos !== null) ?
                <TiempoTarjeta
                    tiempoDatos={this.state.tiempoDatos}
                />
            :
            <p>Bienvenidos, por favor ponga su ciudad y país.</p>
            }
            </>
         );
    }
}
 
export default PreguntaDelTiempo;