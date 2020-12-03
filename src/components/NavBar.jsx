import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../scss/main.css'

class NavBar extends Component {
    state = {
        language: 'english'
    }

    handleLanguageClick = (e, { active }) => this.setState({ language: active })

    render() { 
        const { language } = this.state

        return ( 
            <nav className="nav">
            {(language !== 'english') ? 
            <div className="nav__box">
            <Link 
                to="/eng"
                active={language === 'english'}
                onClick={this.handleLanguageClick}
                >
                <img src="images/union-jack.jpg" alt="UK Flag|Bandera del Reino Unido" className="flag"/>
                 english </Link>
            </div>
            :
            <div className="nav__box">
            <Link 
                to="/es"
                active={language === 'español'}
                onClick={this.handleLanguageClick}
                >
                <img src="images/Spain.png" alt="Spanish Flag|Bandera del españa" className="flag"/>
                 español </Link>
            </div>
            }
        </nav>
         );
    }
}
 
export default NavBar;