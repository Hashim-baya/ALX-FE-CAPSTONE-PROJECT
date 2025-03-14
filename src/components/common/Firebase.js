// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOD07jfsjDqY1LytJoCOwEOrylytkfauo",
  authDomain: "movie-app-78223.firebaseapp.com",
  projectId: "movie-app-78223",
  storageBucket: "movie-app-78223.firebasestorage.app",
  messagingSenderId: "318447090348",
  appId: "1:318447090348:web:6e9887f36642f00877fd09",
  measurementId: "G-DGRJX5WRLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;