import React from 'react';
import { Link } from 'react-router-dom'
import '../../scss/main.css';

const NavBarEsp = (props) => {
    return ( 
        <nav className="nav">
            <button
                value="english"
                onClick={props.handleChangeLanguage}
            >
                <img src="https://bit.ly/3g1ym2k" alt="English|Inglés" />
                 english
            </button>
        </nav>
     );
}
 
export default NavBarEsp;