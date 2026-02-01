import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectsData } from '../../data/projects'
import { FaGithub, FaFileAlt, FaCode, FaPlay, FaExternalLinkAlt, FaWrench, FaTerminal, FaProjectDiagram, FaBrain, FaBolt, FaSitemap } from 'react-icons/fa'
import { MastersThesisGallery } from '../../components/MastersThesisGallery'
import {
  RenderingComparisonGallery,
  AccelerationStructuresGallery,
  PVSSystemGallery,
  PipelineDiagramsGallery,
  SamplingComparisonGallery
} from '../../components/BachelorThesisGalleries'
import {
  NumericalErrorGallery,
  OcclusionFillingGallery
} from '../../components/IC1Galleries'
import { ProjectScrollLayout } from '../../components/ProjectScrollLayout'

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

  // Redirect if project has no full article
  if (!('description' in project) || !project.description) {
    notFound()
  }

  const mastersLayoutVariant: string = 'split'

  const buildTextSections = (content: string) => {
    const lines = content.split('\n')
    const sections: { id: string; label: string; body: string }[] = []

    let currentTitle = 'Overview'
    let currentBody: string[] = []

    const pushSection = () => {
      const body = currentBody.join('\n').trim()
      if (!body) return
      const id = currentTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      sections.push({ id: id || 'overview', label: currentTitle, body })
    }

    for (const line of lines) {
      const headingMatch = line.match(/^\s*##\s+(.*)/)
      if (headingMatch) {
        pushSection()
        currentTitle = headingMatch[1].trim() || 'Section'
        currentBody = []
        continue
      }
      if (line.trim() === '---') {
        continue
      }
      if (line.startsWith('# ') && currentTitle === 'Overview') {
        continue
      }
      currentBody.push(line)
    }

    pushSection()
    return sections.length > 0
      ? sections
      : [{ id: 'overview', label: 'Overview', body: content }]
  }

  const renderTextWithGalleries = (text: string) => {
    const content = text
      .replace(/<\s*MastersThesisGallery\s*\/>/g, '<!-- MASTERS_GALLERY -->')
      .replace(/<\s*RenderingComparisonGallery\s*\/>/g, '<!-- RENDERING_GALLERY -->')
      .replace(/<\s*AccelerationStructuresGallery\s*\/>/g, '<!-- ACCELERATION_GALLERY -->')
      .replace(/<\s*PVSSystemGallery\s*\/>/g, '<!-- PVS_GALLERY -->')
      .replace(/<\s*PipelineDiagramsGallery\s*\/>/g, '<!-- PIPELINE_GALLERY -->')
      .replace(/<\s*SamplingComparisonGallery\s*\/>/g, '<!-- SAMPLING_GALLERY -->')
      .replace(/<\s*NumericalErrorGallery\s*\/>/g, '<!-- NUMERICAL_ERROR_GALLERY -->')
      .replace(/<\s*OcclusionFillingGallery\s*\/>/g, '<!-- OCCLUSION_FILLING_GALLERY -->')

    const parts = content.split(/(<!-- \w+_GALLERY -->)/)

    const stripMarkdown = (value: string) => value
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/^\s*#+\s*/g, '')

    const renderTextBlock = (block: string) => {
      const trimmed = block.trim()
      if (!trimmed) return null

      const lines = trimmed.split('\n').map(line => stripMarkdown(line.trim())).filter(Boolean)
      const listItems = lines.filter(line => line.startsWith('- ') || line.startsWith('• '))
      const paragraphLines = lines.filter(line => !(line.startsWith('- ') || line.startsWith('• ')))

      return (
        <div className="space-y-4">
          {paragraphLines.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {listItems.length > 0 && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {listItems.map((item, idx) => (
                <li key={idx}>{item.replace(/^[-•]\s+/, '')}</li>
              ))}
            </ul>
          )}
        </div>
      )
    }

    return (
      <>
        {parts.map((part, index) => {
          if (part === '<!-- MASTERS_GALLERY -->') {
            return <div key={index} className="my-8"><MastersThesisGallery /></div>
          } else if (part === '<!-- RENDERING_GALLERY -->') {
            return <div key={index} className="my-8"><RenderingComparisonGallery /></div>
          } else if (part === '<!-- ACCELERATION_GALLERY -->') {
            return <div key={index} className="my-8"><AccelerationStructuresGallery /></div>
          } else if (part === '<!-- PVS_GALLERY -->') {
            return <div key={index} className="my-8"><PVSSystemGallery /></div>
          } else if (part === '<!-- PIPELINE_GALLERY -->') {
            return <div key={index} className="my-8"><PipelineDiagramsGallery /></div>
          } else if (part === '<!-- SAMPLING_GALLERY -->') {
            return <div key={index} className="my-8"><SamplingComparisonGallery /></div>
          } else if (part === '<!-- NUMERICAL_ERROR_GALLERY -->') {
            return <div key={index} className="my-8"><NumericalErrorGallery /></div>
          } else if (part === '<!-- OCCLUSION_FILLING_GALLERY -->') {
            return <div key={index} className="my-8"><OcclusionFillingGallery /></div>
          }
          return <div key={index}>{renderTextBlock(part)}</div>
        })}
      </>
    )
  }

  const renderArchitectureSection = (text: string) => {
    const stripMarkdown = (value: string) => value
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/^\s*#+\s*/g, '')

    const hasGallery = /<\s*MastersThesisGallery\s*\/>/i.test(text)
    const cleanedText = text.replace(/<\s*MastersThesisGallery\s*\/>/gi, '')
    const lines = cleanedText.split('\n').map(line => stripMarkdown(line.trim())).filter(Boolean)
    const introLines: string[] = []
    const knowledgeLines: string[] = []
    const agentLines: string[] = []
    const toolBullets: string[] = []

    let current: 'intro' | 'knowledge' | 'agent' = 'intro'

    for (const line of lines) {
      if (/knowledge graph/i.test(line)) {
        current = 'knowledge'
        knowledgeLines.push(line.replace(/^\*+|\*+$/g, ''))
        continue
      }
      if (/agent framework/i.test(line)) {
        current = 'agent'
        agentLines.push(line.replace(/^\*+|\*+$/g, ''))
        continue
      }
      if (line.startsWith('- ') || line.startsWith('• ')) {
        toolBullets.push(line.replace(/^[-•]\s+/, ''))
        continue
      }

      if (current === 'intro') introLines.push(line)
      if (current === 'knowledge') knowledgeLines.push(line)
      if (current === 'agent') agentLines.push(line)
    }

    const intro = introLines.join(' ')
    const knowledge = knowledgeLines.join(' ').replace(/^\*+|\*+$/g, '')
    const agent = agentLines.join(' ').replace(/^\*+|\*+$/g, '')

    if (mastersLayoutVariant === 'timeline') {
      return (
        <div className="space-y-8">
          {intro && <p className="text-gray-700 leading-relaxed">{intro}</p>}

          <div className="grid gap-6 md:grid-cols-3 text-sm">
            <div className="border-l-2 border-blue-300 pl-4">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <FaSitemap className="w-3.5 h-3.5" />
                <span className="font-semibold text-gray-900">World Model</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{knowledge}</p>
            </div>
            <div className="border-l-2 border-emerald-300 pl-4">
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <FaBrain className="w-3.5 h-3.5" />
                <span className="font-semibold text-gray-900">Reasoning</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{agent}</p>
            </div>
            <div className="border-l-2 border-amber-300 pl-4">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <FaBolt className="w-3.5 h-3.5" />
                <span className="font-semibold text-gray-900">Action</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{toolBullets[1] ?? 'Runtime method invocation.'}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 grid gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <FaProjectDiagram className="w-4 h-4" />
              <span className="font-semibold text-gray-900">Tool Split</span>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">Static tools</p>
                <p className="text-gray-700">{toolBullets[0] ?? 'Scene exploration and querying.'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">Dynamic tools</p>
                <p className="text-gray-700">{toolBullets[1] ?? 'Runtime method invocation.'}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-8">
        {intro && <p className="text-gray-700 leading-relaxed">{intro}</p>}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-l-2 border-blue-300 pl-4">
            <div className="flex items-center gap-2 text-blue-700 mb-2">
              <FaSitemap className="w-3.5 h-3.5" />
              <span className="font-semibold text-gray-900">Knowledge Graph</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">{knowledge}</p>
          </div>
          <div className="border-l-2 border-emerald-300 pl-4">
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <FaBrain className="w-3.5 h-3.5" />
              <span className="font-semibold text-gray-900">Agent Framework</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">{agent}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center gap-2 text-gray-700 mb-3">
            <FaProjectDiagram className="w-4 h-4" />
            <span className="font-semibold text-gray-900">Tool Split</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Static tools</p>
              <p className="text-gray-700">{toolBullets[0] ?? 'Scene exploration and querying.'}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Dynamic tools</p>
              <p className="text-gray-700">{toolBullets[1] ?? 'Runtime method invocation.'}</p>
            </div>
          </div>
        </div>
        {hasGallery && (
          <div className="mt-8">
            <MastersThesisGallery />
          </div>
        )}
      </div>
    )
  }

  const renderEvaluationSection = (text: string) => {
    const stripMarkdown = (value: string) => value
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/^\s*#+\s*/g, '')

    const lines = text
      .replace(/<\s*MastersThesisGallery\s*\/>/gi, '')
      .split('\n')
    const sections: Record<string, string[]> = {}
    let current = 'Summary'
    sections[current] = []

    for (const line of lines) {
      const match = line.match(/^\s*###\s+(.*)/)
      if (match) {
        current = match[1].trim()
        sections[current] = []
        continue
      }
      const trimmed = stripMarkdown(line.trim())
      if (!trimmed) continue
      sections[current].push(trimmed)
    }

    const methodology = (sections['Methodology'] ?? []).join(' ')
    const results = (sections['Results'] ?? []).join(' ')
    const summary = (sections['Summary'] ?? []).join(' ')

    if (!methodology && !results) {
      return renderTextWithGalleries(text)
    }

    return (
      <div className="space-y-6">
        {summary && <p className="text-gray-700 leading-relaxed">{summary}</p>}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Methodology</h4>
            <p className="text-gray-700 leading-relaxed">{methodology}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Results</h4>
            <p className="text-gray-700 leading-relaxed">{results}</p>
          </div>
        </div>
      </div>
    )
  }

  const descriptionSections = buildTextSections(project.description)
  const sections = [
    { id: 'header', label: 'Overview' },
    ...descriptionSections.map(section => ({ id: section.id, label: section.label }))
  ]

  return (
    <ProjectScrollLayout sections={sections}>
      <section id="header" data-snap-section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-8 py-16 w-full">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2"
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
              <p className="text-base text-gray-600 mb-6 font-light">
                {project.subtitle}
              </p>
            )}

            {(project.summary || project.card_description) && (
              <p className="text-base text-gray-700 mb-6">
                {project.summary ?? project.card_description}
              </p>
            )}

            {/* Technologies and Languages */}
            {(project.technologies || project.languages) && (
              <div className="mb-6 space-y-3">
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaWrench className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.languages && project.languages.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaTerminal className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full border border-green-200"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Links */}
            {Object.keys(project.links).length > 0 && (
              <div className="flex gap-4 flex-wrap">
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
                        <FaFileAlt className="w-4 h-4" />
                      ) : type === 'github' ? (
                        <FaGithub className="w-4 h-4" />
                      ) : type === 'code' ? (
                        <FaCode className="w-4 h-4" />
                      ) : type === 'demo' ? (
                        <FaPlay className="w-4 h-4" />
                      ) : (
                        <FaExternalLinkAlt className="w-4 h-4" />
                      )}
                      <span>{type === 'pdf' ? 'Thesis' : type === 'github' ? 'GitHub' : type}</span>
                    </a>
                  )
                ))}
              </div>
            )}

          </header>
        </div>
      </section>

      {descriptionSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          data-snap-section
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-8 py-16 w-full">
            {index > 0 && (
              <h2 className="text-xl font-medium mb-6 text-gray-800">
                {section.label}
              </h2>
            )}
            <div>
              {project.id === 'masters-thesis' && section.label.toLowerCase() === 'system architecture'
                ? renderArchitectureSection(section.body)
                : project.id === 'masters-thesis' && section.label.toLowerCase() === 'evaluation'
                  ? renderEvaluationSection(section.body)
                  : renderTextWithGalleries(section.body)}
            </div>
          </div>
        </section>
      ))}
    </ProjectScrollLayout>
  )
}