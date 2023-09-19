import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Footer, Navbar } from '@/components'
import { ThemeProviders } from '@/contexts/ThemeContext'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'João Pedro Cabral',
  description: "João Pedro Cabral's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2"></link>
      <body className={'relative' + ' ' + outfit.className}>
        <script src="https://kit.fontawesome.com/50c96283f2.js" crossOrigin="anonymous"></script>
        <ThemeProviders>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProviders>
      </body>
    </html>
  )
}
