import 'bootstrap/dist/css/bootstrap.min.css'
import './firebase/init'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
