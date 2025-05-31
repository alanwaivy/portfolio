'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import CustomCursor from '@/components/CustomCursor'
import AnimatedButton from '@/components/AnimatedButton'
import GlassCard from '@/components/GlassCard'
import { CodeBracketIcon, LightBulbIcon, RocketLaunchIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import { theme } from '@/components/ColorScheme'

// Animation variants
const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const modalVariants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: theme.animation.duration.fast, ease: theme.animation.ease }
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: theme.animation.duration.medium, ease: theme.animation.ease }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: theme.animation.duration.fast, ease: theme.animation.ease }
  }
}

const overlayVariants: Variants = {
  initial: { 
    opacity: 0,
    transition: { duration: theme.animation.duration.fast, ease: theme.animation.ease }
  },
  animate: { 
    opacity: 1,
    transition: { duration: theme.animation.duration.medium, ease: theme.animation.ease }
  },
  exit: { 
    opacity: 0,
    transition: { duration: theme.animation.duration.fast, ease: theme.animation.ease }
  }
}

const technologies = [
  { 
    name: 'React', 
    type: 'Frontend',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    color: '#61DAFB',
    description: 'A JavaScript library for building user interfaces'
  },
  { 
    name: 'Next.js', 
    type: 'Frontend',
    icon: 'https://cdn.simpleicons.org/nextdotjs/000000',
    color: '#000000',
    description: 'The React Framework for Production'
  },
  { 
    name: 'TypeScript', 
    type: 'Language',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    color: '#3178C6',
    description: 'JavaScript with syntax for types'
  },
  { 
    name: 'Node.js', 
    type: 'Backend',
    icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    color: '#339933',
    description: 'JavaScript runtime built on Chrome\'s V8 engine'
  },
  { 
    name: 'Python', 
    type: 'Language',
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    color: '#3776AB',
    description: 'A programming language that lets you work quickly'
  },
  { 
    name: 'TensorFlow', 
    type: 'AI/ML',
    icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    color: '#FF6F00',
    description: 'An end-to-end open source ML platform'
  },
  { 
    name: 'PyTorch', 
    type: 'AI/ML',
    icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C',
    color: '#EE4C2C',
    description: 'An open source ML framework'
  },
  { 
    name: 'Docker', 
    type: 'DevOps',
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    color: '#2496ED',
    description: 'A platform for building, deploying, and running applications'
  },
  { 
    name: 'AWS', 
    type: 'Cloud',
    icon: 'https://cdn.simpleicons.org/amazonaws/FF9900',
    color: '#FF9900',
    description: 'Comprehensive cloud computing platform'
  },
  { 
    name: 'MongoDB', 
    type: 'Database',
    icon: 'https://cdn.simpleicons.org/mongodb/47A248',
    color: '#47A248',
    description: 'A document-based distributed database'
  },
  { 
    name: 'PostgreSQL', 
    type: 'Database',
    icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
    color: '#4169E1',
    description: 'The world\'s most advanced open source database'
  },
  { 
    name: 'GraphQL', 
    type: 'API',
    icon: 'https://cdn.simpleicons.org/graphql/E10098',
    color: '#E10098',
    description: 'A query language for your API'
  }
]

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2020 - Present',
    description: 'Leading development of enterprise-scale applications with modern tech stack.'
  },
  {
    title: 'AI Research Engineer',
    company: 'AI Solutions Lab',
    period: '2018 - 2020',
    description: 'Developed and deployed machine learning models for real-world applications.'
  },
  {
    title: 'Software Engineer',
    company: 'Digital Frontiers',
    period: '2016 - 2018',
    description: 'Built robust backend systems and RESTful APIs.'
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = {
    work: 'WORK',
    about: 'ABOUT',
    contact: 'CONTACT'
  }

  // Handle click outside
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveSection(null);
      }
    };

    if (activeSection) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSection]);

  return (
    <main className="relative h-screen overflow-hidden cursor-none" style={{ background: theme.colors.background.dark }}>
      <CustomCursor />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse"
          style={{ background: theme.colors.gradient.primary, opacity: 0.15 }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse"
          style={{ background: theme.colors.gradient.accent, opacity: 0.1 }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${theme.colors.primary}10 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Fixed Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-20 px-8 py-6 cursor-none"
        style={{ 
          backdropFilter: `blur(${theme.blur.heavy})`,
          background: `${theme.colors.background.darker}40`,
          borderBottom: `1px solid ${theme.colors.primary}15`
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.span 
            className="text-2xl font-light tracking-wider cursor-none"
            whileHover={{ color: theme.colors.accent }}
            style={{ color: theme.colors.text.primary }}
          >
            PORTFOLIO
          </motion.span>
          <div className="space-x-12 text-sm tracking-wider cursor-none">
            {Object.values(sections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(activeSection === section ? null : section)}
                className={`hover:text-[${theme.colors.accent}] transition-colors relative cursor-none`}
                style={{ 
                  color: activeSection === section ? theme.colors.accent : theme.colors.text.secondary
                }}
              >
                {section}
                {activeSection === section && (
                  <motion.div 
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 pointer-events-none"
                    style={{ background: theme.colors.gradient.accent }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Static */}
      <section className="h-screen flex items-center justify-center px-8 pt-24 relative z-10">
        <motion.div 
          initial="initial"
          animate="animate"
          className="max-w-7xl w-full mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            transition={{ duration: 0.8, ease: theme.animation.ease }}
            className="text-7xl font-light leading-tight tracking-tighter mb-6"
            style={{ color: theme.colors.text.primary }}
          >
            CRAFTING
            <br />
            <span style={{ color: theme.colors.accent }}>DIGITAL</span>
            <br />
            EXCELLENCE
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            transition={{ duration: 0.8, ease: theme.animation.ease }}
            className="max-w-xl text-lg tracking-wide leading-relaxed"
            style={{ color: theme.colors.text.secondary }}
          >
            Elevating web experiences through innovative development and 
            sophisticated design. Where technology meets luxury.
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="mt-12 space-x-6"
          >
            <AnimatedButton size="large" onClick={() => setActiveSection('WORK')}>
              EXPLORE WORK
            </AnimatedButton>
            <AnimatedButton variant="outline" size="large" onClick={() => setActiveSection('CONTACT')}>
              CONTACT ME
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal Sections */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setActiveSection(null)}
              className="fixed inset-0 z-[200]"
              style={{ 
                background: `${theme.colors.background.darker}95`, 
                backdropFilter: `blur(${theme.blur.light})`
              }}
            />

            {/* Modal Content */}
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 z-[300]"
            >
              <div className="h-screen w-screen flex items-center justify-center px-4">
                <div className="w-full max-w-5xl" ref={modalRef}>
                  <GlassCard 
                    className="relative backdrop-blur-2xl"
                    glowColor={theme.colors.primary}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setActiveSection(null)}
                      className="absolute -top-12 right-0 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Section content */}
                    <div className="h-full">
                      {activeSection === 'WORK' && (
                        <div className="p-8">
                          <h2 className="text-3xl font-light mb-8" style={{ color: theme.colors.accent }}>Featured Projects</h2>
                          <div className="grid grid-cols-2 gap-6 h-[60vh]">
                            {[1, 2].map((project) => (
                              <GlassCard key={project} className="h-full p-8 hoverable flex flex-col justify-between">
                                <div>
                                  <h3 className="text-2xl mb-4" style={{ color: theme.colors.text.primary }}>Project {project}</h3>
                                  <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                                    A sophisticated web application showcasing modern design principles and cutting-edge technology.
                                  </p>
                                </div>
                                <div className="flex justify-between items-end">
                                  <span style={{ color: theme.colors.text.secondary }}>2024</span>
                                  <AnimatedButton variant="outline" size="small">View Project</AnimatedButton>
                                </div>
                              </GlassCard>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeSection === 'ABOUT' && (
                        <div className="p-8">
                          <h2 className="text-3xl font-light mb-8" style={{ color: theme.colors.accent }}>About Me</h2>
                          <div className="grid grid-cols-2 gap-12 h-[60vh]">
                            <div className="space-y-6 flex flex-col justify-between">
                              <div className="space-y-6">
                                <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                                  With over 8 years of experience in software development and AI, 
                                  I specialize in building innovative solutions that combine cutting-edge 
                                  technology with elegant design.
                                </p>
                                <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                                  My passion lies in creating intelligent applications that solve 
                                  real-world problems while delivering exceptional user experiences.
                                </p>
                              </div>
                              <AnimatedButton size="large">Download Resume</AnimatedButton>
                            </div>
                            <div className="grid grid-cols-2 gap-4 content-center">
                              {[
                                { icon: CodeBracketIcon, value: '300+', label: 'Projects' },
                                { icon: LightBulbIcon, value: '50+', label: 'AI Models' },
                                { icon: RocketLaunchIcon, value: '8+', label: 'Years' },
                                { icon: CommandLineIcon, value: '1M+', label: 'Lines' }
                              ].map((stat) => (
                                <GlassCard key={stat.label} className="p-6 flex flex-col items-center justify-center text-center">
                                  <stat.icon 
                                    className="w-8 h-8 mb-3"
                                    style={{ color: theme.colors.primary }}
                                  />
                                  <div className="text-2xl font-light mb-1" style={{ color: theme.colors.accent }}>{stat.value}</div>
                                  <div style={{ color: theme.colors.text.secondary }}>{stat.label}</div>
                                </GlassCard>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeSection === 'CONTACT' && (
                        <div className="p-8">
                          <h2 className="text-3xl font-light mb-6" style={{ color: theme.colors.accent }}>Get in Touch</h2>
                          <div className="grid grid-cols-2 gap-8 h-[50vh]">
                            <div className="flex flex-col justify-between">
                              <div className="space-y-4">
                                <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                                  Let's collaborate on your next project. I'm here to help bring your vision to life.
                                </p>
                                <div className="flex flex-col gap-3">
                                  <p className="flex items-center gap-3" style={{ color: theme.colors.text.secondary }}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    contact@example.com
                                  </p>
                                  <p className="flex items-center gap-3" style={{ color: theme.colors.text.secondary }}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Location, Country
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                {['github', 'linkedin', 'twitter'].map((platform) => (
                                  <GlassCard key={platform} className="p-3 hoverable">
                                    <svg className="w-5 h-5" style={{ color: theme.colors.text.secondary }} fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                  </GlassCard>
                                ))}
                              </div>
                            </div>
                            <form className="flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
                              <div className="space-y-4">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20"
                                  style={{ color: theme.colors.text.primary }}
                                />
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20"
                                  style={{ color: theme.colors.text.primary }}
                                />
                                <textarea
                                  placeholder="Message"
                                  rows={4}
                                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 resize-none"
                                  style={{ color: theme.colors.text.primary }}
                                />
                              </div>
                              <AnimatedButton type="submit" size="large">
                                SEND MESSAGE
                              </AnimatedButton>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
