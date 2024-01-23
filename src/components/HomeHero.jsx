import React from "react";
import Navbar from "./Navbar";
import { Bot, Mic, Video, Monitor, Smile, MessageCircle, Settings } from "lucide-react";
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
import avatar6 from '../assets/avatar6.png'
import { motion } from 'framer-motion';


const HomeHero = () => {
  const avatarSize = "200px"; // Specify the dimensions you want
  const ringSize = "50px"

  const avatarStyle = {
    width: "60px", // Adjust the size of the avatars
    height: "60px",
    borderRadius: "50%",
    border: "4px solid #ddd",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <Navbar />
      <div className="flex mt-[80px]">
        <div className="flex flex-row items-center ml-[100px] mt-12 mr-[100px] justify-between w-full">
          <div className="flex flex-col items">
            <motion.div
              initial={{x: -1000}}
              animate={{x: 0}}
              transition={{delay: 0.1, duration: 1.0}}
            >
            <p className="text-[50px] font-bold leading-tight">Uniting the world,</p>
            <p className="text-[50px] font-bold leading-tight">one video call at a time</p>
            </motion.div>
            <motion.div 
            initial={{x: -1000}}
            animate={{x: 0}}
            transition={{delay: 0.3, duration: 1.0}}
            className="mt-8">
                <p className="text-[20px] text-gray-400 leading-relaxed">Experience the future of communication with ClearLink -</p>
                <p className="text-[20px] text-gray-400 leading-relaxed">where crystal-clear video conferencing meets</p>
                <p className="text-[20px] text-gray-400 leading-relaxed">unparalleled simplicity</p>
            </motion.div>
            <motion.div 
            initial={{opacity: 0.5, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.5, duration: 1.0}}
            className="mt-8 flex flex-row space-x-4">
                <button className="text-white bg-blue-500 font-bold border border-white px-4 py-2 rounded-full hover:bg-blue-300 transition">Start your free trial</button>
                <div className="flex flex-row items-center text-blue-500 space-x-2">
                <Bot/>
                <p>Discover AI assistant</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{ delay: 0.1, duration: 1.0}}
            className="flex flex-row items mt-4">
                <div style={{ position: "relative", width: ringSize, height: "50px" }} className="mt-[50px] pl-[190px]">
                    <img
                    src={avatar1}
                    alt="Avatar 1"
                    style={{ ...avatarStyle, zIndex: 1, marginLeft: "-160px" }}
                    />
                    <img
                    src={avatar2}
                    alt="Avatar 2"
                    style={{ ...avatarStyle, zIndex: 2, marginLeft: "-120px" }}
                    />
                    <img
                    src={avatar3}
                    alt="Avatar 3"
                    style={{ ...avatarStyle, zIndex: 3, marginLeft: "-80px" }}
                    />
                    <img
                    src={avatar4}
                    alt="Avatar 4"
                    style={{ ...avatarStyle, zIndex: 4, marginLeft: "-40px" }}
                    />
                    <img
                    src={avatar5}
                    alt="Avatar 5"
                    style={{ ...avatarStyle, zIndex: 5 }}
                    />
                </div>
                <div className="flex flex-col items-start ml-[50px] mt-[25px]">
                    <div>
                    <span style={{ color: 'gold' }}>&#9733;</span>
                    <span style={{ color: 'gold' }}>&#9733;</span>
                    <span style={{ color: 'gold' }}>&#9733;</span>
                    <span style={{ color: 'gold' }}>&#9733;</span>
                    <span style={{ color: 'gold' }}>&#9733;</span>
                    <span style={{ color: 'black' }} className="font-bold"> 5.0</span>
                    </div>
                    <div>
                    <p className="text-md">from 3,000+ reviews</p>
                    </div>
                </div>
                </motion.div>

            
            

          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <motion.div 
          initial={{opacity: 0.2, scale: 0.4}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.1, duration: 1.0}}
          className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            {/* Avatar Images */}
            <img
              src={avatar1}
              alt={`Avatar 1`}
              style={{ width: avatarSize, height: avatarSize }}
              className="p-2 rounded-lg object-contain"
            />
            <img
              src={avatar2}
              alt={`Avatar 2`}
              style={{ width: avatarSize, height: avatarSize }}
              className="p-2 rounded-md object-contain"
            />
            <img
              src={avatar3}
              alt={`Avatar 3`}
              style={{ width: avatarSize, height: avatarSize }}
              className="p-2 rounded-md object-contain"
            />
            <img
              src={avatar4}
              alt={`Avatar 4`}
              style={{ width: avatarSize, height: avatarSize }}
              className="p-2 rounded-md object-contain"
            />
            <img
              src={avatar5}
              alt={`Avatar 5`}
              style={{ width: avatarSize, height: avatarSize }}
              className="p-2 rounded-md object-contain"
            />
            <img
              src={avatar6}
              alt={`Avatar 6`}
              style={{ width: avatarSize, height: avatarSize }}
              className="p-2 rounded-md object-contain"
            />
          </div>
          <div className="flex mt-4 space-x-9">
            {/* Icons with circular border */}
            <div className="rounded-full overflow-hidden border border-gray-200 p-2">
              <Mic color="#87CEEB" height="1.5em" width="1.5em" />
            </div>
            <div className="rounded-full overflow-hidden border border-gray-200 p-2">
              <Video color="#87CEEB" height="1.5em" width="1.5em" />
            </div>
            <div className="rounded-full overflow-hidden border border-gray-200 p-2">
              <Monitor color="#87CEEB" height="1.5em" width="1.5em" />
            </div>
            <div className="rounded-full overflow-hidden border border-gray-200 p-2">
              <Smile color="#87CEEB" height="1.5em" width="1.5em" />
            </div>
            <div className="rounded-full overflow-hidden border border-gray-200 p-2">
              <MessageCircle color="#87CEEB" height="1.5em" width="1.5em" />
            </div>
            <div className="rounded-full overflow-hidden border border-gray-200 p-2">
              <Settings color="#87CEEB" height="1.5em" width="1.5em" />
            </div>
          </div>
        </motion.div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
