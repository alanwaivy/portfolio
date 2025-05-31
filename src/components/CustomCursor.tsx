import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { theme } from './ColorScheme';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('hoverable')
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%'
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        className="fixed left-0 top-0 w-4 h-4 pointer-events-none z-[9999]"
      >
        <motion.div 
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: isHovered ? theme.colors.accent : theme.colors.primary,
            boxShadow: isHovered 
              ? `0 0 20px ${theme.colors.accent}80`
              : `0 0 20px ${theme.colors.primary}80`
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%'
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
        }}
        className="fixed left-0 top-0 w-8 h-8 pointer-events-none z-[9998]"
      >
        <motion.div 
          className="absolute inset-0 rounded-full border-2"
          animate={{
            borderColor: isHovered ? theme.colors.accent : theme.colors.primary,
            opacity: isHovered ? 0.7 : 0.3
          }}
        />
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%'
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 0.2 : 0.1,
        }}
        className="fixed left-0 top-0 w-12 h-12 pointer-events-none z-[9997]"
      >
        <motion.div 
          className="absolute inset-0 rounded-full blur-md"
          animate={{
            background: isHovered 
              ? theme.colors.gradient.accent
              : theme.colors.gradient.primary,
            opacity: isHovered ? 0.5 : 0.3
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor; 