'use client'

import Image from 'next/image'
import { useState } from 'react'
import { designers } from '@/lib/data'

const R2_RUNWAY = 'https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/runway'

function DesignerPhoto({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [portrait, setPortrait] = useState<boolean | null>(null)

  return (
    <div
      className={`${portrait ? 'w-3/4' : 'w-full'} ${portrait && index % 2 !== 0 ? 'ml-auto' : ''}`}
    >
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block"
        alt={alt}
        onLoad={(e) => {
          const img = e.target as HTMLImageElement
          setPortrait(img.naturalHeight > img.naturalWidth)
        }}
      />
    </div>
  )
}

export default function DesignerPage() {
  return (
    <div className="pb-20">
      <div className="px-5 py-12">
        <h1 className="font-serif font-light text-3xl tracking-wide mb-6">
          2026 Designer
        </h1>
        <div className="flex flex-wrap gap-x-2 gap-y-1 font-sans text-xs text-[#888]">
          {designers.map((designer, i) => (
            <span key={designer.id} className="flex items-center gap-2">
              {i > 0 && <span>・</span>}
              <a
                href={`#${designer.id}`}
                className="hover:text-[#f0ece6] transition-colors"
              >
                {designer.name}
              </a>
            </span>
          ))}
        </div>
      </div>

      {designers.map((designer, designerIndex) => (
        <section key={designer.id} id={designer.id} className="mb-24 scroll-mt-14">
          <div className="px-5 pt-16 pb-8">
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#666]">
              {String(designerIndex + 1).padStart(2, '0')}
            </span>
            <h2 className="font-sans text-xl tracking-wide mt-1">
              {designer.name}
            </h2>
          </div>

          {designer.themes.map((theme) => (
            <div key={theme.name} className="mb-12">
              <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-[#666] px-5 mb-4">
                {theme.name}
              </p>
              <div className="flex flex-col gap-4">
                {theme.photos.map((photo, idx) => (
                  <DesignerPhoto
                    key={photo}
                    src={`${R2_RUNWAY}/${photo}`}
                    alt={`${designer.name} — ${theme.name}`}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}

    </div>
  )
}
