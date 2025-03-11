// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtNKhNM55FVwhwXy2z8iqiki6QgAThroM",
  authDomain: "netflix-gpt-8d09b.firebaseapp.com",
  projectId: "netflix-gpt-8d09b",
  storageBucket: "netflix-gpt-8d09b.firebasestorage.app",
  messagingSenderId: "47778599109",
  appId: "1:47778599109:web:4d7ffae07f67d255b020ac",
  measurementId: "G-4MWQWPD1HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
