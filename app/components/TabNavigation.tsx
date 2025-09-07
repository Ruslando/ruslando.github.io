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

  // Option 3: Left Sidebar (Desktop) / Horizontal (Mobile)
  const renderOption3 = () => (
    <div className="w-full md:flex md:gap-8">
      {/* Mobile: Horizontal tabs */}
      <nav className="md:hidden mb-8">
        <div className="flex justify-center">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300
                  ${activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop: Vertical sidebar */}
      <nav className="hidden md:block md:w-48 md:flex-shrink-0">
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="flex-1">
        <div className="fade-in">{activeTabContent}</div>
      </div>
    </div>
  )


  // For now, let's start with Option 3
  return renderOption3()
}