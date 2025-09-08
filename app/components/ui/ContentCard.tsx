'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

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
  expandable?: boolean
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
  expandable = false,
  children
}: ContentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const colorMap = {
    project: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    publication: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    experience: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    writing: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30'
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

  if (expandable) {
    return (
      <div className={`border bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${colorMap[type]}`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors"
        >
          <div className="flex items-start justify-between w-full min-w-0">
            <div className="flex-1 min-w-0 mr-3">
              <h3 className="text-lg font-medium text-gray-900 leading-tight text-left">
                {title}
              </h3>
              {company && type === 'experience' && (
                <p className="text-gray-600 text-sm mt-1 text-left">{company}</p>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {date || year || period}
              </span>
              <FaChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </button>
        
        <div className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 pb-6">
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

            {company && type !== 'experience' && (
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

            {/* Show Read More arrow for interactive cards or grayed out text */}
            {type === 'project' && (
              <div className="flex gap-4 text-sm">
                {interactive && href ? (
                  <Link href={href} className="text-blue-600 hover:underline">
                    Read More →
                  </Link>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">
                    Read More →
                  </span>
                )}
              </div>
            )}
            {/* Show Details arrow for non-project interactive cards */}
            {type !== 'project' && interactive && href && (
              <div className="flex gap-4 text-sm">
                <Link href={href} className="text-blue-600 hover:underline">
                  Details →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
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

      {/* Show Read More arrow for interactive cards or grayed out text */}
      {type === 'project' && (
        <div className="flex gap-4 text-sm">
          {interactive && href ? (
            <span className="text-blue-600 hover:underline cursor-pointer">
              Read More →
            </span>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">
              Read More →
            </span>
          )}
        </div>
      )}
      {/* Show Details arrow for non-project interactive cards */}
      {type !== 'project' && interactive && href && (
        <div className="flex gap-4 text-sm">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Details →
          </span>
        </div>
      )}
    </CardWrapper>
  )
}