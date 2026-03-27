const themes = [
  { id: 1, name: 'Homme', src: 'https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/videos/homme_reduced.mp4' },
  { id: 2, name: 'Japanese', src: 'https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/videos/japanese_reduced.mp4' },
  { id: 3, name: 'Identity', src: 'https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/videos/identity_reduced.mp4' },
]

export default function FullVideoPage() {
  return (
    <div className="px-5 py-12">
      <h1 className="font-serif font-light text-3xl tracking-wide mb-12">
        Collection — Full Video
      </h1>

      <div className="flex flex-col gap-16">
        {themes.map(({ id, name, src }) => (
          <section key={id}>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#888] mb-4">
              Theme {id} | {name}
            </p>
            <video
              src={src}
              controls
              playsInline
              className="w-full"
            />
          </section>
        ))}
      </div>
    </div>
  )
}
