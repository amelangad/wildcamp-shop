import React from 'react'
import {motion} from 'framer-motion';
import { FaCampground } from "react-icons/fa";

export default function Loading() {

  return (
    <motion.div className="w-full h-screen bg-[#405c33] flex justify-center items-center"
    animate ={{opacity:0}}
    transition={{ type: "spring",
    duration: 4,
    delay:2}}>
   <motion.div
  animate={{ scale:2}}
  transition={{ type: "tween",
  duration: 1,
  delay: .5 }}>
           <div className ="text-2xl lg:text-5xl"> <FaCampground/></div></motion.div>
   <motion.div
   className ="text-7xl m-10"
   initial={{y: -2000}}
  animate={{ y:0}}
  transition={{ type: "tween",
  duration: 1,
  delay: .5}}>
           <div className="text-2xl lg:text-5xl">Wildcamp</div></motion.div>
    </motion.div>
  )
}