import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza firebase 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpeISEDABIEdsqG1vmOmrXgsRmAjlpVG0",
  authDomain: "programacionweb-8bd9a.firebaseapp.com",
  projectId: "programacionweb-8bd9a",
  storageBucket: "programacionweb-8bd9a.appspot.com",
  messagingSenderId: "767100108756",
  appId: "1:767100108756:web:d986a02725bc3c3028e041"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina firebase

const app = createApp(App)

app.use(router);

app.mount('#app')
