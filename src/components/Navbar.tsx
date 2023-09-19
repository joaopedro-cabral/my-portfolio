"use client"

import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { motion, Variants } from "framer-motion"
import { navbarLinks } from '@/constants';
import Switcher from './Switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navItemsVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 50 }
  },
  init: { opacity: 0, y: 25 },
  hover: { scale: 1.05, originX: 0 }
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobile, isMobile] = useState(false)
  const [colorAlt, setColor] = useState(false)
  
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  useEffect(() => {
    setMounted(true)

    window.addEventListener('scroll', changeColor)

    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        // mobile
        setNavbar(false)

        isMobile(true)
      } else {
        // web
        setNavbar(true)

        isMobile(false)
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  if (!mounted) {
      return null
  }
  
  return (
   <header className={`${colorAlt ? "dark:bg-black-dark bg-white-light" : "dark:bg-white-light bg-black-dark"}  sticky w-full top-0 z-40`}>
    <nav className='mx-auto sm:px-14 px-6'>
      <div className='grid grid-cols-2 md:flex md:items-center md:justify-between py-3'>
        <div className='md:hidden col-start-1'>
          <motion.button whileTap={{ scale: 0.80 }} onClick={() => setNavbar(!navbar)} className={"text-3xl"}>
            {navbar ? (
              <FontAwesomeIcon icon={faXmark} className={`${colorAlt ? "dark:text-white-light text-black-dark" : "dark:text-black-dark text-white-light"}`}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars} className={`${colorAlt ? "dark:text-white-light text-black-dark" : "dark:text-black-dark text-white-light"}`}></FontAwesomeIcon>
            )}
          </motion.button>
        </div>
        <motion.ul className={`md:h-auto md:flex md:items-center ${
                navbar ? 'col-start-1 row-start-2 col-span-2 gap-y-8' : 'hidden'
              }`} >
          {
            navbarLinks.map((link) => (
              <motion.li 
                variants={navItemsVariants}
                initial={"init"}
                animate={navbar ? "open" : "init"}
                whileHover={"hover"}
                onClick={() => {mobile ? setNavbar(false) : setNavbar(true)}}
                className='mt-8 md:mt-0 md:mr-10 text-xl'>
                  <span className={`${colorAlt ? "text-black-dark dark:text-white-light" : "text-white-light dark:text-black-dark"} mr-2`}>
                    <i className={link.icon}></i>
                  </span>
                  <Link 
                    to={link.link}  
                    spy={false} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                    className={`${colorAlt ? "text-black-dark dark:text-white-light" : "text-white-light dark:text-black-dark"} hover:text-gray-400 dark:hover:text-gray-500 duration-300`}>
                  {link.name}</Link>
              </motion.li>
            ))
          }
        </motion.ul>
        <div className='flex items-center justify-end'>
          <button>
            <Switcher></Switcher>
          </button>
        </div>
      </div>
    </nav>
    <div className='grid grid-cols-6 w-100'>
          <div 
            id={"theme-superstar"} 
            className='bg-superstar w-100 h-6 md:h-4 '></div>
          <div 
            id={"theme-burnOrange"} 
            className='bg-burn-orange w-100 h-6 md:h-4'></div>
          <div 
            id={"theme-brightRed"} 
            className='bg-bright-red w-100 h-6 md:h-4'></div>
          <div 
            id={"theme-brightBlue"} 
            className='bg-bright-blue w-100 h-6 md:h-4'></div>
          <div 
            id={"theme-roses"} 
            className='bg-roses w-100 h-6 md:h-4'></div>
          <div 
            id={"theme-truePurple"} 
            className='bg-true-purple w-100 h-6 md:h-4'></div>
        </div>
   </header>
  )
}

export default Navbar