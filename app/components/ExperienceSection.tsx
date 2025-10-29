import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Student Research Assistant – Software Development',
      company: 'Fraunhofer-Institut für Produktionsanlagen und Konstruktionstechnik',
      period: 'October 2021 – September 2025',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Developed a Progressive Web App for data flow modeling using Vue.js, .NET Entity Framework, and MS SQL Server',
        'Developed a real-time collaboration solution using Conflict-Free Replicated Data Types with Automerge',
        'Designed and developed a Java Spring Boot REST API as an abstraction layer for GraphDB integration',
        'Implemented a role-based and policy-based authorization system in .NET Entity Framework to secure data and API endpoints'
      ]
    },
    {
      title: 'Intern – Software Development',
      company: 'Fraunhofer-Institut für Produktionsanlagen und Konstruktionstechnik',
      period: 'June 2021 – September 2021',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Maintained and enhanced a Progressive Web App using Vue.js, .NET Entity Framework, and MS SQL Server',
        'Developed a data cleaning script in Python for preparing machine learning data'
      ]
    }
  ]

  const education = [
    {
      title: 'Master of Science - International Media and Computing',
      company: 'Hochschule für Technik und Wirtschaft Berlin',
      period: 'October 2022 – May 2025',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Specialization: Game Technology & Interactive Systems and Web Technology'
      ]
    },
    {
      title: 'Bachelor of Science - International Media and Computing',
      company: 'Hochschule für Technik und Wirtschaft Berlin',
      period: 'April 2018 – April 2022',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Specialization: Game Technology & Interactive Systems and Visual Computing'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <SectionHeader>
        Experience & Education
      </SectionHeader>

      {/* Work Experience */}
      <div className="space-y-8">
        <h3 className="text-xl font-medium mb-6 text-gray-800 pl-4">Work Experience</h3>
        {experiences.map((exp, index) => (
          <ContentCard
            key={index}
            type="experience"
            title={exp.title}
            company={exp.company}
            period={exp.period}
            achievements={exp.achievements}
            expandable={true}
          >
            {exp.description}
          </ContentCard>
        ))}
      </div>

      {/* Education */}
      <div className="mt-12">
        <h3 className="text-xl font-medium mb-6 text-gray-800 pl-4">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <ContentCard
              key={index}
              type="experience"
              title={edu.title}
              company={edu.company}
              period={edu.period}
              achievements={edu.achievements}
              expandable={true}
            >
              {edu.description}
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  )
}