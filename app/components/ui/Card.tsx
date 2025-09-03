import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'interactive' | 'highlight'
  className?: string
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const baseStyles = 'border bg-white rounded-xl p-6 transition-all duration-300'
  
  const variants = {
    default: 'border-gray-200 hover:shadow-lg hover:border-gray-300 hover:bg-gray-50/30',
    interactive: 'border-gray-200 hover:shadow-lg hover:border-gray-300 hover:bg-gray-50/30 cursor-pointer',
    highlight: 'border-blue-200 hover:shadow-lg hover:border-blue-300 hover:bg-blue-50/30'
  }
  
  return (
    <article className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </article>
  )
}