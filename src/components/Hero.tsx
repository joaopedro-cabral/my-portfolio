"use client";

import React, { useState, useEffect } from 'react'
import MainLogo from './MainLogo'
import Reveal from './Reveal'
import { customColors } from '@/constants';

const Hero = () => {
  // text-superstar
  // text-burn-orange
  // text-bright-red
  // text-bright-blue
  // text-roses
  // text-true-purple
  const [mainColor, setMainColor] = useState("superstar")

  const selectRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * customColors.length);
    const randomColor = customColors[randomIndex];
    setMainColor(randomColor);

    localStorage.setItem('main-color', randomColor);
};

  useEffect(() => {
    selectRandomColor()
  }, [])

  return (
    <div className="p-10 md:p-14 md:flex md:flex-row justify-between h-screen bg-black-dark dark:bg-white-light">
      <div id='home-info' className='flex flex-col justify-start'>
        <Reveal reversed={true}>
          <h1 
            style={{fontStretch: "125%"}} 
            className='font-mona font-medium text-[70px] dark:text-black-dark text-white-light leading-none'>
              João Pedro Cabral/
          </h1>
        </Reveal>
        <div 
          className='flex'>
            <Reveal reversed={true}>
              <p 
              style={{fontStretch: "125%"}} 
              className='font-mona font-light md:text-[24px] dark:text-black-dark text-white-light text-[18px]'>
                full-stack developer <span style={{fontStretch: "125%"}} className={`text-${mainColor}`}>portfolio</span>
              </p>
            </Reveal>
        </div>
      </div>
      <div id='home-img' className='flex justify-end pt-5 md:pt-0'>
        <MainLogo
          color={mainColor}
        />
      </div>
    </div>
  )
}

export default Hero