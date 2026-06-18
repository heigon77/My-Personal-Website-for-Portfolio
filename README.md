# Portfolio — Heigon Soldera

My bilingual personal website (🇬🇧 English primary + 🇧🇷 Portuguese), built with
[Astro](https://astro.build). It has **About / Education**, **Projects**,
**Publications** and **Contact** sections, with links to GitHub, LinkedIn and Lattes,
a light/dark theme and a language switch.

- English: `/` &nbsp;•&nbsp; Portuguese: `/pt/`

---

## 🚀 Run locally

```bash
npm install      # first time only
npm run dev      # dev server → http://localhost:4321
npm run build    # static build in dist/
npm run preview  # preview the production build
```

## ✏️ Edit the content

Almost everything lives in two files (no need to touch HTML):

- [`src/data/content.ts`](src/data/content.ts) — name, bio, education, languages,
  social links, projects and publications (each text has `en` and `pt`).
- [`src/i18n/ui.ts`](src/i18n/ui.ts) — interface strings (buttons, section titles).

## 🌐 Deploy (Cloudflare Pages)

Push to GitHub, then on **Cloudflare → Workers & Pages → Create → Pages → Connect to Git**:

- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `dist`

Every `git push` redeploys automatically.
