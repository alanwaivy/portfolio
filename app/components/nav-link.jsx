'use client'

import { useRouter } from 'next/navigation'

export default function NavLink({ href, children, className = "" }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  const defaultClasses = "duration-200 text-zinc-400 hover:text-zinc-100 relative block"
  const combinedClasses = className ? `${defaultClasses} ${className}` : defaultClasses

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={combinedClasses}
    >
      {children}
    </a>
  )
} 