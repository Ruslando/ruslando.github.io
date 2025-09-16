import { publicationsData, type Publication } from '../data/publications'
import { truncateText } from '../utils/textUtils'
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
          publications.map((paper: { id: string; title: string; year: string; authors: string; conference?: string; publisher?: string; pages?: string; venue?: string; abstract: string; keywords: string[]; links: Record<string, string> }) => (
            <div key={paper.id} className="space-y-3">
              <ContentCard
                type="publication"
                title={paper.title}
                year={paper.year}
                authors={paper.authors}
                conference={paper.conference}
                publisher={paper.publisher}
                pages={paper.pages}
                venue={paper.venue}
                tags={paper.keywords}
                interactive={false}
                href={undefined}
                expandable={true}
              >
                <div className="space-y-4">
                  <div>{truncateText(paper.abstract, 250)}</div>

                  {/* Publication links */}
                  {Object.entries(paper.links).length > 0 && (
                    <div className="flex gap-4 text-sm">
                      {Object.entries(paper.links).map(([type, url]) => (
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