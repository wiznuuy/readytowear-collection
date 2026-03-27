'use client'

import Image from 'next/image'
import { useState } from 'react'
import { backstagePhotos } from '@/lib/data'

const R2_BACKSTAGE = 'https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/backstage'

function BackstagePhoto({ src, alt, index }: { src: string; alt: string; index: number }) {
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

export default function BackstagePage() {
  return (
    <div className="pb-20">
      <div className="px-5 pt-16 pb-8">
        <span className="font-sans text-[10px] tracking-[0.35em] text-[#666]">—</span>
        <h1 className="font-sans text-xl tracking-wide mt-1">Backstage</h1>
      </div>

      <div className="flex flex-col gap-4">
        {backstagePhotos.map((photo, idx) => (
          <BackstagePhoto
            key={photo}
            src={`${R2_BACKSTAGE}/${photo}`}
            alt="Backstage"
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}
