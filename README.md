# PT Dinamika Enviro Abadi Website

Repository perencanaan dan implementasi website company profile **PT Dinamika Enviro Abadi** dengan konsep visual internal **Blue Terrain**.

Status saat ini: **pre-execution**. HTML shell sudah dibuat; konten halaman belum diimplementasikan.

## Prinsip Proyek

> Simple technology. Premium execution.

Website menggunakan HTML5, CSS3, dan vanilla JavaScript. Fokus utamanya adalah informasi yang jelas, identitas visual yang kuat, pengalaman mobile yang matang, dan performa yang baik tanpa menambah teknologi yang tidak dibutuhkan.

## Peta Dokumen

| Dokumen | Fungsi |
| --- | --- |
| [`DESIGN.md`](DESIGN.md) | Sumber utama konsep, sistem visual, struktur halaman, motion, dan arah responsive |
| [`AGENTS.md`](AGENTS.md) | Aturan kerja untuk sesi implementasi dan agen coding berikutnya |
| [`docs/CONTENT.md`](docs/CONTENT.md) | Form pengumpulan serta persetujuan konten nyata |
| [`docs/ASSETS.md`](docs/ASSETS.md) | Inventaris logo, foto, font, ikon, lisensi, dan kebutuhan optimasi |
| [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) | Urutan kerja, dependensi, milestone, dan acceptance criteria |
| [`docs/CODE_STANDARDS.md`](docs/CODE_STANDARDS.md) | Konvensi HTML, CSS, JavaScript, responsive, aksesibilitas, dan performa |
| [`docs/DECISIONS.md`](docs/DECISIONS.md) | Catatan keputusan yang sudah dikunci dan perubahan arah proyek |
| [`docs/QA_CHECKLIST.md`](docs/QA_CHECKLIST.md) | Checklist pengujian sebelum website dinyatakan selesai |
| [`SECURITY.md`](SECURITY.md) | Kebijakan keamanan, ownership, pelaporan, dan respons insiden |
| [`docs/THREAT_MODEL.md`](docs/THREAT_MODEL.md) | Aset, trust boundary, ancaman, risiko, dan kontrol versi pertama |
| [`docs/SECURITY_CHECKLIST.md`](docs/SECURITY_CHECKLIST.md) | Checklist source, hosting, header, HTTPS, domain, deployment, dan privasi |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Hosting, domain, environment, deployment, cache, rollback, dan operasi |
| [`docs/SEO.md`](docs/SEO.md) | Metadata, canonical, crawling, sitemap, structured data, dan search appearance |
| [`docs/SITE_STRUCTURE.md`](docs/SITE_STRUCTURE.md) | Publish directory dan lokasi HTML, CSS, JavaScript, font, ikon, serta gambar |

## Urutan Kerja

1. Lengkapi dan setujui konten pada `docs/CONTENT.md`.
2. Lengkapi aset dan hak penggunaan pada `docs/ASSETS.md`.
3. Pastikan keputusan pada `docs/DECISIONS.md` masih berlaku.
4. Gunakan struktur file dari `docs/SITE_STRUCTURE.md`.
5. Jalankan fase implementasi dari `docs/IMPLEMENTATION.md`.
6. Ikuti konvensi pada `docs/CODE_STANDARDS.md`.
7. Terapkan baseline pada `SECURITY.md`, `docs/THREAT_MODEL.md`, dan `docs/SECURITY_CHECKLIST.md`.
8. Siapkan deployment dan search metadata dari `docs/DEPLOYMENT.md` serta `docs/SEO.md`.
9. Verifikasi hasil menggunakan `docs/QA_CHECKLIST.md`.
10. Jalankan audit anti-slop mode AFTER ketika implementasi selesai.

## Batasan Versi Pertama

- Satu landing page company profile.
- Tidak ada login, dashboard, database, atau CMS.
- Tidak ada statistik, testimoni, proyek, sektor, atau klaim yang belum terverifikasi.
- Tidak ada form kontak jika mekanisme pengiriman belum tersedia.
- Tidak ada library animasi berat tanpa alasan dan persetujuan baru.
- Tidak ada section tambahan hanya untuk membuat halaman terlihat panjang.

## Materi yang Masih Dibutuhkan

Fondasi teknis dan prototype visual sudah berjalan. Materi berikut masih dibutuhkan sebelum release:

- Ringkasan perusahaan.
- Daftar layanan utama.
- Tahapan proses kerja.
- Sektor yang dilayani.
- Kanal kontak utama.
- Logo resmi.
- Keputusan penggunaan foto hero atau visual tanpa foto.

