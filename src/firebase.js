// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUt7p4TIzsfOqj9mbyB9sqiKoTuEGWBMU",
  authDomain: "dei-foe.firebaseapp.com",
  projectId: "dei-foe",
  storageBucket: "dei-foe.appspot.com",
  messagingSenderId: "674075642311",
  appId: "1:674075642311:web:eaba5fc15d9a79939731e2",
  measurementId: "G-HZ0QBFGSV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;