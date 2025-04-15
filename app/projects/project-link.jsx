'use client'

import { useRouter } from 'next/navigation'

export default function ProjectLink({ href, children }) {
  const router = useRouter()
  
  const handleClick = (e) => {
    e.preventDefault()
    
    // For external links (starting with http), use window.location
    if (href.startsWith('http')) {
      window.open(href, '_blank')
    } else {
      router.push(href)
    }
  }

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="cursor-pointer"
    >
      {children}
    </a>
  )
} 