// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQBdXRdUCn_l_WAVyRZyhS1DStcmoubtY",
  authDomain: "dermvision-632dd.firebaseapp.com",
  projectId: "dermvision-632dd",
  storageBucket: "dermvision-632dd.appspot.com",
  messagingSenderId: "463612888385",
  appId: "1:463612888385:web:e738f155bb86587f2d0dc0",
  measurementId: "G-WQBS4LJYFR"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
const analytics = getAnalytics(app);