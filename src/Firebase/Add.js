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
export const CreateNewConversationbyEmail = async (email1, email2, setNewMessageId) => {
    const messageRef = await addDoc(collection(db, "messages"), {
        contact1: email1,
        contact2: email2,
        messageList: null,
    });
    setNewMessageId(messageRef.id);
    //console.log("Document written with ID: ", messageRef.id);
};
export const AddUserToFirebase = async (email, username) => {
    try {
        await setDoc(doc(db, "users", email), {
            contact: [],
            username: username,
            email: email,
            description: "Write a description😀",
            profile: "",
            createdAt: serverTimestamp(),
        });
        alert(email + " --  " + "added");
    } catch (error) {
        console.log(error);
    }
};
