import { HiOutlineDotsHorizontal } from "react-icons/hi";
import lewishamiltonPost from "../assets/images/postComp/lewis-hamilton-post.png";
import lewishamiltonIcon from "../assets/images/postComp/lewis-hamilton-icon.png";
import save from "../assets/images/postComp/save-icon.png";
import share from "../assets/images/postComp/share-icon.png";
import like from "../assets/images/postComp/like-icon.png";
import commentIcon from "../assets/images/postComp/comment-icon.png";
import { useNavigate } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { useState } from "react";
import usePosts from "../firebase/getDoc";

const Post = ({ post }) => {

  const posts = usePosts();
  console.log(posts.map((value)=> value));

  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  return (
    
    <div className="w-[470px] h-[829px] mx-auto my-6 pb-2 border-b-gray-50/50">

      <div className="flex items-center justify-between">
        <div className="flex items-center pb-3">
            <img
            src={lewishamiltonIcon}
            alt="icon"
            className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex items-center">
            <p className="font-semibold cursor-pointer" onClick={() => navigate("lewishamilton")}>lewishamilton</p>
            <LuDot  className="text-[#8E8E8E] ml-1"/>
            <p className="text-sm text-[#8E8E8E] ml-1">5h</p>
            </div>
        </div>

        <div className="flex items-center justify-end">
            <HiOutlineDotsHorizontal className="text-xl"/>
        </div>
      </div>

      <div className="w-full">
        <img src={lewishamiltonPost} alt="Post" className="w-full object-cover" />
      </div>

      <div className="p-3">

        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <img src={like} alt="like" className="text-2xl cursor-pointer" />
                <img src={commentIcon} alt="comment" className="text-2xl cursor-pointer"/>
                <img src={share} alt="comment" className="text-2xl cursor-pointer"/>
            </div>

            <div className="flex">
                <img src={save} alt="comment" className="text-2xl cursor-pointer"/>
            </div>

        </div>

       <div className="text-[#262626] text-[14px]">
            <p className="mt-3 mb-1 font-semibold text-[13px]">55 likes</p>
            <p className=""><span className="font-semibold mr-1">lewishamilton</span>Parabéns Ayrton, minha inspiração sempre</p>
          
            <p className="text-[#8E8E8E] text-[13px] cursor-pointer mt-1">
            View all 12 comments
            </p>
           
            <input
            type="text"
            placeholder="Add a comment..."
            className="w-full border-none outline-none focus:ring-0 mt-2 text-[#262626]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
       </div>

      </div>
    </div>
  )
}

export default Post;
