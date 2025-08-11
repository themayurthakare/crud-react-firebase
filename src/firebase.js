// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6YEp5i4hq2WieVSQHJBLzF3Q9cRRss7w",
  authDomain: "blog-post-64f14.firebaseapp.com",
  projectId: "blog-post-64f14",
  storageBucket: "blog-post-64f14.firebasestorage.app",
  messagingSenderId: "843544263818",
  appId: "1:843544263818:web:4f0ce5aed037bec6310173",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
