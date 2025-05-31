import { motion } from 'framer-motion';
import { theme } from './ColorScheme';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit';
}

const AnimatedButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button'
}: AnimatedButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: theme.colors.gradient.primary,
          border: 'none',
          color: theme.colors.text.primary
        };
      case 'secondary':
        return {
          background: theme.colors.gradient.accent,
          border: 'none',
          color: theme.colors.text.primary
        };
      case 'outline':
        return {
          background: 'transparent',
          border: `2px solid ${theme.colors.primary}`,
          color: theme.colors.primary
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'large':
        return 'px-8 py-4 text-lg';
    }
  };

  return (
    <motion.button
      onClick={onClick}
      type={type}
      className={`
        relative overflow-hidden rounded-full font-medium
        transition-all duration-300 hoverable
        ${getSizeStyles()}
        ${className}
      `}
      style={getVariantStyles()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: theme.colors.gradient.dark
        }}
        whileHover={{ opacity: 1 }}
      />
      <motion.span className="relative z-10">{children}</motion.span>
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${theme.colors.accent}20 0%, transparent 70%)`
        }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default AnimatedButton; 