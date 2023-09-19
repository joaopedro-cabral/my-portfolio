import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-dark': '#0A0A0A',
        'white-light': '#F9F9F9',
        'superstar': '#FFCC0D',
        'burn-orange': '#FF7326',
        'bright-red': '#FF194D',
        'bright-blue': '#19FFCB',
        'roses': '#BF2669',
        'true-purple': '#702A8C',
        'secondary': '#707070'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mona : ['Mona Sans']
      }
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit')
  ],
}
export default config
