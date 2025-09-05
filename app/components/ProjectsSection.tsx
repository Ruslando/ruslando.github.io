'use client'

import { projectsData } from '../data/projects'
import { truncateText } from '../utils/textUtils'
import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function ProjectsSection() {
  const projects = Object.values(projectsData)
  const thesisProjects = projects.filter(p => p.category === 'thesis')
  const courseworkProjects = projects.filter(p => p.category === 'coursework')

  const renderProjectGroup = (projectList: typeof projects, title: string) => (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-800 pl-4">{title}</h3>
      <div className="space-y-8">
        {projectList.map((project) => (
          <div key={project.id} className="space-y-3">
            <div className="relative">
              <ContentCard
                type="project"
                title={project.title}
                year={project.year}
                tags={project.keywords}
                interactive={true}
                href={`/projects/${project.id}`}
              >
                {truncateText(project.description, 300)}
              </ContentCard>
              
              {/* PDF button at bottom right */}
              {project.links.pdf && (
                <div className="absolute bottom-4 right-4">
                  <a
                    href={project.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    PDF
                  </a>
                </div>
              )}
              
              {/* Other external links below the card */}
              {Object.entries(project.links).filter(([type]) => type !== 'pdf').length > 0 && (
                <div className="flex gap-4 text-sm pl-6 mt-3">
                  {Object.entries(project.links).filter(([type]) => type !== 'pdf').map(([type, url]) => (
                    <a 
                      key={type} 
                      href={url as string} 
                      className="text-blue-600 hover:underline capitalize"
                    >
                      {type}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-12">
      <SectionHeader>
        Projects
      </SectionHeader>

      {thesisProjects.length > 0 && renderProjectGroup(thesisProjects, "Thesis")}
      {courseworkProjects.length > 0 && renderProjectGroup(courseworkProjects, "Courseworks")}
    </div>
  )
}