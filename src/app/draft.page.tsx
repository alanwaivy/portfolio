'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Background3D from '@/components/Background3D'
import Link from 'next/link'
import { CodeBracketIcon, LightBulbIcon, RocketLaunchIcon, CommandLineIcon, CpuChipIcon, WindowIcon } from '@heroicons/react/24/outline'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
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
  const [email, setEmail] = useState('')
  const [selectedType, setSelectedType] = useState('All')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  const filteredTech = selectedType === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.type === selectedType)

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white bg-[#0A0014]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0014]/30 backdrop-blur-lg border-b border-[#9D72FF]/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] bg-clip-text text-transparent">
            Portfolio
          </span>
          <Link 
            href="/chat"
            className="px-6 py-2 rounded-full bg-[#9D72FF]/10 border border-[#9D72FF]/20 
            hover:bg-[#9D72FF]/20 transition-all duration-300"
          >
            AI Chat
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
        <Background3D />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.h1 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-[#9D72FF] via-[#00E5CC] to-[#FFD700] bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <br />
            <span className="text-[#B294FF]">& AI Specialist</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl text-[#72F2E9]/70 max-w-2xl mx-auto"
          >
            Crafting exceptional digital experiences through innovative development,
            AI integration, and modern design practices.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-4 bg-[#0A0014]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-[#72F2E9]/70">
                With over 8 years of experience in software development and AI, I specialize in building
                innovative solutions that combine cutting-edge technology with elegant design.
              </p>
              <p className="text-[#72F2E9]/70">
                My passion lies in creating intelligent applications that solve real-world problems
                while delivering exceptional user experiences.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0A0014]/50 border border-[#9D72FF]/20">
                <CodeBracketIcon className="w-8 h-8 text-[#9D72FF] mb-2" />
                <h3 className="font-bold text-[#00E5CC]">300+</h3>
                <p className="text-[#72F2E9]/70">Projects Completed</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0A0014]/50 border border-[#9D72FF]/20">
                <LightBulbIcon className="w-8 h-8 text-[#00E5CC] mb-2" />
                <h3 className="font-bold text-[#9D72FF]">50+</h3>
                <p className="text-[#72F2E9]/70">AI Models Deployed</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0A0014]/50 border border-[#9D72FF]/20">
                <RocketLaunchIcon className="w-8 h-8 text-[#FFD700] mb-2" />
                <h3 className="font-bold text-[#00E5CC]">8+</h3>
                <p className="text-[#72F2E9]/70">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0A0014]/50 border border-[#9D72FF]/20">
                <CommandLineIcon className="w-8 h-8 text-[#9D72FF] mb-2" />
                <h3 className="font-bold text-[#FFD700]">1M+</h3>
                <p className="text-[#72F2E9]/70">Lines of Code</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-center bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] bg-clip-text text-transparent"
            >
              Professional Journey
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-[#0A0014]/50 border border-[#9D72FF]/20
                    hover:border-[#9D72FF]/40 transition-all duration-300"
                >
                  <div className="text-[#FFD700] text-sm mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-[#00E5CC] mb-1">{exp.title}</h3>
                  <div className="text-[#9D72FF] mb-4">{exp.company}</div>
                  <p className="text-[#72F2E9]/70">{exp.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-4 bg-[#0A0014]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {['All', 'Frontend', 'Backend', 'Language', 'AI/ML', 'DevOps', 'Database', 'API', 'Cloud'].map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] text-white'
                        : 'bg-[#0A0014]/50 border border-[#9D72FF]/20 text-[#72F2E9]/70 hover:border-[#9D72FF]/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {filteredTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative p-6 rounded-xl bg-[#0A0014]/50 border border-[#9D72FF]/20 
                    hover:border-[#9D72FF]/40 transition-all duration-300 flex flex-col items-center
                    hover:shadow-lg hover:shadow-[color:var(--hover-glow)]"
                  style={{ '--hover-glow': `${tech.color}10` } as any}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div 
                      className="absolute inset-0 rounded-full opacity-20 blur-xl transition-opacity duration-300
                      group-hover:opacity-40"
                      style={{ backgroundColor: tech.color }}
                    />
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="relative w-full h-full object-contain transition-transform duration-300
                      group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-[#72F2E9] font-medium text-lg mb-1 text-center">{tech.name}</h3>
                  <p className="text-[#72F2E9]/50 text-sm text-center line-clamp-2">{tech.description}</p>
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                    group-hover:opacity-10"
                    style={{ backgroundColor: tech.color }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-center bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] bg-clip-text text-transparent"
            >
              Get in Touch
            </motion.h2>

            <motion.form 
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto flex gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-[#0A0014]/50 border border-[#9D72FF]/20 
                  focus:border-[#9D72FF] focus:outline-none focus:ring-2 focus:ring-[#9D72FF]/20
                  placeholder:text-[#72F2E9]/30"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9D72FF] to-[#00E5CC] 
                  hover:opacity-90 transition-opacity duration-300 font-medium
                  shadow-lg shadow-[#9D72FF]/20"
              >
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
