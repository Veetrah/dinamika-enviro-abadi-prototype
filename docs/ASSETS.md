# Asset Inventory

Dokumen ini melacak kebutuhan aset, sumber, lisensi, status optimasi, dan penggunaan pada halaman.

## Status

- `NEEDED`: aset belum tersedia.
- `CANDIDATE`: tersedia tetapi belum dipilih.
- `APPROVED`: boleh digunakan.
- `OPTIMIZED`: format dan ukurannya siap untuk web.
- `REJECTED`: tidak digunakan.

## Inventaris

| ID | Aset | Lokasi penggunaan | Sumber / pemilik | Hak penggunaan | Format target | Status |
| --- | --- | --- | --- | --- | --- | --- |
| A-001 | Logo utama | Header dan footer | Pemilik proyek, `site/assets/vectors/Logo_DEA_colorful.svg` | Disediakan pemilik proyek untuk website DEA | SVG | APPROVED |
| A-002 | Logo versi terang | Footer atau surface biru | `[NEEDED]` | `[NEEDED]` | SVG | NEEDED |
| A-003 | Favicon | Browser tab | `[NEEDED]` | `[NEEDED]` | SVG dan PNG | NEEDED |
| A-004 | Hero visual ilustratif dengan wajah dibayangi | Hero prototype | OpenAI ImageGen, `site/assets/images/hero/hero-environmental-field-team-shadowed.png` | Milik proyek; tidak mewakili tim atau proyek nyata | PNG transparan | CANDIDATE |
| A-005 | Foto lapangan | About atau Services | `[OPTIONAL]` | `[NEEDED]` | AVIF dan WebP | NEEDED |
| A-006 | Bidang aksen kuning | Hero dan penanda section | Dibuat saat implementasi | Milik proyek | CSS atau SVG | CANDIDATE |
| A-007 | Ikon layanan | Services | `[OPTIONAL]` | `[NEEDED]` | SVG | NEEDED |
| A-008 | Montserrat untuk heading | Seluruh halaman | Google Fonts, self-hosted | SIL Open Font License 1.1 | WOFF2 | OPTIMIZED |
| A-009 | Montserrat untuk body | Seluruh halaman | Google Fonts, self-hosted | SIL Open Font License 1.1 | WOFF2 | OPTIMIZED |
| A-010 | Social preview image | Open Graph dan link preview | `[NEEDED]` | Milik proyek | AVIF, WebP, atau JPEG sesuai dukungan platform | NEEDED |

## Aturan Aset

- Jangan memakai foto, logo, ikon, atau font tanpa sumber dan hak penggunaan yang jelas.
- Jangan membuat foto proyek, anggota tim, atau identitas orang sebagai pengganti materi nyata. Placeholder ilustratif harus dianonimkan dan dilabeli secara eksplisit.
- Gunakan logo teks atau placeholder yang terlihat jelas jika logo final belum tersedia.
- Visual kontur teknis dapat dipakai sebagai placeholder jujur jika foto hero belum tersedia.
- Hindari foto stok generik yang tidak berhubungan dengan layanan.
- Semua gambar raster harus memiliki versi yang sudah dioptimalkan sebelum masuk source code.

## Standar File

- Nama file menggunakan huruf kecil dan kebab-case.
- Nama menyebut isi, bukan urutan acak. Contoh: `hero-field-survey.webp`.
- SVG dibersihkan dari metadata editor yang tidak diperlukan.
- Foto menyimpan master asli di luar folder web atau pada lokasi arsip yang disepakati.
- Source code hanya menyimpan versi siap web.

## Target Folder

| Jenis asset | Folder |
| --- | --- |
| Font | `site/assets/fonts/` |
| Ikon | `site/assets/icons/` |
| Elemen kuning berbasis SVG dan vector non-icon | `site/assets/vectors/` |
| Hero image | `site/assets/images/hero/` |
| Foto section | `site/assets/images/content/` |
| Social preview | `site/assets/images/social/` |

File master dan dokumen sumber tidak masuk `site/` karena folder tersebut menjadi publish directory.

## Metadata Gambar

| Asset ID | Width | Height | Aspect ratio | Alt text | Fetch strategy | Status |
| --- | --- | --- | --- | --- | --- | --- |
| A-004 | 1024 | 1536 | 2:3 | Ilustrasi dua tenaga profesional lingkungan yang memeriksa sampel air dan data lapangan | High priority, tidak lazy | CANDIDATE; optimasi final menunggu foto pengganti |
| A-005 | `[NEEDED]` | `[NEEDED]` | `[NEEDED]` | `[NEEDED]` | Lazy jika di bawah fold | NEEDED |
| A-010 | `[NEEDED]` | `[NEEDED]` | `[NEEDED]` | `[NEEDED]` | Social preview | NEEDED |

Alt text menjelaskan informasi yang diberikan gambar. Gambar dekoratif menggunakan `alt=""`.

## Optimasi

- Simpan dimensi intrinsik pada HTML untuk mencegah layout shift.
- Buat ukuran responsif jika satu gambar akan tampil sangat berbeda di mobile dan desktop.
- Jangan memperbesar gambar kecil melebihi ukuran alaminya.
- Gunakan kualitas kompresi yang menjaga detail penting tanpa membebani koneksi mobile.
- Catat ukuran akhir file setelah aset dioptimalkan.

## Approval Log

| Tanggal | Asset ID | Keputusan | Catatan | Disetujui oleh |
| --- | --- | --- | --- | --- |
| `[YYYY-MM-DD]` | `[A-000]` | `[APPROVED / REJECTED]` | `[NOTE]` | `[NAME]` |

