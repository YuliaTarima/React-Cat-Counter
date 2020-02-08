import React from 'react';
import Logo from './Logo';
import Nav from './Nav';


function Header() {

  return (
    <div className="container p-3 my-3 border">
      <header>
        <Nav />   
      </header>
    </div>
  );
}

export default Header;
