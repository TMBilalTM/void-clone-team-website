# voiddevs

<p align="center">
  <img src="public/vercel.svg" alt="Vercel Logo" width="80"/>
  <img src="public/next.svg" alt="Next.js Logo" width="80"/>
  <img src="public/globe.svg" alt="Globe" width="80"/>
</p>

<p align="center">
  <b>Modern, ölçeklenebilir ve şık web uygulamaları geliştirmek için Next.js tabanlı bir monorepo.</b>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-15.3.2-black?logo=nextdotjs" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-blue?logo=react" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/TailwindCSS-4-06b6d4?logo=tailwindcss" /></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn/ui-%20-yellow?logo=vercel" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" /></a>
</p>

---

## 🚀 Proje Hakkında

VoidDevs, modern web uygulamaları geliştirmek için tasarlanmış, Next.js 15 ve React 19 üzerine kurulu, şık ve ölçeklenebilir bir monorepodur. UI/UX için shadcn/ui, Radix UI, TailwindCSS ve Lucide ikonları ile zenginleştirilmiştir. Proje, açık kaynak ve topluluk katkısına açıktır.

## 🔥 Canlı Demo

> [https://void-clone-team-website.vercel.app/](https://void-clone-team-website.vercel.app/)

## 🛠️ Kullanılan Teknolojiler

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Vercel](https://vercel.com/)
- [ESLint, Prettier]

## 📁 Klasör Yapısı

```text
voiddevs/
├── app/                # Sayfalar ve route'lar
│   ├── about/          # Hakkımızda sayfası
│   ├── anasayfayedek/  # Alternatif ana sayfa
│   ├── blog/           # Blog sayfası
│   ├── contact/        # İletişim sayfası
│   ├── works/          # Projeler/Çalışmalar
│   ├── globals.css     # Global stiller
│   ├── layout.tsx      # Layout bileşeni
│   └── page.tsx        # Ana sayfa
├── components/         # Tüm React bileşenleri
│   ├── ui/             # UI alt bileşenleri (card, carousel, radial-glow, vb.)
│   ├── Footer.tsx      # Footer
│   ├── Header.tsx      # Header
│   └── talktous.tsx    # CTA bileşeni
├── lib/                # Yardımcı fonksiyonlar
├── public/             # Statik dosyalar (ikonlar, görseller)
├── env.example.txt     # Ortam değişkeni örneği
├── package.json        # Proje bağımlılıkları ve scriptler
├── tsconfig.json       # TypeScript yapılandırması
├── postcss.config.mjs  # PostCSS yapılandırması
├── eslint.config.mjs   # ESLint yapılandırması
└── README.md           # Proje dokümantasyonu
```

## ⚡️ Kurulum ve Başlangıç

1. **Depoyu klonlayın:**
   ```powershell
   git clone https://github.com/TMBilalTM/void-clone-team-website.git
   cd voiddevs
   ```
2. **Bağımlılıkları yükleyin:**
   ```powershell
   npm install
   # veya
yarn
   # veya
pnpm install
   # veya
bun install
   ```
3. **Geliştirme sunucusunu başlatın:**
   ```powershell
   npm run dev
   ```
4. Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın veya canlı demoyu ziyaret edin.

## 🧩 Scriptler

- `dev`   : Geliştirme sunucusu (`next dev --turbopack`)
- `build` : Production için derleme
- `start` : Production sunucusu
- `lint`  : Kod kalitesi kontrolü (ESLint)

## 🔑 Ortam Değişkenleri

`.env` dosyanız için örnek:
```env
NEXT_PUBLIC_GITHUB_TOKEN=TOKEN
```
> Github API ile projeleri listelemek için gereklidir.

## 🤝 Katkı

Katkıda bulunmak için lütfen bir fork oluşturun, değişikliklerinizi yeni bir branch'te yapın ve PR gönderin. Her türlü katkı ve öneriye açığız! Canlı demo üzerinden de geri bildirim bırakabilirsiniz.

## 📄 Lisans

MIT

## 📬 İletişim

- [İletişim Sayfası](https://void-clone-team-website.vercel.app/contact)
- [GitHub Issues](https://github.com/TMBilalTM/void-clone-team-website/issues)
- [Canlı Demo](https://void-clone-team-website.vercel.app/)

---

<p align="center">
  <sub>Made with ❤️ by BilalTM.</sub>
</p>
