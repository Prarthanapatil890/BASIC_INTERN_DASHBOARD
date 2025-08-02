// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXGp0vTCrOpk_30KsEddEsCx4RdgXVsyA",
  authDomain: "internportal-32d1f.firebaseapp.com",
  projectId: "internportal-32d1f",
  storageBucket: "internportal-32d1f.firebasestorage.app",
  messagingSenderId: "658493139451",
  appId: "1:658493139451:web:81e84869858f918637c35e",
  measurementId: "G-WJ2JQ4XL8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);