# Vedvik Site

Marketing site for **Vedvik Machinery** — a manufacturer of advanced packaging and inspection systems for FMCG and pharmaceutical lines, based in Ahmedabad, India.

The homepage is the approved "WE BUILD THE LINE" design: a light blue-gradient cinematic hero, a dark count-up stats band, a packaging section opening with a scrolling industries marquee and machine cards, an inspection section with custom line-icon cards, a contact section, and a persistent bottom progress bar that tracks the active section.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4** (base reset only — the homepage uses self-contained inline styles)
- **TypeScript**
- Fonts: **Montserrat** (display) + **Inter** (body), loaded via Google Fonts

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          # metadata, font <link>s
  page.tsx            # renders <VedvikSite />
  globals.css         # Tailwind import + minimal base reset
components/
  VedvikSite.tsx      # the full approved homepage (client component)
```

## Design tokens (in components/VedvikSite.tsx)

| Token  | Value     | Use                          |
| ------ | --------- | ---------------------------- |
| `NAVY` | `#020062` | Deep anchor / headings        |
| `BLUE` | `#3969C4` | Accents, links, buttons       |
| `SKY`  | `#80AFE8` | Highlights, hero gradient     |

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo. Framework auto-detects as Next.js (`vercel.json` included).
3. No env vars are required for the homepage.
4. Deploy.

## Notes / next steps

- Machine card images load from Cloudinary (`res.cloudinary.com/dnts8gzbh`). Swap to your own asset host or `public/` if you move them.
- Nav links and CTA buttons currently point to `#` — wire them to real routes when inner pages exist.
- Inner pages (`/solutions`, `/industries`, `/about`, `/contact`) are not built yet — homepage first, per the approved direction.
