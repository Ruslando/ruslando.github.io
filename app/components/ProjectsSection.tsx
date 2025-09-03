import { projectsData } from '../data/projects'
import { truncateText } from '../utils/textUtils'
import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function ProjectsSection() {
  const projects = Object.values(projectsData)

  return (
    <div className="space-y-8">
      <SectionHeader description="Selected projects showcasing technical expertise and problem-solving capabilities.">
        Projects
      </SectionHeader>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="space-y-3">
            <ContentCard
              type="project"
              title={project.title}
              year={project.year}
              tags={project.technologies}
              interactive={true}
              href={`/projects/${project.id}`}
            >
              {truncateText(project.description, 300)}
            </ContentCard>
            {/* External links outside the interactive card */}
            <div className="flex gap-4 text-sm pl-6">
              {Object.entries(project.links).map(([type, url]) => (
                <a 
                  key={type} 
                  href={url} 
                  className="text-blue-600 hover:underline capitalize"
                >
                  {type}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}