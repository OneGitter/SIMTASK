import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArrTKrNyo1eCekhFJTuCkzxjeGEwrBu-8",
  authDomain: "cart-b2278.firebaseapp.com",
  projectId: "cart-b2278",
  storageBucket: "cart-b2278.appspot.com",
  messagingSenderId: "155433246329",
  appId: "1:155433246329:web:3236b6c76ff945852c7ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
