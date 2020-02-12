import React from 'react';
import Nav from './Nav';

function Header(props) {


  return (
    <div className="container p-3 my-3 border">
      <header>
        <Nav navItems={props.navItems} />
      </header>
    </div>
  );
}

export default Header;
