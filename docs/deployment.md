# Deployment

## How it deploys

Vercel's Git integration is connected to `eskander-taher/sharraft-travel`:

- **Push to `main`** → production build → live on sharraft-travel.com in about a minute.
- **Push to any other branch / open a PR** → a preview deployment with its own URL.

Vercel project `sharraft-travel` (team `eskandertahers-projects`): framework preset
Next.js, Node 24.x, default install and build commands. Environment
variables: none.

## Before the first deploy from `chore/standardize`

This branch pins pnpm 11 (`packageManager`) and sets `engines.node` to 24. Vercel picks
the pnpm version from the lockfile unless Corepack is on, and builds with the Node
version `engines` asks for.

1. Vercel → project → Settings → Environment Variables:
   `ENABLE_EXPERIMENTAL_COREPACK` = `1` (all environments).
2. Push the branch and check the **preview** deployment builds and works.
3. Then merge to `main`.

## Domain

`sharraft-travel.com` and `www.sharraft-travel.com` are attached in Vercel → Settings → Domains. DNS is at Hostinger (`dns-parking.com` nameservers).

## Rolling back

Vercel → project → Deployments → pick the last good production deployment →
**Promote to Production** (or "Instant Rollback"). Takes effect in seconds; then
revert the bad commit on `main` so the next push doesn't bring it back.

## Checking it's up

```bash
curl -sI https://www.sharraft-travel.com | head -1
```
