import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Ben Baker - Software Engineer',
  description: 'Portfolio website showcasing my experience in software engineering, cloud technologies, and data engineering.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
