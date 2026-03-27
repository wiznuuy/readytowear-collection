import Image from 'next/image'
import { designers } from '@/lib/data'

export default function ContactPage() {
  return (
    <div className="px-5 py-12">
      <h1 className="font-serif font-light text-3xl tracking-wide mb-12">
        Contact
      </h1>

      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-3">
        {designers.map((designer) => (
          <div key={designer.id}>
            <div className="mb-3 bg-[#ede8df]">
              <Image
                src={`https://pub-ff7f4d3282454fbbaf711211f0b27d0a.r2.dev/images/designer_${designer.id}.jpeg`}
                alt={designer.name}
                width={0}
                height={0}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="w-full h-auto"
              />
            </div>
            <h2 className="font-serif font-light text-lg mb-2 tracking-wide">
              {designer.name}
            </h2>
            <p className="font-sans text-xs text-[#666] mb-1">
              <a
                href={designer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a1a1a] transition-colors"
              >
                {designer.instagramHandle}
              </a>
            </p>
            {designer.email && (
              <p className="font-sans text-xs text-[#666] break-all">
                <a
                  href={`mailto:${designer.email}`}
                  className="hover:text-[#1a1a1a] transition-colors"
                >
                  {designer.email}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
