import React from 'react';

function socialShareItem(props) {
console.log(props);
  
  return (
 
    <li className="nav-item">
      <a className="nav-link" href={props.socialShareItem.link}>{props.socialShareItem.text}</a>
    </li>

  );
}

export default socialShareItem;
