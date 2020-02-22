import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {

    return (
        <header>
            <div className="header-logo"><FontAwesomeIcon icon="paw"/></div>
             <div><h1>Count Cat Lives</h1></div>
        </header>
    );
}

export default Header;
