import React, { Component } from 'react';
import '../scss/main.css'

class Clock extends Component {
    state = { 
        time: new Date().toLocaleString()
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(), 1000
        );
    }

    componentWillMount() {
        clearInterval(this.intervalID)
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleString()
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
 
export default Clock;