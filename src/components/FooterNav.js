import React from 'react';
import NavItem from './NavItem';

function FooterNav(props) {
// console.log(props);

  return (

    <div className="footer-nav col-3">
      <ul className="navbar-nav">
        {props.footerNavItems.map(el => <NavItem key={el.text} navItem={el}/>)}
      </ul>
    </div>

  );
}

export default FooterNav;
