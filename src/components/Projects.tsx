"use client";

import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants'
import Reveal from './Reveal'

const Projects = () => {
  return (
    <div className="md:flex flex-col justify-between">
      <div className='p-10 md:p-14'>
        <Reveal>
          <h1 
            style={{fontStretch: "125%"}} 
            className='font-mona font-medium text-[35px] md:text-[55px] text-black-dark dark:text-white-light leading-none'>
            my-projects/
          </h1>
        </Reveal>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 px-10 md:px-14'>
        {projects.map((card) => (
          <Reveal width='100%'>
            <ProjectCard project={card}/>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Projects