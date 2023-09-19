"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { aboutLinks } from '@/constants'
import IconedButton from './IconedButton'
import Reveal from './Reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  // hover:text-superstar
  // hover:text-burn-orange
  // hover:text-bright-red
  // hover:text-bright-blue
  // hover:text-roses
  // hover:text-true-purple
  const [mainColor, setMainColor] = useState<string | null>("")

  useEffect(() => {
    const currentMainColor = localStorage.getItem('main-color')

    setMainColor(currentMainColor)
  }, [])

  return (
    <div className="flex flex-col py-5">
      <div className='px-10 flex flex-col md:px-14 md:flex-row'>
        <Reveal>
          <h1
            style={{fontStretch: "125%"}} 
            className='font-mona font-medium text-[35px] md:text-[55px] text-black-dark dark:text-white-light'>
            about-me/
          </h1>
        </Reveal>
        <div className='flex items-center'>
          <Reveal>
            <p
              style={{fontStretch: "125%"}} 
              className='font-mona text-[20px] md:text-[30px] text-secondary'
            >my-links <span><FontAwesomeIcon icon={faArrowRight} className={"mx-1"}/></span>
            </p>
            </Reveal>
            <div className='flex justify-between items-center'>
              {aboutLinks.map((btn) => (
                <Link
                  href={btn.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={`mx-1 my-2 text-3xl text-secondary hover:text-${mainColor}`}>
                    {/* render button with w-12 and h-10 */}
                    <Reveal>
                      <i className={btn.icon}></i>
                    </Reveal>
                </Link>
              ))}
            </div>
        </div>
      </div>
      <div className='flex flex-col pt-10 md:p-14 md:gap-14 md:flex-row'>
          <div className='flex w-full md:w-1/2 md:pr-10'>
            <Reveal>
              <picture>
                <source srcSet='/img/about-me_mobile.png' media='(max-width: 640px)' />
                <img src="/img/about-me_web.png" alt="" />
              </picture>
            </Reveal>
          </div>
          <div className='flex flex-col p-10 md:p-0 md:pr-14 md:w-1/2 text-2xl'>
            <Reveal>
              <p>Always in pursuit of acquiring knowledge and develop my skills, I have dedicated the last <span className={`text-${mainColor}`}>8 years</span> to independent 
                program development, with a special focus on <span className={`text-${mainColor}`}>creating 3D games</span>. This journey has given me the opportunity to dive 
                deep into the world of programming, challenging myself to explore new technologies and refine my technical 
                competencies.</p> 
            </Reveal>
            <br />
            <Reveal>
              <p>In addition to my passion for games, my professional journey has led me to the realm of <span className={`text-${mainColor}`}>software development</span> and 
                <span className={`text-${mainColor}`}> data analysis</span>, where I have been working for about a year. During this period, I have had the satisfaction of 
                working on diverse projects, collaborating on the <span className={`text-${mainColor}`}>development of web</span> and <span className={`text-${mainColor}`}>mobile applications</span>  for clients from 
                different industries and with different needs and scopes.</p> 
            </Reveal>
          </div>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Link
          href={"mailto:joaopedrocabral31@gmail.com"}
          target={"_blank"}
          rel={"noopener noreferrer"}>
            {/* render button with w-40 and h-16 */}
            <Reveal>
              <IconedButton
                iconClass={"fa-regular fa-envelope"}
                title={"Contact Me"}
                width={'40'}
                height={'16'}
              />
            </Reveal>
        </Link>
        <Link
          href={"https://docs.google.com/document/d/e/2PACX-1vTDVNqTK3UXcxpwSJoPZul_yTugNEe3XKvKdOBwqjK-BYzNNYaW7OV6oF5TrIiW792e9PjDbsNu9a0C/pub"}
          target={"_blank"}
          rel={"noopener noreferrer"}>
            {/* render button with w-40 and h-16 */}
            <Reveal>
              <IconedButton
                iconClass={"fa-solid fa-file-lines"}
                title={"My Resume"}
                width={'40'}
                height={'16'}
              />
            </Reveal>
        </Link>
      </div>
    </div>
  )
}

export default About