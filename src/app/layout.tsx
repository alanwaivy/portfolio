import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Full Stack Developer Portfolio | AI Expert',
  description: 'Professional portfolio showcasing full-stack development, AI expertise, and experience with WordPress, Framer, Webflow, and Figma.',
  keywords: 'full-stack developer, AI developer, WordPress, Framer, Webflow, Figma, Next.js, React, Laravel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <Providers>
          <main className="flex flex-col min-h-screen">
        {children}
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
