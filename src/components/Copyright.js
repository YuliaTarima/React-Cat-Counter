import React from 'react';
// import {getCurrentYear} from '../helpers/Util.js';

function Copyright() {
  
  return (
    <div className="col-3">
        &copy;&nbsp; 
        <a
           className="App-link"
           href="YuWebdesign"
           target="_blank"
           rel="noopener noreferrer"
        >
          YuWebdesign&nbsp;
        </a>
        {new Date().getFullYear()} - 2021
    </div>
  );
}

export default Copyright;
