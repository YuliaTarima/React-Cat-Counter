import React from 'react';

function NavItemDropdown(props) {
  
  return (
 
    <li className="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href={props.navItem.link} id="navbardrop" data-toggle="dropdown">
        {props.NavItem.text}
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href={props.navItem.link}>{props.NavItem.text}</a>
        <a className="dropdown-item" href={props.navItem.link}>{props.NavItem.text}</a>
        <a className="dropdown-item" href={props.navItem.link}>{props.NavItem.text}</a>
      </div>
    </li>
  );
}

export default NavItemDropdown;
