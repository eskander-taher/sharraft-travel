# Architecture

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3, shadcn/ui components.
Arabic only, right-to-left. Every page is prerendered at build time; there is no
backend and no database.

```
app/                 home (page.tsx + components/home/), about, services, cities ([slug]),
                     activities ([slug] + hand-made pages: kremlin, red-square, gorky-park, vdnkh),
                     hotels, b2b, contact, privacy, terms; icons and manifest
lib/cities-data.ts   cities → app/cities/[slug] pages
lib/activities-data.ts, services-data.ts
lib/whatsapp.ts      contact messages; lib/journey.ts: latitude order of the cities
components/          navbar, footer, whatsapp-button, page-hero, b2b-inquiry-form (→ WhatsApp), ui/
components/home/     hero, departures board, city chapters, trip pass (→ WhatsApp), activities, about
```
