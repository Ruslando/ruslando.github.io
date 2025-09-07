import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'interactive' | 'highlight'
  className?: string
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const baseStyles = 'bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-100'
  
  const variants = {
    default: 'hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1',
    interactive: 'hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 cursor-pointer',
    highlight: 'border-blue-100 bg-blue-50/30 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1'
  }
  
  return (
    <article className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </article>
  )
}