# 🕌 Mesjid Punya Rafi — Website Informasi Masjid

Website **informasi masjid** dengan fitur autentikasi Firebase dan NextAuth. Platform ini menyediakan informasi masjid, kegiatan, dan kontak untuk jamaah.

## ✨ Fitur

### Halaman Publik
- **Hero Section** — Tampilan pembuka masjid
- **About Us** — Profil dan sejarah masjid
- **Cek Brand** — Informasi layanan masjid
- **Contact Us** — Formulir kontak

### Autentikasi
- **Login/Register** — NextAuth dengan kredensial email + Firebase
- **bcrypt** — Enkripsi password yang aman
- **Provider Wrapper** — State autentikasi global

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI** | shadcn/ui (Radix) |
| **Auth** | NextAuth.js + bcrypt |
| **Backend** | Firebase |
| **Icons** | Lucide React |

## 📁 Struktur Proyek

```
app/
├── page.tsx                      # Landing page
├── login/page.tsx                # Halaman login
├── register/page.tsx             # Halaman registrasi
└── api/auth/
    ├── [...nextauth]/route.ts    # NextAuth handler
    └── register/route.tsx        # Register API

components/
├── core/
│   ├── Button.tsx
│   └── ButtonFull.tsx
├── layouts/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProviderWrapper.tsx       # Auth provider
├── pages/LandingPage/
│   ├── HeroSectionLP.tsx         # Hero
│   ├── AboutUs.tsx               # Tentang
│   ├── CekBrand.tsx              # Layanan
│   └── ContactUs.tsx             # Kontak
└── ui/                           # Komponen UI
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

> **Note**: Konfigurasikan Firebase dan NextAuth environment variables.

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
