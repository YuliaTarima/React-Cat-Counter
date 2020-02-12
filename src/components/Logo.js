import React from 'react';
import logo from '../logo.jpg';

function Logo() {

  return (
    <a className="navbar-brand" href="logo">
        <img src={logo}  className="App-logo img-fluid" alt="logo" />
    </a>
  );
}

export default Logo;
