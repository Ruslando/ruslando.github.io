'use client'

import { SectionHeader } from './ui/SectionHeader'
import { useState } from 'react'
import { FaStar, FaDatabase, FaLightbulb, FaCode, FaChevronDown } from 'react-icons/fa'

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
      case 1: return 'bg-blue-100 text-blue-700'
      case 2: return 'bg-blue-200 text-blue-800'  
      case 3: return 'bg-blue-300 text-blue-900'
      default: return 'bg-blue-100 text-blue-700'
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
      color: 'bg-white border-blue-200',
      icon: <FaStar className="w-5 h-5" />
    },
    backend: {
      name: 'Backend & Databases',
      color: 'bg-white border-blue-200',
      icon: <FaDatabase className="w-5 h-5" />
    },
    ai: {
      name: 'AI & Semantic Technologies',
      color: 'bg-white border-blue-200',
      icon: <FaLightbulb className="w-5 h-5" />
    },
    web: {
      name: 'Web Development',
      color: 'bg-white border-blue-200',
      icon: <FaCode className="w-5 h-5" />
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <SectionHeader>Technologies</SectionHeader>
        
        {/* Filter Controls */}
        {/* <div className="pl-4 mb-8">
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
        </div> */}

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
                className={`rounded-2xl border ${info.color} transition-all duration-300 hover:shadow-lg hover:border-blue-300 overflow-hidden`}
              >
                {/* Card Header - Always Visible */}
                <button
                  onClick={() => toggleCardExpansion(cardId)}
                  className="w-full p-4 flex items-center justify-between hover:bg-blue-50/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-gray-600">
                      {info.icon}
                    </div>
                    <h3 className="font-medium text-gray-900 text-base">
                      {info.name}
                    </h3>
                  </div>
                  <FaChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Card Content - Expandable */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {techs.map((tech) => (
                        <div key={tech.name} className="bg-blue-50/30 p-4 rounded-xl border border-blue-200 hover:bg-blue-100/50 transition-colors">
                          <div className="font-medium text-gray-800 mb-3 flex items-center justify-between">
                            {tech.name}
                            <span className={`px-2 py-1 text-xs rounded-full font-medium ${getExperienceLevelColor(tech.experienceLevel)}`}>
                              {getExperienceLevelText(tech.experienceLevel)}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tech.languages.map((lang: string) => (
                              <span key={lang} className="px-3 py-1 text-xs rounded-full font-medium bg-blue-100 text-blue-700">
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