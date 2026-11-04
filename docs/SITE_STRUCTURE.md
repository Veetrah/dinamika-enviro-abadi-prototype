# Site Structure

Folder `site/` adalah satu-satunya publish directory. Hosting harus mengunggah atau menyajikan isi folder ini, bukan root project.

## Directory Map

```text
DEA/
├── site/                         # Publish directory
│   ├── index.html                # Landing page utama, dibuat saat implementasi
│   ├── 404.html                  # Halaman not found, dibuat sebelum deployment
│   ├── robots.txt                # Aturan crawler production
│   ├── sitemap.xml               # Canonical URL production
│   ├── site.webmanifest          # Metadata instalasi dan ikon jika digunakan
│   ├── favicon.ico               # Fallback favicon jika diperlukan
│   └── assets/
│       ├── css/
│       │   └── style.css         # Seluruh styling versi pertama
│       ├── js/
│       │   └── main.js           # Navigasi dan interaksi ringan
│       ├── fonts/                # File WOFF2 yang sudah disetujui
│       ├── icons/                # Ikon UI dan favicon source
│       ├── vectors/              # Elemen kuning dan SVG non-icon
│       └── images/
│           ├── hero/             # Hero image dan responsive variants
│           ├── content/          # Foto section dan materi konten
│           └── social/           # Open Graph dan social preview
├── docs/                         # Dokumentasi internal, tidak dipublish
├── DESIGN.md                     # Arah desain, tidak dipublish
├── SECURITY.md                   # Kebijakan internal, tidak dipublish
├── AGENTS.md                     # Instruksi kerja, tidak dipublish
└── README.md                     # Peta project, tidak dipublish
```

File pada peta yang belum ada sengaja belum dibuat. `index.html`, CSS, JavaScript, metadata crawler, dan file deployment baru dibuat saat fase implementasinya aktif.

## Where Files Go

| Jenis file | Lokasi |
| --- | --- |
| HTML landing page | `site/index.html` |
| HTML halaman 404 | `site/404.html` |
| CSS utama | `site/assets/css/style.css` |
| JavaScript utama | `site/assets/js/main.js` |
| Font self-hosted | `site/assets/fonts/` |
| Ikon antarmuka | `site/assets/icons/` |
| Elemen kuning berbasis SVG | `site/assets/vectors/` |
| Foto hero | `site/assets/images/hero/` |
| Foto About, Services, atau section lain | `site/assets/images/content/` |
| Open Graph image | `site/assets/images/social/` |
| Favicon final | `site/favicon.ico` atau format yang diputuskan kemudian |
| Robots | `site/robots.txt` |
| Sitemap | `site/sitemap.xml` |

## Rules

- Jangan menaruh dokumen internal di dalam `site/`.
- Jangan menaruh file master beresolusi besar di dalam `site/`.
- Jangan menaruh credential, source design, file akun, atau metadata privat di dalam `site/`.
- Asset di dalam `site/` harus merupakan versi siap web yang sudah disetujui dan dioptimalkan.
- Nama file menggunakan lowercase kebab-case.
- Jika isi asset berubah dan cache panjang dipakai, ubah nama file atau gunakan content hash.
- Jangan membuat folder baru hanya untuk satu file tanpa kebutuhan organisasi yang jelas.

## HTML Policy

Versi pertama hanya memiliki satu landing page, sehingga tidak memakai folder `html/` atau `pages/`. Jika scope berubah menjadi beberapa halaman, struktur baru harus dicatat di `docs/DECISIONS.md` sebelum folder tambahan dibuat.

## Deployment Boundary

Publish root harus diarahkan ke `site/`. Deploying root `DEA/` dilarang karena dapat mengekspos dokumentasi internal, checklist keamanan, dan file perencanaan.

