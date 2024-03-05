import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import products from '../products'

export default function Footer() {



  return (
    <div id="contact"
      className="bg-[#405c33] uppercase flex flex-col justify-center items-center lg:justify-between w-full min-h-[400px] font-thin">
      <div className="flex flex-col lg:flex-row w-full  lg:justify-evenly  items-center lg:items-start pt-5">
        <div className="flex flex-col justify-center lg:items-start gap-3 lg:gap-5">
          <div className="flex flex-col lg:flex-row gap-7 justify-center items-center lg:gap-10 ">
            <h1 className="text-xl lg:text-3xl font-thin ">Gdzie nas znajdziesz?</h1>
            <motion.div
              whileTap={{ scale: 0.6 }}
              whileHover={{ y: [0, -5, 0] }}
              transition={{ duration: .5 }}
              className=" rounded-xl  cursor-pointer">
              <p className="text-3xl"><FaGithub />
                <span className="hidden ml-5 "> <a
                  href="https://github.com/amelangad">amelangad</a></span></p>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.6 }}
              whileHover={{ y: [0, -5, 0] }}
              transition={{ duration: .5 }}
              className="cursor-pointer">
              <a
                href="mailto:slodzinska.magdalena@gmail.com"
                className="text-3xl">
                <FaEnvelope /></a></motion.div>
            <motion.div
              whileTap={{ scale: 0.6 }}
              whileHover={{ y: [0, -5, 0] }}
              transition={{ duration: .5 }}
              className=" cursor-pointer">
              <a
                href="tel:+48535828465"
                className="text-3xl">
                <FaPhoneAlt /></a></motion.div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-5 items-center lg:items-start py-10">
            <p>ul. Dzikiej przygody 15</p>
            <p >Telefon: 555 555 555</p>
            <p>Adres email: kontakt@wildcamp.pl</p>
          </div>
        </div>
<div className ="flex flex-col gap-7 justify-center items-center lg:gap-10 ">
          <h1 className="text-xl lg:text-3xl font-thin ">Nasz sklep</h1>
          <div className ="flex flex-col gap-2 lg:gap-5 items-center lg:items-start justify-center py-10">
   <Link to ="/shop"><div className ="flex justify-center my-10"><FaShoppingCart size={35}/> </div><div className="font-bold tracking-[2px]">Odwiedź nas i znajdź coś dla siebie </div></Link>
</div>
</div>
<div className ="flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-3xl font-thin  mb-20">Najnowsze namioty</h1>
<Link to="/shop"><div className ="w-[120px] h-[120px] flex justify-center items-center flex-row  gap-2">
  <img src={products[1].src} alt={products[1].name}/>
  <img src={products[6].src} alt={products[6].name}/>
  <img src={products[2].src} alt={products[2].name}/>
  </div></Link>
  </div>
      </div>
      <motion.div
        className="text-lg lg:text-xl font-thin cursor-pointer py-5"
        whileTap={{ scale: 0.6 }}
        whileHover={{ y: [0, -5, 0] }}
        transition={{ duration: .5 }}>
        &copy; Magda 2023</motion.div>
    </div>
  )
}
