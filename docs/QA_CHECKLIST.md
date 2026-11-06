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
2026-11-05 Chrome in-app browser, http://127.0.0.1:4174/#services, PASS untuk revisi Services. Empat layanan dan progress 01–04 tampil sesuai urutan, Waste-to-Energy tidak muncul pada konten publik, console bersih, dan tidak ada horizontal overflow.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174/#management-focus, PASS untuk implementasi awal Fokus Pengelolaan sampai supporting copy. Label, heading, dan supporting copy tampil utuh; console bersih; tidak ada horizontal overflow pada 390 x 844 dan 1280 x 720.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174/#management-focus, PASS untuk revisi surface Fokus Pengelolaan ke navy utama `#336699`. Background terverifikasi `rgb(51, 102, 153)`, console bersih, dan tidak ada horizontal overflow pada 390 x 844 maupun 1280 x 720. White on navy memiliki rasio 6.00:1; supporting copy 90% white memiliki rasio komposit 5.23:1.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174/#management-focus, PASS untuk tiga baris hasil pada Fokus Pengelolaan. Urutan 01–03, heading, dan deskripsi tampil lengkap; reveal per baris mencapai state akhir; console bersih; tidak ada horizontal overflow pada 390 x 844 maupun 1280 x 720.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174/#management-focus, PASS untuk revisi empat chapter Fokus Pengelolaan. Pembuka dan chapter 01–03 memakai normal flow; setiap chapter menampilkan nomor, copy, dan placeholder dokumentasi; motion masuk, keluar, serta reverse scroll mencapai state yang benar. Console bersih dan tidak ada horizontal overflow pada 390 x 844, 768 x 900, dan 1280 x 720.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174/#contact, PASS untuk revisi Contact. Instagram, LinkedIn, dan email tampil sebagai tiga baris vertikal dengan ikon serta nama akun; WhatsApp tidak ada pada DOM. Instagram dan LinkedIn berhasil dibuka ke tujuan resmi. `mailto:` diverifikasi melalui source karena browser preview memblokir navigasi ke protokol eksternal. Console bersih dan tidak ada horizontal overflow pada 390 x 844, 768 x 900, maupun 1280 x 720. Navy pada putih terukur 6.00:1, muted pada putih 6.02:1, dan navy pada soft blue 5.41:1.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174, PASS untuk header dan navigasi. Empat link menuju section yang tersedia; desktop menampilkan daftar horizontal, sedangkan compact memakai tombol Menu. Buka/tutup, klik link, klik luar, Escape, pengembalian fokus, state ARIA, target sentuh, dan overflow diverifikasi pada 390 x 844, 768 x 900, dan 1280 x 720. Console tidak memiliki warning atau error.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174, PASS untuk Footer. Surface navy, logo sementara monokrom putih, label Navigation, empat link internal, tiga tombol ikon kontak, serta copyright tampil pada compact, medium, dan wide tanpa overflow atau collision. Seluruh target berukuran minimal 44 piksel, urutan keyboard sesuai urutan visual, focus ring kuning terlihat pada surface navy, dan console bersih. Putih pada navy terukur 6.00:1; kuning pada navy terukur 4.08:1.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174, PASS untuk tautan afiliasi Footer. `Part of Arara Semesta Group` mengarah ke `https://ararasemestagroup.id`, memakai `target="_blank"` dan `rel="noopener noreferrer"`. Link berada di bawah copyright pada compact state dan sejajar di sisi kanan pada medium/wide state. Target terukur 44 piksel, urutan keyboard berada setelah LinkedIn, focus ring kuning terlihat, console bersih, dan tidak ada horizontal overflow pada 390 x 844, 768 x 900, maupun 1280 x 720.
2026-11-06 GitHub Pages, https://veetrah.github.io/dinamika-enviro-abadi-prototype/, PASS TERBATAS untuk akses preview publik revision `cb248ae89bcb553485f59eab75ae58ffd685ba06`. Workflow selesai sukses; homepage, CSS, JavaScript, dan logo SVG mengembalikan HTTP 200; HTML memuat title prototype dan meta `noindex, nofollow`. Visual dan interaction QA mengacu pada pemeriksaan lokal revision sebelumnya; live browser pass belum diulang.
2026-11-06 Chrome in-app browser, http://127.0.0.1:4174, PASS untuk perubahan email publik. Contact dan Footer memakai `mailto:contact@denviroabadi.co.id` dengan accessible name yang sesuai. Alamat terlihat lengkap pada compact state, `overflow-wrap: anywhere` aktif, tidak ada horizontal overflow pada 390 x 844 maupun 1280 x 720, dan console bersih.
```

## 2. Content Integrity

- [ ] Nama, deskripsi, layanan, proses, sektor, dan kontak sama dengan konten APPROVED.
- [ ] Tidak ada placeholder yang tersamarkan sebagai konten final.
- [ ] Tidak ada statistik, testimonial, proyek, sertifikasi, atau klaim tanpa sumber.
- [x] Tidak ada nav item menuju section yang tidak tersedia.
- [ ] Legal name dan copyright benar.

## 3. Navigation dan Interaction

- [x] Logo atau nama perusahaan menuju tujuan yang disepakati.
- [x] Setiap link navigasi menuju section yang benar.
- [ ] Primary CTA bekerja.
- [ ] Secondary CTA bekerja jika ditampilkan.
- [ ] Link email membuka alamat yang benar.
- [x] WhatsApp tidak ditampilkan sesuai keputusan scope.
- [x] Mobile menu dapat dibuka dan ditutup.
- [x] Mobile menu dapat ditutup dengan `Escape`.
- [x] State `aria-expanded` sesuai keadaan menu.
- [x] Tidak ada tombol atau link mati pada scope prototype hero.

Click-through record:

| Elemen | Aksi yang diharapkan | Hasil | Browser / viewport |
| --- | --- | --- | --- |
| Skip link | Fokus berpindah ke `#main-content` | PASS, fokus berada pada elemen `main` | Chrome in-app, keyboard, 320 px |
| Logo DEA | Kembali ke `#top` | PASS | Chrome in-app, keyboard, 320 px |
| Tentang | Menuju `#about` | PASS | Chrome in-app, mouse/keyboard, 390 dan 1280 px |
| Layanan | Menuju `#services` | PASS | Chrome in-app, mouse/keyboard, 390 dan 1280 px |
| Fokus | Menuju `#management-focus` | PASS | Chrome in-app, mouse/keyboard, 390 dan 1280 px |
| Kontak | Menuju `#contact` | PASS | Chrome in-app, mouse/keyboard, 390 dan 1280 px |
| Menu compact | Buka/tutup melalui tombol, link, klik luar, dan Escape | PASS, fokus kembali ke tombol setelah Escape | Chrome in-app, keyboard/mouse, 390 px |
| Logo footer | Kembali ke `#top` | PASS | Chrome in-app, keyboard/mouse, 390 px |
| Navigasi footer | Tentang, Layanan, Fokus, dan Kontak menuju section masing-masing | PASS | Chrome in-app, keyboard/mouse, 390 dan 768 px |
| Ikon Instagram footer | Membuka `instagram.com/denviroabadi` pada tab baru | PASS, tujuan dan atribut tab baru terverifikasi | Chrome in-app, mouse/source, 390 px |
| Ikon LinkedIn footer | Membuka profil perusahaan DEA pada tab baru | PASS, tujuan dan atribut tab baru terverifikasi | Chrome in-app, mouse/source, 390 px |
| Ikon email footer | Membuka email baru ke `contact@denviroabadi.co.id` | PASS melalui inspeksi source dan local browser | Chrome in-app, keyboard/source, 390 px |
| Instagram | Membuka `instagram.com/denviroabadi` pada tab baru | PASS, tujuan resmi terbuka | Chrome in-app, mouse/keyboard, 1280 px |
| LinkedIn | Membuka profil perusahaan DEA pada tab baru | PASS, tujuan resmi terbuka | Chrome in-app, mouse/keyboard, 1280 px |
| Email | Membuka email baru ke `contact@denviroabadi.co.id` | PASS melalui inspeksi source dan local browser | Chrome in-app, keyboard/source, 1280 px |

## 4. Responsive Layout

Uji seluruh rentang, bukan hanya titik sampel.

| State | Titik uji awal | Hasil | Catatan |
| --- | --- | --- | --- |
| Compact | 320, 360, 390, 430 px | PASS, spot check | 320 dan 390 px diperiksa; konteks, About, Services, Fokus Pengelolaan, Contact, dan Footer menjadi satu kolom. Link Footer tersusun vertikal, tiga ikon tetap utuh, dan afiliasi grup turun di bawah copyright |
| Medium | 600, 768, 900 px | PASS, spot check | 768 px diperiksa; About dan Contact memisahkan label dari konten utama. Footer memakai tiga zona tanpa collision; copyright dan afiliasi grup sejajar pada baris legal |
| Wide | 1024, 1280, 1440, 1920 px | PASS, spot check | 1280 x 720 dan 1440 x 900 diperiksa; heading menjadi focal point, Services memakai intro sticky dan progress aktif, Fokus Pengelolaan memakai komposisi dua kolom, Contact memakai penutup editorial dua kolom, serta Footer menutup dengan komposisi logo, Navigation, ikon, dan baris afiliasi tanpa overflow |

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

- [x] Urutan Tab mengikuti urutan visual dari skip link, logo, sampai tiga kanal Contact.
- [x] Semua link yang tersedia dapat diaktifkan dengan keyboard.
- [x] Focus indicator terlihat jelas pada surface terang dan gelap.
- [x] Tidak ada keyboard trap.
- [x] Menu dapat ditutup dengan `Escape`.
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
Pada 2026-11-05, loader, progress line header, hero exit, serta pergantian dua tahap pada sticky section keresahan berjalan pada wide viewport. Console tidak memiliki warning atau error. Compact dan emulasi reduced-motion belum diuji ulang.
Pada 2026-11-05, About memakai masked heading reveal dan stagger narasi tanpa perubahan layout. State akhir wide viewport terbaca lengkap dan console bersih.
Pada 2026-11-05, About dua scene diverifikasi pada wide dan compact. Wide mengganti Tentang DEA menjadi Cara Kami Bekerja dan membuka tahap 01–03 sesuai progres scroll. Compact memakai normal flow dengan `scrollWidth` sama dengan `clientWidth`; console bersih. Emulasi reduced-motion khusus masih tertunda.
Pada 2026-11-05, audit seluruh motion memverifikasi Hero handoff, entrance dan dua scene Tanggung Jawab, entrance dan scene About, exit phase, serta reverse scroll. Reveal diputar kembali setelah section keluar lalu masuk viewport. Compact tetap tanpa horizontal overflow dan console bersih.
Pada 2026-11-05, Services dengan empat kelompok diverifikasi pada wide dan compact. Progress bergerak dari 01–04 sesuai layanan aktif, item berikutnya masuk tanpa jeda kosong, dan dua ukuran viewport tidak mengalami horizontal overflow.
Pada 2026-11-06, Fokus Pengelolaan diverifikasi pada wide dan compact. Label, heading, dan supporting copy muncul berurutan lalu mencapai state akhir yang stabil. Heading wide dibatasi 64 px dan compact 40 px; console bersih dan tidak ada horizontal overflow.
Pada 2026-11-06, tiga baris hasil Fokus Pengelolaan diverifikasi pada wide dan compact. Setiap baris masuk saat mencapai viewport, urutan tetap terbaca pada normal flow, dan reduced-motion tetap memakai fallback global tanpa menyembunyikan konten.
Pada 2026-11-06, Fokus Pengelolaan dipecah menjadi pembuka dan tiga chapter normal-flow. Chapter sebelumnya ease-out ke atas, chapter berikutnya masuk berurutan, dan arah motion pulih saat pengguna kembali scroll ke atas. Compact dan medium menyusun media di bawah copy tanpa sticky; wide memakai tiga kolom. Reduced-motion tetap mendapat normal flow statis melalui fallback global.
Pada 2026-11-06, Contact memakai reveal berurutan untuk garis, label, headline, copy, lalu kanal. State akhir stabil pada compact, medium, dan wide tanpa mengubah layout atau urutan keyboard.
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
| Candidate version | `prototype-preview-001` |
| Commit / revision | `cb248ae89bcb553485f59eab75ae58ffd685ba06` |
| Tested on | `2026-11-06` |
| Tested by | Astra |
| Known limitations | Konten dan aset final belum lengkap; security headers production, canonical, robots, sitemap, custom 404, dan rollback belum diuji |
| Final status | `READY FOR TECHNICAL REVIEW` |

