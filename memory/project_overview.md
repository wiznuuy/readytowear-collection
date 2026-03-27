---
name: readytowear-collection project overview
description: Next.js 14 fashion portfolio site for 2026 Identity Collection runway show in Seoul
type: project
---

Next.js 14 (App Router, static export) fashion portfolio website for a Seoul runway show.

**Why:** Built for 6 student designers to showcase their 2026 Identity Collection with photos and video.

**How to apply:** All pages are server components (static). Images served from public/ which symlinks to data/. Dev: `npm run dev`, Build: `npm run build`.

Key routes:
- `/` — Main hero page (main.jpeg)
- `/collection/short-clip` — Single video embed (placeholder)
- `/collection/full-video` — 3 theme videos: Homme, Japanese, Identity (placeholders)
- `/designer` — Gallery: 6 designers × 3 themes × 3-10 photos + 30 backstage photos
- `/contact` — Designer cards with profile photos and contact info
- `/about` — Long-form text about the collection concept

Designer IDs: lsj(이서진), bmj(백민준), lth(이태현), kgm(김경민), hjh(홍준호), kgw(김근우)

Image paths: public/images → ../data/images (symlink). Runway: /images/runway/runway_{id}_{theme}{###}.jpeg. Backstage: /images/backstage/backstage{###}.jpeg. Profiles: /images/designer_{id}.jpeg.

Videos directory is currently empty — pages show "coming soon" placeholders with instructions to swap in iframe embeds.
