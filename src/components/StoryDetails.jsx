import React, { useState, useEffect } from 'react';
import instagramLogo from "../assets/images/log-in/instagram-white-logo.png";
import arrowLeft from "../assets/images/story/arrow-left.png";
import arrowRight from "../assets/images/story/arrow-right.png";
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const StoryDetails = ({ isOpen, setIsOpen, storiesArray, activeIndex, setActiveIndex }) => {

    const handleClose = () => setIsOpen(false);

    const [isVolume, setIsVolume] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = useNavigate();

    const handlePrev = () => {
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
        }
      };
    
      const handleNext = () => {
        if (activeIndex < storiesArray.length - 1) {
          setActiveIndex(activeIndex + 1);
        }
      };

      useEffect(() => {
        const timer = setInterval(() => {
          if (currentImageIndex < storiesArray[activeIndex].storyPic.length - 1) {
            setCurrentImageIndex(prevIndex => prevIndex + 1);
          } else {
            setActiveIndex(prevIndex => (prevIndex + 1) % storiesArray.length);
            setCurrentImageIndex(0); // Yeni bir story'ye geçtiğinde, görsel indexini sıfırla
          }
        }, 10000);
        return () => clearInterval(timer);
     }, [currentImageIndex, activeIndex, storiesArray, setActiveIndex]);

  return (

    isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#1a1a1a] flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">

            <IoMdClose className='absolute top-6 right-6 text-white cursor-pointer text-2xl' onClick={handleClose}/>

            {/* Sol Ok */}
            <img src={arrowLeft} alt="arrow-left" 
            onClick={handlePrev}
            className="absolute left-5 w-[40px] opacity-90 hover:opacity-100 cursor-pointer z-60"/>

            <img src={instagramLogo} alt="insta-logo" className='absolute top-8 left-8'/>
  

            {/* Carousel Container */}
            <div className="flex ml-20 justify-center items-center space-x-[40px]">
              {storiesArray.map((story, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ease-in-out transform ${index === activeIndex ? 'w-[332px] h-[591px] z-10 scale-100' : 'scale-100 opacity-60 w-[135px] h-[236px]'}
                      flex items-center justify-center`}
                >
                  <img
                    src={story.storyPic[currentImageIndex]}
                    alt={story.username}
                    className={`object-cover w-full h-full ${index === activeIndex ? 'rounded-xs' : 'rounded-xl'}`}
                  />


                  {/* CURRENT STORY TOP PART*/}
                  {index === activeIndex ? <div className='absolute top-0 left-0 flex flex-col justify-between items-center bg-gradient-to-b from-black/90 to-transparent w-[332px] h-[100px]'>

                   <div className='absolute top-4 left-0 right-0'>

                    <div className="flex w-full justify-center items-center">
                        {/* Progress Bar - Her görsel için ayrı bir bar */}
                        <div className="absolute top-0 left-4 right-4 z-50 flex space-x-[5px]">
                          {storiesArray[activeIndex].storyPic.map((_, i) => (
                            <div key={i} className="w-full h-[2px] bg-white/30 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-white transition-all duration-300 ease-linear`}
                                style={{
                                  width:
                                    i < currentImageIndex
                                      ? "100%"
                                      : i === currentImageIndex
                                      ? `${((currentImageIndex + 1) / storiesArray[activeIndex].storyPic.length) * 100}%`
                                      : "0%",
                                }}
                              />
                            </div>
                          ))}
                        </div>

                      </div>

                      <div className='flex space-x-20 justify-between items-center mx-4 mt-4'>
                        <div className='flex justify-center items-center z-50'>
                            <img src={story.profilePic} alt="profilePic" className='w-[40px] h-[40px] rounded-full cursor-pointer border-3 border-white shadow-xl mr-1' onClick={() => navigate(`/${story.username}`)}/>
                            <p className='text-white font-[400] text-[14px] cursor-pointer' onClick={() => navigate(`/${story.username}`)}>{story.username}</p>
                            <p className='text-white font-[400] text-[14px] opacity-70 ml-1'>{story.createdAt}h</p>
                        </div>

                        <div className='space-x-4 flex text-white items-center z-50'>
                            <FaPlay className='cursor-pointer '/>
                            {isVolume ? <FaVolumeUp onClick={() => setIsVolume(!isVolume)} className='cursor-pointer text-lg'/> : <FaVolumeMute onClick={() => setIsVolume(!isVolume)} className='cursor-pointer text-lg'/>}
                            <BsThreeDots className='cursor-pointer text-2xl'/>
                        </div>
                      </div>
                   </div>

                    

                  </div> : 
                  <div className='absolute  '>
                      <div className='flex flex-col items-center z-50'>
                            <img src={story.profilePic} alt="profilePic" className='w-[60px] h-[60px] rounded-full cursor-pointer border-3 border-white shadow-xl mr-1' onClick={() => navigate(`/${story.username}`)}/>
                            <p className='text-white font-[400] text-[14px] cursor-pointer' onClick={() => navigate(`/${story.username}`)}>{story.username}</p>
                            <p className='text-white font-[400] text-[14px] opacity-70 ml-1'>{story.createdAt}h</p>
                        </div>
                  </div>
                  }

                </div>
              ))}
            </div>
  
            {/* Sağ Ok */}
            <img src={arrowRight} alt="arrow-right" 
            onClick={handleNext}
            className="absolute right-5 w-[40px] opacity-90 hover:opacity-100 cursor-pointer z-70"/>

          </div>
        </div>
    )
  )
}

export default StoryDetails
