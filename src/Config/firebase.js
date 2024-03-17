import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKD1BQSc0JHlpVFw1nOT7JNYe1rXFPOKw",
  authDomain: "hayat-consultation-system.firebaseapp.com",
  projectId: "hayat-consultation-system",
  storageBucket: "hayat-consultation-system.appspot.com",
  messagingSenderId: "934372519508",
  appId: "1:934372519508:web:7570427b62e466a3fc07c1",
  measurementId: "G-HK34R8L21M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);