"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export default function Switcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    const systemTheme: string = 'dark';
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const icon = currentTheme === 'dark' ? "fa-solid fa-moon" : "fa-solid fa-sun";

    return (
        <motion.div 
            whileTap={{ scale: 0.80 }} 
            onClick={() => currentTheme === 'dark' ? (
                        setTheme('light')
                        ) : (
                        setTheme('dark')
                    )} 
            className={classNames('flex items-center bg-day w-20 h-10 bg-[#fdf3d8] dark:bg-[#172928] rounded-full shadow-inner')}>
            <span 
                className={classNames('flex justify-center items-center h-7 w-7 ml-1 text-white-light bg-[#F2C20C] dark:bg-[#15C9A0] rounded-full transition-all duration-200', {
                'ml-12': currentTheme === 'light',
                })}
            >
                <i className={icon}></i>
            </span>
        </motion.div>
    )
}