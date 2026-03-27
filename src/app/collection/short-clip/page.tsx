export default function ShortClipPage() {
  return (
    <div className="px-5 py-12">
      <h1 className="font-serif font-light text-3xl tracking-wide mb-10">
        Collection — Short Clip
      </h1>

      <video
        src="https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/videos/shortclip.mp4"
        controls
        playsInline
        className="w-full"
      />
    </div>
  )
}
