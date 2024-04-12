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
        const data = docSnap.data();
        localStorage.setItem("LoginUser", JSON.stringify(data));
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
};
