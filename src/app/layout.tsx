import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ready to Wear Collection — 2026',
  description: '2026 Identity Collection in Seoul',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#f5f0e8] text-[#1a1a1a] font-sans antialiased">
        <Header />
        <main className="pt-14 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
