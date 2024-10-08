import {
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp,
    getDoc,
    getDocs,
} from "firebase/firestore";
import { db } from "./../firebase";
export const GetUserByEmail = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        localStorage.setItem("LoginUser", JSON.stringify(data));
        console.log("LoginUser:", docSnap.data());
    } else {
        console.log("No such document!");
    }
};
export const GetMessageListById = async (messageId, setMessage) => {
    const docRef = doc(db, "messages", messageId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        setMessage(data);
        console.log("GetMessageListById:", messageId, data);
    } else {
        console.log("No such document!");
    }
};
export const GetTotalUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const arrayData = [];
    querySnapshot.forEach((doc) => {
        arrayData.push(doc.data());
    });
    localStorage.setItem("totalUsers", JSON.stringify(arrayData));
};
