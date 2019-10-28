import React from 'react';
import './callouts.css';
import callout1Image from './003-gear.svg';
import callout2Image from './001-mail.svg';
import callout3Image from './002-multi-task_icon.svg';

function Callouts() {
  return (
    <div className='callout-component-container'>
        <div className='callout-container-heading'>
        <h2>How It Works</h2>
        </div>
    <div className='callout-container'>
    <div className='callout'>
        <img src={callout1Image} />
        <div><h3>Set Up In Seconds</h3></div>
        <div>Some text will go here at another time</div>
    </div>
    <div className='callout'>
            <img src={callout2Image} />
            <div><h3>Stay Notified</h3></div>
            <div>Some text will go here at another time</div>
    </div>
    <div className='callout'>
            <img src={callout3Image} />
            <div><h3>Multi-task Easier</h3></div>
            <div>Some text will go here at another time</div>

    </div>
    </div>
    </div>
  );
}

export default Callouts;