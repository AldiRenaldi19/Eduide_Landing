# Eduide — Edukasi Literasi Digital & Agama

## Stack

- **Next.js 16** (App Router) — React framework, deploys natively to Vercel
- **Tailwind CSS v4** — CSS-based config via `@import "tailwindcss"`, no `tailwind.config.js`
- **AOS** (Animate on Scroll) — npm package, initialized per page via `useEffect`
- **Plus Jakarta Sans** — Google Fonts in root layout

## Project structure

```
app/
  layout.js                    # Root layout (fonts, AOS CSS, html lang="id")
  page.js                      # Landing page (client component)
  globals.css                  # @import "tailwindcss" + custom classes
  kurikulum/page.js            # Curriculum listing (article cards)
  kurikulum/artikel/hakikat-manusia/page.js
  kurikulum/kisah-nabi/nabi-yusuf/page.js
  kurikulum/kisah-nabi/ashabul-kahfi/page.js
  poster/adab-berpakaian/page.js  # Interactive poster page
components/
  Navbar.js                    # Shared nav (client component with scroll effect)
  Footer.js                    # Shared footer
  AOSInit.js                   # Client component to init AOS
public/asset/img/              # Static images
public/asset/vid/              # Static videos
```

## Commands

```bash
npm run dev      # Next.js dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server (after build)
```

## Conventions

- **All pages are `'use client'`** (AOS hooks require browser APIs)
- Internal links use **absolute** paths (`/kurikulum`, `/poster/adab-berpakaian`)
- Navbar links on sub-pages point back via `backHref` prop
- AOS init: `AOS.init({ once: true, duration: 800 })` in each page `useEffect`
- Tailwind v4 uses `@theme` in CSS for customization (no JS config file)
- Static assets in `public/asset/` served at `/asset/...`
- Language: `id` (Indonesian)

## Deploy

Push to GitHub and import into Vercel — zero config. The project builds as static
export automatically via `next build`.

## Academic attribution

Project for **Pendidikan Agama Islam, Semester 6** — author info at bottom of
landing page (Nama: Aldi Renaldi W, NIM: 312310812, Kelas: I233D).
Footer: `© 2026 Aldi Renaldi - Proyek Akademik`.
