import React, { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";



export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

const yellow = "rgba(242,244,164,1)"
const yellow2 = "rgba(242,244,164,2)"
const darkYellow = "rgba(236,239,63,1)"
const orange = "rgba(227,174,62,1)"
const darkOrange ="#ec893d"
const red ="rgba(230,63,63,1)"



  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const background = useTransform(scrollYProgress, [0.1, 0.15, 0.2, 0.25, 0.3, 0.35], [yellow, yellow2, darkYellow, orange, darkOrange, red]);

  return (
    <AnimatePresence>
 <div ref={ref} className="w-full h-screen overflow-hidden relative flex justify-center ">
      <motion.h1 className="text-5xl md:text-7xl lg:text-9xl relatve pt-[40%] lg:pt-[5%] tracking-tighter z-10 font-bold"
        style={{ y: textY, color: background}}
        transition={{
        }}>WILDCAMP
        </motion.h1>
      <motion.div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/image-bg.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}></motion.div>
      <div className="absolute inset-0 z-20" style={{ backgroundImage: `url(/image-parallax.png)`, backgroundPosition: "bottom", backgroundSize: "cover" }}></div>
    </div>
    </AnimatePresence>
  )
}
