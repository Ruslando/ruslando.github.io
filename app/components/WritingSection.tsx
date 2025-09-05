import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function WritingSection() {
  const writings = [
    // {
    //   title: 'Your Blog Post or Talk Title',
    //   date: 'Month Year',
    //   type: 'Blog Post',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brief description of your writing or presentation.',
    //   link: '#'
    // }
  ]

  return (
    <div className="space-y-8">
      <SectionHeader>
        Blog
      </SectionHeader>

      <div className="space-y-6">
        {writings.length > 0 ? (
          writings.map((item, index) => (
            <div key={index} className="space-y-3">
              <ContentCard
                type="writing"
                title={item.title}
                date={item.date}
                tags={[item.type]}
                interactive={!!item.link}
                href={item.link}
              >
                {item.description}
              </ContentCard>
              {/* External link outside the interactive card */}
              {item.link && (
                <div className="flex gap-4 text-sm pl-6">
                  <a href={item.link} className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="pl-4 py-8 text-center">
            <p className="text-gray-500 italic">Nothing to see here yet...</p>
          </div>
        )}
      </div>
    </div>
  )
}