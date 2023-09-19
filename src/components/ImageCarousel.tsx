"use client"

import React, { useState, useEffect } from 'react'
import { ImageCarouselProps } from '@/props'

const ImageCarousel = ({ children: images }: ImageCarouselProps) => {
    // bg-superstar
    // bg-burn-orange
    // bg-bright-red
    // bg-bright-blue
    // bg-roses
    // bg-true-purple
    const [ mainColor, setMainColor ] = useState<string | null>("")
    const [ current, setCurrent ] = useState(0)

    const previousImg = () => setCurrent(
        current => current === 0 ? images.length - 1 : current - 1
    )

    const nextImg = () => setCurrent(
        current => current === images.length - 1  ? 0 : current + 1
    )

    useEffect(() => {
        const currentMainColor = localStorage.getItem('main-color')
    
        setMainColor(currentMainColor)
    }, [])

    return (
        <div className='overflow-hidden relative'>
            <div style={{transform: `translateX(-${current * 100}%)`}} className='flex transition-transform ease-out duration-500'>{images}</div>
            <div className='absolute inset-0 flex items-center justify-between'>
                <button 
                    onClick={previousImg}
                    className={`${images.length > 1 ? "w-1/4 h-full bg-gradient-to-r opacity-0 hover:opacity-50 hover:from-white transition-all ease-in duration-200" : "hidden"}`}>
                </button>
                <button
                    onClick={nextImg} 
                    className={`${images.length > 1 ? "w-1/4 h-full opacity-0 hover:opacity-50 bg-gradient-to-l hover:from-white transition-all ease-in duration-200" : "hidden"}`}>
                </button>
            </div>
            <div className='m-4 right-o left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {images.map((_:string, i:number) => (
                        <div 
                            className={`transition-all w-3 h-3 bg-${mainColor} rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel