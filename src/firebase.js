import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvddvMoXHy8UQYYZpbovSsmEbKVfIr7ng",
  authDomain: "team-telecom-arm.firebaseapp.com",
  databaseURL: "https://team-telecom-arm-default-rtdb.firebaseio.com",
  projectId: "team-telecom-arm",
  storageBucket: "team-telecom-arm.firebasestorage.app",
  messagingSenderId: "114441898118",
  appId: "1:114441898118:web:2b7e2ed7da088dc8dbe907",
  measurementId: "G-0RKB66JLWB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();