# ReLife — marketing site

Next.js (App Router) landing page with Terms of Service and Privacy Policy for the [ReLife](https://apps.apple.com/us/app/relife-level-up/id6749513808) app.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment (production)

Copy [`.env.example`](./.env.example) to `.env.local` for local overrides. On Vercel, set the same variables in **Project → Settings → Environment Variables**.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata / Open Graph) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support contact |
| `NEXT_PUBLIC_PRIVACY_EMAIL` | Optional privacy inbox override |
| `NEXT_PUBLIC_DATA_RIGHTS_EMAIL` | GDPR-style requests (see Privacy Policy) |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store link |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play link |

## GitHub

Create a new empty repository (no README) on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Use your SSH remote URL instead if you prefer.

## Vercel

1. Sign in at [vercel.com](https://vercel.com) and **Add New → Project**.
2. **Import** the GitHub repository.
3. Framework Preset: **Next.js** (default).
4. Add the environment variables from `.env.example` (at least `NEXT_PUBLIC_SITE_URL` after your first deploy domain is known).
5. Deploy.

After the first deployment, set `NEXT_PUBLIC_SITE_URL` to your production URL (for example `https://relife.dev`) and redeploy so Open Graph URLs resolve correctly.

### Logo pipeline

If you replace `public/brand/relife-logo.png` with an opaque PNG export, run:

```bash
npm run logo:transparent
```

Then `npm run logo:sync-icons` to refresh `src/app/icon.png` and `apple-icon.png` (or run the transparent script alone; it syncs icons when used as documented in `scripts/apply-logo-transparency.mjs`).
