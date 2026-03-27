import Link from 'next/link'

export default function ShortClipPage() {
  return (
    <div className="px-5 py-12">
      <h1 className="font-serif font-light text-3xl tracking-wide mb-10">
        2026 Collection — Short Clip
      </h1>

      <video
        src="https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/videos/shortclip_reduced.mp4"
        controls
        playsInline
        className="w-full"
      />

      <div className="mt-16 pt-8 border-t border-[#2a2a2a]">
        <Link
          href="/about"
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#888] hover:text-[#f0ece6] transition-colors"
        >
          About →
        </Link>
      </div>
    </div>
  )
}
