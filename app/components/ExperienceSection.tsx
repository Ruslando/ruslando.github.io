'use client'

import { useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaDatabase, FaChevronDown, FaCubes, FaPlug, FaJava } from 'react-icons/fa'
import { SiVuedotjs, SiDotnet, SiPython, SiGraphql, SiNeo4J, SiDocker, SiJavascript, SiSpring, SiWikidata, SiPytorch, SiJupyter } from 'react-icons/si'
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
    'SPARQL': <SiWikidata className="w-3.5 h-3.5" />,
    'Cypher': <SiNeo4J className="w-3.5 h-3.5" />,
    'PyTorch': <SiPytorch className="w-3.5 h-3.5" />,
    'Jupyter': <SiJupyter className="w-3.5 h-3.5" />,
  }
  return iconMap[tech] || null
}

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  location?: string
  description?: string[]
  descriptionStyle?: 'list' | 'lines'
  skillGroups?: { label: string; items: string[] }[]
  isExpanded?: boolean
  onToggle?: () => void
}

const TimelineItem = ({ title, subtitle, period, location, description, descriptionStyle = 'list', skillGroups, isExpanded, onToggle }: TimelineItemProps) => (
  <div className="relative pl-8 pb-8 last:pb-0 group">
    {/* Line */}
    <div className="absolute left-[11px] top-[4px] bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 group-last:bg-transparent" />
    
    {/* Dot */}
    <div className="absolute left-[4px] top-[6px] w-4 h-4 rounded-full border-[3px] border-white dark:border-gray-900 bg-blue-600 dark:bg-blue-400 shadow-sm" />
    
    <button
      onClick={onToggle}
      className="w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
    >
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 font-display break-words">{title}</h3>
        </div>
        {onToggle && (
          <FaChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
        )}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1">
        <div className="text-gray-700 font-medium">{subtitle}</div>
        <span className="text-sm font-medium text-gray-400 shrink-0 font-mono">{period}</span>
      </div>
      {location && <div className="text-xs text-gray-400 uppercase tracking-widest">{location}</div>}
    </button>

    <div
      className="overflow-hidden transition-all duration-300 mt-3"
      style={{
        display: 'grid',
        gridTemplateRows: isExpanded ? '1fr' : '0fr',
      }}
    >
      <div className="pt-0 overflow-hidden">
        {description && description.length > 0 && (
          descriptionStyle === 'lines' ? (
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 whitespace-pre-line">
              {description.join('\n')}
            </p>
          ) : description.length === 1 ? (
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{description[0]}</p>
          ) : (
            <ul className="list-disc ml-4 space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed marker:text-gray-300 mb-3">
              {description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )
        )}

        {skillGroups && skillGroups.length > 0 && skillGroups.map((group) => (
          group.items.length > 0 && (
            <div key={group.label} className="mb-3 last:mb-0">
              <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-2">{group.label}</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <span 
                    key={`${group.label}-${idx}`}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 dark:bg-gray-800/70 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                  >
                    {getTechIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        ))}
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
        'Four years of experience as a web developer maintaining and enhancing a Progressive Web App for collaborative dataflow design and analysis. Moreover, designed and developed OWL-compliant ontologies and database schemas for structured data management.'
      ],
      skillGroups: [
        { label: 'Languages', items: ['Python', 'C#', 'Java', 'JavaScript', 'SQL', 'SPARQL', 'Cypher'] },
        { label: 'Technologies & Tools', items: ['Vue.js', 'Entity Framework', 'Automerge', 'Spring Boot', 'GraphDB', 'Neo4j', 'Docker', 'MS SQL Server'] }
      ]
    },
    {
      title: 'Software Developer (Intern)',
      subtitle: 'Fraunhofer IPK',
      period: '06/2021 – 09/2021',
      location: 'Berlin, Germany',
      description: [
        'Supported maintenance and feature development of a Vue.js/.NET Entity Framework Progressive Web App while creating data-preparation tooling in Python for machine learning pipelines.'
      ],
      skillGroups: [
        { label: 'Languages', items: ['Python', 'C#', 'JavaScript', 'SQL'] },
        { label: 'Technologies & Tools', items: ['Vue.js', 'Entity Framework', 'PyTorch', 'Jupyter', 'SQL Server'] }
      ]
    }
  ]

  const educationData = [
    {
      title: 'Master of Science',
      subtitle: 'HTW Berlin - International Media and Computing',
      period: '10/2022 – 05/2025',
      location: 'Berlin, Germany',
      description: [
        'Specialized in semantic web technologies, VR applications, and Gen AI technologies. Wrote a master thesis on RAG-based agent development in interactive environments.',
        'Final grade: 1.7 (120 ECTS points).'
      ]
    },
    {
      title: 'Bachelor of Science',
      subtitle: 'HTW Berlin - International Media and Computing',
      period: '04/2018 – 04/2022',
      location: 'Berlin, Germany',
      description: [
        'Specialized in game development, engine development, and graphics programming. Wrote a bachelor thesis in computer graphics implementing a path-tracing rendering engine in a retro video game.',
        'Final grade: 1.7 (180 ECTS points).'
      ]
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
              descriptionStyle="lines"
              isExpanded={expandedEducation === index}
              onToggle={() => setExpandedEducation(expandedEducation === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
