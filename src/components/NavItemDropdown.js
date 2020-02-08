import React from 'react';

function NavItemDropdown() {
  

  return (
 
    <li className="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="navbardrop" data-toggle="dropdown">
        NavItemDropdown
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="javascript:void(0)">Link 1</a>
        <a className="dropdown-item" href="javascript:void(0)">Link 2</a>
        <a className="dropdown-item" href="javascript:void(0)">Link 3</a>
      </div>
    </li>
  );
}

export default NavItemDropdown;
