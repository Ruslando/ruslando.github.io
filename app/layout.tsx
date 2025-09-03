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
    <html lang="en" className={`${inter.variable} ${crimsonText.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
