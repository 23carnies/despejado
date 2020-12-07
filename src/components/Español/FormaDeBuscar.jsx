import React, { Component } from 'react'
import '../../scss/main.css'

class FormaDeBuscar extends Component {
    state = { 
        formData: {
            ciudad: '',
            país: '',
        }
     }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.encargarTiempoDatos(this.state.formData)
    }

    handleChange = (e) => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        }
        this.setState({
            formData,
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Poner Ciudad"
                    name="ciudad"
                    value={this.state.formData.ciudad}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Poner País"
                    name="país"
                    value={this.state.formData.país}
                    onChange={this.handleChange}
                />
                <button type="submit">Buscar</button>
            </form>
        );
    }
}
 
export default FormaDeBuscar;