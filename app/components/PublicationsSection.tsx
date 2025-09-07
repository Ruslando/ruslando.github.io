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
          publications.map((paper: { id: string; title: string; year: string; authors: string; venue: string; abstract: string; links: Record<string, string> }) => (
            <div key={paper.id} className="space-y-3">
              <ContentCard
                type="publication"
                title={paper.title}
                year={paper.year}
                authors={paper.authors}
                venue={paper.venue}
                interactive={false}
                href={undefined}
                expandable={true}
              >
                {truncateText(paper.abstract, 250)}
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