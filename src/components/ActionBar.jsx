import home from "../assets/images/action-bar/home-icon.png";
import search from "../assets/images/action-bar/search-icon.png";
import explore from "../assets/images/action-bar/explore-icon.png";
import reels from "../assets/images/action-bar/reels-icon.png";
import messages from "../assets/images/action-bar/messages-icon.png";
import notifications from "../assets/images/action-bar/notifications-icon.png";
import create from "../assets/images/action-bar/create-icon.png";
import more from "../assets/images/action-bar/more-icon.png";
import profile from "../assets/images/action-bar/profile-icon.png";
import instagram from "../assets/images/action-bar/instagram.png";
import { NavLink } from "react-router-dom";
import CreatePostModal from "./CreatePost";


const ActionBar = () => {


  return (
    <div className="w-[244px] h-[616px] border-r-gray-50/60 border-b-gray-50/60 flex flex-col pl-[24px] pt-[30px] font-[500] text-[14px]">
      <div className="mb-[50px]">
        <img src={instagram} alt="instagram" className="w-[102px]"/>
      </div>

      <div className="flex items-center mb-[25px]">
        <img src={home} alt="home"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]" to="/home">Home</NavLink>
      </div>
      <div className="flex items-center mb-[25px]">
        <img src={search} alt="search"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">Search</NavLink>
      </div>
      <div className="flex items-center mb-[25px]">
        <img src={explore} alt="explore"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">Explore</NavLink>
      </div>
      <div className="flex items-center mb-[25px]">
        <img src={reels} alt="reels"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">Reels</NavLink>
      </div>
      <div className="flex items-center mb-[25px]">
        <img src={messages} alt="messages"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">Messages</NavLink>
      </div>
      <div className="flex items-center mb-[25px]">
        <img src={notifications} alt="notifications"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">Notifications</NavLink>
      </div>


      <div className="flex items-center mb-[25px]" onClick={()=>document.getElementById('upload-modal').showModal()}>
        <img src={create} alt="create"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">Create</NavLink>
      </div>

      {/* UPLOAD MODAL */}
      <dialog id="upload-modal" className="modal bg-opacity-50 z-50">
        <div className="modal-box w-[442px] h-[440px] rounded-[20px] bg-white pt-[12px]">
          <CreatePostModal />

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>


      <div className="flex items-center mb-[25px]">
        <img src={profile} alt="profile" className="rounded-full"/>
        <NavLink to="/upvox_" className="text-[15px] leading-[24px] pl-[16px]">Profile</NavLink>
      </div>
      <div className="flex items-center mb-[25px]">
        <img src={more} alt="more" className="rounded-full"/>
        <NavLink className="text-[15px] leading-[24px] pl-[16px]">More</NavLink>
      </div>


    </div>
  )
}

export default ActionBar;
