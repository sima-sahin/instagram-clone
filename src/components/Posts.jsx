import Post from "./Post";
import { usePostsListener } from "../firebase/firebase.js"

const Posts = () => {

  const posts = usePostsListener();
  console.log(posts);

  return (
    <>
      {posts.map((value) => {
        return (
            <Post key={value.id} post={value} />
        )
      })}
    </>
  )
}

export default Posts;
