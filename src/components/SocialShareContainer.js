import React from 'react';
import NavItem from './NavItem';
import SocialShareItem from './SocialShareItem';

function SocialShareContainer(props) {
// console.log(props);

  return (

     <div className="social-share-nav col-3">
        <ul className="navbar-nav">
          {props.socialShareLinks.map(el => <SocialShareItem key={el.text} socialShareItem={el}/>)}
        </ul>
      </div>

  );
}

export default SocialShareContainer;
