import Link from 'next/link'
import { ReactNode } from 'react'
import { FaGithub, FaFileAlt, FaCode, FaPlay, FaExternalLinkAlt, FaWrench, FaTerminal } from 'react-icons/fa'
import { ProjectScrollLayout } from '../../components/ProjectScrollLayout'

interface ProjectSection {
  id: string
  label: string
  content: ReactNode
}

interface ProjectPageLayoutProps {
  title: string
  subtitle?: string
  summary?: string
  technologies?: string[]
  languages?: string[]
  links?: Record<string, string>
  sections: ProjectSection[]
}

export function ProjectPageLayout({
  title,
  subtitle,
  summary,
  technologies = [],
  languages = [],
  links = {},
  sections
}: ProjectPageLayoutProps) {
  const navSections = [{ id: 'overview', label: 'Overview' }, ...sections.map(section => ({ id: section.id, label: section.label }))]

  return (
    <ProjectScrollLayout sections={navSections}>
      <section id="overview" data-snap-section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-8 py-16 w-full">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2"
            >
              ← Back to Projects
            </Link>
          </div>

          <header className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-3xl font-light mb-3 text-gray-900 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base text-gray-600 mb-6 font-light">
                {subtitle}
              </p>
            )}

            {summary && (
              <p className="text-base text-gray-700 mb-6">
                {summary}
              </p>
            )}

            {(technologies.length > 0 || languages.length > 0) && (
              <div className="mb-6 space-y-3">
                {technologies.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaWrench className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {languages.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaTerminal className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full border border-green-200"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {Object.keys(links).length > 0 && (
              <div className="flex gap-4 flex-wrap">
                {Object.entries(links).map(([type, url]) => (
                  url && (
                    <a
                      key={type}
                      href={url}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 text-sm font-medium capitalize shadow-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {type === 'pdf' ? (
                        <FaFileAlt className="w-4 h-4" />
                      ) : type === 'github' ? (
                        <FaGithub className="w-4 h-4" />
                      ) : type === 'code' ? (
                        <FaCode className="w-4 h-4" />
                      ) : type === 'demo' ? (
                        <FaPlay className="w-4 h-4" />
                      ) : (
                        <FaExternalLinkAlt className="w-4 h-4" />
                      )}
                      <span>{type === 'pdf' ? 'Thesis' : type === 'github' ? 'GitHub' : type}</span>
                    </a>
                  )
                ))}
              </div>
            )}
          </header>
        </div>
      </section>

      {sections.map(section => (
        <section
          key={section.id}
          id={section.id}
          data-snap-section
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-8 py-16 w-full">
            <h2 className="text-xl font-medium mb-6 text-gray-800">
              {section.label}
            </h2>
            {section.content}
          </div>
        </section>
      ))}
    </ProjectScrollLayout>
  )
}
