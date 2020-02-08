import React from 'react';
import Logo from './Logo';
import NavHamburgerButton from './NavHamburgerButton';
import NavItem from './NavItem';
import NavItemDropdown from './NavItemDropdown';

function Nav() {

  return (
 
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Logo /><NavHamburgerButton />
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <NavItem /><NavItem /><NavItem /><NavItemDropdown />
          </ul>
        </div>
    </nav>

  );
}

export default Nav;
