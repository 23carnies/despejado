import React, { Component } from 'react';

import '../../scss/dist/main.css';
import NavBar from '../../components/NavBar'
import Clock from '../../components/Clock'


class App extends Component {
  state = {  }
  render() { 
    return (
      <>
      <NavBar />
      <main className="main">
        <h1>Despejado</h1>
        <Clock />
      </main>
      </>
    );
  }
}
 
export default App;
