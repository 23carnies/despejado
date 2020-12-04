import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../scss/main.css'

class NavBar extends Component {
    state = {
        // language: 'english'
    }

    handleChangeLanguage = (e, { active }) => this.setState({ language: active })

    render() { 
        const { language } = this.state

        return ( 
            <nav className="nav">
            {(language !== 'english') ? 
            <div className="nav__box">
            <Link 
                to="/eng"
                active={language === 'english'}
                onClick={this.handleChangeLanguage}
                >
                <img src="https://bit.ly/3g1ym2k" alt="English|Inglés" data-language="en"/>
                 english </Link>
            </div>
            :
            <div className="nav__box">
            <Link 
                to="/es"
                active={language === 'español'}
                onClick={this.handleChangeLanguage}
                >
                <img src="https://bit.ly/33FGksQ" alt="Español|Spanish" data-language="es"/>
                 español </Link>
            </div>
            }
        </nav>
         );
    }
}
 
export default NavBar;