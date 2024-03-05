import React from 'react'
import {motion}from "framer-motion"

const transition = (Component) => {
    return () => (
        <>
        <Component/>
        <motion.div
        className ="fixed top-0 left-0 w-full h-screen bg-[#405c33] origin-bottom z-[150]"
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration:1, ease: [0.22,1,0.36,1]}}
        >
        </motion.div>
        <motion.div
        className ="fixed top-0 left-0 w-full h-screen bg-[#405c33] origin-top z-[150]"
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration:1, ease: [0.22,1,0.36,1]}}
        >
        </motion.div>
        </>
    )
}

export default transition;