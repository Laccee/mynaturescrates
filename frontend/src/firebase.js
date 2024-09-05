// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAExddAqCX-2NCfSELBmYhCJ15s-xTuUvo",
    authDomain: "naturescrates-earth.firebaseapp.com",
    projectId: "naturescrates-earth",
    storageBucket: "naturescrates-earth.appspot.com",
    messagingSenderId: "894673652531",
    appId: "1:894673652531:web:9aa4c39844042940504c46",
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
