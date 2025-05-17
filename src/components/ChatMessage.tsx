'use client'

import { motion } from 'framer-motion'

interface ChatMessageProps {
  message: string
  isAi: boolean
  animate?: boolean
}

export default function ChatMessage({ message, isAi, animate = true }: ChatMessageProps) {
  const containerClasses = isAi
    ? 'bg-dark-accent text-secondary'
    : 'bg-primary text-white'

  return (
    <motion.div
      className={`p-4 rounded-lg max-w-[80%] ${isAi ? 'ml-0' : 'ml-auto'} ${containerClasses}`}
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-3">
        {isAi && (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
        )}
        <div className="prose prose-invert max-w-none">
          <p className="text-sm sm:text-base whitespace-pre-wrap">{message}</p>
        </div>
      </div>
    </motion.div>
  )
} 