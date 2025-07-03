import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyClDATqUPIIiSEblMJGPEOlKFM1D1j-GV0",
    authDomain: "instagram-clone-b0af3.firebaseapp.com",
    projectId: "instagram-clone-b0af3",
    storageBucket: "instagram-clone-b0af3.firebasestorage.app",
    messagingSenderId: "898549548621",
    appId: "1:898549548621:web:cc534f7b5dc9f4b08a3e04",
    measurementId: "G-9SZD4EFPYZ"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// POSTS LISTENER
const postsRef = collection(db, "posts");


export const usePostsListener = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(postsRef, (snapshot) => {
      console.log(snapshot.docs);
      setPosts(
        snapshot.docs.map((value) => {
          return { id: value.uid, ...value.data(), timestamp: value.data().timestamp.toDate()}
        })
      );
    });
    return () => unsubscribe();
  }, []);
  return posts;
}


// USERS LISTENER
const usersRef = collection(db, "users");


export const useUsersListener = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      console.log(snapshot.docs);
      setUsers(snapshot.docs.map((value) => ({ id: value.uid, ...value.data() })));
    });
    return () => unsubscribe();
  }, []);
  return users;
}

export default app;