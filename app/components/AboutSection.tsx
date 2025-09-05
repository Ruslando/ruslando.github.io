'use client'

import { SectionHeader } from './ui/SectionHeader'
import { useState } from 'react'

export default function AboutSection() {
  const [experienceFilter, setExperienceFilter] = useState<number[]>([1, 2, 3])

  const technologies = {
    gamedev: [
      { name: "Unity Engine", languages: ["C#", "HLSL"], experienceLevel: 3 },
      { name: "Unreal Engine", languages: ["Blueprint", "C++"], experienceLevel: 2 },
      { name: "Vulkan API", languages: ["C"], experienceLevel: 2 },
      { name: "Godot Engine", languages: ["GDScript", "C#"], experienceLevel: 1 }
    ],
    backend: [
      { name: ".NET Entity Framework", languages: ["C#"], experienceLevel: 3 },
      { name: "Microsoft SQL Server", languages: ["SQL"], experienceLevel: 2 },
      { name: "Neo4j", languages: ["Cypher"], experienceLevel: 2 },
      { name: "Ontotext GraphDB", languages: ["SPARQL"], experienceLevel: 1 }
    ],
    ai: [
      { name: "LangChain / LangGraph", languages: ["Python", "JavaScript"], experienceLevel: 3 },
      { name: "PyTorch", languages: ["Python"], experienceLevel: 1 },
      { name: "Protégé", languages: ["OWL", "RDF"], experienceLevel: 1 }
    ],
    web: [
      { name: "Vue.js Framework", languages: ["JavaScript", "HTML", "CSS"], experienceLevel: 3 },
      { name: "Automerge CRDT", languages: ["JavaScript"], experienceLevel: 2 }
    ]
  }

  const getExperienceLevelColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-yellow-100 text-yellow-700'
      case 2: return 'bg-orange-100 text-orange-700'  
      case 3: return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getExperienceLevelText = (level: number) => {
    switch(level) {
      case 1: return 'Beginner'
      case 2: return 'Intermediate'
      case 3: return 'Advanced'
      default: return 'Unknown'
    }
  }

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      'C#': 'bg-purple-100 text-purple-700',
      'HLSL': 'bg-pink-100 text-pink-700',
      'Blueprint': 'bg-blue-100 text-blue-700',
      'C++': 'bg-indigo-100 text-indigo-700',
      'GDScript': 'bg-teal-100 text-teal-700',
      'C': 'bg-green-100 text-green-700',
      'SQL': 'bg-gray-100 text-gray-700',
      'SPARQL': 'bg-gray-100 text-gray-700',
      'Cypher': 'bg-gray-100 text-gray-700',
      'Python': 'bg-blue-100 text-blue-700',
      'JavaScript': 'bg-yellow-100 text-yellow-700',
      'OWL': 'bg-orange-100 text-orange-700',
      'RDF': 'bg-red-100 text-red-700',
      'HTML': 'bg-orange-100 text-orange-700',
      'CSS': 'bg-blue-100 text-blue-700'
    }
    return colors[language] || 'bg-gray-100 text-gray-700'
  }

  const renderTechnologyCard = (tech: any) => (
    <div key={tech.name} className="bg-white/70 p-3 rounded-lg">
      <div className="font-medium text-gray-800 mb-2 flex items-center justify-between">
        {tech.name}
        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getExperienceLevelColor(tech.experienceLevel)}`}>
          {getExperienceLevelText(tech.experienceLevel)}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.languages.map((lang: string) => (
          <span key={lang} className={`px-3 py-1 text-xs rounded-full font-medium ${getLanguageColor(lang)}`}>
            {lang}
          </span>
        ))}
      </div>
    </div>
  )

  const filteredTechnologies = {
    gamedev: technologies.gamedev.filter(tech => experienceFilter.includes(tech.experienceLevel)),
    backend: technologies.backend.filter(tech => experienceFilter.includes(tech.experienceLevel)),
    ai: technologies.ai.filter(tech => experienceFilter.includes(tech.experienceLevel)),
    web: technologies.web.filter(tech => experienceFilter.includes(tech.experienceLevel))
  }

  return (
    <div className="space-y-8">
      {/* About Me */}
      <section>
        <SectionHeader>About Me</SectionHeader>
        <div className="prose prose-gray max-w-none pl-4">
          <p className="text-gray-700 leading-relaxed mb-6">
            Hello, my name is Ruslan Novikov and I'm a research assistant working student in software and web development, 
            as well as a Master of Science graduate in International Media and Computing from HTW Berlin. 
            Through my studies and professional experience, I've gained expertise across an extensive range of media-related computer science fields, 
            with a particular passion and focus on game development and interactive systems.
          </p>
        </div>
      </section>

      {/* Technologies & Programming Languages */}
      <section>
        <SectionHeader>Technologies & Programming Languages</SectionHeader>
        
        {/* Skill Level Filter */}
        <div className="pl-4 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-gray-700">Filter by experience level:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setExperienceFilter([1, 2, 3])}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                  experienceFilter.length === 3 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setExperienceFilter(experienceFilter.includes(3) ? experienceFilter.filter(s => s !== 3) : [...experienceFilter, 3])}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                  experienceFilter.includes(3) ? 'bg-green-100 text-green-700 ring-2 ring-green-300' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Advanced
              </button>
              <button
                onClick={() => setExperienceFilter(experienceFilter.includes(2) ? experienceFilter.filter(s => s !== 2) : [...experienceFilter, 2])}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                  experienceFilter.includes(2) ? 'bg-orange-100 text-orange-700 ring-2 ring-orange-300' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setExperienceFilter(experienceFilter.includes(1) ? experienceFilter.filter(s => s !== 1) : [...experienceFilter, 1])}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                  experienceFilter.includes(1) ? 'bg-yellow-100 text-yellow-700 ring-2 ring-yellow-300' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Beginner
              </button>
            </div>
          </div>
        </div>

        <div className="pl-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Game Development & Graphics */}
            {filteredTechnologies.gamedev.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  Game Development & Graphics ({filteredTechnologies.gamedev.length})
                </h4>
                <div className="space-y-4">
                  {filteredTechnologies.gamedev.map(renderTechnologyCard)}
                </div>
              </div>
            )}

            {/* Backend & Databases */}
            {filteredTechnologies.backend.length > 0 && (
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  Backend & Databases ({filteredTechnologies.backend.length})
                </h4>
                <div className="space-y-4">
                  {filteredTechnologies.backend.map(renderTechnologyCard)}
                </div>
              </div>
            )}

            {/* AI & Semantic Technologies */}
            {filteredTechnologies.ai.length > 0 && (
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 lg:col-span-1">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  AI & Semantic Technologies ({filteredTechnologies.ai.length})
                </h4>
                <div className="space-y-4">
                  {filteredTechnologies.ai.map(renderTechnologyCard)}
                </div>
              </div>
            )}

            {/* Web Development */}
            {filteredTechnologies.web.length > 0 && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                    </svg>
                  </div>
                  Web Development ({filteredTechnologies.web.length})
                </h4>
                <div className="space-y-4">
                  {filteredTechnologies.web.map(renderTechnologyCard)}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}