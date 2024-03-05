import React from 'react'
import {motion} from "framer-motion"
import images from '../images.js'

export default function About() {
  
  return (
    <motion.div 
className ="w-full min-h-screen flex flex-col justify-center items-center flex-wrap">
{images.map(item =>  <motion.div 
whileHover={{ scale: 1.2 }}
className ="p-10"
layoutId={item.id} 
></motion.div>
  )}
  </motion.div>
)}
