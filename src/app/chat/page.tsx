'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Background3D from '@/components/Background3D'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Chat() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'This is a placeholder response. The AI chat functionality will be implemented soon!' 
      }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-[#0A0014] text-white flex flex-col relative">
      <Background3D />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0A0014]/50 backdrop-blur-xl border-b border-[#9D72FF]/10 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-[#72F2E9] hover:text-[#00E5CC] transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="bg-gradient-to-r from-[#9D72FF] via-[#00E5CC] to-[#FFD700] bg-clip-text text-transparent font-bold">
            AI Assistant
          </h1>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 pt-24 pb-32 relative z-10">
        <motion.div 
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {messages.length === 0 && (
            <motion.div 
              variants={fadeIn}
              className="text-center py-12"
            >
              <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-[#9D72FF]" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] bg-clip-text text-transparent mb-2">
                Welcome to AI Chat
              </h2>
              <p className="text-[#72F2E9]/70">
                Ask me anything about my experience, projects, or how I can help you!
              </p>
            </motion.div>
          )}
          
          {messages.map((message, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-6 py-4 rounded-2xl backdrop-blur-sm
                  ${message.role === 'user'
                    ? 'bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] text-white'
                    : 'bg-[#0A0014]/50 border border-[#9D72FF]/20 text-[#72F2E9]'
                  }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#0A0014]/50 border border-[#9D72FF]/20">
                <div className="w-2 h-2 rounded-full bg-[#9D72FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-[#00E5CC] animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Input Form */}
      <form 
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 right-0 bg-[#0A0014]/50 backdrop-blur-xl border-t border-[#9D72FF]/10 z-10"
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-6 py-4 rounded-full bg-[#0A0014]/50 border border-[#9D72FF]/20 
                focus:border-[#9D72FF] focus:outline-none focus:ring-2 focus:ring-[#9D72FF]/20
                placeholder:text-[#72F2E9]/30 text-[#72F2E9]"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-4 rounded-full bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] 
                hover:opacity-90 transition-all duration-300
                shadow-lg shadow-[#9D72FF]/20 disabled:opacity-50"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </form>
    </main>
  )
} 