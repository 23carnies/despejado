import React, { Component } from 'react';
import '../../scss/main.css'


// const date = new Date().toLocaleString('es-MX')

class Reloj extends Component {
    state = { 
        time: new Date().toLocaleString('es-MX', {hour12: false})
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(), 1000
        );
    }

    // componentWillMount() {
    //     clearInterval(this.intervalID)
    // }

    updateClock() {
        this.setState({
            time: new Date().toLocaleString('es-MX', {hour12: false})
        });
    }

    render() { 
        return ( 
            <div className="time">
            <p>{this.state.time}</p>
            </div>
         );
    }
}
 
export default Reloj;

        // time: new Intl.DateTimeFormat('en-US').format(date)
