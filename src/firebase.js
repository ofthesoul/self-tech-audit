import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web apps firebase config

const firebaseConfig = {
  apiKey: "AIzaSyDygVs5e1rQKIYp3pPnvKk-wl5LqXEYHEQ",
  authDomain: "self-tech-audit.firebaseapp.com",
  projectId: "self-tech-audit",
  storageBucket: "self-tech-audit.appspot.com",
  messagingSenderId: "47923007302",
  appId: "1:47923007302:web:e96f6458fed98853789f47",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
