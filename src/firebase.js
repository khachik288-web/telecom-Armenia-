// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8t__QX-NuZvETfb-huGoNRotTvnwUxtE",
  authDomain: "team-telecom-arm-79182.firebaseapp.com",
  databaseURL: "https://team-telecom-arm-79182-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "team-telecom-arm-79182",
  storageBucket: "team-telecom-arm-79182.firebasestorage.app",
  messagingSenderId: "1044560509869",
  appId: "1:1044560509869:web:8ebfabc340a1a1a3c23f24",
  measurementId: "G-FY7RTLQJCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);