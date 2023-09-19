"use client"

import React from 'react'
import Reveal from './Reveal'
import { certificates } from '@/constants'
import CertificateCard from './CertificateCard'

const Certificates = () => {
  return (
    <div className="p-10 md:p-14 flex flex-col justify-between">
        <span>
            <Reveal>
            <h1 
                style={{fontStretch: "125%"}} 
                className='font-mona font-medium text-[35px] md:text-[55px] text-black-dark dark:text-white-light leading-none'>
                certifications/
            </h1>
            </Reveal>
        </span>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {certificates.map((cert) => (
                <CertificateCard
                    name={cert.name}
                    link={cert.link}
                    img={cert.img}
                    description={cert.description}
                />
            ))}
        </div>
    </div>
  )
}

export default Certificates