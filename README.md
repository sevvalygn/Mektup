# Mektup

Mektup uygulaması — Next.js, TypeScript ve Tailwind CSS ile geliştirildi.

## Teknolojiler

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

**Not:** Zarf görseli `public/zarf.png` konumunda olmalı (Next.js bunu `/zarf.png` olarak sunar). Görsel görünmüyorsa `public/` klasörünü kontrol edin.

## Scripts

- `npm run dev` — Geliştirme sunucusu
- `npm run build` — Production build
- `npm run start` — Build sonrası sunucuyu çalıştırma
- `npm run lint` — ESLint

## Vercel ile Deployment

1. [Vercel](https://vercel.com) hesabıyla giriş yapın.
2. **Add New Project** → GitHub reposunu bağlayın (`sevvalygn/Mektup`).
3. Framework Preset: **Next.js** (otomatik algılanır).
4. **Deploy** ile yayına alın. Her `main` push’unda otomatik deploy olur.
