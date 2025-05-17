/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3366',
          50: '#FFF0F3',
          100: '#FFE0E9',
          200: '#FFB3C7',
          300: '#FF85A6',
          400: '#FF5785',
          500: '#FF3366',
          600: '#FF0044',
          700: '#CC0036',
          800: '#990029',
          900: '#66001B',
        },
        secondary: {
          light: '#1A1A2E',
          dark: '#E5E5F0',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0A0A0A',
        },
        'dark-accent': '#16162A',
        'light-accent': '#F8F8FC',
        accent: {
          blue: '#2563EB',
          purple: '#7C3AED',
          teal: '#0D9488',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.6, -0.05, 0.01, 0.99)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.6, -0.05, 0.01, 0.99)',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, #00000005 1px, transparent 1px)',
        'gradient-dots-dark': 'radial-gradient(circle, #FFFFFF05 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 50px -12px rgba(255, 51, 102, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FF3366",
          "secondary": "#1A1A2E",
          "accent": "#2563EB",
          "neutral": "#1A1A2E",
          "base-100": "#FFFFFF",
          "base-200": "#F8F8FC",
          "base-300": "#E5E5F0",
          "info": "#2563EB",
          "success": "#0D9488",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
        dark: {
          "primary": "#FF3366",
          "secondary": "#E5E5F0",
          "accent": "#60A5FA",
          "neutral": "#E5E5F0",
          "base-100": "#0F0F1A",
          "base-200": "#16162A",
          "base-300": "#1A1A2E",
          "info": "#60A5FA",
          "success": "#34D399",
          "warning": "#FBBF24",
          "error": "#F87171",
        }
      },
    ],
  },
} 