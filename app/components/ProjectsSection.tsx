'use client'

import { useMemo, useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa'
import { projectsData, type Project } from '../data/projects'
import { SectionHeader } from './ui/SectionHeader'

export default function ProjectsSection() {
  const projectsSorted = useMemo(() => {
    const toSortValue = (year: string | undefined) => {
      if (!year) return 0
      if (/ongoing/i.test(year)) return 9999
      const matches = year.match(/\b(19|20)\d{2}\b/g)
      if (!matches?.length) return 0
      return Number(matches[matches.length - 1])
    }

    return Object.values(projectsData)
      .slice()
      .sort((a, b) => toSortValue(b.year) - toSortValue(a.year)) as Project[]
  }, [])

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activePage, setActivePage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  const scrollBy = (offset: number) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const scrollNext = () => {
    if (!trackRef.current) return
    scrollBy(trackRef.current.clientWidth * 0.85)
  }

  const scrollPrev = () => {
    if (!trackRef.current) return
    scrollBy(-trackRef.current.clientWidth * 0.85)
  }

  useEffect(() => {
    const container = trackRef.current
    if (!container) return

    let raf = 0
    const update = () => {
      const children = Array.from(container.children) as HTMLElement[]
      if (!children.length) return
      const first = children[0]
      let step = first.getBoundingClientRect().width
      if (children.length > 1) {
        const second = children[1]
        const stepPx = second.offsetLeft - first.offsetLeft
        if (stepPx > 0) step = stepPx
      }

      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
      const pages = Math.max(1, Math.floor(maxScroll / step) + 1)
      setTotalPages(pages)

      if (pages === 1 || maxScroll === 0) {
        setActivePage(0)
        return
      }

      const page = Math.min(pages - 1, Math.max(0, Math.round(container.scrollLeft / step)))
      setActivePage(page)
    }

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    const onResize = () => update()

    update()
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [projectsSorted.length])

  return (
    <div className="space-y-8">
      <SectionHeader description="A curated selection of some of my highlight projects.">
        Portfolio
      </SectionHeader>

      <div className="relative">
        <button
          onClick={scrollPrev}
          aria-label="Scroll previous projects"
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 h-10 w-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition"
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          role="list"
          aria-label="Projects"
        >
          {projectsSorted.map(project => {
            const imageSrc = (project as Project & { image?: string }).image ?? '/bachelor_thesis/quake_bild.png'

            const Card = (
              <article className="group w-72 sm:w-80 md:w-96 h-[420px] flex-shrink-0 snap-start rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all duration-300 flex flex-col overflow-hidden">
                <div className="relative h-40 sm:h-44 w-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {(project.technologies?.length || project.languages?.length) && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                      <div className="p-4 space-y-2">
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.technologies.slice(0, 4).map(tech => (
                              <span key={tech} className="text-xs rounded-full border border-[rgba(255,255,255,0.4)] text-[#ffffff] px-2 py-1 bg-white/10 backdrop-blur-sm shadow-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        {project.languages && project.languages.length > 0 && (
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.languages.slice(0, 3).map(lang => (
                              <span key={lang} className="text-xs rounded-full border border-[rgba(255,255,255,0.4)] text-[#ffffff] px-2 py-1 bg-white/10 backdrop-blur-sm shadow-sm">
                                {lang}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 p-6 flex flex-col min-h-0">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {project.card_description && (
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {project.card_description}
                    </p>
                  )}

                  <div className="mt-auto flex items-center justify-start gap-4 text-xs text-gray-500 pt-4">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors z-20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span className="font-medium">GitHub</span>
                      </a>
                    )}
                    {project.links?.pdf && (
                      <a
                        href={project.links.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors z-20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaFileAlt className="w-3.5 h-3.5" />
                        <span className="font-medium">PDF</span>
                      </a>
                    )}
                    {project.links?.showtime ? (
                      <a
                        href={project.links.showtime}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors z-20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        <span className="font-medium">Project Page</span>
                      </a>
                    ) : project.links?.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors z-20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        <span className="font-medium">Website</span>
                      </a>
                    )}
                    {!project.links?.pdf && !project.links?.github && !project.links?.showtime && !project.links?.website && (
                      <span>{project.year}</span>
                    )}
                  </div>
                </div>
              </article>
            )

             return (
               <div key={project.id} role="listitem">
                 {Card}
               </div>
             )
          })}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Scroll next projects"
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 h-10 w-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              const container = trackRef.current
              if (!container) return
              const children = Array.from(container.children) as HTMLElement[]
              if (!children.length) return
              const first = children[0]
              let step = first.getBoundingClientRect().width
              if (children.length > 1) {
                const second = children[1]
                const stepPx = second.offsetLeft - first.offsetLeft
                if (stepPx > 0) step = stepPx
              }
              const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
              const pages = Math.max(1, Math.floor(maxScroll / step) + 1)
              if (pages <= 1) {
                container.scrollTo({ left: 0, behavior: 'smooth' })
                return
              }

              const target = Math.min(index * step, maxScroll)
              container.scrollTo({ left: target, behavior: 'smooth' })
            }}
            className={`h-2.5 w-6 rounded-full transition-all cursor-pointer ${index === activePage ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === activePage ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
