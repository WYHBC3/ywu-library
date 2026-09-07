import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBojuq5xCDlAGpAgcSJh8DKhIU4T9vwcIY",
  authDomain: "fit5032-7470b.firebaseapp.com",
  projectId: "fit5032-7470b",
  storageBucket: "fit5032-7470b.firebasestorage.app",
  messagingSenderId: "532628694443",
  appId: "1:532628694443:web:8ac56a1b36b98a6fce1eee"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
