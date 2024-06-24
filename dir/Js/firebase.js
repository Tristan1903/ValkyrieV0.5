// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtomuX7kFXXJVFLbHVLdZ2k45h5WF5IUk",
  authDomain: "valkyrie-thread.firebaseapp.com",
  projectId: "valkyrie-thread",
  storageBucket: "valkyrie-thread.appspot.com",
  messagingSenderId: "101437028912",
  appId: "1:101437028912:web:15275599dc42b56f08cbf5",
  measurementId: "G-M50TKJDP4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */