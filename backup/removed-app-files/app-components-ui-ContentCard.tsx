'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { FaChevronDown, FaWrench, FaTerminal } from 'react-icons/fa'

interface ContentCardProps {
  title: string
  date?: string
  year?: string
  type?: 'project' | 'publication' | 'experience' | 'writing'
  compact?: boolean
  interactive?: boolean
  href?: string
  tags?: string[]
  technologies?: string[]
  languages?: string[]
  authors?: string
  venue?: string
  conference?: string
  publisher?: string
  pages?: string
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
  technologies,
  languages,
  authors,
  venue,
  conference,
  publisher,
  pages,
  company,
  period,
  achievements,
  expandable = false,
  compact = false,
  children
}: ContentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const colorMap = {
    project: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    publication: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    experience: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30',
    writing: 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/30'
  }

  const CardWrapper = ({ children: cardChildren }: { children: ReactNode }) => {
    const baseClasses = compact
      ? `border bg-white rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-lg text-sm ${colorMap[type]}`
      : `border bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${colorMap[type]}`
    
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
    const hasDetailPage = interactive && href

    return (
      <div
        className={`border bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${colorMap[type]}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={compact ? "w-full p-3 flex items-center justify-between hover:bg-blue-50/50 transition-colors cursor-pointer" : "w-full p-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors cursor-pointer"}
        >
          <div className="flex items-start justify-between w-full min-w-0">
            <div className="flex-1 min-w-0 mr-3">
              <h3 className={compact ? "text-sm font-bold text-gray-900 leading-tight text-left" : "text-lg font-bold text-gray-900 leading-tight text-left"}>
                {hasDetailPage ? (
                  <Link
                    href={href}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </h3>
              {hasDetailPage && (
                <div className={compact ? 'text-left mt-1' : 'text-left mt-1'}>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full whitespace-nowrap inline-block">
                    Article
                  </span>
                </div>
              )}
              {company && type === 'experience' && (
                <p className="text-gray-600 text-sm mt-1 text-left">{company}</p>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <span className={compact ? 'text-xs text-gray-500 whitespace-nowrap' : 'text-sm text-gray-500 whitespace-nowrap'}>
                {date || year || period}
              </span>
              <FaChevronDown
                className={`w-5 h-5 text-gray-600 transition-all duration-300 flex-shrink-0 ${
                  isExpanded ? 'rotate-180' : isHovered ? 'translate-y-0.5' : ''
                }`}
              />
            </div>
          </div>
        </button>

        <div className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : isHovered && !isExpanded ? 'max-h-20 opacity-70' : 'max-h-0 opacity-0'
        }`}>
          {/* Vignette gradient overlay for hover preview */}
          <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-900/50 via-blue-700/25 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            isHovered && !isExpanded ? 'opacity-100' : 'opacity-0'
          }`} />
          <div className={compact ? 'px-4 pb-4' : 'px-6 pb-6'}>
            {/* Metadata based on type */}
            {authors && (
              <p className="text-gray-600 mb-2 text-sm">
                <span className="font-medium">Authors:</span> {authors}
              </p>
            )}
            
            {conference && (
              <p className="text-gray-600 mb-2 text-sm">
                <span className="font-medium">Conference:</span> {conference}
              </p>
            )}

            {publisher && (
              <p className="text-gray-600 mb-2 text-sm">
                <span className="font-medium">Publisher:</span> {publisher}
              </p>
            )}

            {pages && (
              <p className="text-gray-600 mb-2 text-sm">
                <span className="font-medium">Pages:</span> {pages}
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

            {/* Technologies and Languages for projects */}
            {type === 'project' && (technologies || languages) && (
              <div className="text-gray-600 text-sm mb-3 space-y-1.5">
                {technologies && technologies.length > 0 && (
                  <p className="flex items-start gap-2">
                    <FaWrench className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><span className="font-medium text-gray-700">Technologies:</span> {technologies.join(', ')}</span>
                  </p>
                )}
                {languages && languages.length > 0 && (
                  <p className="flex items-start gap-2">
                    <FaTerminal className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><span className="font-medium text-gray-700">Languages:</span> {languages.join(', ')}</span>
                  </p>
                )}
              </div>
            )}

            {/* Content */}
            <div className={compact ? 'text-gray-700 leading-tight mb-2 text-sm' : 'text-gray-700 leading-relaxed mb-3'}>
              {children}
            </div>

            {/* Achievements for experience */}
            {achievements && achievements.length > 0 && (
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                {achievements.map((achievement, i) => (
                  <li key={i}>• {achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <CardWrapper>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
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
      
      {conference && (
        <p className="text-gray-600 mb-2 text-sm">
          <span className="font-medium">Conference:</span> {conference}
        </p>
      )}

      {publisher && (
        <p className="text-gray-600 mb-2 text-sm">
          <span className="font-medium">Publisher:</span> {publisher}
        </p>
      )}

      {pages && (
        <p className="text-gray-600 mb-2 text-sm">
          <span className="font-medium">Pages:</span> {pages}
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

      {/* Technologies and Languages for projects */}
      {type === 'project' && (technologies || languages) && (
        <div className="text-gray-600 text-sm mb-3 space-y-1.5">
          {technologies && technologies.length > 0 && (
            <p className="flex items-start gap-2">
              <FaWrench className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium text-gray-700">Technologies:</span> {technologies.join(', ')}</span>
            </p>
          )}
          {languages && languages.length > 0 && (
            <p className="flex items-start gap-2">
              <FaTerminal className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium text-gray-700">Languages:</span> {languages.join(', ')}</span>
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="text-gray-700 leading-relaxed mb-3">
        {children}
      </div>

      {/* Achievements for experience */}
      {achievements && achievements.length > 0 && (
        <ul className="text-sm text-gray-600 space-y-1 mb-3">
          {achievements.map((achievement, i) => (
            <li key={i}>• {achievement}</li>
          ))}
        </ul>
      )}

      {/* Show Read More arrow for interactive cards */}
      {type === 'project' && interactive && href && (
        <div className="flex gap-4 text-sm">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Read More →
          </span>
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
