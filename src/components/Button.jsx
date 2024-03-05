import React from 'react'
import {motion} from 'framer-motion'

export default function Button(props) {
  return (
    <div className="flex justify-center items-center my-10">
            <motion.button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow py-4"
              whileTap={{ scale: 0.6 }}
              whileHover={{ y: [0, -5, 0] }}
              transition={{ duration: .5 }}>
                {props.text}
            </motion.button>
          </div>
  )
}
