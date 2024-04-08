import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADLG5FTnK8oZFBV8PcOsPS6vskl9CRWqk",
    authDomain: "chat-b1814.firebaseapp.com",
    projectId: "chat-b1814",
    storageBucket: "chat-b1814.appspot.com",
    messagingSenderId: "637630287665",
    appId: "1:637630287665:web:d918ad77cc6762ed47ea10",
    measurementId: "G-JX686VMKDX",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
