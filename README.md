# Strawhomes — Hero Section

Production-ready, responsive, animated hero for **strawhomes.com**, built with Vite + React + Tailwind CSS + Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Required assets

Drop these three files into `public/assets/`:

| File | Used by |
| --- | --- |
| `strawhomes-logo.png` | Header logo & favicon |
| `richard-morrison.jpg` | Profile card |
| `hero-daytime-home.jpg` | Hero background |

If any file is missing, that area falls back gracefully (no crash) — see `onError` handlers in the components.

## Brand tokens

Defined in `tailwind.config.js` and `src/index.css`:

- Primary Blue `#154270`
- Accent Green `#10B981`
- Accent Orange `#EB7100`
- Text Navy `#0B2239`
- Soft White `#F8FAFC`

## Component map

```
src/components/
  HeroSection.jsx   ← layout, background, overlays, CTAs
  Header.jsx        ← logo, desktop + mobile nav, phone, CTA button
  SearchPanel.jsx   ← tabs + search input + price/beds/baths + Search Homes
  ProfileCard.jsx   ← Richard Morrison card with contact rows
  StatCards.jsx     ← 4 metric cards (pass `enabled={false}` to hide unverified stats)
  TrustBar.jsx      ← bottom blue trust bar
```

## Notes on metric stats

The four stat cards use the values from the reference mockup:
`$1.7B+`, `1,000+`, `5-Star`, `Top 1%`.
If any are unverified, hide them by setting `<StatCards enabled={false} />` in `HeroSection.jsx`.
