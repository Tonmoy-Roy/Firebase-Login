// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKB_KeLJxmqHNgdoBgJzxg52g7DAGK8Xc",
  authDomain: "email-pass-auth-6de0f.firebaseapp.com",
  projectId: "email-pass-auth-6de0f",
  storageBucket: "email-pass-auth-6de0f.firebasestorage.app",
  messagingSenderId: "518224553298",
  appId: "1:518224553298:web:5686dfd1ba22128ce4c68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;