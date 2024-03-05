import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import kamper from '../assets/kamper.png'
import {Link} from 'react-router-dom';
import Button from './Button';

export default function Cards() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const showCards = useAnimation()

    useEffect(() => {
        if (isInView) {
            showCards.start("visible");
        }
    }, [isInView])

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center font-thin " >
            <div className ="w-full lg:w-1/2 flex flex-col  lg:flex-row justify-center items-center lg:mt-20 " >
            <motion.div ref={ref} className="w-full lg:w-1/2 flex justify-center h-auto z-30 xl bg-transparent relative"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: -150 }
                }}
                initial="hidden"
                animate={showCards}
                transition={{ duration: 1.2, delay: 0.25, stiffness: 50, type: "tween", damping: 10 }}
                whileHover={{ x: -50, rotate: -10 }}>
                <motion.img src={kamper} alt="kamper" className="max-w-[400px] max-h-[400px]" />
            </motion.div>
            <motion.div ref={ref} className="md:w-3/4 xl:w-1/2  p-20 lg:mb-[20%] min-h-[300px] shadow-2xl rounded-[30px] lg:rounded-t-full lg:rounded-br-full leading-loose overflow-hidden "
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: -75 }
                }}
                initial="hidden"
                animate={showCards}
                transition={{ duration: 1.2, delay: 0.25, stiffness: 50, type: "tween", damping: 10 }}
                whileHover={{ scale: .9 }}>
                    <motion.h1 
                    className ="font-bold text-xl overflow-hidden"
                    initial={{ y: -100 }}
                    animate={{ y: 0}}
                    transition={{
                      type: "spring",
                      damping: 3,
                      stiffness: 300,
                      duration: 3,
                      delay: 1
                    }}
                    >Witaj, poszukiwaczu przygód!</motion.h1>
                    <motion.p
                       initial={{ x: -600}}
                       animate={{ x:0 }}
                       transition={{
                         type: "spring",
                         damping: 3,
                         stiffness: 20,
                         duration: 3,
                         delay: 2
                       }}
                    >Czy myślaleś kiedyś o przeżyciu czegoś szalonego?</motion.p>
            </motion.div>
            </div>
        <Link to="offert">
            <Button text="Rozpocznij przygodę!"/></Link> 
        </div>

    )
}
