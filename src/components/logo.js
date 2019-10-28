import React from 'react';
import logo from './thryv-main-logo-white.png';
import './logo.css'

function Logo() {
    return (
      <div className='thryv-logo-container'>
          <img src={logo} className='thryv-logo-img' alt='logo' />
      </div>
    );
  }
  
  export default Logo;