import React from 'react';
import Logo from './Logo';
import Copyright from './Copyright';
import FooterNav from './FooterNav';
import SocialShareContainer from './SocialShareContainer';

function Footer(props) {
  
  return (
    <div className="p-3 my-3 bg-primary text-white border">
      <footer className="container d-inline-flex flex-row align-items-stretch">
        <div className="col-3">
        <Logo />
        </div>
        <FooterNav navItems={props.navItems} />
        <SocialShareContainer socialShareLinks={props.socialShareLinks} />
        <Copyright />
      </footer>
    </div>
  );
}

export default Footer;
