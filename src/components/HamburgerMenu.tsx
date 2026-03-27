'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [collectionOpen, setCollectionOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
    setCollectionOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col justify-center gap-[6px] p-1 z-10"
        aria-label="메뉴 열기"
      >
        <span className="block w-[22px] h-px bg-[#1a1a1a]" />
        <span className="block w-[22px] h-px bg-[#1a1a1a]" />
        <span className="block w-[22px] h-px bg-[#1a1a1a]" />
      </button>

      {/* Dark overlay */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Menu Panel — 2/3 of screen width */}
      <div
        className={`fixed top-0 left-0 h-full z-50 bg-[#f5f0e8] w-[66.666vw] max-w-[340px]
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Close Button */}
          <div className="flex justify-end mb-12">
            <button onClick={close} aria-label="메뉴 닫기" className="p-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <line x1="1" y1="1" x2="15" y2="15" stroke="#1a1a1a" strokeWidth="1" />
                <line x1="15" y1="1" x2="1" y2="15" stroke="#1a1a1a" strokeWidth="1" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={close}
              className="font-serif font-light text-[1.6rem] tracking-wide hover:opacity-50 transition-opacity"
            >
              Main
            </Link>

            <div>
              <button
                onClick={() => setCollectionOpen(v => !v)}
                className="font-serif font-light text-[1.6rem] tracking-wide hover:opacity-50 transition-opacity flex items-center gap-2 w-full text-left"
              >
                Collection
                <span
                  className={`text-sm transition-transform duration-200 inline-block mt-[2px] ${
                    collectionOpen ? 'rotate-180' : ''
                  }`}
                >
                  ↓
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  collectionOpen ? 'max-h-24 mt-3' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col gap-3 ml-3 border-l border-[#ddd8cf] pl-4">
                  <Link
                    href="/collection/short-clip"
                    onClick={close}
                    className="font-sans text-xs tracking-[0.2em] uppercase text-[#777] hover:text-[#1a1a1a] transition-colors"
                  >
                    short clip
                  </Link>
                  <Link
                    href="/collection/full-video"
                    onClick={close}
                    className="font-sans text-xs tracking-[0.2em] uppercase text-[#777] hover:text-[#1a1a1a] transition-colors"
                  >
                    full video
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/designer"
              onClick={close}
              className="font-serif font-light text-[1.6rem] tracking-wide hover:opacity-50 transition-opacity"
            >
              2026 Designer
            </Link>
            <Link
              href="/contact"
              onClick={close}
              className="font-serif font-light text-[1.6rem] tracking-wide hover:opacity-50 transition-opacity"
            >
              Contact
            </Link>
            <Link
              href="/about"
              onClick={close}
              className="font-serif font-light text-[1.6rem] tracking-wide hover:opacity-50 transition-opacity"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
