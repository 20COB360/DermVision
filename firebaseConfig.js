import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQBdXRdUCn_l_WAVyRZyhS1DStcmoubtY",
  authDomain: "dermvision-632dd.firebaseapp.com",
  projectId: "dermvision-632dd",
  storageBucket: "dermvision-632dd.appspot.com",
  messagingSenderId: "463612888385",
  appId: "1:463612888385:web:e738f155bb86587f2d0dc0",
  measurementId: "G-WQBS4LJYFR",
};

export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_db = getDatabase(firebase_app);
export const firebase_storage = getStorage(firebase_app);