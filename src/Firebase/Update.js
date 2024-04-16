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
export const updateMessagebyId = async (newMessage, messageId) => {
    const messageRef = doc(db, "messages", messageId);
    await updateDoc(messageRef, {
        messageList: arrayUnion(newMessage),
    });
    console.log("updateMessagebyId ID: ", messageRef.id);
};
export const updateContactbyEmail = async (email, contact) => {
    const contactRef = doc(db, "users", email);
    await updateDoc(contactRef, {
        contact: arrayUnion(contact),
    });
    console.log("addContact firebase");
    console.log(contact);
};
