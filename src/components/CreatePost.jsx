import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createPost } from "../redux/slices/postSlice";
import postUploadIcon from "../assets/images/action-bar/post-upload-icon.png";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

const CreatePostModal = () => {

//   const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");

  const { loading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const ref = collection(db, "posts");

  const docRef = {
    imageUrl: file,
    caption: caption,
    comments: [],
    likes: [],

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && user) {
        // dispatch(createPost({ file, user }));
        setFile(null);
        addDoc(ref, docRef);
      }
  };
  console.log(user);

  return (
    <>
        <h2 className="text-[16px] font-[600] leading-[24px] text-center pb-[10px] border-b border-gray-50">Create new post</h2>
       
       <div className="mt-[62.5px]">
        <img src={postUploadIcon} alt="upload-icon" className="flex mx-auto mb-[11px]"/>
        <p className="flex justify-center text-[20px] font-[400] leading-[25px] mb-[22px]">Drag photos and videos here</p>
       </div>

        <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="flex mx-auto bg-[#0095F6] text-white text-[14px] font-[600] leading-[18px] rounded-[8px] px-3 py-[15px] cursor-pointer"
        />

        <input 
        type="text" 
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter a caption..."
        className="flex mx-auto w-[295px] outline text-[14px] font-[600] leading-[18px] rounded-[8px] px-3 py-[15px] mt-2"
        />

        <button
        className="flex mx-auto mt-4 cursor-pointer hover:outline rounded-[10px] p-2"
        onClick={(e) => handleSubmit(e)}
        disabled={loading}
        >
        {loading ? "Uploading..." : "Upload Post"}
        </button>
    </>
  );
};

export default CreatePostModal;
