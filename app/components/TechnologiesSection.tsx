'use client'

import { SectionHeader } from './ui/SectionHeader'
import { useState } from 'react'

export default function TechnologiesSection() {
  const [experienceFilter, setExperienceFilter] = useState<number[]>([1, 2, 3])
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

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

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }


  const filteredTechnologies = {
    gamedev: technologies.gamedev.filter(tech => experienceFilter.includes(tech.experienceLevel)),
    backend: technologies.backend.filter(tech => experienceFilter.includes(tech.experienceLevel)),
    ai: technologies.ai.filter(tech => experienceFilter.includes(tech.experienceLevel)),
    web: technologies.web.filter(tech => experienceFilter.includes(tech.experienceLevel))
  }

  const categoryInfo = {
    gamedev: {
      name: 'Game Development & Graphics',
      color: 'bg-purple-50 border-purple-200',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    backend: {
      name: 'Backend & Databases',
      color: 'bg-orange-50 border-orange-200',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    ai: {
      name: 'AI & Semantic Technologies',
      color: 'bg-green-50 border-green-200',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    web: {
      name: 'Web Development',
      color: 'bg-blue-50 border-blue-200',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
        </svg>
      )
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <SectionHeader>Technologies</SectionHeader>
        
        {/* Filter Controls */}
        <div className="pl-4 mb-8">
          <div className="flex flex-wrap gap-3">
            <span className="text-sm font-medium text-gray-700">Filter by experience level:</span>
            {[1, 2, 3].map(level => (
              <button
                key={level}
                onClick={() => {
                  setExperienceFilter(prev => 
                    prev.includes(level) 
                      ? prev.filter(l => l !== level)
                      : [...prev, level]
                  )
                }}
                className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${
                  experienceFilter.includes(level)
                    ? getExperienceLevelColor(level) + ' ring-2 ring-offset-1 ring-current'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {getExperienceLevelText(level)}
              </button>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="pl-4 space-y-6">
          {Object.entries(filteredTechnologies).map(([category, techs]) => {
            if (techs.length === 0) return null
            const cardId = category
            const isExpanded = expandedCards.has(cardId)
            const info = categoryInfo[category as keyof typeof categoryInfo]
            
            return (
              <div 
                key={category} 
                className={`rounded-2xl border ${info.color} transition-all duration-300 overflow-hidden`}
              >
                {/* Card Header - Always Visible */}
                <button
                  onClick={() => toggleCardExpansion(cardId)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">
                    {info.name} ({techs.length})
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Card Content - Expandable */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {techs.map((tech) => (
                        <div key={tech.name} className="bg-white/70 p-4 rounded-xl border border-white/50">
                          <div className="font-medium text-gray-800 mb-3 flex items-center justify-between">
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
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}