"use client";

import Image from 'next/image'
import { useTheme } from 'next-themes'

const ThemedImage = (image:string, width:number, height:number) => {
    const { resolvedTheme } = useTheme();
    let src:string;

    switch (resolvedTheme) {
        case 'light':
          src = '/' + (image) + '-lg.svg'
          break
        case 'dark':
          src = '/' + (image) + '-dk.svg'
          break
        default:
          src = ''
          break
    }

    return <Image src={src} width={width} height={height} alt={image}></Image>
}

export default ThemedImage