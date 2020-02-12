import React from 'react';

function NavItem(props) {
// console.log(props);
  
  return (
 
    <li className="nav-item">
      <a className="nav-link" href={props.navItem.link}>{props.navItem.text}</a>
    </li>

  );
}

export default NavItem;
