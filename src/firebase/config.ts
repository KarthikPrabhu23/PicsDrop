// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwvzLcgenNz5whDsWRH74TK7y8Oyn5q4w",
  authDomain: "picsdrop-b5f3a.firebaseapp.com",
  projectId: "picsdrop-b5f3a",
  storageBucket: "picsdrop-b5f3a.appspot.com",
  messagingSenderId: "611417969196",
  appId: "1:611417969196:web:39daa8870b6dd09e073789",
  measurementId: "G-99KD7VVSC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);
export {auth, storage};