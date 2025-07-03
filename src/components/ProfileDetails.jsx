import { useUsersListener } from "../firebase/firebase.js";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { LuGrid3X3 } from "react-icons/lu";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";


const ProfileDetails = ({ username }) => {

    const users = useUsersListener();
    const filteredArray = users.filter((value) => value.username === username);

    const [activeTab, setActiveTab] = useState("posts");

  return (

    <div className="max-w-4xl mx-auto pt-[30px] font-[400] text-[15px]">

      {/* Profile Header */}
      <div className="flex items-center gap-6 w-[935px] h-[191px] pl-[62px]">
        <img
          src="https://picsum.photos/200/300"
          alt="Profile"
          className="w-[168px] h-[168px] rounded-full border-7 border-pink-500"
        />
        <div className="pl-[92px] w-[613px] h-[191px]">
          <div className="flex items-center space-x-[40px]">
            <div className="flex items-center gap-2 text-[20px]">
                upvox_ <FaCheckCircle className="text-blue-500" />
            </div>

            <div className="flex space-x-[8px]">
                <div className="w-[117.92px] h-[32px] bg-[#EFEFEF] rounded-[8px] flex items-center justify-center font-[600] text-black">Following <IoIosArrowDown /></div>
                <div className="w-[87.92px] h-[32px] bg-[#EFEFEF] rounded-[8px] flex items-center justify-center font-[600] text-black">Message</div>
                <div className="w-[34.92px] h-[32px] bg-[#EFEFEF] rounded-[8px] flex items-center justify-center font-[600] text-black"><IoPersonAddOutline /></div>
            </div>

            <div><BsThreeDots className="text-2xl"/></div>
          </div>

          <div className="text-[15px] flex items-center my-[28px] space-x-[40px]">
            <p><span className="font-[700] mr-1">1,861</span>posts</p>
            <p><span className="font-[700] mr-1">4M</span>followers</p>
            <p><span className="font-[700] mr-1">454</span>following</p>
          </div>

          <p className="font-[600]">Marques Brownlee</p>
          <p className="text-sm">I promise I won't overdo the filters.</p>
          <a href="https://mkbhd.com" className="text-[#00376B]">mkbhd.com</a>

          <p className="text-[#8E8E8E] text-[12px] mt-[15px]">Followed by <span className="font-[700] text-[#262626]">kurzgesagt</span></p>

        </div>
      </div>


      {/* Stories */}
      <div className="flex my-[44px] w-[935px] h-[130px] pl-[48px] space-x-[45px]">
        <div className="flex flex-col items-center">
          <div className="w-[77px] h-[77px] rounded-full border-2 border-gray-300 flex items-center justify-center">
            <img src="https://picsum.photos/200" alt="photo" className="rounded-full"/>
          </div>
          <p className="text-[11px] font-[600] mt-2">BTS</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[77px] h-[77px] rounded-full border-2 border-gray-300 flex items-center justify-center">
            <img src="https://picsum.photos/200" alt="photo" className="rounded-full"/>
          </div>
          <p className="text-[11px] font-[600] mt-2">Frisbee</p>
        </div>
      </div>


      {/* Tabs */}
      <div className="flex justify-around border-t border-gray-300 py-[18px] items-center justify-center space-x-[60px] text-[14px]">

        <div className="flex items-center justify-center space-x-1 cursor-pointer">
            <LuGrid3X3 className="text-md"/>
            <button className={`${activeTab === "posts" ? "font-[600]" : "text-[#8E8E8E]"}`} onClick={() => setActiveTab("posts")}> POSTS</button>
        </div>

        <div className="flex items-center justify-center space-x-1 cursor-pointer">
            <MdOutlineSlowMotionVideo className="text-md"/>
            <button className={`${activeTab === "reels" ? "font-[600]" : ""}`} onClick={() => setActiveTab("reels")}> REELS</button>
        </div>

        <div className="flex items-center justify-center space-x-1 cursor-pointer">
            <IoMdPhotos className="text-md"/>
            <button className={`${activeTab === "tagged" ? "font-[600]" : ""}`} onClick={() => setActiveTab("tagged")}> TAGGED</button>
        </div>
        
      </div>


      {/* Posts */}
      {activeTab === "posts" && (
        <div className="grid grid-cols-3 gap-[4px] mt-2">
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
          <img src="http://placebeard.it/640/480" alt="photo" className="w-[309px] h-[309px] object-cover"/>
        </div>
      )}
    </div>
  )
}

export default ProfileDetails;
