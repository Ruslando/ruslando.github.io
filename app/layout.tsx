import './globals.css'
import { Sora, Space_Grotesk, Space_Mono } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const jetbrainsMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata = {
  title: 'Ruslan Novikov - M.Sc. Graduate & Full-Stack Developer',
  description: 'Personal portfolio showcasing research publications, projects, and professional experience in software development and computer graphics.',
  keywords: 'software developer, researcher, portfolio, projects, backend development, computer graphics, full-stack developer',
  authors: [{ name: 'Ruslan Novikov' }],
  creator: 'Ruslan Novikov',
  openGraph: {
    title: 'Ruslan Novikov - M.Sc. Graduate & Full-Stack Developer',
    description: 'Personal portfolio showcasing research publications, projects, and professional experience in software development and computer graphics.',
    url: 'https://ruslando.github.io',
    siteName: 'Ruslan Novikov Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruslan Novikov - M.Sc. Graduate & Full-Stack Developer',
    description: 'Personal portfolio showcasing research publications, projects, and professional experience in software development and computer graphics.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
