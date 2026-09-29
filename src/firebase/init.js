import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGDp0feQOvBa5XP4OyNPatfD8DJ1wvI-w',
  authDomain: 'fit5032-lab9-bcfb9.firebaseapp.com',
  projectId: 'fit5032-lab9-bcfb9',
  storageBucket: 'fit5032-lab9-bcfb9.firebasestorage.app',
  messagingSenderId: '424901976645',
  appId: '1:424901976645:web:92a71bf0a5454f71d6792c',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(firebaseApp)
export default db
