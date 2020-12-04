import React, { Component } from 'react'

class SearchForm extends Component {
    state = { 
        formData: {
            city: '',
            country: '',
        }
     }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleWeatherQuery(this.state.formData)
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
                    placeholder="Enter City"
                    name="city"
                    value={this.state.formData.city}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Enter Country"
                    name="country"
                    value={this.state.formData.country}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}
 
export default SearchForm;