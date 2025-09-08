import { Suspense } from 'react'
import Image from 'next/image'
import TabNavigation from './components/TabNavigation'
import TechnologiesSection from './components/TechnologiesSection'
import PublicationsSection from './components/PublicationsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import WritingSection from './components/WritingSection'
import { PageTitle } from './components/ui/PageTitle'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

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
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Working student in full-stack development at Fraunhofer IPK and Master's graduate (M.Sc.) from HTW Berlin with experience in web development, game development and computer graphics.
            </p>
          </div>

          {/* Desktop: Text left, image right */}
          <div className="hidden md:block">
            <div className="flex items-start gap-10 mb-8">
              <div className="flex-1">
                <PageTitle subtitle="M.Sc. Graduate & Full-Stack Developer">Ruslan Novikov</PageTitle>
                <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-2xl">
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
              <FaEnvelope className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a 
              href="https://github.com/Ruslando" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/ruslannov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <FaLinkedin className="w-4 h-4" />
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