# Sharraf Travel — website

شرف للسفر والسياحة — travel agency for trips to Russia: cities, hotels, activities,
services, a B2B partnership page, contact. Arabic, statically generated (52 pages).

| | |
|---|---|
| Live | https://www.sharraft-travel.com |
| Client | Sharraf Travel — see `D:\sites\clients\sharraf-travel\CLIENT.md` |
| Hosting | Vercel, project `sharraft-travel` (team `eskandertahers-projects`) |
| Repo | https://github.com/eskander-taher/sharraft-travel |

## Run it locally

Needs Node 24 and pnpm 11. No environment variables.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Scripts

`dev`, `build` (type-checks), `start`, `lint`, `typecheck`, `format`, `format:check`.

## Changing the content

- **Cities, activities, services**: `lib/cities-data.ts`, `lib/activities-data.ts`,
  `lib/services-data.ts` — pages under `app/cities/`, `app/activities/`, `app/services/`
  are generated from them.
- **Phone / WhatsApp** (`+7 926 103-81-52`) and emails: `components/footer.tsx`,
  `components/whatsapp-button.tsx`, `app/contact/`.
- **B2B form**: `components/b2b-inquiry-form.tsx` — opens WhatsApp with the details.
- Images: `public/`.

## The design

The site travels north: home runs from a Gulf arch opening onto Red Square, through the cities
in order of real latitude (`lib/journey.ts`). Motion is CSS only (`app/globals.css`) and is an
enhancement: without it, or with reduced motion, the page is complete. Contact buttons build
their messages in `lib/whatsapp.ts`. The navbar, footer and contact bar live in `app/layout.tsx`;
pages must not add their own.

## More

`HANDOVER.md` · `docs/architecture.md` · `docs/deployment.md`
