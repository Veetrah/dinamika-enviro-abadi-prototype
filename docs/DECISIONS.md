# Decision Log

Catat keputusan yang memengaruhi scope, desain, arsitektur, atau operasional proyek. Jangan mengubah entri `LOCKED` tanpa persetujuan pengguna.

## Status

- `PROPOSED`: belum disetujui.
- `LOCKED`: keputusan aktif.
- `SUPERSEDED`: digantikan keputusan baru.
- `REJECTED`: tidak digunakan.

## Decisions

### D-001: Static website stack

- Status: `LOCKED`
- Keputusan: HTML5, CSS3, dan vanilla JavaScript.
- Alasan: versi pertama adalah company profile dengan konten jarang berubah dan interaksi ringan.
- Dampak: tidak ada login, database, CMS, framework aplikasi, atau backend.

### D-002: Blue Terrain visual direction

- Status: `SUPERSEDED`
- Keputusan: biru dominan, putih sebagai ruang konten, dan kuning sebagai aksen.
- Alasan: membangun kredibilitas konsultansi dan membedakan website dari visual lingkungan yang terlalu generik.
- Dampak: palet final harus tetap berada dalam arah ini.
- Digantikan oleh: `D-020`

### D-003: Yellow Survey Line

- Status: `SUPERSEDED`
- Keputusan: Yellow Survey Line menjadi motif identitas utama.
- Alasan: menghubungkan visual dengan survei, koordinat, pengukuran, dan proses teknis.
- Dampak: dipakai terarah pada hero, section marker, approach, dan transisi menuju contact.
- Digantikan oleh: `D-023`

### D-004: Mobile-first with adapted motion

- Status: `LOCKED`
- Keputusan: mobile dirancang sebagai layout tersendiri. Motion mobile tidak harus identik dengan desktop.
- Alasan: menjaga pengalaman dan performa pada ponsel kelas menengah.
- Dampak: layout, komposisi garis, dan intensitas motion dapat berubah sesuai viewport.

### D-005: Evidence-only content

- Status: `LOCKED`
- Keputusan: tidak ada statistik, testimonial, proyek, sektor, layanan, atau klaim tanpa sumber nyata.
- Alasan: kepercayaan perusahaan tidak boleh dibangun dengan materi rekaan.
- Dampak: section dapat dihilangkan jika data belum tersedia.

### D-006: No contact form in version one

- Status: `LOCKED`
- Keputusan: contact memakai email atau WhatsApp aktif tanpa form.
- Alasan: tidak ada backend dan tidak boleh ada form yang terlihat aktif tetapi tidak mengirim data.
- Dampak: form baru dapat ditambahkan setelah mekanisme pengiriman, validasi, privasi, dan feedback tersedia.

### D-007: Version one scope

- Status: `SUPERSEDED`
- Keputusan: Header, Hero, About, Services, Our Approach, Expertise, Contact, dan Footer.
- Alasan: struktur ini cukup menjelaskan perusahaan tanpa memaksakan materi yang belum tersedia.
- Dampak: peta proyek, selected projects, testimonials, insights, dan FAQ tidak masuk versi pertama.
- Digantikan oleh: `D-033`

### D-008: Lightweight motion

- Status: `LOCKED`
- Keputusan: CSS dan IntersectionObserver menjadi pilihan utama untuk motion.
- Alasan: kebutuhan motion sederhana tidak membenarkan GSAP, Three.js, atau smooth-scroll library.
- Dampak: dependency animasi baru membutuhkan keputusan pengganti yang disetujui.

### D-009: Initial palette values

- Status: `SUPERSEDED`
- Keputusan: gunakan token warna awal dari `DESIGN.md` untuk prototype pertama.
- Alasan: memberi titik mulai konkret untuk visual exploration.
- Dampak: warna dapat berubah setelah uji kontras dan review visual tanpa mengubah arah biru-putih-kuning.
- Digantikan oleh: `D-020`

### D-010: Initial typography

- Status: `SUPERSEDED`
- Keputusan: Manrope untuk heading dan Inter untuk body.
- Alasan: pasangan ini berasal dari eksplorasi konsep sebelumnya dan perlu diuji pada copy nyata.
- Dampak: belum boleh dianggap final sebelum pengujian readability, lisensi, dan karakter merek.
- Digantikan oleh: `D-024`

### D-011: First-party resources by default

- Status: `LOCKED`
- Keputusan: script, font, ikon, dan asset utama disimpan pada origin sendiri secara default.
- Alasan: mengurangi supply-chain risk, request leakage, dan ketergantungan pada availability pihak ketiga.
- Dampak: external resource membutuhkan threat review, lisensi, dan persetujuan.

### D-012: No client-side secrets

- Status: `LOCKED`
- Keputusan: tidak ada secret, credential, private token, atau API key pada source frontend.
- Alasan: seluruh code dan request frontend dapat dilihat pengunjung.
- Dampak: integrasi yang membutuhkan secret harus memakai komponen server-side dan threat model baru.

### D-013: Hosting-enforced security headers

- Status: `LOCKED`
- Keputusan: CSP dan security headers diterapkan pada response hosting, bukan hanya meta tag HTML.
- Alasan: response header mendukung kontrol lebih lengkap dan dapat diterapkan konsisten ke seluruh response.
- Dampak: provider hosting harus mendukung custom headers atau configuration file yang setara.

### D-014: No analytics by default

- Status: `LOCKED`
- Keputusan: versi pertama tidak memuat analytics, tag manager, tracking pixel, atau fingerprinting.
- Alasan: website belum memiliki kebutuhan pengukuran yang membenarkan tambahan data flow dan third-party code.
- Dampak: analytics baru dapat ditambahkan setelah tujuan, data, consent, retention, dan vendor ditinjau.

### D-015: Hosting capability baseline

- Status: `LOCKED`
- Keputusan: provider production harus mendukung HTTPS otomatis, custom headers, preview deployment, deployment log, dan rollback revision.
- Alasan: fitur tersebut diperlukan untuk menjalankan security baseline dan release yang dapat dipulihkan.
- Dampak: provider yang tidak mendukung CSP header atau rollback tidak memenuhi kebutuhan versi pertama.

### D-016: Production-only indexing

- Status: `LOCKED`
- Keputusan: hanya canonical production URL yang boleh diindeks. Local dan preview environment tetap noindex.
- Alasan: mencegah duplicate URL dan preview yang belum disetujui muncul pada search result.
- Dampak: preview memerlukan access control atau robots meta/header noindex dan tidak masuk sitemap.

### D-017: Evidence-only structured data

- Status: `LOCKED`
- Keputusan: structured data hanya berisi fakta yang APPROVED dan konsisten dengan halaman.
- Alasan: markup bukan tempat untuk menambahkan klaim, rating, sertifikasi, atau identitas yang tidak dapat dibuktikan.
- Dampak: property yang datanya belum tersedia dihilangkan, bukan diisi dengan contoh realistis.

### D-018: Dedicated publish directory

- Status: `LOCKED`
- Keputusan: seluruh file publik berada di `site/`, dan hosting hanya menyajikan folder tersebut.
- Alasan: memisahkan website dari dokumentasi internal, security plan, dan file kerja yang tidak boleh ikut terpublikasi.
- Dampak: `site/index.html` menjadi entry point, asset berada di `site/assets/`, dan provider tidak boleh memakai root project sebagai publish directory.

### D-019: Public company identity

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: nama publik dan legal yang digunakan pada website adalah PT Dinamika Enviro Abadi. Blue Terrain tetap menjadi nama konsep visual internal.
- Alasan: pengguna menetapkan nama perusahaan untuk menggantikan nama konsep pada tampilan publik.
- Dampak: title, header, hero, footer, dan dokumentasi implementasi menggunakan PT Dinamika Enviro Abadi sebagai identitas publik.

### D-020: Clean white-first visual direction

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: putih `#FFFFFF` menjadi warna utama, navy `#336699` menjadi warna sekunder, dan kuning `#FDD100` menjadi warna aksen. Hero memakai komposisi editorial yang bersih tanpa background grid atau panel kontur teknis.
- Alasan: pengguna menilai hero biru gelap dengan elemen blueprint terlalu teknis dan kurang bersih.
- Dampak: hero dan surface utama didominasi putih. Navy mengatur hierarchy dan kuning dipakai terbatas sebagai elemen adaptif atau fokus visual.
- Menggantikan: `D-002` dan `D-009`

### D-021: LinkedIn as current operational reference

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: LinkedIn resmi DEA menjadi referensi eksternal utama untuk cakupan layanan aktif dan positioning publik. Company profile tetap menjadi sumber visi, misi, dan data historis. Website lama hanya menjadi referensi arsip.
- Alasan: pemilik proyek menilai LinkedIn sebagai kanal perusahaan yang paling rutin diperbarui.
- Dampak: hierarchy layanan pada desain mengikuti LinkedIn. Informasi LinkedIn tetap masuk `docs/CONTENT.md` sebagai `REVIEW` sampai diperiksa dan disetujui sebelum publikasi.

### D-022: Storytelling without team profiles

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: versi pertama tidak menampilkan profil anggota tim. Narasi halaman dibangun melalui konteks kebutuhan klien, posisi DEA, kelompok solusi, proses kerja, konteks penerapan, dan ajakan berkonsultasi.
- Alasan: pemilik proyek memilih pendekatan storytelling seperti prinsip yang pernah digunakan pada ForestPro, bukan susunan company profile berbasis biodata tim.
- Dampak: tidak ada section team, nama personal, jabatan personal, atau foto profil. LinkedIn dipakai untuk membaca perkembangan perusahaan, bukan sebagai sumber daftar orang untuk website.

### D-023: Adaptive yellow element exploration

- Status: `SUPERSEDED`
- Tanggal: `2026-11-04`
- Keputusan: Yellow Survey Line tidak lagi menjadi satu-satunya motif. Hero membandingkan Adaptive Lens dan Kinetic Yellow Blocks sebelum satu arah dipilih untuk website final.
- Alasan: pengguna menginginkan karakter yang lebih fleksibel dan ekspresif daripada visual konsultan yang terlalu kaku.
- Dampak: kedua prototype dibuat berurutan pada halaman yang sama. Motion berhenti pada state akhir, tidak memakai scroll-jacking, dan memiliki reduced-motion fallback.
- Menggantikan: `D-003`
- Digantikan oleh: `D-027`

### D-024: Montserrat body direction

- Status: `SUPERSEDED`
- Tanggal: `2026-11-04`
- Keputusan: Montserrat menjadi arah font body berdasarkan materi company profile. Archivo diuji sebagai kandidat heading pada prototype hero.
- Alasan: body mengikuti karakter tipografi materi perusahaan, sedangkan heading membutuhkan bentuk yang lebih editorial dan tegas.
- Dampak: file font harus diperoleh dari sumber berlisensi dan disimpan sebagai WOFF2 pada origin sendiri. Prototype memakai fallback sistem sampai aset tersedia.
- Digantikan oleh: `D-028`

### D-025: Broader hero positioning

- Status: `SUPERSEDED`
- Tanggal: `2026-11-04`
- Keputusan: headline hero tidak memusatkan positioning pada kata dokumen. Working headline menjadi `Membaca dampak. Menentukan langkah.`
- Alasan: kata dokumen pada headline membuat DEA terkesan hanya mengurus administrasi, padahal cakupan layanannya mencakup kepatuhan teknis, pengelolaan, pemantauan, pertambangan, dan Waste-to-Energy.
- Dampak: dokumen lingkungan tetap tampil di section layanan, bukan menjadi satu-satunya kesan pada hero.
- Digantikan oleh: `D-029`

### D-026: Restrained editorial motion

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: prototype hero memakai komposisi editorial yang disiplin. Bentuk kuning mengikuti grid, tidak memakai rotasi acak, floating confetti, atau ilustrasi abstrak yang menyerupai template AI.
- Alasan: prototype awal dinilai terlalu generik, goofy, dan terlihat seperti hasil generator desain.
- Dampak: motion memakai perpindahan horizontal atau vertikal yang singkat, berhenti pada state akhir, dan tidak mengalahkan headline.

### D-027: Single simple editorial hero

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: hero memakai satu komposisi sederhana dengan headline besar, satu visual utama, copy pendek, dan daftar tiga poin. Eksplorasi Adaptive Lens dan Kinetic Yellow Blocks tidak dilanjutkan.
- Alasan: pengguna memilih kesederhanaan dan disiplin layout ForestPro sebagai referensi. Dua prototype sebelumnya dinilai terlalu konseptual dan terlihat seperti desain AI.
- Dampak: prototype menggunakan monogram DEA sebagai placeholder visual sampai foto kegiatan yang berizin tersedia. Motion dibatasi pada text reveal, mask reveal, dan satu bidang kuning.
- Menggantikan: `D-023`
- Catatan: placeholder monogram digantikan oleh `D-029`; struktur hero tetap berlaku.

### D-028: Unified Montserrat typography

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: Montserrat digunakan untuk heading dan body. Heading memakai bobot 600, sedangkan body memakai bobot 400 sampai 500 sesuai hierarchy.
- Alasan: pengguna menolak bentuk heading sebelumnya dan memilih Montserrat sebagai arah yang lebih sesuai dengan materi brand DEA.
- Dampak: Montserrat Latin WOFF2 disimpan pada origin sendiri bersama lisensi SIL Open Font License. Tidak ada request font ke Google saat halaman dibuka.
- Menggantikan: `D-024`

### D-029: Updated hero identity and temporary visual

- Status: `SUPERSEDED`
- Tanggal: `2026-11-04`
- Keputusan: label hero menjadi `Solusi Lingkungan`, working headline menjadi `Bergerak maju. Tetap selaras.`, logo resmi SVG dipakai pada header, dan monogram diganti cutout ilustratif dua profesional lingkungan dengan wajah dibayangi navy.
- Alasan: wording sebelumnya dinilai kurang memiliki karakter, sedangkan monogram tidak memberi konteks pekerjaan DEA. Bayangan wajah membedakan visual AI sementara dari dokumentasi tim yang akan diberikan kemudian.
- Dampak: placeholder selalu memiliki caption yang menyatakan bahwa visual bukan dokumentasi tim atau proyek DEA. Foto kegiatan yang berizin tetap menjadi pengganti final.
- Menggantikan: wording pada `D-025` dan placeholder monogram pada `D-027`
- Digantikan oleh: `D-030`

### D-030: Company name as hero headline

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: category line hero menjadi `Solusi Lingkungan Berkelanjutan`, sedangkan headline utama memakai nama `Dinamika Enviro Abadi` dalam tiga baris. Supporting copy dan daftar fokus mengikuti materi layanan pada `docs/MATERI.md`.
- Alasan: pengguna menilai headline sebelumnya masih lemah dan memilih nama perusahaan sebagai pesan utama. Nama perusahaan memberi identitas yang lebih langsung, sedangkan copy pendukung menjelaskan basis sains dan cakupan layanan.
- Dampak: ukuran heading diturunkan agar tiga kata tetap terbaca pada compact, medium, dan wide state tanpa bersaing dengan visual utama. Visual placeholder dan caption dari `D-029` tetap berlaku.
- Menggantikan: wording hero pada `D-029`

### D-031: Header integrated with hero

- Status: `LOCKED`
- Tanggal: `2026-11-04`
- Keputusan: header diposisikan di atas hero tanpa mengambil ruang layout. Pada posisi awal surface header transparan. Setelah halaman mulai digulir, header menampilkan background putih, border bawah, dan tinggi yang lebih ringkas.
- Alasan: bar header terpisah mengurangi ruang vertikal hero dan mendorong headline keluar dari viewport awal pada layar desktop yang pendek.
- Dampak: hero memakai tinggi viewport penuh. State header dikelola dengan `IntersectionObserver` dan tetap menampilkan logo serta link yang dapat digunakan dengan keyboard.

### D-032: Local-first execution and GitHub for version control

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: seluruh development, preview, dan QA proyek dijalankan pada environment lokal. GitHub hanya digunakan untuk version control dan penyimpanan checkpoint source.
- Alasan: pengguna ingin proses eksekusi tetap terkendali di lokal dan memisahkan repository source dari environment hosting atau runtime.
- Dampak: tidak ada GitHub Pages, GitHub Actions deployment, preview otomatis, atau integrasi hosting dari repository tanpa keputusan baru. Commit dan push dilakukan hanya ketika pengguna meminta checkpoint.

### D-033: Environmental document role as narrative bridge

- Status: `SUPERSEDED`
- Tanggal: `2026-11-05`
- Keputusan: versi pertama menambahkan section ringkas tentang peran dokumen lingkungan langsung setelah hero. Section memakai komposisi editorial dua kolom pada wide state dan satu kolom pada compact state, tanpa card, statistik, atau timeline.
- Alasan: pengunjung perlu memahami fungsi dokumen lingkungan sebelum memasuki informasi perusahaan dan kelompok layanan, tetapi penjelasannya harus tetap singkat dan bernada konsultatif.
- Dampak: alur utama menjadi Hero, Peran Dokumen Lingkungan, About, Services, Our Approach, Expertise, Contact, dan Footer. Copy section menggunakan materi berstatus `APPROVED` pada `docs/CONTENT.md`.
- Menggantikan: scope struktur pada `D-007`
- Digantikan oleh: `D-034`

### D-034: General environmental context before services

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: section setelah hero membahas kebutuhan pengelolaan lingkungan secara umum. Istilah dan penjelasan khusus mengenai dokumen lingkungan baru menjadi fokus pada section layanan.
- Alasan: pengguna tidak ingin pembuka halaman memberi kesan bahwa DEA hanya berfokus pada pengurusan dokumen.
- Dampak: label, heading, dan copy bridge memakai framing pengelolaan lingkungan, dampak, kewajiban, pengendalian, dan pemantauan. Komposisi visual sederhana dari D-033 tetap dipertahankan.
- Menggantikan: framing konten pada `D-033`

### D-035: General opening before service detail

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: hero dan section bridge tidak menggunakan dokumen lingkungan sebagai framing utama. Pembuka membahas dampak, kewajiban, pengelolaan, limbah, pemantauan, dan pendampingan teknis secara umum; dokumen lingkungan baru dijelaskan pada section Services.
- Alasan: pengguna ingin kesan awal DEA tetap luas dan tidak terlihat hanya menangani pengurusan dokumen.
- Dampak: supporting copy dan daftar fokus hero direvisi. Category line dan headline perusahaan dari `D-030` tetap dipertahankan.

### D-036: Owner concern before DEA introduction

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: section setelah hero berfokus pada keresahan pemilik usaha dalam menjalankan kegiatan operasional sekaligus memenuhi tanggung jawab lingkungan. Section tidak menyebut DEA, layanan, dokumen lingkungan, atau solusi.
- Alasan: alur storytelling membutuhkan ruang bagi pengunjung untuk mengenali persoalannya terlebih dahulu sebelum DEA diperkenalkan sebagai pihak yang mendampingi.
- Dampak: copy section memakai sudut pandang kebutuhan usaha. Section berikutnya akan menjadi About DEA dan menjawab keresahan tersebut melalui profesionalisme, integritas, kompetensi, serta metode ilmiah.

### D-037: About avoids research-institution framing

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: section About tidak menggunakan istilah `metode ilmiah` sebagai prinsip atau pesan utama. Copy memusatkan posisi DEA pada pendampingan profesional, integritas, kompetensi, dan pemahaman teknis terhadap konteks setiap kegiatan.
- Alasan: istilah `metode ilmiah` memberi kesan lembaga riset atau pengembangan, bukan konsultan yang mendampingi kebutuhan operasional perusahaan.
- Dampak: supporting copy dan prinsip kerja About direvisi. Materi sumber tetap dicatat pada `docs/MATERI.md`, tetapi tidak diangkat sebagai framing utama website.
- Menggantikan: bagian framing `metode ilmiah` pada dampak `D-036`

### D-038: Editorial soft-blue About section

- Status: `SUPERSEDED`
- Tanggal: `2026-11-05`
- Keputusan: About memakai surface soft blue dengan heading sebagai focal point, dua blok narasi, dan satu pernyataan prinsip kerja. Section tidak memakai card, statistik, profil tim, atau foto placeholder tambahan.
- Alasan: perubahan surface dan komposisi memisahkan jawaban DEA dari section keresahan sebelumnya tanpa menambah dekorasi atau klaim baru.
- Dampak: layout compact tersusun satu kolom. Mulai medium state, label dan heading memakai dua zona, sedangkan intro dan supporting copy tersusun dua kolom. Motion dibatasi pada reveal satu kali mengikuti urutan baca.
- Digantikan oleh: `D-040`

### D-039: Scroll-driven opening chapters

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: pembuka halaman memakai loader singkat, progress line pada header, hero exit ringan, dan section keresahan dua tahap dengan sticky scroll pada wide viewport. Compact viewport tetap memakai normal flow.
- Alasan: pengguna memilih ritme storytelling ForestPro sebagai acuan motion, tanpa menyalin identitas visual atau memakai scroll-jacking.
- Dampak: implementasi tetap vanilla CSS dan JavaScript, menghormati `prefers-reduced-motion`, serta hanya menganimasikan opacity dan transform.
- Catatan: tahap kedua section keresahan melanjutkan dua paragraf narasi utama; pola checklist generik tidak digunakan.
- Catatan: reveal section bersifat reversible. State masuk diputar kembali ketika section kembali ke area baca, sedangkan Hero dan sticky chapter memiliki fase ease-out sebelum section berikutnya mengambil layar.

### D-040: Two-scene About chapter

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: About menjadi satu chapter dengan dua scene berurutan: Tentang DEA dan Cara Kami Bekerja. Wide viewport memakai sticky scroll, sedangkan compact viewport tetap normal flow.
- Alasan: komposisi sebelumnya terlalu padat dan pernyataan prinsip kerja terlalu generik. Pemisahan scene memberi ruang pada pengenalan perusahaan dan menjelaskan pendekatan kerja secara lebih konkret.
- Dampak: scene pertama memakai heading dan intro ringkas. Scene kedua memakai tiga baris editorial yang muncul mengikuti progres scroll. Tidak memakai card, profil tim, atau klaim baru.

### D-041: Editorial services index

- Status: `SUPERSEDED`
- Tanggal: `2026-11-05`
- Keputusan: Services memakai hierarchy lima kelompok layanan LinkedIn. Wide viewport menampilkan intro sticky dan daftar layanan editorial yang bergerak normal; compact viewport memakai satu kolom tanpa card atau accordion.
- Alasan: layanan perlu mudah dipindai tanpa mengulang pola full-screen sticky dari chapter sebelumnya. Struktur LinkedIn adalah materi paling aktual dan menempatkan dokumen lingkungan serta kepatuhan teknis sebagai prioritas.
- Dampak: progress 01–05 mengikuti layanan aktif. Setiap baris masuk dan keluar secara reversible. Nama, urutan, dan copy layanan tetap berstatus `REVIEW` sampai diperiksa pengguna.
- Digantikan oleh: `D-042`

### D-042: Four service groups with waste management integrated

- Status: `LOCKED`
- Tanggal: `2026-11-05`
- Keputusan: Services memakai empat kelompok: Dokumen Lingkungan; Kepatuhan dan Layanan Teknis Lingkungan; Pengelolaan Limbah dan Pemantauan Lingkungan; serta Layanan Lingkungan Pertambangan. Waste-to-Energy tidak menjadi layanan tersendiri.
- Alasan: Waste-to-Energy terlalu spesifik untuk diposisikan sebagai kelompok layanan utama dan tidak tercantum pada company profile terbaru yang diberikan pemilik proyek. Aspek pengelolaan limbah lebih tepat ditempatkan di dalam layanan pengelolaan dan pemantauan.
- Dampak: progress Services berubah menjadi 01–04. Istilah `Pengolahan Sampah menjadi Energi Listrik` dihapus dari website. Materi Waste-to-Energy tetap disimpan sebagai referensi internal dan baru dapat dipakai sebagai pengalaman proyek setelah dikonfirmasi.
- Menggantikan: `D-041`

## Decision Template

### D-XXX: Title

- Status: `PROPOSED`
- Tanggal: `[YYYY-MM-DD]`
- Keputusan: `[DECISION]`
- Alasan: `[WHY]`
- Dampak: `[CONSEQUENCES]`
- Menggantikan: `[OPTIONAL DECISION ID]`

