// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHG7vvXvh3cJt6GVqPGpf5hDPA86DsDY0",
  authDomain: "react-crud-firebase-58b71.firebaseapp.com",
  projectId: "react-crud-firebase-58b71",
  storageBucket: "react-crud-firebase-58b71.firebasestorage.app",
  messagingSenderId: "677675630470",
  appId: "1:677675630470:web:c05a20865c919f61183607",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;


