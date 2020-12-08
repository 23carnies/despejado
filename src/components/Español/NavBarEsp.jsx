import React from 'react';
// import { Link } from 'react-router-dom'
import '../../scss/main.css';

const NavBarEsp = (props) => {
    return ( 
        <nav className="nav">
            <button
                onClick={() => props.handleChangeLanguage('english')}
                className="nav__btn"
            >
                <img src="https://bit.ly/3g1ym2k" alt="English|Inglés" className="nav__btn--flag"/>
                <p>English</p>
            </button>
        </nav>
     );
}
 
export default NavBarEsp;