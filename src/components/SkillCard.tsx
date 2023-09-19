"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import { SkillProps } from '@/props'
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
    hover: {
        scale:1.03,
        y:-15,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10
        }
    }
}

const SkillCard = ({ name, icon }: SkillProps) => {
    const [isHover, setVisible] = useState(false);

  return (
    <motion.div 
        variants={cardVariants}
        whileHover={"hover"}
        onHoverStart={() => setVisible(true)}
        onHoverEnd={() => setVisible(false)}
        className='px-4 py-9 bg-[#dcdcdc] dark:bg-[#272727] shadow-md rounded-lg relative overflow-hidden'>
        {isHover && (
            <div className='w-full h-full p-4 flex items-center justify-center dark:bg-white-light bg-black-dark absolute bottom-0 left-0 opacity-75'>
                <h2 className='text-sm md:text-lg font-medium text-white-light dark:text-black-dark'>{name}</h2>
            </div>
        )}
        <div className='flex justify-center items-center'>
            <Image
                src={icon}
                alt={'skill-alt'}
                width={100}
                height={100}
                priority
                >
            </Image>
        </div>
    </motion.div>
  )
}

export default SkillCard