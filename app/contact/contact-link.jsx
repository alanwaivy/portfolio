'use client'

import { useRouter } from 'next/navigation'

export default function ContactLink({ href, children, isExternal = true }) {
  const router = useRouter()

  const handleClick = (e) => {
    // For external links, let the browser handle it normally
    if (isExternal) return
    
    // For internal links, use router
    e.preventDefault()
    router.push(href)
  }

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 sm:p-8"
    >
      {children}
    </a>
  )
} 