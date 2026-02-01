'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme-preference'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Default to stored, or system preference
    const initialTheme: Theme = stored ?? (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    
    if (initialTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem(STORAGE_KEY, nextTheme)
    
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-full hover:bg-[var(--bg-subtle)] hover:border-[var(--border-main)] hover:text-[var(--primary)] transition-all shadow-sm group"
    >
      {theme === 'dark' ? (
        <FaMoon className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
      ) : (
        <FaSun className="w-4 h-4 group-hover:rotate-45 transition-transform" />
      )}
      <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline-block">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}

