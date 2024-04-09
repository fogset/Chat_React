import {
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { db } from "./../firebase";

export const GetUserByEmail = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().email);
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
};
