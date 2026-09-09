import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3GhPLKOh3aZ2DN8rDUYRazXkvuZ8LRd4",
  authDomain: "new-team-telecom-67513.firebaseapp.com",
  databaseURL: "https://new-team-telecom-67513-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "new-team-telecom-67513",
  storageBucket: "new-team-telecom-67513.firebasestorage.app",
  messagingSenderId: "653071595875",
  appId: "1:653071595875:web:0436c1c653bd1e72dd7b56",
  measurementId: "G-SQLFRNW2HV"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();