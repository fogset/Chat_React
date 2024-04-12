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

export const createUserAsync = async (user) => {
    try {
        const user = {
            username: user.username,
            email: user.email,
            desc: "Hello from my country 😀",
            profile: "",
            createdAt: serverTimestamp(),
        };
        return await setDoc(doc(db, "users", user.uid), user);
    } catch (error) {
        console.log(error);
    }
};
export const updateUserProfile = async (username, description, email) => {
    const profileRef = doc(db, "users", email);
    await updateDoc(profileRef, {
        username: username,
        description: description,
    });
};
