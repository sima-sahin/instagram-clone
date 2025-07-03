import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase";

export const usePosts = () => {
   const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error("Error reading posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return posts;
};

export default usePosts;
