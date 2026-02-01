'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import { PageTitle } from './components/ui/PageTitle'
import { SectionHeader } from './components/ui/SectionHeader'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ThemeToggle from './components/ThemeToggle'

const SCROLL_KEY = 'home-scroll-top'

const sections = [
  { id: 'intro', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' }
]

export default function Home() {
  const router = useRouter()
  const scrollRef = useRef<HTMLElement | null>(null)
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const stored = sessionStorage.getItem(SCROLL_KEY)
    if (stored) {
      container.scrollTop = Number(stored)
    }

    let raf = 0
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        sessionStorage.setItem(SCROLL_KEY, String(container.scrollTop))
        
        // Simple scroll-based detection
        const index = Math.round(container.scrollTop / container.clientHeight)
        if (sections[index]) {
          setActiveSection(sections[index].id)
        }
      })
    }

    container.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const tabParam = params.get('tab')
    if (!tabParam) return
    params.delete('tab')
    const qs = params.toString()
    router.replace(qs ? `/?${qs}` : '/', { scroll: false })
  }, [router])

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
      document.getElementById(nextSection.id)?.scrollIntoView({ behavior: 'smooth' })
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [sections, activeSection])

  return (
    <main ref={scrollRef} className="h-screen bg-gray-25 overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section id="intro" data-snap-section className="snap-start min-h-screen flex items-center relative">
        <div className="max-w-5xl mx-auto px-8 md:pl-20 xl:px-8 py-24 md:py-16">
          {/* Modern Header (Hero) */}
          <header>
            {/* Mobile: Centered layout */}
            <div className="block md:hidden text-center">
              <div className="relative w-40 h-40 mx-auto mb-8">
                <Image
                  src="/profile2.jpeg"
                  alt="Ruslan Novikov"
                  fill
                  className="object-cover rounded-full shadow-xl border-4 border-white"
                  priority
                />
              </div>
              <div className="mb-6">
                <PageTitle>Hi, I'm Ruslan 👋</PageTitle>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                Welcome to my homepage! I'm an M.Sc. graduate in International Media and Computing and a software developer with a focus on AI-driven agent development and backend development.
              </p>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Currently looking for opportunities.{' '}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors italic"
                >
                  Let's connect!
                </a>
              </p>
            </div>

            {/* Desktop: Text left */}
            <div className="hidden md:block">
              <div className="flex items-center gap-16">
                <div className="flex-1">
                  <PageTitle>Hi, I'm Ruslan 👋</PageTitle>
                  <p className="text-gray-700 text-lg leading-relaxed mt-6 max-w-xl">
                    Welcome to my homepage! I'm an M.Sc. graduate in International Media and Computing and a software developer with a focus on AI-driven agent development and backend development.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-xl">
                    Currently looking for opportunities.{' '}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors italic"
                    >
                      Let's connect!
                    </a>
                  </p>
                </div>

                <div className="relative w-72 h-72 shrink-0 group">
                  <div className="absolute -inset-4 bg-blue-200 rounded-3xl rotate-6 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-105"></div>
                  <Image
                    src="/profile2.jpeg"
                    alt="Ruslan Novikov"
                    fill
                    className="object-cover rounded-2xl shadow-2xl relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Mobile Social Links removed */}
          </header>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <div className="w-6 h-10 rounded-full border border-gray-300 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
          </div>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Scroll Down</span>
        </div>
      </section>

      <section id="experience" data-snap-section className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-8 md:pl-20 xl:px-8 py-24 md:py-16 w-full">
          <ExperienceSection />
        </div>
      </section>

      <section id="portfolio" data-snap-section className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-8 md:pl-20 xl:px-8 py-24 md:py-16 w-full">
          <ProjectsSection />
        </div>
      </section>

      <section id="contact" data-snap-section className="snap-start min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-8 md:pl-20 xl:px-8 py-24 md:py-16 text-center w-full">
          <div className="inline-block p-4 rounded-full bg-blue-100 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800 mb-6">
            <FaEnvelope className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <a 
              href="mailto:ruslannov98@gmail.com" 
              className="min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-lg">Email Me</span>
            </a>
            <a 
              href="https://linkedin.com/in/ruslannov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-xl hover:bg-[#006396] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-lg">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Ruslando" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-lg">GitHub</span>
            </a>
          </div>
        </div>
      </section>
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4" aria-label="Section navigation">
        {sections.map(section => (
          <button
            key={section.id}
            type="button"
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            <span className={`h-2.5 w-2.5 rounded-full border transition-colors duration-300 ${activeSection === section.id ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-gray-300 group-hover:border-blue-400'}`} />
            <span className={`hidden xl:block transition-colors duration-300 ${activeSection === section.id ? 'text-gray-800' : ''}`}>{section.label}</span>
          </button>
        ))}
      </nav>
    </main>
  )
}