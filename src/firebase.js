// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRxiGfwFKQxgPP3gU0czsiSF1UoFLfssU",
  authDomain: "auth-32dad.firebaseapp.com",
  projectId: "auth-32dad",
  storageBucket: "auth-32dad.appspot.com",
  messagingSenderId: "6448575609",
  appId: "1:6448575609:web:24e88ab454eb676cf590a8",
  measurementId: "G-JXLGPHWBXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app