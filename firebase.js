// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb1YxlVJ5_iqBbZ8OOoyma_qM3iiDk6NA",
  authDomain: "nwitter-6800f.firebaseapp.com",
  projectId: "nwitter-6800f",
  storageBucket: "nwitter-6800f.appspot.com",
  messagingSenderId: "446818752201",
  appId: "1:446818752201:web:da74d561e5edc72b81df18",
  measurementId: "G-Y8ZQCXGVVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);