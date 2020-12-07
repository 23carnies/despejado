import React from 'react';
import { Link } from 'react-router-dom'
import '../../scss/main.css'

const NavBarEng = (props) => {
    return ( 
        <nav className="nav">
            <button
                value="español"
                onClick={props.handleChangeLanguage}
            >
                <img src="https://bit.ly/33FGksQ" alt="Español|Spanish" />
                español
            </button>
        </nav>
     );
}
 
export default NavBarEng;