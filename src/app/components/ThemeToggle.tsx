'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  )
} 