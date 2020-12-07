import React, { Component } from 'react';

import '../../scss/main.css';
// import NavBar from '../../components/NavBar'
import Clock from '../../components/English/Clock'
import Reloj from '../../components/Español/Reloj'
import WeatherQuery from '../../components/English/WeatherQuery';
import PreguntaDelTiempo from '../../components/Español/PreguntaDelTiempo';
import NavBarEng from '../../components/English/NavBarEng';
import NavBarEsp from '../../components/Español/NavBarEsp';

// const languages = ['english', 'español'];

class App extends Component {
  state = { 
    // langIdx: 0
    language: 'english'
  }

  handleChangeLanguage = (e) => {
    this.setState({ language: e.target.value })
  }

  render() { 
    return (
      <>
      {this.state.language === 'english' ?
      <>
        <NavBarEng 
          language={this.state.language}
          handleChangeLanguage={this.handleChangeLanguage}
        />
        <section className="main">
          <h1>Despejado: Clear</h1>
          <Clock />
          <WeatherQuery />
        </section>
      </>
      :
      <>
        <NavBarEsp 
          language={this.state.language}
          handleChangeLanguage={this.handleChangeLanguage}
        />
        <section className="principal">
          <h1>Despejado</h1>
          <Reloj />
          <PreguntaDelTiempo />
        </section>
      </>
      }

      </>
    );
  }
}
 
export default App;

{/* <NavBar />
<main className="main">
  <h1>Despejado</h1>
  <Clock />
  <WeatherQuery />
  <PreguntaDelTiempo />
</main> */}