import ActionBar from "../components/ActionBar";
import Post from "../components/Post";
import SuggestedAccounts from "../components/SuggestedAccounts";
import Stories from "../components/Stories";
import ProfileDetails from "../components/ProfileDetails";
import { useParams } from "react-router-dom";
import FooterWhite from "../components/FooterWhite";


const Profile = () => {

  const { username } = useParams();

  return (
    
    <div className="flex flex-col h-screen">

    <div className="flex">
      <div className="w-[244px] mr-[65px]">
          <ActionBar />
        </div>
        
        <div className="w-[1105px] mr-[48px] flex flex-col space-y-4 mt-[40px]">
          <ProfileDetails username={ username }/>
        </div>
    </div>

    <div className="pl-55 mt-10">
      <FooterWhite />
    </div>
   

  </div>
  )
}

export default Profile;
