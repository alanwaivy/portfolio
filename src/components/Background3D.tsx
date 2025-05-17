'use client'

import dynamic from 'next/dynamic'

// Dynamically import Three.js components with no SSR
const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0014] via-[#120029] to-[#1A0033]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#9D72FF] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
})

export default function Background3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ height: '100%' }}>
      <Scene />
    </div>
  )
} 