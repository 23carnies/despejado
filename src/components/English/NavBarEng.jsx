import React from 'react';
// import { Link } from 'react-router-dom'
import '../../scss/main.css'

const NavBarEng = (props) => {
    return ( 
        <nav className="nav">
            <button
                value="español"
                onClick={props.handleChangeLanguage}
                className="nav__btn"
            >
                <img src="https://bit.ly/33FGksQ" alt="Español|Spanish" className="nav__btn--flag"/>
                <p>español</p>
            </button>
        </nav>
     );
}
 
export default NavBarEng;