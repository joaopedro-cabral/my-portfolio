"use client";

import React from 'react'

const Footer = () => {
  return (
    <footer 
      className='flex justify-center items-center bg-white dark:bg-black'>
      <div 
        className='px-14 py-4 flex justify-center items-center'>
        <div 
          className='flex justify-center items-start'>
          <p 
            className='text-base text-black-dark dark:text-white-light'>
              João Pedro Cabral 2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer