import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "./firebase.js";

const storage = getStorage();

export const uploadPostImage = async (file) => {
    if (!file) return;
    const storageRef = ref(storage, `posts/${auth.currentUser.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};
