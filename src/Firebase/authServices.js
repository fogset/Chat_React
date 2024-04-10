import {
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp,
    getDoc,
} from "firebase/firestore";
import { db } from "./../firebase";

export const GetUserByEmail = async (email, setLoginUser) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        setLoginUser(data);
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
};
