'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabNavigationProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function TabNavigation({ tabs, defaultTab }: TabNavigationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab')
    if (tabFromUrl && tabs.some(tab => tab.id === tabFromUrl)) {
      setActiveTab(tabFromUrl)
    }
  }, [searchParams, tabs])

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    const params = new URLSearchParams(searchParams)
    params.set('tab', tabId)
    router.push(`/?${params.toString()}`, { scroll: false })
  }

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <nav className="border-b border-gray-200 mb-12">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 rounded-t-lg
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50/50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTabContent}
      </div>
    </div>
  )
}