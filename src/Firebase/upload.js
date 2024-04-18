import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "./../firebase";
import moment from "moment";
export const uploadImage = async (file) => {
    const date = moment().format("LL");
    const storageRef = ref(storage, "profileImage/" + date + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
            }
        },
        (error) => {
            console.log("upload image error" + error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                localStorage.setItem("profileImgUrl", JSON.stringify(downloadURL));
            });
        }
    );
};
