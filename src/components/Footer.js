import React from 'react';
// import {getCurrentYear} from '../helpers/Util.js';

function Footer() {
  
  return (
    <div className="container p-3 my-3 bg-primary text-white border">
      <footer>
        &copy; YuWebdesign {new Date().getFullYear()} - 2021
      </footer>
    </div>
  );
}

export default Footer;
