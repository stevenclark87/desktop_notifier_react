import React from 'react';
import Logo from '../../components/logo';
import {Link} from 'react-router-dom';
import ctaImg from './group-7@3x.png';
import Notifybtn from '../../components/notifybtn';
import './homeheader.css';

function Header() {
  return (
    <div className='logo-header-container'>
    <div className='logo-container'>
    <div className='logo'><Logo /></div>
    <div className="change-preferences"><Link exact to="/preferences">Already signed up? <br />Change your preferences.</Link></div>
    </div>
    <header className='header-container'>
        <div className='header-cta-container'>
         <div className='header-cta'>
            <h1>Thryv Desktop Notifications</h1>
            <p>Get desktop notifications for Thryv when you're busy working on other things.</p>
            <Notifybtn />
        </div>
    </div>
    <div className='header-img'><img className='ctaimg' src={ctaImg} /></div>
</header>
    </div>
  );
}

export default Header;