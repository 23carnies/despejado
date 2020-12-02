import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../scss/main.css'

class NavBar extends Component {
    state = { 
        english: true,
    }

    handleLanguageClick = (e) => this.setState(!this.english)

    render() { 
        return ( 
            <nav className="nav">
            {(!this.english) ? 
            <div className="nav__box">
            <Link 
                to="/eng"
                onClick={this.handleLanguageClick}
                >
                <img src="images/union-jack.jpg" alt="UK Flag|Bandera del Reino Unido" className="flag"/>
                 english </Link>
            </div>
            :
            <div className="nav__box">
            <Link 
                to="/es"
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