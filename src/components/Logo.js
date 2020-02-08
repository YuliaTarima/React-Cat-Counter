import React from 'react';
import logo from '../logo.jpg';

function Logo() {

  return (
    <a class="navbar-brand" href="javascript:void(0)">
        <img src={logo}  className="App-logo img-fluid" alt="logo" />
    </a>
  );
}

export default Logo;
