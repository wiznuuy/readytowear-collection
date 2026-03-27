'use client'

import { usePathname } from 'next/navigation'
import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 h-14 flex items-center px-5 transition-colors duration-300 ${
        isHome ? 'bg-transparent' : 'bg-[#111111]'
      }`}
    >
      <HamburgerMenu />
    </header>
  )
}
