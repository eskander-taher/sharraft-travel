# Handover — Sharraf Travel website

Everything a new owner needs to run sharraft-travel.com. Checked on 2026-10-11.

## What runs where

| Piece | Where | Notes |
|---|---|---|
| Code | GitHub `eskander-taher/sharraft-travel`, branch `main` | |
| Hosting | Vercel project `sharraft-travel`, team `eskandertahers-projects` | Next.js, no env vars |
| Domain | `sharraft-travel.com` (+www), DNS at Hostinger (`dns-parking.com`) | no MX records — no email on this domain |
| Data / backend | none — all content is in `lib/*-data.ts` | forms go to WhatsApp |
| Related | scraper API (`../scraper`, sharraft-scraper.vercel.app) | not used by the site |

## Accounts

| Account | Used for | Owner today | How to transfer |
|---|---|---|---|
| GitHub | code | eskander-taher (developer) | Transfer the repo; reconnect Vercel |
| Vercel | hosting | team `eskandertahers-projects` | Settings → Transfer project |
| Hostinger | domain + DNS | to confirm | |

## Environment variables

None.

## Transfer checklist

- [ ] Fix the email addresses (Known issues 1)
- [ ] Transfer the repo and the Vercel project; confirm the Hostinger account
- [ ] After the move: home, a city page, `/b2b` and `/contact` load; WhatsApp links open

## Known issues

1. **The emails on the site don't work**: `info@sharraftravels.com` and
   `booking@sharraftravels.com` use the domain `sharraftravels.com`, which does not
   exist (the site's domain is `sharraft-travel.com`, which has no email either).
2. ESLint added 2026-10-11: 10 problems are warnings for now.
3. Prettier is configured but not run (the repo changed on 2026-10-10).
