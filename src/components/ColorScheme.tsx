export const theme = {
  colors: {
    primary: '#FF2E4C', // Rich red
    secondary: '#FF0033', // Vibrant red
    accent: '#FFD700', // Gold accent
    background: {
      dark: '#0A0808',
      darker: '#050404',
      card: 'rgba(15, 10, 10, 0.5)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      accent: 'rgba(255, 255, 255, 0.5)'
    },
    gradient: {
      primary: 'linear-gradient(135deg, #FF2E4C 0%, #FF0033 100%)',
      accent: 'linear-gradient(135deg, #FFD700 0%, #FF2E4C 100%)',
      dark: 'linear-gradient(135deg, rgba(255, 46, 76, 0.1) 0%, rgba(255, 0, 51, 0.1) 100%)'
    }
  },
  blur: {
    light: '10px',
    heavy: '20px'
  },
  animation: {
    duration: {
      fast: 0.3,
      medium: 0.5,
      slow: 0.8
    },
    ease: [0.43, 0.13, 0.23, 0.96] // Framer Motion's default easeInOut
  }
}; 