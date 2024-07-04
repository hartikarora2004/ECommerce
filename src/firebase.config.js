import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjtT8udRSnahDlhVCCPTt6NHN_HLuZTn4",
  authDomain: "ecommerce-website-b8956.firebaseapp.com",
  projectId: "ecommerce-website-b8956",
  storageBucket: "ecommerce-website-b8956.appspot.com",
  messagingSenderId: "110026627581",
  appId: "1:110026627581:web:47d5744238f08144292194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
