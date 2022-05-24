// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4DKb0XzBI11awtHEDI-PdBpR3-4-7yck",
  authDomain: "final-project-all.firebaseapp.com",
  projectId: "final-project-all",
  storageBucket: "final-project-all.appspot.com",
  messagingSenderId: "1014978861500",
  appId: "1:1014978861500:web:abd1da16106f122c0273b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;