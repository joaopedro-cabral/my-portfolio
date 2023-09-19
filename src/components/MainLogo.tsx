"use client";

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Reveal from './Reveal'
import { MainLogoProps } from '@/props';

const MainLogo = ({ color }:MainLogoProps) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 300, // valor padrão para dispositivos web
    height: 200,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        // mobile
        setImageDimensions({
          width: 200,
          height: 200,
        });
      } else {
        // web
        setImageDimensions({
          width: 250,
          height: 250,
        });
      }
    };

    // calcula width e height
    handleResize();

    // calcula width e height no resize
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Reveal reversed={true}>
        <Image 
          src={`/img/logo_${color}.png`}
          alt="main logo" 
          width={imageDimensions.width}
          height={imageDimensions.height}
          className='object-contain'
        />
      </Reveal>
    </div>
  )
}

export default MainLogo