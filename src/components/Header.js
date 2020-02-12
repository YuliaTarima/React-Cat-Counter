import React from 'react';
import HeaderNav from './HeaderNav';

function Header(props) {

  return (
    <div className="container p-3 my-3 border">
      <header>
        <HeaderNav navItems={props.navItems} />
      </header>
    </div>
  );
}

export default Header;
