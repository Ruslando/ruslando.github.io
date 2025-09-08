import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Student Research Assistant – Software Development',
      company: 'Fraunhofer-Institut für Produktionsanlagen und Konstruktionstechnik',
      period: '10.2021 – Current',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Developed a Progressive Web App for data flow modeling using Vue.js, .NET Entity Framework, and MS SQL Server',
        'Implemented real-time collaboration features with Automerge CRDT technology',
        'Designed a domain-specific OWL ontology for semantic company data representation',
        'Built a RESTful API with Java Spring Boot for ontology management'
      ]
    }
  ]

  const education = [
    {
      title: 'Master of Science - International Media and Computing',
      company: 'Hochschule für Technik und Wirtschaft Berlin',
      period: '10.2022 – 05.2025',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Specialization: Game Technology & Interactive Systems and Web Technology',
        'Master\'s Thesis: Research and evaluation of the use of Large Language Models and graph databases for the development of agentic systems in Unity, utilizing LangChain / LangGraph and Neo4j'
      ]
    },
    {
      title: 'Bachelor of Science - International Media and Computing',
      company: 'Hochschule für Technik und Wirtschaft Berlin',
      period: '04.2018 – 04.2022',
      location: 'Berlin, Germany',
      description: '',
      achievements: [
        'Specialization: Game Technology & Interactive Systems and Visual Computing',
        'Bachelor\'s Thesis: Design and integration of a hardware-accelerated path tracing engine into an open-source video game, using Vulkan in the C programming language to enable real-time graphics rendering'
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