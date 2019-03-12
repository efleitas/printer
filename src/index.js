import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Routes} from 'react-router-dom';
import firebase from 'firebase';
import AppRoutes from './routes.js'
import './index.css';
import * as serviceWorker from './serviceWorker';


// Initialize Firebase
firebase.initializeApp( {
    apiKey: "AIzaSyDTs2LgMJ2-EKPyBbJw9D9k2SSCXOMTX6I",
    authDomain: "printer-1992.firebaseapp.com",
    databaseURL: "https://printer-1992.firebaseio.com",
    projectId: "printer-1992",
    storageBucket: "printer-1992.appspot.com",
    messagingSenderId: "598355957253"
  }
 );

ReactDOM.render(<Routes><AppRoutes /></Routes>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
