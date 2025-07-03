import ActionBar from "../components/ActionBar";
import Post from "../components/Post";
import SuggestedAccounts from "../components/SuggestedAccounts";
import Stories from "../components/Stories";


const Home = () => {
    
  return (
    <div className="flex h-screen">

      <div className="w-[244px] mr-[45px]">
        <ActionBar />
      </div>
      
      <div className="w-[630px] mr-[48px] flex flex-col space-y-4 mt-[40px]">
        <Stories />
        <Post />
      </div>

      <div className="w-[351px] mr-[30px]">
        <SuggestedAccounts />
      </div>
     

    </div>
  )
}

export default Home;
