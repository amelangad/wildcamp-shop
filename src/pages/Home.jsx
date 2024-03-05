import React from 'react'
import Cards from '../components/Cards'
import Parallax from '../components/Parallax';
import Menu from '../components/Menu';
import Footer from '../components/Footer'
import {motion} from 'framer-motion';



export default function Home() {
  return (
    <motion.div className ="opacity-1 transition-opacity"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      damping: 3,
      stiffness: 3,
      duration: 3,
      delay: .2
    }}>
      <Menu />
      <Parallax />
      <Cards />
      <Footer />
    </motion.div>
  )
}
