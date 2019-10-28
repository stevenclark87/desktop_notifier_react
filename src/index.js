import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Spread screens as containers. Three overall screens. Would be home,signup, update preferences.
//Screen can be chosen based on looking at whether we have a current token
    //If no current token display home js
    //If notify button is clicked display sign up js
    //If current display preferences js