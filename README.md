# Daniel Hansson - Professional CV Website

Modern, SEO-optimerad CV-website byggd med Next.js 16, TypeScript och Tailwind CSS 4.

## 🚀 Tech Stack

- **Next.js 16.0.3** (LTS) - React framework med App Router
- **React 19.2.0** - Latest stable
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Modern styling
- **ESLint** - Code quality
- **React Compiler** - Optimerad prestanda

## 🎨 Design

- **Färgschema**: Teal (#14b8a6) / Lila (#a855f7) - Professionellt tech-tema
- **Dark mode**: Automatisk via `prefers-color-scheme`
- **Ren design**: Ingen gradienter eller "poppy" animationer
- **Responsiv**: Mobile-first approach
- **SEO-optimerad**: Full Open Graph & Twitter Card support

## 📦 Installation

```bash
# Klona repot
git clone https://github.com/enoch85/enoch85.github.io.git
cd enoch85.github.io

# Installera dependencies
npm install

# Starta dev server
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din browser.

## 🛠️ Utveckling

```bash
# Development mode (hot reload)
npm run dev

# Type-check
npm run lint

# Build för produktion
npm run build

# Preview production build
npm start
```

## 📁 Projektstruktur

```
.
├── app/
│   ├── layout.tsx          # Root layout med SEO metadata
│   ├── page.tsx            # Huvudsida
│   └── globals.css         # Global CSS & färgschema
├── components/
│   ├── Hero.tsx            # Hero sektion med kontaktinfo
│   ├── Stats.tsx           # Snabba statistik
│   ├── Experience.tsx      # Arbetslivserfarenhet (timeline)
│   ├── Skills.tsx          # Teknisk kompetens
│   ├── Projects.tsx        # Projekt & Open Source
│   └── Additional.tsx      # Vad gör mig unik
├── public/
│   └── favicon.ico
├── next.config.ts          # Next.js konfiguration
├── tailwind.config.ts      # Tailwind konfiguration
└── package.json
```

## 🌐 Deployment

### Statisk Export (GitHub Pages / Netlify)

Projektet är konfigurerat med `output: 'export'` för statisk HTML-generering:

```bash
# Bygg statiska filer
npm run build

# Output genereras i /out mappen
```

### Deploy till rekrytera.danielhansson.nu

1. **GitHub Pages**:
   - Pusha till `main` branch
   - Aktivera Pages i repo settings
   - Konfigurera custom domain: `rekrytera.danielhansson.nu`
   - Lägg till CNAME record hos DNS-provider

2. **Netlify** (Rekommenderat):
   ```bash
   # Installera Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod
   ```

3. **Vercel**:
   ```bash
   # Installera Vercel CLI
   npm install -g vercel
   
   # Deploy
   vercel --prod
   ```

## 📝 Uppdatera Innehåll

### Ändra färgschema
Redigera `app/globals.css` - variablerna under `:root`:

```css
:root {
  --primary: #14b8a6;      /* Teal-500 */
  --secondary: #a855f7;    /* Purple-500 */
  --accent: #06b6d4;       /* Cyan-500 */
  /* ... */
}
```

### Uppdatera erfarenhet
Redigera `components/Experience.tsx` - uppdatera `experiences` array.

### Lägg till projekt
Redigera `components/Projects.tsx` - uppdatera `projects` array.

### Ändra SEO metadata
Redigera `app/layout.tsx` - uppdatera `metadata` objektet.

## 🎯 Features

- ✅ **SEO-optimerad** - Fullständig metadata för sökmotor & social media
- ✅ **Open Graph** - Perfekt för LinkedIn-delningar
- ✅ **Twitter Cards** - Snygg preview när du delar
- ✅ **Dark Mode** - Automatisk dark mode support
- ✅ **Responsive** - Fungerar på alla enheter
- ✅ **Fast** - Next.js 16 med React Compiler optimization
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Modern** - Tailwind CSS 4 för styling

## 📊 Performance

- **Lighthouse Score**: 100/100 (target)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **SEO Score**: 100/100

## 📄 Licens

© 2024 Daniel Hansson. All rights reserved.

## 🤝 Kontakt

- **E-post**: daniel@hanssonit.se
- **LinkedIn**: [daniel-hansson-7564a490](https://linkedin.com/in/daniel-hansson-7564a490/)
- **GitHub**: [@enoch85](https://github.com/enoch85)
- **Website**: [hanssonit.se](https://www.hanssonit.se)

---

**Byggt med passion för clean code och minimal komplexitet** 🚀
