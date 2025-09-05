import { publicationsData } from '../data/publications'
import { truncateText } from '../utils/textUtils'
import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function PublicationsSection() {
  const publications = Object.values(publicationsData)

  return (
    <div className="space-y-8">
      <SectionHeader>
        Publications
      </SectionHeader>

      <div className="space-y-8">
        {publications.length > 0 ? (
          publications.map((paper) => (
            <div key={paper.id} className="space-y-3">
              <ContentCard
                type="publication"
                title={paper.title}
                year={paper.year}
                authors={paper.authors}
                venue={paper.venue}
                interactive={true}
                href={`/publications/${paper.id}`}
              >
                {truncateText(paper.abstract, 250)}
              </ContentCard>
              {/* External links outside the interactive card */}
              <div className="flex gap-4 text-sm pl-6">
                {Object.entries(paper.links).map(([type, url]) => (
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
          ))
        ) : (
          <div className="pl-4 py-8 text-center">
            <p className="text-gray-500 italic">Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}