import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home/home';
import Signup from './signup/signup'
import Preferences from './preferences/preferences'
import './App.css';

function App() {
  return (
    <div className='app-container'>
        <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/preferences" component={Preferences} />
                    </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
