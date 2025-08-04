// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD12jVNpyQO8PPegqM6_LrJ22AJa03Dw_Y",
  authDomain: "prepwise-9f508.firebaseapp.com",
  projectId: "prepwise-9f508",
  storageBucket: "prepwise-9f508.firebasestorage.app",
  messagingSenderId: "223591087396",
  appId: "1:223591087396:web:b0afb15e5fea067d4747b1",
  measurementId: "G-HEDZH0W29H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
