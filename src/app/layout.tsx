import type { Metadata } from 'next'
import { Instrument_Serif, Instrument_Sans, Noto_Sans_KR } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-korean',
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
    <html lang="ko" className={`${instrumentSerif.variable} ${instrumentSans.variable} ${notoSansKR.variable}`}>
      <body className="bg-[#f5f0e8] text-[#1a1a1a] font-sans antialiased">
        <Header />
        <main className="pt-14 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
