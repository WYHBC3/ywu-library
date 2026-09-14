import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(firebaseApp);
export default db
