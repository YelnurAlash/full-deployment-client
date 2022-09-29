// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfA1g5hJtLr8XwobdG6vuFxd0VOh3CpbQ",
  authDomain: "react-webrtc-app.firebaseapp.com",
  projectId: "react-webrtc-app",
  storageBucket: "react-webrtc-app.appspot.com",
  messagingSenderId: "57468034930",
  appId: "1:57468034930:web:fd233aa5aea1c8a96387eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);