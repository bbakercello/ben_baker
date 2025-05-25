'use client'
import { useRef, useEffect } from 'react'

export function ScrollFadeIn({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('animate-scrollFadeIn')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}