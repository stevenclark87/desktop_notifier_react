import React from 'react';
import Header from '../homeheader/homeheader';
import Callouts from '../callouts/callouts';
import Hpcta from '../hpcta/hpcta';
import '../App.css';

function Home() {
  return (
    <div className='app-container'>
    <Header />
    <Callouts />
    <Hpcta />
    </div>
  );
}

export default Home;