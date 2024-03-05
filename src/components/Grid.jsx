import { easeIn, motion } from 'framer-motion'
import grid1 from '../assets/grid/grid1.jpg'
import grid2 from '../assets/grid/grid2.jpg'
import grid3 from '../assets/grid/grid3.jpg'
import grid4 from '../assets/grid/grid4.jpg'
import grid5 from '../assets/grid/grid5.jpg'
import grid6 from '../assets/grid/grid6.jpg'
import grid7 from '../assets/grid/grid7.jpg'

export default function Grid() {
  return (
    <div className="w-screen min-h-screen flex justify-center pt-[5%]">
    <div className="w-full grid grid-cols-3 gap-2 px-[20%] ">
      <div className="overflow-hidden row-span-2">
        <motion.img src={grid2} alt="wildcamp"
          whileHover={{ scale: 1.5 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} />
      </div>
      <div className="overflow-hidden">
        <motion.img src={grid1} alt="wildcamp"
           initial={{scale:1.5}}
           whileHover={{ scale: 2 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} />
      </div>
      <div className="overflow-hidden">
        <motion.img src={grid7} alt="wildcamp"
          className="object-cover"
          initial={{scale:1.5}}
          whileHover={{ scale: 2 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} /> </div>
      <div className="overflow-hidden">
        <motion.img src={grid5} alt="wildcamp"
           initial={{scale:1.5}}
           whileHover={{ scale: 2 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} />
      </div>
      <div className="overflow-hidden">
        <motion.img src={grid6} alt="wildcamp"
           initial={{scale:1.5}}
           whileHover={{ scale: 2 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} />
      </div>
      <div className="overflow-hidden col-span-2">
        <motion.img src={grid4} alt="wildcamp"
          whileHover={{ scale: 1.5 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} />
      </div>
      <div className="overflow-hidden grid-cols-3">
        <motion.img src={grid3} alt="wildcamp"
        initial={{scale:1.5}}
          whileHover={{ scale: 2 }}
          transition={{
            type: "spring",
            duration: easeIn
          }} />
      </div>
    </div>
  </div>
  )
}
