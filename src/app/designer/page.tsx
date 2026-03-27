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
      {designers.map((designer, designerIndex) => (
        <section key={designer.id} className="mb-24">
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
