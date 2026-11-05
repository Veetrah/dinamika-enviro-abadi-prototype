# QA Checklist

Checklist ini digunakan selama implementasi dan sebelum release candidate dinyatakan siap. Isi evidence dengan hasil nyata, bukan asumsi dari source code.

## 1. Build dan Runtime

- [x] Halaman dapat dibuka melalui local server.
- [x] Tidak ada error atau warning yang relevan pada console.
- [x] Seluruh CSS, JavaScript, font, ikon, dan gambar berhasil dimuat.
- [ ] Halaman tetap menampilkan konten utama ketika JavaScript gagal.

Evidence:

```text
2026-11-04 Chrome in-app browser, http://127.0.0.1:4173, PASS untuk prototype hero tunggal. HTML, logo SVG, PNG hero, font WOFF2, CSS, dan JavaScript mengembalikan HTTP 200. Console tidak memiliki warning atau error.
2026-11-05 Chrome in-app browser, http://127.0.0.1:4173, PASS untuk pembuka general dan section Konteks Pengelolaan Lingkungan. Hero tidak memusatkan pembuka pada dokumen lingkungan. Section setelah hero hanya memuat keresahan pemilik usaha dan tidak menyebut DEA, layanan, solusi, atau dokumen. Layout stabil pada 320 sampai 1440 px dan reveal mencapai state akhir.
2026-11-05 Chrome in-app browser, http://127.0.0.1:4173/#about, PASS untuk section About. Copy sesuai materi approved, istilah `metode ilmiah` dan `berbasis sains` tidak muncul pada section, layout stabil pada 320 sampai 1440 px, reveal mencapai state akhir, dan console tidak memiliki warning atau error.
```

## 2. Content Integrity

- [ ] Nama, deskripsi, layanan, proses, sektor, dan kontak sama dengan konten APPROVED.
- [ ] Tidak ada placeholder yang tersamarkan sebagai konten final.
- [ ] Tidak ada statistik, testimonial, proyek, sertifikasi, atau klaim tanpa sumber.
- [ ] Tidak ada nav item menuju section yang tidak tersedia.
- [ ] Legal name dan copyright benar.

## 3. Navigation dan Interaction

- [x] Logo atau nama perusahaan menuju tujuan yang disepakati.
- [ ] Setiap link navigasi menuju section yang benar.
- [ ] Primary CTA bekerja.
- [ ] Secondary CTA bekerja jika ditampilkan.
- [ ] Link email membuka alamat yang benar.
- [ ] Link WhatsApp membuka nomor yang benar.
- [ ] Mobile menu dapat dibuka dan ditutup.
- [ ] Mobile menu dapat ditutup dengan `Escape`.
- [ ] State `aria-expanded` sesuai keadaan menu.
- [x] Tidak ada tombol atau link mati pada scope prototype hero.

Click-through record:

| Elemen | Aksi yang diharapkan | Hasil | Browser / viewport |
| --- | --- | --- | --- |
| Skip link | Fokus berpindah ke `#main-content` | PASS, fokus berada pada elemen `main` | Chrome in-app, keyboard, 320 px |
| Logo DEA | Kembali ke `#top` | PASS | Chrome in-app, keyboard, 320 px |

## 4. Responsive Layout

Uji seluruh rentang, bukan hanya titik sampel.

| State | Titik uji awal | Hasil | Catatan |
| --- | --- | --- | --- |
| Compact | 320, 360, 390, 430 px | PASS, spot check | 320 dan 390 px diperiksa; konteks dan About menjadi satu kolom, target anchor menempatkan label di bawah header, dan tidak ada overflow |
| Medium | 600, 768, 900 px | PASS, spot check | 768 px diperiksa; About memisahkan label dan heading serta menyusun narasi dua kolom tanpa collision |
| Wide | 1024, 1280, 1440, 1920 px | PASS, spot check | 1280 x 720 dan 1440 x 900 diperiksa; heading menjadi focal point dan dua blok narasi tetap terpisah tanpa overflow |

- [x] Tidak ada horizontal overflow.
- [x] Teks tidak keluar container.
- [x] Grid reflow tanpa collision atau clipping.
- [x] Hero tidak menyisakan ruang kosong berlebihan pada mobile.
- [x] Navigasi tidak menutupi konten.
- [x] Target sentuh yang tersedia minimal 44 x 44 piksel dan tidak terlalu rapat.
- [ ] Hover interaction memiliki padanan touch.
- [ ] Orientasi portrait dan landscape tetap dapat digunakan.
- [ ] Zoom 200 persen tidak merusak akses ke konten utama.

## 5. Keyboard dan Accessibility

- [x] Urutan Tab mengikuti urutan visual pada scope prototype hero.
- [x] Semua link yang tersedia dapat diaktifkan dengan keyboard.
- [ ] Focus indicator terlihat jelas pada surface terang dan gelap.
- [x] Tidak ada keyboard trap.
- [ ] Menu dapat ditutup dengan `Escape`.
- [x] Satu `h1` dan hierarchy heading benar.
- [x] Landmark tersedia dan tidak disalahgunakan.
- [x] Semua image memiliki alt yang sesuai.
- [x] Semua control memiliki accessible name.
- [x] ARIA sesuai dengan native role.
- [x] Kontras normal text minimal 4.5:1.
- [x] Kontras large text minimal 3:1.
- [x] Informasi tidak bergantung pada warna saja.

## 6. Motion

- [x] Motion membantu orientasi atau feedback, bukan sekadar dekorasi.
- [x] Tidak ada animasi loop yang mengganggu.
- [x] Tidak ada scroll-jacking.
- [x] Hero reveal berhenti pada state akhir yang stabil.
- [ ] Motion compact lebih ringan ketika diperlukan.
- [ ] `prefers-reduced-motion` menonaktifkan atau menyederhanakan motion non-esensial.
- [ ] Konten tidak hilang saat reduced motion aktif.

Evidence prototype hero, 2026-11-04:

```text
Headline, PNG hero, dan aksen kuning mencapai state akhir yang stabil saat masuk viewport. Surface header transparan pada posisi atas, lalu berubah putih dan ringkas setelah scroll. Reduced-motion fallback tersedia di source, tetapi emulasi preference browser belum dijalankan.
Pada 2026-11-05, label, heading, dua paragraf, dan garis kuning section Konteks Pengelolaan Lingkungan mencapai state akhir satu kali tanpa loop atau scroll-jacking.
Pada 2026-11-05, label, heading, dua blok narasi, prinsip kerja, dan garis kuning About mencapai state akhir satu kali tanpa loop atau scroll-jacking.
```

## 7. Media dan Performance Mechanisms

- [x] Setiap image, video, dan iframe memiliki dimensi atau aspect ratio.
- [x] Hero image menggunakan `<img>` dan `fetchpriority="high"`.
- [x] Hero image tidak menggunakan lazy loading.
- [ ] Media di bawah fold menggunakan loading strategy yang sesuai.
- [x] Tidak ada third-party script sinkron yang memblokir render.
- [x] Script nonkritis menggunakan `defer` atau dimuat saat dibutuhkan.
- [ ] Tidak ada layout shift yang jelas saat aset dimuat.
- [ ] Tidak ada skor performa yang dicatat tanpa pengukuran nyata.

Measured results:

| Tanggal | Tool / environment | Metric | Result | Catatan |
| --- | --- | --- | --- | --- |
| `[YYYY-MM-DD]` | `[TOOL]` | `[METRIC]` | `[VALUE]` | `[NOTE]` |

## 8. Browser Matrix

| Browser | Versi | Compact | Medium | Wide | Status |
| --- | --- | --- | --- | --- | --- |
| Chrome | `[VERSION]` | `[ ]` | `[ ]` | `[ ]` | `[PASS / FAIL]` |
| Edge | `[VERSION]` | `[ ]` | `[ ]` | `[ ]` | `[PASS / FAIL]` |
| Firefox | `[VERSION]` | `[ ]` | `[ ]` | `[ ]` | `[PASS / FAIL]` |
| Safari | `[VERSION / UNAVAILABLE]` | `[ ]` | `[ ]` | `[ ]` | `[PASS / FAIL / NOT TESTED]` |

Jika browser tidak tersedia, tulis `NOT TESTED`. Jangan menganggapnya lulus.

## 9. Security

- [ ] Tidak ada secret atau credential pada source dan asset.
- [x] Tidak ada inline event handler, `eval`, atau dynamic script injection.
- [x] Tidak ada DOM HTML injection dari URL, storage, atau data eksternal.
- [ ] External tab memakai `noopener noreferrer`.
- [x] Tidak ada third-party script yang belum ditinjau.
- [ ] CSP telah diuji pada Report-Only sebelum enforcement.
- [ ] CSP enforced tidak menghasilkan violation yang tidak dijelaskan.
- [ ] Security headers sesuai `docs/SECURITY_CHECKLIST.md`.
- [ ] HTTPS aktif dan HTTP dialihkan dengan benar.
- [ ] HSTS hanya aktif setelah domain dan subdomain siap.
- [ ] Domain, DNS, repository, dan hosting memakai MFA.
- [ ] Contact link sudah diverifikasi setelah deployment.
- [ ] Rollback ke revision sebelumnya dapat dilakukan.
- [ ] Asset publik bebas metadata sensitif.

Security verification record:

| Tanggal | URL / environment | Revision | Status | Catatan |
| --- | --- | --- | --- | --- |
| `[YYYY-MM-DD]` | `[URL]` | `[REVISION]` | `[PASS / BLOCKED]` | `[NOTE]` |

## 10. SEO and Deployment

- [ ] Title, meta description, H1, dan Open Graph konsisten secara makna.
- [ ] Canonical memakai production HTTPS URL.
- [ ] HTTP dan hostname alternatif redirect langsung ke canonical.
- [ ] Preview environment tetap noindex.
- [ ] Production tidak noindex setelah approval.
- [ ] `robots.txt` dapat diakses dan menunjuk sitemap production.
- [ ] Sitemap hanya memuat canonical URL.
- [ ] Structured data hanya memakai data APPROVED dan lolos validator.
- [ ] Social preview memakai asset approved.
- [ ] Production revision sama dengan release candidate yang diuji.
- [ ] Response headers terverifikasi pada production.
- [ ] Rollback target tersedia dan sudah diuji.
- [ ] Release record sudah diisi.

## 11. Release Record

| Field | Isi |
| --- | --- |
| Candidate version | `[VERSION]` |
| Commit / revision | `[REVISION]` |
| Tested on | `[DATE]` |
| Tested by | `[NAME]` |
| Known limitations | `[NONE OR LIST]` |
| Final status | `[READY / BLOCKED]` |

