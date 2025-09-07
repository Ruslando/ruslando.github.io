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
          <ContentCard
            key={project.id}
            type="project"
            title={project.title}
            year={project.year}
            tags={project.keywords}
            interactive={true}
            href={`/projects/${project.id}`}
            expandable={true}
          >
            <div className="space-y-4">
              <div>{truncateText(project.description, 300)}</div>
              
              {/* All links inside the expandable content */}
              {Object.entries(project.links).length > 0 && (
                <div className="flex gap-4 text-sm">
                  {Object.entries(project.links).map(([type, url]) => (
                    <a 
                      key={type} 
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                        type === 'pdf' 
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'text-blue-600 hover:underline'
                      }`}
                    >
                      {type === 'pdf' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                      {type.toUpperCase()}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </ContentCard>
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