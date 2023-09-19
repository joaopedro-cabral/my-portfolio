"use client"

import React, { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { ProjectProps } from '@/props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel'
import IconedButton from './IconedButton'
import { motion, Variants } from 'framer-motion'

interface ProjectDetailsProps {
    isOpen: boolean,
    closeModal: () => void,
    project: ProjectProps
}

const closeButtonVariant: Variants = {
    init: {
        scale: 1
    },
    hover: {
        scale: 1.10,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 5
        }
    }
}

const ProjectDetails = ({ isOpen, closeModal, project }: ProjectDetailsProps) => {
    // group-hover:bg-superstar
    // group-hover:bg-burn-orange
    // group-hover:bg-bright-red
    // group-hover:bg-bright-blue
    // group-hover:bg-roses
    // group-hover:bg-true-purple
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
    const [ mainColor, setMainColor ] = useState<string | null>("")

    useEffect(() => {
        const currentMainColor = localStorage.getItem('main-color')
    
        setMainColor(currentMainColor)
    }, [])

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as={"div"} className={"relative z-50"} onClose={closeModal}>
                    <Transition.Child 
                        as={Fragment} 
                        enter={"ease-out duration-300"}
                        enterFrom={"opacity-0"}
                        enterTo={"opacity-100"}
                        leave={"ease-in duration-200"}
                        leaveFrom={"opacity-100"}
                        leaveTo={"opacity-0"}
                    >
                        <div className='fixed inset-0 bg-black-dark bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <motion.button
                            variants={closeButtonVariant}
                            initial={"init"}
                            whileHover={"hover"}
                            type={"button"}
                            className={`absolute top-3 right-3 z-10 w-fit text-3xl text-white-light dark:text-black-dark bg-black-dark dark:bg-white-light px-2 hover:text-${mainColor} dark:hover:text-${mainColor}`}
                            onClick={closeModal}
                        >
                            <FontAwesomeIcon icon={faXmark}/>
                        </motion.button>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child 
                                as={Fragment} 
                                enter={"ease-out duration-300"}
                                enterFrom={"opacity-0 scale-95"}
                                enterTo={"opacity-100 scale-100"}
                                leave={"ease-in duration-200"}
                                leaveFrom={"opacity-100 scale-100"}
                                leaveTo={"opacity-0 scale-95"}
                            >
                                <Dialog.Panel className={"relative w-full max-w-[90vw] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white-light dark:bg-black-dark shadow-xl transition-all flex flex-col gap-5 no-scrollbar"}>

                                    <div className='flex flex-col mt-16'>
                                        <div className='relative w-full h-auto'>
                                            <ImageCarousel>
                                                {project.carousel.map((image) => (
                                                    <img src={image} alt="" className='shadow-md w-full' />
                                                ))}
                                            </ImageCarousel>
                                        </div>
                                        <div className='flex flex-col mx-6'>
                                            <div className='flex flex-col items-start my-2'>
                                                <h1 className='font-bold text-2xl text-black-dark dark:text-white-light'>{project.title}</h1>
                                                <p className='text-secondary text-lg'>{project.category}, {project.year}</p>
                                            </div>
                                            <div className='flex flex-row justify-center gap-4 my-2'>
                                                {project.links.map((btn) => (
                                                    <Link
                                                    href={btn.url}
                                                    target={"_blank"}
                                                    rel={"noopener noreferrer"}>
                                                    {/* render button with w-36 and h-16 */}
                                                        <IconedButton
                                                        iconClass={btn.icon}
                                                        title={btn.name}
                                                        width={'36'}
                                                        height={'16'}
                                                        />
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className='flex my-6'>
                                                <p className='text-lg text-black-dark dark:text-white-light'>{project.description}</p>
                                            </div>
                                            <div className='flex mb-6 w-full'>
                                                <p className='text-lg text-black-dark dark:text-white-light mr-2'>Skills:</p>
                                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense gap-4 w-full'>
                                                    {project.tools.map((tool) => (
                                                        <p className="relative inline-block px-4 py-2 font-medium group">
                                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black-dark dark:bg-white-light group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                                            <span className={`absolute inset-0 w-full h-full bg-white-light dark:bg-black-dark border-2 border-black-dark dark:border-white-light group-hover:bg-${mainColor}`}></span>
                                                            <span className="relative text-black-dark dark:text-white-light group-hover:text-white">{tool}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ProjectDetails