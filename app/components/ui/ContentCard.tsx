import Link from 'next/link'
import { ReactNode } from 'react'

interface ContentCardProps {
  title: string
  date?: string
  year?: string
  type?: 'project' | 'publication' | 'experience' | 'writing'
  interactive?: boolean
  href?: string
  tags?: string[]
  authors?: string
  venue?: string
  company?: string
  period?: string
  achievements?: string[]
  children: ReactNode
}

export function ContentCard({ 
  title, 
  date, 
  year,
  type = 'project',
  interactive = false,
  href,
  tags,
  authors,
  venue,
  company,
  period,
  achievements,
  children
}: ContentCardProps) {
  const colorMap = {
    project: 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/30',
    publication: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    experience: 'border-green-200 hover:border-green-300 hover:bg-green-50/30',
    writing: 'border-purple-200 hover:border-purple-300 hover:bg-purple-50/30'
  }

  const CardWrapper = ({ children: cardChildren }: { children: ReactNode }) => {
    const baseClasses = `border bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${colorMap[type]}`
    
    if (interactive && href) {
      return (
        <Link href={href} className="block">
          <article className={`${baseClasses} hover:cursor-pointer`}>
            {cardChildren}
          </article>
        </Link>
      )
    }
    
    return (
      <article className={baseClasses}>
        {cardChildren}
      </article>
    )
  }

  const TitleComponent = ({ children: titleChildren }: { children: ReactNode }) => {
    if (interactive && href) {
      return (
        <span className="hover:text-blue-600 transition-colors cursor-pointer">
          {titleChildren}
        </span>
      )
    }
    return <span>{titleChildren}</span>
  }

  return (
    <CardWrapper>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-900 leading-tight">
          <TitleComponent>{title}</TitleComponent>
        </h3>
        <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
          {date || year || period}
        </span>
      </div>

      {/* Metadata based on type */}
      {authors && (
        <p className="text-gray-600 mb-2 text-sm">
          <span className="font-medium">Authors:</span> {authors}
        </p>
      )}
      
      {venue && (
        <p className="text-gray-600 mb-2 text-sm">
          <span className="font-medium">Venue:</span> {venue}
        </p>
      )}

      {company && (
        <p className="text-gray-600 mb-2">{company}</p>
      )}

      {/* Tags for projects */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="text-gray-700 leading-relaxed mb-4">
        {children}
      </div>

      {/* Achievements for experience */}
      {achievements && achievements.length > 0 && (
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          {achievements.map((achievement, i) => (
            <li key={i}>• {achievement}</li>
          ))}
        </ul>
      )}

      {/* Show Details arrow for interactive cards */}
      {interactive && href && (
        <div className="flex gap-4 text-sm">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Details →
          </span>
        </div>
      )}
    </CardWrapper>
  )
}