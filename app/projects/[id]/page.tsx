import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectsData } from '../../data/projects'
import { marked } from 'marked'

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectsData[id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  // Helper function to extract sections from description
  const extractSection = (text: string, sectionTitle: string): string[] => {
    const lines = text.split('\n')
    const sectionIndex = lines.findIndex(line => 
      line.toLowerCase().includes(sectionTitle.toLowerCase())
    )
    
    if (sectionIndex === -1) return []
    
    const sectionLines = []
    for (let i = sectionIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) break
      if (line.startsWith('•') || line.startsWith('-')) {
        sectionLines.push(line.substring(1).trim())
      }
    }
    return sectionLines
  }

  // Extract features if they exist in description
  const features = extractSection(project.description, 'features')
  const challenges = extractSection(project.description, 'challenges')
  const results = extractSection(project.description, 'results')

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/?tab=projects" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <header className="mb-12 pb-8 border-b border-gray-200">
          <h1 className="text-3xl font-light mb-3 text-gray-900 leading-tight">
            {project.title}
          </h1>
          
          {project.subtitle && (
            <p className="text-lg text-gray-600 mb-6 font-light">
              {project.subtitle}
            </p>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Keywords:</h3>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.keys(project.links).length > 0 && (
            <div className="flex gap-4">
              {Object.entries(project.links).map(([type, url]) => (
                url && (
                  <a 
                    key={type}
                    href={url}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 text-sm font-medium capitalize shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {type === 'pdf' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    ) : type === 'code' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ) : type === 'demo' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 100 5H9V10z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                    <span>{type === 'pdf' ? 'Thesis PDF' : type}</span>
                  </a>
                )
              ))}
            </div>
          )}

        </header>

        {/* Full Description */}
        <section className="mb-12">
          <div 
            className="markdown-content text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: marked(project.description) 
            }}
          />
        </section>

        {/* Features (if extracted) */}
        {features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 text-gray-800">Key Features</h2>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges (if extracted) */}
        {challenges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 text-gray-800">Challenges & Solutions</h2>
            <ul className="space-y-2">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">⚡</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Results (if extracted) */}
        {results.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 text-gray-800">Results & Impact</h2>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        
      </div>
    </main>
  )
}