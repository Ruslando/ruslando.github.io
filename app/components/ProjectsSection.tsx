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
      <h3 className="text-xl font-medium text-gray-800 pl-4 mb-6">{title}</h3>
      <div className="space-y-8">
        {projectList.map((project) => (
          <ContentCard
            key={project.id}
            type="project"
            title={project.title}
            year={project.year}
            tags={project.keywords}
            interactive={project.id === 'quake-path-tracing'}
            href={project.id === 'quake-path-tracing' ? `/projects/${project.id}` : undefined}
            expandable={true}
          >
            <div className="space-y-4">
              <div>{truncateText(project.description, 300)}</div>
              
              {/* External links inside the expandable content (excluding PDF and GitHub) */}
              {Object.entries(project.links).filter(([type]) => type !== 'pdf' && type !== 'github').length > 0 && (
                <div className="flex gap-4 text-sm">
                  {Object.entries(project.links).filter(([type]) => type !== 'pdf' && type !== 'github').map(([type, url]) => (
                    <a 
                      key={type} 
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
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