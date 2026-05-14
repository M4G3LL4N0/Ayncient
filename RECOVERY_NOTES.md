# Ayncient Recovery Notes

## Startup Identity

Ayncient is a premium human-alignment wellness operating system. It helps people live closer to how humans were designed to live through sleep, sunlight, movement, food, hydration, stress reduction, nature exposure, social connection, and rhythm.

This is an ancestral-health and biological-alignment brand, not a generic SaaS product.

## Product Vision

Ayncient should feel calm, premium, earthy, and human. The product should guide users from awareness into action: take the alignment quiz, understand their result, join the waitlist, complete a 7-Day Reset, and build daily rhythm through the dashboard.

## Core Routes

- `/` - Homepage
- `/quiz` - Alignment quiz
- `/reset` - 7-Day Reset
- `/dashboard` - Dashboard overview
- `/dashboard/check-in` - Daily check-in
- `/dashboard/protocols` - Protocols
- `/dashboard/journal` - Journal
- `/api/waitlist` - Waitlist API
- `/api/save-result` - Quiz result API

## Design Direction

- Premium earthy human-alignment brand
- Dark grounded surfaces, warm off-white text, muted gold and plant-toned accents
- Avoid generic SaaS styling, oversized synthetic gradients, and placeholder template copy
- Preserve quiz, dashboard, protocols, reset, journal, and waitlist flows

## Fixed Errors

- Removed the fragile `./dashboard-header` dependency from `src/components/dashboard/dashboard-shell.tsx`.
- Made `DashboardShell` self-contained.
- Verified dashboard route modules all have valid default exports and non-empty page files.
- Moved the root scaffold `app/` and duplicate root `lib/` into `.autobuilder/legacy-root-app/` and `.autobuilder/legacy-root-lib/` so the real `src/app` routes build.
- Updated Supabase clients to use the dedicated `ayncient` schema.
- Reworked `/api/waitlist` so it writes directly to Supabase instead of calling the browser-facing waitlist helper.
- Made `/api/save-result` return a clear 503 when Supabase env vars are missing.

## Current Build Status

`pnpm build` passes and includes the real Ayncient routes:

- `/`
- `/quiz`
- `/reset`
- `/dashboard`
- `/dashboard/check-in`
- `/dashboard/protocols`
- `/dashboard/journal`
- `/api/waitlist`
- `/api/save-result`

## Supabase

- Shared Supabase project: `core-prod`
- Dedicated schema: `ayncient`
- Required client option: `db: { schema: "ayncient" }`
- Do not use the public schema for Ayncient application tables.

## Next Best Tasks

- Confirm actual Supabase table names and RLS policies for `waitlist`, `quiz_results`, `daily_checkins`, journal entries, and protocols.
- Connect dashboard data to authenticated user records.
- Improve quiz result persistence and result page flow.
- Add authentication intentionally before expanding private dashboard features.
- Polish mobile dashboard ergonomics.
- Improve SEO metadata and social preview assets.

## Manual Deploy Commands

```bash
pnpm install
pnpm build
vercel --prod
```

Do not deploy automatically from Autobuilder.

## Guardrails

- Do not turn Ayncient into generic SaaS.
- Do not expose internal Autobuilder automation publicly.
- Do not use the public Supabase schema.
- Do not use npm.
- Do not auto-deploy.
- Preserve the premium earthy human-alignment brand.
- Preserve quiz, dashboard, protocols, reset, journal, and waitlist.
- Keep the build green.
