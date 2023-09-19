"use client"

import React, { useEffect, useRef } from 'react'
import { motion, Variants, useInView, useAnimation, useIsPresent } from 'framer-motion'
import { RevealProps } from '@/props'

const revealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 25
    },
    visible: {
        opacity: 1,
        y: 0
    },
}

const slideVariants: Variants = {
    init: {
        left: 0
    },
    transition: {
        left: "100%"
    }
}

const Reveal = ({ children, width = "fit-content", reversed}: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("transition")
        }
    }, [isInView])
  
    return (
        <div ref={ref} style={{ position: "relative", width, padding: "5px", overflow: "hidden"}}>
            <motion.div
                variants={revealVariants}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.25 }}
                >{children}
            </motion.div>
            <motion.div
                variants={slideVariants}
                initial={"init"}
                animate={slideControls}
                transition={{ duration: 0.3, ease: "easeIn" }}
                style={{position: "absolute", top: 4, bottom: 4, left: 0, right: 0, zIndex: 20}}
                className={`${reversed ? "bg-white-light dark:bg-black-dark" : "bg-black-dark dark:bg-white-light"} animate-pulse`}>
            </motion.div>
        </div>
    )
}

export default Reveal