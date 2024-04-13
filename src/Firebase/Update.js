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
export const updateUserProfile = async (username, description, email) => {
    const profileRef = doc(db, "users", email);
    await updateDoc(profileRef, {
        username: username,
        description: description,
    });
};
export const updateMessagebyId = async (messageList, messageId) => {
    const messageRef = doc(db, "messages", messageId);
    await updateDoc(messageRef, {
        messageList: messageList,
    });
    console.log("Document written with ID: ", messageRef.id);
};
