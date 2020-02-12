import React from 'react';
import Logo from './Logo';
import NavHamburgerButton from './NavHamburgerButton';
import NavItem from './NavItem';
//import NavItemDropdown from './NavItemDropdown';

function HeaderNav(props) {

// const a = [];
//   for (let i = 0; i < navItems.length; i++){
//     a.push(<MenuItem key={navItems[i].text} menuItem={navItems[i]} />);
//   }
//
//   console.log(a)


  return (

     <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Logo /><NavHamburgerButton />
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {props.navItems.map(el => <NavItem key={el.text} navItem={el}/>)}
          </ul>
        </div>
    </nav>

  );
}

export default HeaderNav;
