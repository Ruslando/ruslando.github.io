'use client'

import { useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaDatabase, FaChevronDown, FaCubes, FaPlug, FaJava } from 'react-icons/fa'
import { SiVuedotjs, SiDotnet, SiPython, SiGraphql, SiNeo4J, SiDocker, SiJavascript, SiSpring } from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { SectionHeader } from './ui/SectionHeader'

const getTechIcon = (tech: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Vue.js': <SiVuedotjs className="w-3.5 h-3.5" />,
    'WebSockets': <FaPlug className="w-3.5 h-3.5" />,
    'GraphDB': <FaDatabase className="w-3.5 h-3.5" />,
    '.NET': <SiDotnet className="w-3.5 h-3.5" />,
    '.NET EF': <SiDotnet className="w-3.5 h-3.5" />,
    'Python': <SiPython className="w-3.5 h-3.5" />,
    'C#': <SiDotnet className="w-3.5 h-3.5" />,
    'JavaScript': <SiJavascript className="w-3.5 h-3.5" />,
    'Java': <FaJava className="w-3.5 h-3.5" />,
    'SQL': <FaDatabase className="w-3.5 h-3.5" />,
    'Entity Framework': <SiDotnet className="w-3.5 h-3.5" />,
    'SQL Server': <DiMsqlServer className="w-3.5 h-3.5" />,
    'MS SQL Server': <DiMsqlServer className="w-3.5 h-3.5" />,
    'Neo4j': <SiNeo4J className="w-3.5 h-3.5" />,
    'Docker': <SiDocker className="w-3.5 h-3.5" />,
    'Spring Boot': <SiSpring className="w-3.5 h-3.5" />,
    'Automerge': <FaCubes className="w-3.5 h-3.5" />,
  }
  return iconMap[tech] || null
}

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  location?: string
  description?: string[]
  technologies?: string[]
  languages?: string[]
  isExpanded?: boolean
  onToggle?: () => void
}

const TimelineItem = ({ title, subtitle, period, location, description, technologies, languages, isExpanded, onToggle }: TimelineItemProps) => (
  <div className="relative pl-8 pb-12 last:pb-0 group">
    {/* Line */}
    <div className="absolute left-[11px] top-[4px] bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 group-last:bg-transparent" />
    
    {/* Dot */}
    <div className="absolute left-[4px] top-[6px] w-4 h-4 rounded-full border-[3px] border-white dark:border-gray-900 bg-blue-500 dark:bg-blue-400 shadow-sm" />
    
    <button
      onClick={onToggle}
      className="w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
    >
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 font-display break-words">{title}</h3>
        </div>
        {onToggle && (
          <FaChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
        )}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1">
        <div className="text-slate-700 dark:text-slate-200 font-medium">{subtitle}</div>
        <span className="text-sm font-medium text-gray-400 shrink-0 font-mono">{period}</span>
      </div>
      {location && <div className="text-xs text-gray-400 uppercase tracking-wider">{location}</div>}
    </button>

    <div
      className="overflow-hidden transition-all duration-300 mt-3"
      style={{
        display: 'grid',
        gridTemplateRows: isExpanded ? '1fr' : '0fr',
      }}
    >
      <div className="pt-0 overflow-hidden">
        {languages && languages.length > 0 && (
          <div className="mb-3">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-2">Languages</div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800/70 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {getTechIcon(lang)}
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-2">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-700 dark:bg-slate-800/70 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {description && description.length > 0 && (
          <ul className="list-disc ml-4 space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed marker:text-gray-300">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
)

export default function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0)
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null)

  const experienceData = [
    {
      title: 'Software Developer (Working Student)',
      subtitle: 'Fraunhofer IPK',
      period: '10/2021 – 09/2025',
      location: 'Berlin, Germany',
      description: [
        'Added real-time collaboration features using WebSockets and CRDTs (SignalR, Automerge) to a Progressive Web App (Vue.js)',
        'Designed and implemented an OWL-compliant ontology for the structured management of internal datasets using Protégé and GraphDB'
      ],
      languages: ['Python', 'C#', 'JavaScript', 'SQL', 'Java'],
      technologies: ['Vue.js', '.NET EF', 'Neo4j', 'GraphDB', 'Docker', 'MS SQL Server', 'Automerge', 'Spring Boot']
    },
    {
      title: 'Software Developer (Intern)',
      subtitle: 'Fraunhofer IPK',
      period: '06/2021 – 09/2021',
      location: 'Berlin, Germany',
      description: [
        'Maintenance and development of a Progressive Web App using Vue.js, .NET Entity Framework and MS SQL Server',
        'Development of a data-preparation script in Python for preparing machine learning datasets'
      ],
      languages: ['Python', 'C#', 'JavaScript', 'SQL'],
      technologies: ['Vue.js', 'Entity Framework', 'SQL Server']
    }
  ]

  const educationData = [
    {
      title: 'Master of Science',
      subtitle: 'HTW Berlin - International Media and Computing',
      period: '10/2022 – 05/2025',
      location: 'Berlin, Germany',
      description: []
    },
    {
      title: 'Bachelor of Science',
      subtitle: 'HTW Berlin - International Media and Computing',
      period: '04/2018 – 04/2022',
      location: 'Berlin, Germany',
      description: []
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Experience Column */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
            <FaBriefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-display">Experience</h2>
        </div>
        <div>
          {experienceData.map((item, index) => (
            <TimelineItem 
              key={index} 
              {...item}
              isExpanded={expandedExperience === index}
              onToggle={() => setExpandedExperience(expandedExperience === index ? null : index)}
            />
          ))}
        </div>
      </div>

      {/* Education Column */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
            <FaGraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-display">Education</h2>
        </div>
        <div>
          {educationData.map((item, index) => (
            <TimelineItem 
              key={index} 
              {...item}
              isExpanded={expandedEducation === index}
              onToggle={() => setExpandedEducation(expandedEducation === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
