import React, { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import images from '../images2.js'



export default function SliderRev() {
   const [width, setWidth] = useState(0);
   const carousel = useRef();

   useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
   }, [])

   return (
      <motion.div className="flex justify-center items-center cursor-grab overflow-hidden h-full w-full z-100 ">
         <motion.div
            className="flex w-full min-h-[300px] mb-[100px]"
            animate={{ x: -width }}
            transition={{
               duration: 5,
               type: "spring",
               ease: "easeInOut",
               times: [0, 0.2, 0.5, 0.8, 1],
               repeat: Infinity,
               repeatDelay: 2,
               repeatType: "reverse",
            }}
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }} >
            {images.map((image) => {
               return (
                  <motion.a
                     href={image.href}
                     className=" min-w-[30rem] mx-[15px] h-[250px] cursor-pointer"
                     key={image}
                  >
                     <img
                        src={image.src}
                        alt="wildcamp"
                        className=" h-[300px] pointer-events-none py-0" />
                  </motion.a>


               )
            })}
         </motion.div>
      </motion.div>
   )
}
