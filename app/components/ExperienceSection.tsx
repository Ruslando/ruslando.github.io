import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Your Job Title',
      company: 'Company Name',
      period: '2023 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brief description of your role and responsibilities.',
      achievements: [
        'Key achievement or responsibility',
        'Another important contribution',
        'Technical leadership or innovation'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <SectionHeader description="Professional experience, academic background, and career progression.">
        Experience & Education
      </SectionHeader>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ContentCard
            key={index}
            type="experience"
            title={exp.title}
            company={exp.company}
            period={exp.period}
            achievements={exp.achievements}
          >
            {exp.description}
          </ContentCard>
        ))}
      </div>

      {/* Education */}
      <div className="mt-12">
        <h3 className="text-xl font-medium mb-6 text-gray-800 pl-4">Education</h3>
        <div className="space-y-6">
          <ContentCard
            type="experience"
            title="Your Degree"
            company="University Name"
            period="Year - Year"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <div className="mt-2">
              <p className="text-gray-600 text-sm">
                Additional details or achievements
              </p>
            </div>
          </ContentCard>
        </div>
      </div>
    </div>
  )
}