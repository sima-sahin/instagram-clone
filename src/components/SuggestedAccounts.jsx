import profileIcon from "../assets/images/action-bar/profile-icon.png";

const SuggestedAccounts = () => {

  return (

    <div className="flex flex-col w-[351px] mt-10 space-y-3">

      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex">
          <img src={profileIcon} alt="your-profile" className="w-[56px] h-[56px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <p className="text-[14px] font-[600] text-[#262626]">upvox_</p>
            <p className="text-[14px] font-[400] text-[#8E8E8E]">Upvox</p>
          </div>
        </div>
        <div className="flex text-[11px] font-[600] text-[#0095F6] cursor-pointer">Switch</div>
      </div>

      <div className="text-[11px] font-[600] text-[#262626] flex items-center justify-between my-2 px-1">
        <p className="text-[#8E8E8E] text-[14px]">Suggestions for you</p>
        <p className="cursor-pointer ">See all</p>
      </div>

      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex">
          <img src="https://picsum.photos/200/300" alt="your-profile" className="w-[32px] h-[32px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <p className="text-[14px] font-[600] text-[#262626]">imkir</p>
            <p className="text-[14px] font-[400] text-[#8E8E8E]">Follows you</p>
          </div>
        </div>
        <div className="flex text-[12px] font-[600] text-[#0095F6] cursor-pointer">Follow</div>
      </div>

      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex">
          <img src="https://picsum.photos/200/300" alt="your-profile" className="w-[32px] h-[32px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <p className="text-[14px] font-[600] text-[#262626]">abh952</p>
            <p className="text-[14px] font-[400] text-[#8E8E8E]">Follows you</p>
          </div>
        </div>
        <div className="flex text-[12px] font-[600] text-[#0095F6] cursor-pointer">Follow</div>
      </div>

      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex">
          <img src="https://picsum.photos/200/300" alt="your-profile" className="w-[32px] h-[32px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <p className="text-[14px] font-[600] text-[#262626]">melisagundogdu</p>
            <p className="text-[14px] font-[400] text-[#8E8E8E]">Follows you</p>
          </div>
        </div>
        <div className="flex text-[12px] font-[600] text-[#0095F6] cursor-pointer">Follow</div>
      </div>

      <div className="flex flex-row items-center justify-between p-2">
        <div className="flex">
          <img src="https://picsum.photos/200/300" alt="your-profile" className="w-[32px] h-[32px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <p className="text-[14px] font-[600] text-[#262626]">ayse_muhammed</p>
            <p className="text-[14px] font-[400] text-[#8E8E8E]">Follows you</p>
          </div>
        </div>
        <div className="flex text-[12px] font-[600] text-[#0095F6] cursor-pointer">Follow</div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col mt-[25px]">
      <div className="flex flex space-x-2 text-[10px] text-[#C7C7C7]">
        <span className="cursor-pointer hover:underline hover:text-gray-200">About</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Help</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Press</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">API</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Jobs</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Privacy</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Terms</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Locations</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Language</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Meta Verified</span>
      </div>
      <div className="text-[11px] text-[#C7C7C7]">© 2023 Instagram from Meta</div>

      </div>

    </div>
  )
}

export default SuggestedAccounts;
