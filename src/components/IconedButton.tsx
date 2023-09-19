"use client";

import React, { useState, useEffect } from 'react'
import { IconedButtonProps } from '@/props';
import { motion, Variants } from 'framer-motion';

const buttonVariants: Variants = {
  hover: {
    
  },
  tap: {
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20
    }
  }
}

const IconedButton = ({ iconClass, title, width, height }:IconedButtonProps) => {
  // hover:bg-superstar
  // hover:bg-burn-orange
  // hover:bg-bright-red
  // hover:bg-bright-blue
  // hover:bg-roses
  // hover:bg-true-purple
  // dark:hover:bg-superstar
  // dark:hover:bg-burn-orange
  // dark:hover:bg-bright-red
  // dark:hover:bg-bright-blue
  // dark:hover:bg-roses
  // dark:hover:bg-true-purple
  const [mainColor, setMainColor] = useState<string | null>("")

  useEffect(() => {
    const currentMainColor = localStorage.getItem('main-color')

    setMainColor(currentMainColor)
  }, [])

  return (
    <motion.button
      variants={buttonVariants}
      whileHover={"hover"}
      whileTap={"tap"}
      className={`flex justify-center items-center border-2 rounded-lg border-black-dark dark:border-white-light bg-white-light dark:bg-black-dark transition-colors duration-200 ease-in-out hover:bg-${mainColor} dark:hover:bg-${mainColor} shadow-[0px_4px_0px_0px_rgba(10,10,10)] dark:shadow-[0px_4px_0px_0px_rgba(249,249,249)] w-${width} h-${height} font-medium gap-2`}
      onClick={() => {}}
    >
      <span 
        className={`text-black-dark dark:text-white-light`}>
          <i className={iconClass}></i>
      </span>
      <span 
        className={`text-black-dark dark:text-white-light`}>
          {title}
      </span>
    </motion.button>
  )
}

export default IconedButton