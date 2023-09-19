"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ProjectProps } from '@/props'
import { motion, Variants } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProjectDetails from './ProjectDetails';

const cardVariants: Variants = {
  hover: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
}

interface ProjectCardProps {
  project: ProjectProps
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const currentMainColor = localStorage.getItem('main-color')

    setMainColor(currentMainColor)
  }, [])

  if (!project) {
    return null;
  }

  const { title, img, category } = project

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={"hover"}
      className='grid grid-cols-1 py-4'>
      <div className='w-full h-48 relative overflow-hidden'>
        <Image
          src={img}
          layout={'fill'}
          priority
          alt='card-img'
          objectFit='cover'>
        </Image>
      </div>
      <div className='flex justify-between p-4 bg-black-dark dark:bg-white-light'>
        <span>
          <h2 className='font-bold text-xl text-white-light dark:text-black-dark'>{title}</h2>
          <p className='text-[#AFAFAF] dark:text-secondary'>{category}</p>
        </span>
        <button 
          className='flex items-end text-4xl'
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} className={`text-white-light dark:text-black-dark hover:text-${mainColor} dark:hover:text-${mainColor}`}/>
        </button>
      </div>
      <ProjectDetails 
        isOpen={isOpen} 
        closeModal={() => setIsOpen(false)} 
        project={project}
      />
    </motion.div>
  )
}

export default ProjectCard