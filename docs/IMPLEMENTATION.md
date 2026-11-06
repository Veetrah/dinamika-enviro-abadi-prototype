# Implementation Plan

Rencana ini memecah eksekusi website PT Dinamika Enviro Abadi dengan konsep Blue Terrain menjadi fase yang dapat diverifikasi. Status task diperbarui langsung di tabel.

## Status Task

- `TODO`
- `IN PROGRESS`
- `BLOCKED`
- `DONE`

## Milestone

| Milestone | Hasil | Syarat selesai | Status |
| --- | --- | --- | --- |
| M0 Content Ready | Konten dan aset minimum disetujui | Field wajib pada CONTENT dan ASSETS tidak lagi NEEDED | TODO |
| M1 Structural Prototype | Halaman semantik tanpa motion dekoratif | Seluruh section, link, dan urutan heading benar | TODO |
| M2 Visual System | Desain Blue Terrain diterapkan | Warna, tipe, spacing, layout, dan aksen kuning konsisten | TODO |
| M3 Interaction | Navigasi dan motion berfungsi | Semua kontrol nyata, keyboard-ready, reduced motion tersedia | TODO |
| M4 Responsive QA | Compact, medium, dan wide stabil | Tidak ada overflow, clipping, atau kontrol sulit disentuh | TODO |
| M5 Release Candidate | Website siap audit akhir | Konten final, aset optimal, console bersih, checklist QA lengkap | TODO |
| M6 Production Release | Website tayang dan dapat dipulihkan | DNS, TLS, headers, SEO, verification, dan rollback selesai | TODO |

## Fase 0: Persiapan Materi

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P0-01 | Lengkapi identitas perusahaan | Tidak ada | Nama, legal name, dan deskripsi tersedia | TODO |
| P0-02 | Konfirmasi layanan dan prioritas | P0-01 | Semua layanan berasal dari sumber nyata | IN PROGRESS |
| P0-03 | Konfirmasi proses kerja | P0-01 | Urutan dan deskripsi tahap disetujui | TODO |
| P0-04 | Konfirmasi sektor | P0-01 | Tidak ada sektor yang hanya asumsi | TODO |
| P0-05 | Verifikasi kanal kontak | P0-01 | Email atau WhatsApp dapat dibuka | TODO |
| P0-06 | Pilih strategi hero | P0-01 | Foto berizin atau visual tanpa foto dipilih | IN PROGRESS |
| P0-07 | Setujui copy versi pertama | P0-02 sampai P0-05 | Section utama berstatus APPROVED | TODO |
| P0-08 | Tentukan domain, hosting, dan security owner | Tidak ada | Owner, MFA, provider, dan recovery contact tercatat | TODO |
| P0-09 | Setujui metadata dan search identity | P0-01, P0-07 | Title, description, canonical plan, dan organization data tersedia | TODO |

## Fase 1: Fondasi

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P1-01 | Buat struktur folder website | Tidak ada | Struktur `site/` mengikuti SITE_STRUCTURE dan memisahkan file publik | DONE |
| P1-02 | Buat HTML semantik | P1-01 | Landmarks dan hierarchy heading benar | IN PROGRESS |
| P1-03 | Tambahkan design tokens | P1-01 | Warna, type, spacing, radius, dan motion terpusat | IN PROGRESS |
| P1-04 | Tambahkan base styles | P1-03 | Reset, body, link, button, focus, dan media stabil | IN PROGRESS |
| P1-05 | Hubungkan font dan aset dasar | P1-03 | Tidak ada asset path mati atau layout shift | IN PROGRESS |
| P1-06 | Bangun struktur CSP-friendly | P1-01 | Tidak ada inline handler, eval, atau third-party script | TODO |

## Fase 2: Struktur Halaman

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P2-01 | Header dan navigasi | P1-02, P1-04 | Semua link menuju section nyata | DONE |
| P2-02 | Hero | P1-03, P0-06 | Hierarchy jelas pada compact dan wide | IN PROGRESS |
| P2-03 | Konteks Pengelolaan Lingkungan | P1-02, P0-07 | Copy approved, hierarchy jelas, dan reflow stabil | DONE |
| P2-04 | About | P0-07 | Konten approved dan mudah dibaca | DONE |
| P2-05 | Services | P0-02, P0-07 | Hierarchy mengikuti prioritas layanan | IN PROGRESS |
| P2-06 | Fokus Pengelolaan | P0-07 | Copy disetujui dan tidak menjanjikan hasil yang tidak dapat dijamin | IN PROGRESS |
| P2-07 | Expertise | P0-04 | Hanya sektor yang sudah dikonfirmasi | TODO |
| P2-08 | Contact dan Footer | P0-05, P0-07 | CTA dan informasi kontak berfungsi | IN PROGRESS |
| P2-09 | Metadata dan structured data | P0-09, P1-02 | Head metadata akurat dan JSON-LD hanya memakai data approved | TODO |

Catatan 2026-11-04: P2-01 dan P2-02 tetap `IN PROGRESS` karena navigasi dan section lanjutan belum dibangun. State header overlay, state header setelah scroll, hero 1280 x 720, serta reflow compact sampai wide sudah diverifikasi.

Catatan 2026-11-05: framing awal P2-03 tentang dokumen lingkungan dibatalkan. Section selesai direvisi menjadi konteks pengelolaan lingkungan yang general; dokumen lingkungan baru difokuskan pada Services. Copy, hierarchy, reveal, header clearance, console, dan reflow 320 sampai 1440 px telah diverifikasi.

Catatan 2026-11-05: supporting copy dan tiga fokus P2-02 juga direvisi agar framing hero tetap general. Kata `dokumen` tidak muncul pada hero maupun bridge; detail dokumen lingkungan ditunda sampai Services.

Catatan 2026-11-05: P2-03 direvisi lagi agar hanya memuat keresahan pemilik usaha. Penyebutan DEA dan jawaban perusahaan dipindahkan ke P2-04 About. Copy baru, target anchor, reveal akhir, hierarchy, dan reflow 320 sampai 1440 px telah diverifikasi tanpa overflow atau collision.

Catatan 2026-11-05: motion pembuka mulai memakai pola chapter scroll. Loader, progress line header, hero exit, dan sticky dua tahap pada section keresahan telah diterapkan dan diverifikasi pada wide viewport. QA compact dan reduced-motion tetap diperlukan sebelum P3-04/P3-06 dinyatakan selesai.

Catatan 2026-11-05: motion About dirapikan tanpa mengubah layout. Urutannya kini line draw, label, masked heading reveal, intro, supporting copy, lalu prinsip kerja. Wide viewport dan console telah diverifikasi; compact serta reduced-motion masih menunggu QA menyeluruh.

Catatan 2026-11-05: implementasi About sebelumnya diganti oleh chapter dua scene. Tentang DEA tampil lebih ringkas, kemudian berganti menjadi Cara Kami Bekerja dengan tiga tahap editorial. Wide memakai sticky progress; compact dan reduced-motion memakai normal flow.

Catatan 2026-11-05: audit motion memperbaiki observer satu-kali menjadi reversible, memindahkan trigger reveal ke area baca, memperkuat Hero exit, serta menambahkan exit phase pada section Tanggung Jawab dan About. Wide, compact, reverse scroll, overflow, dan console telah diverifikasi.

Catatan 2026-11-05: P2-05 Services mulai dieksekusi memakai empat kelompok layanan berstatus REVIEW. Waste-to-Energy tidak menjadi layanan tersendiri; pengelolaan limbah dipusatkan pada kelompok Pengelolaan Limbah dan Pemantauan Lingkungan. Layout memakai intro sticky dan daftar editorial dengan progress aktif; pemeriksaan copy akhir masih diperlukan sebelum status DONE.

Catatan 2026-11-05: revisi P2-05 diverifikasi pada wide 1280 x 720 dan compact 390 x 844. Progress 01–04, transisi layanan, reflow satu kolom, dan console lulus; tidak ada horizontal overflow. Task tetap `IN PROGRESS` sampai copy akhir diperiksa pemilik proyek.

Catatan 2026-11-06: P2-06 mulai dieksekusi sebagai section `Fokus Pengelolaan` dengan headline `Dari rencana ke pelaksanaan.` Prototype baru memuat label, headline, dan supporting copy. Tiga poin hasil serta foto belum dimasukkan.

Catatan 2026-11-06: tiga poin hasil P2-06 dimasukkan sebagai baris editorial bernomor dengan reveal per baris. Copy berstatus `REVIEW`; foto kegiatan belum dimasukkan karena aset publik belum tersedia.

Catatan 2026-11-06: P2-06 diubah menjadi empat chapter normal-flow. Pembuka dan poin 01–03 masuk serta keluar secara reversible; setiap poin memiliki placeholder dokumentasi yang akan diganti foto DEA setelah aset dan izin publikasi tersedia.

Catatan 2026-11-06: Contact ditambahkan sebagai penutup putih setelah `Fokus Pengelolaan`. Instagram, LinkedIn, email, dan WhatsApp memakai tombol ikon dengan tujuan nyata; URL Instagram diberikan pemilik proyek, sedangkan tiga kanal lain tetap berstatus `REVIEW` sampai pemeriksaan sebelum release. Footer final masih diperlukan sehingga P2-08 tetap `IN PROGRESS`.

Catatan 2026-11-06: Contact direvisi menjadi daftar vertikal Instagram, LinkedIn, dan email. Nama akun tampil pada setiap baris, seluruh kanal memakai navy, dan WhatsApp dihapus dari tampilan. Kuning tetap terbatas pada garis transisi section.

Catatan 2026-11-06: P2-01 selesai dengan empat tujuan nyata: Tentang, Layanan, Fokus, dan Kontak. Desktop memakai daftar horizontal; compact memakai tombol `Menu`. P3-02 diverifikasi untuk buka/tutup, pemilihan link, klik di luar, Escape, pengembalian fokus, state `aria-expanded`, target 44 px, dan reflow 390, 768, serta 1280 px.

Catatan 2026-11-06: Footer ditambahkan dengan surface navy, logo sementara monokrom putih, label kecil `Navigation` di atas daftar empat section yang tersedia, tombol ikon email, Instagram, dan LinkedIn, serta copyright pada baris paling bawah. Asset logo putih final masih menunggu sehingga P2-08 tetap `IN PROGRESS` bersama verifikasi akhir kanal kontak.

Catatan 2026-11-06: baris legal Footer ditambah tautan `Part of Arara Semesta Group` menuju `https://ararasemestagroup.id`. Tautan tersusun di bawah copyright pada compact state dan sejajar pada medium/wide state, serta dibuka pada tab baru dengan proteksi `noopener noreferrer`.

Catatan 2026-11-06: GitHub Pages disiapkan sebagai preview prototype publik untuk review tim teknis. Workflow hanya mengunggah folder `site/`, memakai action resmi GitHub, dan mempertahankan meta `noindex, nofollow`. Preview ini bukan production dan tidak mengubah proses development serta QA yang tetap local-first.

Catatan 2026-11-05: copy P2-04 About disusun sebagai `DRAFT` dari company profile dan materi yang diberikan pemilik proyek. Source belum diubah sampai heading, dua paragraf, dan prinsip kerja disetujui.

Catatan 2026-11-05: P2-04 selesai dieksekusi setelah pengguna meminta visualisasi langsung di source. About memakai surface soft blue, heading editorial, dua blok narasi, dan satu pernyataan prinsip kerja. Reflow 320 sampai 1440 px, reveal akhir, anchor setelah halaman stabil, kontrol yang tersedia, dan console telah diverifikasi.

## Fase 3: Identitas dan Interaksi

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P3-01 | Implementasikan signature hero dan aksen kuning | P2-01 sampai P2-07 | Visual terpilih konsisten dan tidak berlebihan | IN PROGRESS |
| P3-02 | Mobile menu | P2-01 | Buka, tutup, Escape, focus, dan state ARIA benar | DONE |
| P3-03 | Active navigation | P2-01 | State aktif sesuai section dan tidak mengganggu keyboard | TODO |
| P3-04 | Scroll reveal | P2-02 sampai P2-07 | Hanya elemen terpilih bergerak | IN PROGRESS |
| P3-05 | Approach line progress | P2-05, P3-01 | Horizontal di wide dan vertikal di compact | TODO |
| P3-06 | Reduced motion | P3-04, P3-05 | Konten tetap lengkap tanpa motion | IN PROGRESS |

## Fase 4: Responsive dan Kualitas

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P4-01 | Verifikasi compact state | M3 | Tidak ada overflow dan target sentuh memadai | TODO |
| P4-02 | Verifikasi medium state | M3 | Tidak ada stretched stack atau grid sempit | TODO |
| P4-03 | Verifikasi wide state | M3 | Komposisi tidak terlalu melebar dan hierarchy stabil | TODO |
| P4-04 | Keyboard pass | M3 | Seluruh kontrol dapat digunakan tanpa mouse | TODO |
| P4-05 | Contrast pass | M3 | Kombinasi teks memenuhi WCAG AA | TODO |
| P4-06 | Content verification | M3 | Source sama dengan konten approved | TODO |

## Fase 5: Optimasi dan Release Candidate

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P5-01 | Optimalkan media | M4 | Dimensi, format, alt, dan loading strategy benar | TODO |
| P5-02 | Periksa CSS dan JavaScript | M4 | Tidak ada code mati, patch script, atau error console | TODO |
| P5-03 | Click-through seluruh kontrol | M4 | Setiap aksi memberi hasil nyata | TODO |
| P5-04 | Uji browser | M4 | Hasil dicatat pada QA_CHECKLIST | TODO |
| P5-05 | Terapkan dan verifikasi security headers | P0-08, P5-01 sampai P5-04 | CSP dan header lolos verifikasi pada hosting | TODO |
| P5-06 | Verifikasi domain, HTTPS, dan rollback | P0-08, P5-05 | HTTPS stabil, akun aman, dan rollback sudah diuji | TODO |
| P5-07 | Audit anti-slop AFTER | P5-01 sampai P5-06 | Temuan terdokumentasi sebelum perbaikan dipilih | TODO |
| P5-08 | Final verification | P5-07 | Checklist QA dan security selesai tanpa blocker | TODO |

## Fase 6: Production Deployment

| ID | Task | Dependensi | Acceptance criteria | Status |
| --- | --- | --- | --- | --- |
| P6-01 | Finalisasi provider dan domain policy | P0-08 | Provider, owner, canonical host, dan rollback tercatat | TODO |
| P6-02 | Deploy release candidate ke preview | P5-08 | Revision final tersedia pada preview yang noindex | TODO |
| P6-03 | Verifikasi preview | P6-02 | QA, security, SEO, headers, dan click-through lulus | TODO |
| P6-04 | Deploy revision yang sama ke production | P6-03 | Tidak ada perubahan manual di luar source | TODO |
| P6-05 | Verifikasi production | P6-04 | DNS, TLS, redirects, headers, contact, canonical, robots, sitemap lulus | TODO |
| P6-06 | Uji rollback | P6-04 | Revision sebelumnya dapat dipulihkan dan diverifikasi | TODO |
| P6-07 | Submit sitemap dan inspect URL | P6-05 | Search Console record dicatat jika akses tersedia | TODO |
| P6-08 | Simpan release record | P6-05, P6-06 | Version, revision, waktu, owner, dan rollback target tercatat | TODO |

## Blocker Policy

Task berstatus `BLOCKED` harus mencatat:

- Data atau keputusan yang hilang.
- Dampak pada pekerjaan berikutnya.
- Bagian lain yang masih bisa dikerjakan tanpa menebak.
- Pemilik keputusan yang dibutuhkan.

