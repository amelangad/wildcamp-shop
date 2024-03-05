import React from 'react'
import transition from '../transition'
import Menu from '../components/Menu'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { FaShoppingCart } from "react-icons/fa";

function Offert() {
  return (
    <div className="w-screen h-auto z-60 flex flex-col  gap-[20%] justify-start items-center font-thin">
      <Menu />
      <ul id="offert" className="flex flex-col items-center justify-evenly gap-20 w-full min-h-screen py-[5%]">
        <motion.li
          className="uppercase text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 5,
            delay: 2,
            stiffness: 500,
          }}
        >1. Wybierz miejsce</motion.li>
        <motion.div className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 5,
            delay: 3,
            stiffness: 500,
          }}>
          <iframe title="kemping"
            className="rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1374595.700209671!2d19.10774404131549!3d50.56999917254311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smiejsca%20kempingowe%20na%20dziko!5e0!3m2!1spl!2spl!4v1707140980467!5m2!1spl!2spl" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
        <motion.li
          className="uppercase text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 5,
            delay: 4,
            stiffness: 500,
          }}
        >2. Kup namiot</motion.li>
        <motion.a
          className="font-thin text-xl h-min "
          href="https://www.decathlon.pl/sporty/turystyka-trekking/namioty-turystyczne-i-kempingowe"
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 5,
            delay: 5,
            stiffness: 500,
          }}><Link to="/shop">Wejdź do  naszego sklepu! <p className ="m-5 flex justify-center items-center"><FaShoppingCart size={25} /></p></Link></motion.a>
        <motion.li
          className="uppercase text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 5,
            delay: 8,
            stiffness: 500,
          }}
        >3.Żyj życiem marzeń!</motion.li>
<motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{
   type: "spring",
   duration: 5,
   delay: 9,
   stiffness: 500,
 }}>
        <Link to="/contact">
          <Button text="Zacznij żyć tak jak chcesz!" /></Link>
          </motion.div>
      </ul>

    </div>
  )
}

export default transition(Offert)