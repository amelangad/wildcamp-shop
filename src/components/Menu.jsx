import React, { useState } from 'react'
import { FaCampground } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 3,
          duration: 3,
          delay: 1.5
        }}
        className="top-0 lg:top-[3%] right-[50%] translate-x-1/2 lg:right-[5%] z-[60] m-5 cursor-pointer fixed font-thin"
        onClick={() => setIsOpen(!isOpen)} >  <FaCampground size={75} />
      </motion.div>
      <AnimatePresence>
        {isOpen &&
          <motion.div className="fixed right-0  bg-[#405c33] lg:bg-[#405c334d] w-full h-screen lg:w-1/4 lg:h-screen z-50 font-thin "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              stiffness: 500,
              duration: .5,
            }}>
            <ul className="w-full h-full  bg-transparent flex flex-col gap-[10%] justify-center items-center z-110 font-thin">
              <Link to="/offert"><motion.li
                className="text-white font-thin text-5xl z-[120] cursor-pointer"
                onClick={closeMenu}
                initial={{ y: -400 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  duration: .5,
                }}
              > usługi</motion.li> </Link>
              <Link to="/gallery"><motion.li
                className="text-white  font-amatic text-5xl z-[120] cursor-pointer"
                onClick={closeMenu}
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  duration: .5,
                }}>galeria
              </motion.li>
              </Link>
              <Link to="/contact"><motion.li
                className="text-white  font-amatic text-5xl z-[120] cursor-pointer"
                onClick={closeMenu}
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: .5,
                  stiffness: 500,
                }}>kontakt</motion.li></Link>
                   <hr  className ="w-3/4 bg-gray" />
                       <Link to="/"><motion.li
                className="text-white  font-amatic text-5xl z-[120] cursor-pointer"
                onClick={closeMenu}
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  duration: .5,
                  stiffness: 500,
                }}>HOME</motion.li></Link>
            </ul>
          </motion.div>
          
        }
      </AnimatePresence>
    </>
  )
}
