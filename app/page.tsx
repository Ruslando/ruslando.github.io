import { Suspense } from 'react'
import Image from 'next/image'
import TabNavigation from './components/TabNavigation'
import TechnologiesSection from './components/TechnologiesSection'
import PublicationsSection from './components/PublicationsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import WritingSection from './components/WritingSection'
import { PageTitle } from './components/ui/PageTitle'

export default function Home() {
  const tabs = [
    {
      id: 'experience',
      label: 'Experience',
      content: <ExperienceSection />
    },
    {
      id: 'technologies',
      label: 'Technologies',
      content: <TechnologiesSection />
    },
    {
      id: 'projects',
      label: 'Projects',
      content: <ProjectsSection />
    },
    {
      id: 'publications',
      label: 'Publications',
      content: <PublicationsSection />
    },
    {
      id: 'writing',
      label: 'Blog',
      content: <WritingSection />
    }
  ]

  return (
    <main className="min-h-screen bg-gray-25">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Modern Header */}
        <header className="mb-16">
          {/* Mobile: Centered layout */}
          <div className="block md:hidden text-center">
            <div className="mb-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <Image 
                    src="/profile.jpg" 
                    alt="Ruslan Novikov"
                    width={120}
                    height={120}
                    className="w-30 h-30 rounded-2xl object-cover shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
                </div>
              </div>
              <PageTitle subtitle="M.Sc. Graduate & Full-Stack Developer">Ruslan Novikov</PageTitle>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Working student in full-stack development at Fraunhofer IPK and Master's graduate (M.Sc.) from HTW Berlin with experience in web development, game development and computer graphics.
            </p>
          </div>

          {/* Desktop: Text left, image right */}
          <div className="hidden md:block">
            <div className="flex items-start gap-10 mb-8">
              <div className="flex-1">
                <PageTitle subtitle="M.Sc. Graduate & Full-Stack Developer">Ruslan Novikov</PageTitle>
                <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-2xl">
                  Working student in full-stack development at Fraunhofer IPK and Master's graduate (M.Sc.) from HTW Berlin with experience in web development, game development and computer graphics.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image 
                    src="/profile.jpg" 
                    alt="Ruslan Novikov"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-2xl object-cover shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Modern pill design */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="mailto:ruslan.novikov@hotmail.de" 
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a 
              href="https://github.com/Ruslando" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/ruslannov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Tab Navigation */}
        <Suspense fallback={<div>Loading...</div>}>
          <TabNavigation tabs={tabs} defaultTab="experience" />
        </Suspense>

        {/* Footer */}
        <footer className="pt-12 mt-20">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 font-light">Last updated: {new Date().getFullYear()}</p>
          </div>
        </footer>

      </div>
    </main>
  )
}