import React, { Component } from 'react';

import '../../scss/main.css';
import NavBar from '../../components/NavBar'
import Clock from '../../components/Clock'
import WeatherQuery from '../../components/WeatherQuery';


class App extends Component {
  state = {  }
  render() { 
    return (
      <>
      <NavBar />
      <main className="main">
        <h1>Despejado</h1>
        <Clock />
        <WeatherQuery />
      </main>
      </>
    );
  }
}
 
export default App;
