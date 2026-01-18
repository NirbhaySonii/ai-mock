// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAcU6g1UrEsrF3TKBrSTg2bK2BSFWAQ-w",
    authDomain: "internprep-4580a.firebaseapp.com",
    projectId: "internprep-4580a",
    storageBucket: "internprep-4580a.firebasestorage.app",
    messagingSenderId: "650784242418",
    appId: "1:650784242418:web:db69246062ea241ded2e6b",
    measurementId: "G-FDM6NT837G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);