import { motion } from 'framer-motion';
import { theme } from './ColorScheme';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = theme.colors.primary
}: GlassCardProps) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        backdrop-blur-xl hoverable
        ${className}
      `}
      style={{
        background: theme.colors.background.card,
        border: `1px solid ${theme.colors.primary}20`,
      }}
      whileHover={hoverEffect ? {
        scale: 1.02,
        borderColor: `${glowColor}40`
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: `linear-gradient(135deg, ${glowColor}10 0%, transparent 100%)`
        }}
        whileHover={hoverEffect ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}20 0%, transparent 50%)`
        }}
        whileHover={hoverEffect ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom highlight */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0"
        style={{
          background: theme.colors.gradient.primary
        }}
        whileHover={hoverEffect ? { opacity: 0.5 } : {}}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default GlassCard; 