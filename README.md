# Flávia Ferri — personal website

Warm, editorial one-page site for a senior frontend job search. Next.js (App
Router) + Tailwind CSS v4, self-hosted fonts (Fraunces + Inter), fully static.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

## Content

All copy lives in `lib/content.js` (facts sourced from the `flavia-cv` repo —
nothing invented). The CV PDF at `public/flavia-ferri-cv.pdf` is a copy of
`flavia-cv/dist/senior/Flavia Ferri - CV.pdf`; re-copy it when the CV changes.

## Deploy

Pushes to `main` auto-deploy on the existing Vercel project.
