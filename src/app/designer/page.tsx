import Image from 'next/image'
import { designers, backstagePhotos } from '@/lib/data'

// ─── Layout engine ─────────────────────────────────────────────────────────────
// Photos are grouped into three display types:
//   'full'  — single image, landscape crop, full width
//   'pair'  — two images side-by-side: left-large / right-offset-down
//   'pair-r'— reversed pair: left-offset-down / right-large

type LayoutGroup =
  | { type: 'full'; photo: string }
  | { type: 'pair' | 'pair-r'; left: string; right: string }

function buildLayout(photos: string[]): LayoutGroup[] {
  const groups: LayoutGroup[] = []
  let i = 0
  let pairCount = 0

  while (i < photos.length) {
    const remaining = photos.length - i

    if (remaining === 1) {
      groups.push({ type: 'full', photo: photos[i] })
      i++
    } else if (remaining === 2) {
      const type = pairCount % 2 === 0 ? 'pair' : 'pair-r'
      groups.push({ type, left: photos[i], right: photos[i + 1] })
      pairCount++
      i += 2
    } else {
      // Every 3rd group: full-width for visual rhythm
      if (groups.length % 3 === 2) {
        groups.push({ type: 'full', photo: photos[i] })
        i++
      } else {
        const type = pairCount % 2 === 0 ? 'pair' : 'pair-r'
        groups.push({ type, left: photos[i], right: photos[i + 1] })
        pairCount++
        i += 2
      }
    }
  }

  return groups
}

// ─── Editorial grid ────────────────────────────────────────────────────────────

function EditorialGrid({
  photos,
  basePath,
  alt,
}: {
  photos: string[]
  basePath: string
  alt: string
}) {
  const groups = buildLayout(photos)

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, idx) => {
        if (group.type === 'full') {
          return (
            <div key={idx}>
              <Image
                src={`${basePath}/${group.photo}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                alt={alt}
              />
            </div>
          )
        }

        // pair:   left=58% at top, right=flex-1 offset down
        // pair-r: left=flex-1 offset down, right=58% at top
        const reversed = group.type === 'pair-r'
        return (
          <div key={idx} className="flex items-start gap-4">
            <div className={`shrink-0 ${reversed ? 'w-[40%] mt-10' : 'w-[58%]'}`}>
              <Image
                src={`${basePath}/${group.left}`}
                width={0}
                height={0}
                sizes="60vw"
                className="w-full h-auto"
                alt={alt}
              />
            </div>
            <div className={`flex-1 ${reversed ? '' : 'mt-10'}`}>
              <Image
                src={`${basePath}/${group.right}`}
                width={0}
                height={0}
                sizes="40vw"
                className="w-full h-auto"
                alt={alt}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DesignerPage() {
  return (
    <div className="pb-20">
      {designers.map((designer, designerIndex) => (
        <section key={designer.id} className="mb-24">
          {/* Designer header */}
          <div className="px-5 pt-16 pb-8">
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#c0bab2]">
              {String(designerIndex + 1).padStart(2, '0')}
            </span>
            <h2 className="font-serif italic font-light text-[3rem] leading-none tracking-wide mt-1">
              {designer.name}
            </h2>
          </div>

          {/* Themes */}
          {designer.themes.map((theme) => (
            <div key={theme.name} className="mb-12">
              <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-[#c0bab2] px-5 mb-4">
                {theme.name}
              </p>
              <EditorialGrid
                photos={theme.photos}
                basePath="https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/runway"
                alt={`${designer.name} — ${theme.name}`}
              />
            </div>
          ))}
        </section>
      ))}

      {/* Backstage */}
      <section>
        <div className="px-5 pt-16 pb-8">
          <span className="font-sans text-[10px] tracking-[0.35em] text-[#c0bab2]">
            —
          </span>
          <h2 className="font-serif italic font-light text-[3rem] leading-none tracking-wide mt-1">
            Backstage
          </h2>
        </div>
        <EditorialGrid
          photos={backstagePhotos}
          basePath="https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/backstage"
          alt="Backstage"
        />
      </section>
    </div>
  )
}
