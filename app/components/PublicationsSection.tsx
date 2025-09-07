import { publicationsData, type Publication } from '../data/publications'
import { SectionHeader } from './ui/SectionHeader'
import { ContentCard } from './ui/ContentCard'

export default function PublicationsSection() {
  const publications: Publication[] = Object.values(publicationsData)

  return (
    <div className="space-y-8">
      <SectionHeader>
        Publications
      </SectionHeader>

      <div className="space-y-8">
        {publications.length > 0 ? (
          publications.map((paper: { id: string; title: string; year: string; authors: string; venue: string; abstract: string; links: Record<string, string> }) => (
            <div key={paper.id} className="space-y-3">
              <ContentCard
                type="publication"
                title={paper.title}
                year={paper.year}
                authors={paper.authors}
                venue={paper.venue}
                interactive={true}
                href={`/publications/${paper.id}`}
                expandable={true}
              >
                <div className="space-y-4">
                  <div>{paper.abstract}</div>
                  {/* External links inside the expandable content */}
                  <div className="flex gap-4 text-sm">
                    {Object.entries(paper.links).map(([type, url]) => (
                      <a 
                        key={type} 
                        href={url as string} 
                        className="text-blue-600 hover:underline capitalize"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {type}
                      </a>
                    ))}
                  </div>
                </div>
              </ContentCard>
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