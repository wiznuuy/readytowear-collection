import Image from 'next/image'

export default function HomePage() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      <Image
        src="https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/main.jpeg"
        alt="Ready to Wear Collection 2026"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute bottom-10 left-6 text-white">
        <p className="font-serif font-light text-[11px] tracking-[0.3em] uppercase mb-2">
          Ready to wear collection
        </p>
        <p className="font-serif font-light text-[11px] tracking-[0.2em]">
          2026 : Identity collection in Seoul
        </p>
      </div>
    </div>
  )
}
