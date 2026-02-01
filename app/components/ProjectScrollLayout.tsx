'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface ScrollSection {
  id: string
  label: string
}

interface ProjectScrollLayoutProps {
  sections: ScrollSection[]
  children: ReactNode
}

export function ProjectScrollLayout({ sections, children }: ProjectScrollLayoutProps) {
  const scrollRef = useRef<HTMLElement | null>(null)
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const sectionElements = Array.from(container.querySelectorAll('section[data-snap-section]'))

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id
          if (id) setActiveSection(id)
        }
      },
      {
        root: container,
        threshold: [0.4, 0.6, 0.8]
      }
    )

    sectionElements.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return

      const target = event.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return
      if (target?.isContentEditable) return

      const currentIndex = sections.findIndex(section => section.id === activeSection)
      if (currentIndex === -1) return

      const nextIndex = event.key === 'ArrowDown'
        ? Math.min(sections.length - 1, currentIndex + 1)
        : Math.max(0, currentIndex - 1)

      if (nextIndex === currentIndex) return

      event.preventDefault()
      const nextSection = sections[nextIndex]
      const element = document.getElementById(nextSection.id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [sections, activeSection])

  return (
    <main ref={scrollRef} className="h-screen bg-white overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {children}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4" aria-label="Section navigation">
        {sections.map(section => (
          <button
            key={section.id}
            type="button"
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            <span className={`h-2.5 w-2.5 rounded-full border ${activeSection === section.id ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-gray-300'}`} />
            <span className={activeSection === section.id ? 'text-gray-800' : ''}>{section.label}</span>
          </button>
        ))}
      </nav>
    </main>
  )
}
