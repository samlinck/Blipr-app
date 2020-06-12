import React from 'react'
import AppContainer from './navigation'
import firebase from 'firebase/app';

// Initialize firebase so we can authenticate and store data in the database
let config = {
  apiKey: 'AIzaSyDfladnfGYRlvgdOOY8IMjGWz7baLCSLdg',
    authDomain: 'blipr-83200.firebaseapp.com',
    databaseURL: 'https://blipr-83200.firebaseio.com',
    projectId: 'blipr-83200',
    storageBucket: 'blipr-83200.appspot.com',
    messagingSenderId: '385818329654',
    appId: '1:385818329654:web:96dc9260f8e628beba4e97',
    measurementId: 'G-94V7KCKRWP'
};
firebase.initializeApp(config);

export default function App() {
  // Startup the Navigation from /navigation/index.js which routes to the login page on startup
  return <AppContainer/> 
}