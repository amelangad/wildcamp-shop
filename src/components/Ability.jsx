import React, {useRef} from 'react'
import { useInView} from 'framer-motion'

export default function Ability(props) {
    const refView = useRef(null)
    const isInView = useInView(refView, { once: true })
 

  return (
    <div
    className ="border-b p-[10px] w-full lg:w-1/2">
    <div
    className ="w-full left-0 top-0 "
    ref ={refView}
    style={{
      transform: isInView ? "none" : "translateX(500px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      transitionDelay: props.delay,
    }}
>{props.name}
        </div>
  
      </div>
  )
}
