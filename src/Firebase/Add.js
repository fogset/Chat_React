import { db, auth } from "./../firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    arrayUnion,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    serverTimestamp,
    where,
    query,
    orderBy,
} from "firebase/firestore";
export const AddMessagebyEmail = async (messageList) => {
    const messageRef = await addDoc(collection(db, "messages"), {
        messageList: messageList,
    });
    console.log("Document written with ID: ", messageRef.id);
};
