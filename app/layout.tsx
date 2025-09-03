import './globals.css'
import { Inter, Crimson_Text, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Your Name - Software Developer & Researcher',
  description: 'Personal portfolio showcasing research publications, projects, and professional experience in software development and research.',
  keywords: 'software developer, researcher, portfolio, publications, projects',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your Name - Software Developer & Researcher',
    description: 'Personal portfolio showcasing research publications, projects, and professional experience.',
    url: 'https://ruslando.github.io',
    siteName: 'Your Name Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Software Developer & Researcher',
    description: 'Personal portfolio showcasing research publications, projects, and professional experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
