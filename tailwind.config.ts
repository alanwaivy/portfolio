import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Red
        secondary: {
          light: '#000000', // Black in light mode
          dark: '#FFFFFF', // White in dark mode
        },
        background: {
          light: '#FFFFFF', // White in light mode
          dark: '#000000', // Black in dark mode
        },
        'dark-accent': '#1A1A1A',
        'light-accent': '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(to right, #00000010 1px, transparent 1px), linear-gradient(to bottom, #00000010 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, #FFFFFF10 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF10 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '4rem 4rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FF0000",
          "secondary": "#000000",
          "background": "#FFFFFF",
          "accent": "#1A1A1A",
          "neutral": "#000000",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        dark: {
          "primary": "#FF0000",
          "secondary": "#FFFFFF",
          "background": "#000000",
          "accent": "#1A1A1A",
          "neutral": "#FFFFFF",
          "base-100": "#000000",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      },
    ],
  },
} 