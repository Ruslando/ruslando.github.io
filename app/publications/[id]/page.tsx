import Link from 'next/link'
import { notFound } from 'next/navigation'
import { publicationsData } from '../../data/publications'

export async function generateStaticParams() {
  return Object.keys(publicationsData).map((id) => ({
    id: id,
  }))
}

export default async function PublicationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const publication = publicationsData[id as keyof typeof publicationsData]

  if (!publication) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/?tab=publications" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2"
          >
            ← Back to Publications
          </Link>
        </div>

        {/* Paper Header */}
        <header className="mb-12 pb-8 border-b border-gray-200">
          <h1 className="text-3xl font-light mb-4 text-gray-900 leading-tight">
            {publication.title}
          </h1>
          
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-medium">Authors:</span> {publication.authors}
            </p>
            <p>
              <span className="font-medium">Published in:</span> {publication.venue} ({publication.year})
            </p>
            {publication.citations > 0 && (
              <p>
                <span className="font-medium">Citations:</span> {publication.citations}
              </p>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6">
            {Object.entries(publication.links).map(([type, url]) => (
              <a 
                key={type}
                href={url}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 text-sm font-medium capitalize shadow-sm"
              >
                <span>{type === 'pdf' ? '📄' : type === 'code' ? '💻' : type === 'doi' ? '🔗' : '📋'}</span>
                <span>{type}</span>
              </a>
            ))}
          </div>
        </header>

        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-4 text-gray-800">Abstract</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {publication.abstract}
            </p>
          </div>
        </section>

        {/* Keywords */}
        {publication.keywords && (
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 text-gray-800">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {publication.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* BibTeX */}
        {publication.bibtex && (
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 text-gray-800">Citation</h2>
            <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                {publication.bibtex}
              </pre>
            </div>
          </section>
        )}
        
      </div>
    </main>
  )
}