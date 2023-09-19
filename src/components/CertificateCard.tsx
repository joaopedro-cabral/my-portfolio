"use client"

import { CertificateProps } from '@/props'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Reveal from './Reveal'

const imageVariants: Variants = {
    init: {
        scale: 1,
        rotate: 0
    },
    hover: {
        scale: 0.95,
        rotate: -5
    }
}

const CertificateCard = ({ name, link, img, description }:CertificateProps) => {
    // hover:text-superstar
    // hover:text-burn-orange
    // hover:text-bright-red
    // hover:text-bright-blue
    // hover:text-roses
    // hover:text-true-purple
    // dark:hover:text-superstar
    // dark:hover:text-burn-orange
    // dark:hover:text-bright-red
    // dark:hover:text-bright-blue
    // dark:hover:text-roses
    // dark:hover:text-true-purple
    const [mainColor, setMainColor] = useState<string | null>("")

    useEffect(() => {
        const currentMainColor = localStorage.getItem('main-color')

        setMainColor(currentMainColor)
    }, [])

    return (
        <div className='flex flex-col'>
            <Reveal>
                <div className='flex justify-center items-end pt-10 bg-[#dcdcdc] dark:bg-[#272727] shadow-md rounded-lg relative overflow-hidden'>
                    <div className='flex justify-center items-center w-4/5'>
                        <motion.img 
                            variants={imageVariants}
                            initial={"init"}
                            whileHover={"hover"}
                            src={img} 
                            alt="certificate-img" 
                        />
                    </div>
                </div>
            </Reveal>
            <div className='flex flex-col mt-4 w-full'>
                <Reveal
                    width='100%'
                >
                    <div className='flex justify-between items-center flex-row w-full gap-3'>
                        <h4 className='font-bold text-2xl'>{name}</h4>
                        <div className={`w-1/3 h-0.5 bg-${mainColor}`}></div>
                        <Link
                            href={link}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            className={`text-2xl text-secondary hover:text-${mainColor} dark:hover:text-${mainColor}`}
                        >
                            <FontAwesomeIcon icon={faLink}/>
                        </Link>
                    </div>
                </Reveal>
                <Reveal>
                    <div className='flex mt-2'>
                        <p className='text-lg'>{description}</p>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default CertificateCard