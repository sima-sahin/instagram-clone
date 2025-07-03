import React, { useState } from 'react';
import { useUsersListener } from "../firebase/firebase.js"
import StoryDetails from './StoryDetails.jsx';

const Stories = () => {

  const users = useUsersListener();
  console.log(users);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleStoryClick = (index) => {
    setActiveIndex(index);  // Tıklanan story'nin indexini setliyoruz
    setIsOpen(true);  // Detayları açıyoruz
  };


  const storiesArray = [
    {
        username: "itsdougthepug",
        profilePic: "https://picsum.photos/id/12/400/500",
        storyPic: ["https://picsum.photos/id/30/400/500", "https://picsum.photos/id/33/400/500"],
        createdAt: "2"
    },
    {
        username: "openaidalle",
        profilePic: "https://picsum.photos/id/11/200/300",
        storyPic: ["https://picsum.photos/id/40/400/500", "https://picsum.photos/id/50/400/500", "https://picsum.photos/id/60/400/500"],
        createdAt: "6"
    },
    {
        username: "lewishamilton",
        profilePic: "https://picsum.photos/id/13/200/300",
        storyPic: ["https://picsum.photos/id/24/400/500", "https://picsum.photos/id/22/400/500"],
        createdAt: "8"
    },
    {
        username: "upvox_",
        profilePic: "https://picsum.photos/id/14/200/300",
        storyPic: ["https://picsum.photos/id/32/400/500","https://picsum.photos/id/33/400/500"],
        createdAt: "20"
    },
    {
        username: "defavours",
        profilePic: "https://picsum.photos/id/15/200/300",
        storyPic: ["https://picsum.photos/id/35/400/500", "https://picsum.photos/id/36/400/500", "https://picsum.photos/id/37/400/500"],
        createdAt: "1"
    },
    {
        username: "sugar_mommy",
        profilePic: "https://picsum.photos/id/16/200/300",
        storyPic: ["https://picsum.photos/id/43/400/500", "https://picsum.photos/id/44/400/500", "https://picsum.photos/id/45/400/500"],
        createdAt: "3"
    },
    {
        username: "wahab.xyz",
        profilePic: "https://picsum.photos/id/17/200/300",
        storyPic: ["https://picsum.photos/id/51/400/500","https://picsum.photos/id/52/400/500"],
        createdAt: "2"
    },
    {
        username: "mkbhd",
        profilePic: "https://picsum.photos/id/18/200/300",
        storyPic: ["https://picsum.photos/id/66/400/500","https://picsum.photos/id/64/400/500"],
        createdAt: "7"
    }
];

  return (
    <div className='relative flex items-center space-x-5 py-2'>

      {storiesArray.map((story, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
        >
          <img
            src={story.profilePic}
            alt={story.username}
            className="w-[56px] h-[56px] rounded-full cursor-pointer"
            onClick={() => handleStoryClick(index)}
          />
          <p className="text-[12px] font-[400] mt-2 cursor-pointer">{story.username}</p>
        </div>
      ))}

      <StoryDetails
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        storiesArray={storiesArray}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />


    </div>
  )
}

export default Stories;
