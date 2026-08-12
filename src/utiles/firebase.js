// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9l3udBquOD_ILn1mcfjuLD_uriBVq9Zw",
  authDomain: "netflix-gpt-1e96e.firebaseapp.com",
  projectId: "netflix-gpt-1e96e",
  storageBucket: "netflix-gpt-1e96e.firebasestorage.app",
  messagingSenderId: "572527916131",
  appId: "1:572527916131:web:863519aabafea9c09cf456",
  measurementId: "G-CGQZVEGB90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);