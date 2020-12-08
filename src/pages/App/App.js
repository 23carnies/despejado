import React, { Component } from 'react';

import '../../scss/main.css';
import Clock from '../../components/English/Clock'
import Reloj from '../../components/Español/Reloj'
import WeatherQuery from '../../components/English/WeatherQuery';
import PreguntaDelTiempo from '../../components/Español/PreguntaDelTiempo';
import NavBarEng from '../../components/English/NavBarEng';
import NavBarEsp from '../../components/Español/NavBarEsp';

let userlanguage = (window.navigator.language === 'en-US' || window.navigator.language === 'en-GB') ? 'en-US' : 'es-MX';

class App extends Component {
  state = { 
    language: userlanguage
  }

  handleChangeLanguage = (language) => {
    this.setState({ language: language })
  }

  render() { 
    return (
      <>
      {this.state.language === 'en-US' ?
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