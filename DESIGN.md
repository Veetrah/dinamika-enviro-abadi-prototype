# PT DINAMIKA ENVIRO ABADI

Dokumen rencana desain website company profile PT Dinamika Enviro Abadi.

Konsep visual internal: **Blue Terrain**  
Status: **Concept locked, structural prototype in progress**  
Sumber: rekonstruksi pembahasan konsep pada 30 Oktober 2026  
Prinsip utama: **Simple technology. Premium execution.**

## 1. Ringkasan Konsep

Blue Terrain adalah konsep visual landing page company profile PT Dinamika Enviro Abadi. Perusahaan diposisikan sebagai konsultan lingkungan dengan cakupan dokumen lingkungan, kepatuhan dan layanan teknis, pengelolaan limbah dan pemantauan, serta kebutuhan lingkungan pertambangan. Karakternya harus terasa kredibel, presisi, dan modern, bukan organisasi lingkungan generik yang penuh warna hijau, ikon daun, atau slogan kosong.

Identitas visual dibangun dari tiga warna utama:

- Putih sebagai warna dominan agar halaman terasa bersih, ringan, dan fokus pada isi.
- Navy `#336699` sebagai warna sekunder untuk heading, struktur, dan identitas perusahaan.
- Kuning `#FDD100` sebagai aksen presisi, bukan warna dekoratif yang disebar ke semua elemen.

Hero memakai komposisi editorial yang sederhana: headline besar, satu visual utama, dan copy pendukung yang ringkas. Kuning tetap menjadi aksen identitas, tetapi tidak dijadikan konsep visual yang perlu dijelaskan kepada pengunjung.

## 2. Tujuan Website

Website harus membantu pengunjung:

1. Memahami siapa perusahaan dan bidang kerjanya dalam beberapa detik.
2. Menangkap bahwa dokumen lingkungan dan pengelolaan limbah merupakan fokus penting dalam layanan DEA.
3. Menemukan layanan yang relevan tanpa membaca teks panjang.
4. Melihat bahwa perusahaan bekerja dengan proses yang sistematis.
5. Mengetahui sektor atau jenis pekerjaan yang didukung.
6. Menghubungi perusahaan melalui kanal yang benar-benar aktif.

Website tidak ditujukan untuk login, dashboard, transaksi, pengelolaan data, atau fungsi aplikasi internal.

## 3. Posisi Merek dan Kepribadian

### Karakter utama

- Corporate
- Clean
- Technical
- Premium
- Terukur
- Bertanggung jawab

### Kesan yang harus muncul

Pengunjung harus menangkap bahwa perusahaan memahami kebutuhan dokumen lingkungan, kepatuhan teknis, pengelolaan limbah, pemantauan, dan pekerjaan teknis lingkungan. DEA harus terlihat mampu mendampingi proses tersebut secara profesional dan sistematis.

### Kesan yang harus dihindari

- Tampilan organisasi pecinta alam yang terlalu hijau dan penuh ornamen daun.
- Tampilan perusahaan pengangkutan sampah atau operator kebersihan umum.
- Gaya futuristik berlebihan atau seperti dashboard teknologi.
- Animasi yang menjadi pusat perhatian dan mengalahkan isi.
- Klaim bombastis tanpa bukti.
- Tampilan template company profile yang bisa dipakai perusahaan apa pun hanya dengan mengganti logo.

### Arah visual

Interpretasi konsep untuk eksekusi:

- **ENERGY 2:** percaya diri dan premium, tetapi tidak agresif.
- **RHYTHM 2:** struktur konsisten dengan beberapa perubahan komposisi agar tidak monoton.
- **MOTION 2:** transisi dan scroll reveal terarah, tanpa scroll-jacking atau animasi tanpa henti.

## 4. Status Keputusan

### Sudah dikunci

- Nama konsep: **Blue Terrain**.
- Nama publik perusahaan: **PT Dinamika Enviro Abadi**.
- Jenis website: landing page company profile konsultan lingkungan.
- Hierarchy layanan terdiri dari Dokumen Lingkungan; Kepatuhan dan Layanan Teknis Lingkungan; Pengelolaan Limbah dan Pemantauan Lingkungan; serta Layanan Lingkungan Pertambangan.
- Dokumen lingkungan dan pengelolaan limbah tetap menjadi pintu masuk komunikasi utama pada versi pertama.
- Warna utama: putih `#FFFFFF`.
- Warna sekunder: navy `#336699`.
- Warna aksen: kuning `#FDD100`.
- Gaya: corporate, clean, technical, premium.
- Pendekatan: mobile-first dan responsif.
- Motion: halus, singkat, dan punya fungsi.
- Stack: HTML5, CSS3, dan vanilla JavaScript.
- Struktur inti: Hero, Konteks Pengelolaan Lingkungan, About, Services, Our Approach, Expertise, Contact, Footer.
- Tidak menggunakan login, database, CMS, framework aplikasi, GSAP, Three.js, atau library animasi berat untuk versi pertama.

### Sementara dan perlu divalidasi saat visual exploration

- Pasangan typeface.
- Pilihan foto hero atau penggunaan komposisi tipografi tanpa foto.
- Detail spacing, radius, dan ketebalan garis.
- Copy final setiap section.

### Masih membutuhkan data nyata

- Nama resmi perusahaan dan logo.
- Ringkasan perusahaan.
- Deskripsi final, batas cakupan, dan prioritas komersial setiap layanan.
- Tahapan proses kerja yang benar-benar digunakan.
- Sektor yang benar-benar dilayani.
- Alamat, email, nomor WhatsApp, dan kanal kontak lain.
- Foto proyek atau aktivitas lapangan yang memiliki izin penggunaan.
- Legal name dan tahun copyright.

## 5. Sistem Visual

### 5.1 Palet warna

| Token | Nilai | Fungsi |
| --- | --- | --- |
| Primary White | `#FFFFFF` | Hero dan surface utama |
| DEA Navy | `#336699` | Heading, identitas, link, dan struktur utama |
| Survey Yellow | `#FDD100` | Brand mark, aksen visual utama, dan penanda kecil |
| Soft Blue | `#EEF4F8` | Surface pendukung yang diturunkan dari navy |
| Ink | `#1E2A33` | Teks isi pada background putih |
| Muted Ink | `#536575` | Teks pendukung pada background putih |

Aturan penggunaan:

- Putih harus tetap menjadi surface yang paling dominan.
- Kuning tidak dipakai sebagai warna teks di atas putih.
- Kuning diprioritaskan untuk elemen adaptif dan satu momen fokus.
- Teks pada tombol kuning menggunakan warna gelap.
- Navy tidak dipakai sebagai background penuh pada hero.
- Semua kombinasi teks dan background harus lulus WCAG AA saat eksekusi.

### 5.2 Tipografi awal

Sistem tipografi yang dipakai:

- **Montserrat 600** untuk heading agar hierarchy tetap kuat tanpa karakter condensed yang terlalu agresif.
- **Montserrat 400** untuk body agar konsisten dengan materi company profile perusahaan.

Subset Latin Montserrat disimpan sebagai WOFF2 pada origin sendiri. File lisensi SIL Open Font License ikut disimpan bersama asset font. Fallback sistem tetap tersedia jika file font gagal dimuat.

### 5.3 Bentuk dan permukaan

- Surface mayoritas solid dan matte.
- Border tipis dipakai hanya untuk memperjelas struktur.
- Shadow digunakan hemat untuk elemen yang benar-benar terangkat.
- Radius konsisten, tetapi tidak semua komponen dibuat berbentuk pil.
- Ikon harus relevan dengan layanan. Jika tidak ada ikon yang tepat, gunakan nomor, label, atau tipografi saja.

### 5.4 Bahasa visual layanan

Sisi teknis DEA tidak diterjemahkan menjadi tampilan produk teknologi. Kredibilitas teknis dibangun melalui hierarchy, fotografi nyata, istilah layanan yang spesifik, dan struktur informasi yang rapi.

Untuk dokumen lingkungan:

- Gunakan bahasa visual berupa susunan informasi, penomoran, tahapan pemeriksaan, dan hubungan antarbagian.
- Hindari ilustrasi dokumen palsu yang menampilkan data atau persetujuan rekaan.
- Jangan membuat mockup sertifikat, izin, stempel, atau dokumen regulasi tanpa sumber nyata.

Untuk kepatuhan teknis dan pengelolaan limbah:

- Tampilkan proses, aliran, pengendalian, pemantauan, dan keterlacakan sebagai gagasan visual. Cakupan dapat menyentuh air limbah, emisi, dan limbah B3 sesuai materi yang sudah disetujui.
- Gunakan foto fasilitas, kegiatan lapangan, pengambilan sampel, atau aktivitas teknis hanya jika asetnya nyata dan berizin.
- Hindari ikon tempat sampah, simbol daur ulang berulang, tumpukan sampah dramatis, atau visual hijau yang membuat layanan terlihat seperti kampanye kebersihan umum.

Pengelolaan limbah dan pemantauan lingkungan serta layanan lingkungan pertambangan hadir setelah dua pintu masuk utama. Waste-to-Energy tidak menjadi kelompok layanan tersendiri; pengalaman terkait baru dapat ditampilkan setelah cakupan pekerjaan dan izin publikasinya dikonfirmasi. Perizinan, survei, pemetaan, kehutanan, dan konservasi dari materi lama tidak masuk hierarchy aktif sampai perusahaan menegaskan bahwa layanan tersebut masih dipasarkan.

## 6. Signature Hero: Focused Editorial Composition

Hero dibangun dari tiga bagian yang mudah dipahami tanpa penjelasan konsep:

1. Headline besar untuk positioning utama.
2. Satu visual pusat yang memberi karakter dan konteks.
3. Copy pendek beserta tiga poin pendekatan di sisi akhir.

### Strategi visual

- Pilihan utama adalah foto kegiatan DEA yang nyata, berizin, dan dapat dipotong sebagai visual dominan.
- Selama foto nyata belum tersedia, prototype memakai cutout ilustratif dua profesional lingkungan sebagai placeholder yang terlihat jelas.
- Wajah pada placeholder ditutup bayangan navy dan caption menyatakan bahwa visual tersebut bukan dokumentasi tim atau proyek DEA.
- Placeholder tidak boleh dipakai untuk menyiratkan identitas anggota tim, fasilitas, atau proyek nyata.
- Kuning dipakai sebagai satu bidang di belakang visual dan penanda kecil pada daftar.

### Motion

- Baris headline masuk berurutan dengan perpindahan pendek.
- Visual utama terbuka satu kali melalui mask reveal.
- Bidang kuning muncul setelah visual utama dan berhenti pada posisi akhir.
- Tidak ada rotasi acak, bouncing, parallax berlebihan, scroll-jacking, atau loop dekoratif.
- Konten tetap terlihat jika JavaScript gagal dan motion disederhanakan saat `prefers-reduced-motion` aktif.

## 7. Arsitektur Halaman

Halaman dibangun sebagai satu alur cerita, bukan kumpulan section yang berdiri sendiri:

1. Hero membuka konteks kebutuhan lingkungan yang ditangani DEA.
2. Konteks Pengelolaan Lingkungan mengangkat keresahan pemilik usaha dalam menjaga kegiatan operasional sekaligus menjalankan tanggung jawab lingkungan.
3. About menjawab keresahan tersebut dengan memperkenalkan posisi, integritas, dan pendekatan DEA.
4. Services mengubah kebutuhan tersebut menjadi kelompok solusi yang konkret.
5. Our Approach menunjukkan bagaimana pekerjaan dijalankan secara sistematis.
6. Expertise memberi konteks penerapan tanpa membuat klaim proyek yang belum disetujui.
7. Contact menutup narasi dengan langkah berikutnya yang jelas.

Transisi antarseksi memakai copy, ritme ruang, dan fotografi agar cerita terasa menyambung. Pendekatan ini mengambil disiplin layout dan storytelling ForestPro sebagai referensi, tetapi komposisi, warna, dan isi tetap khusus untuk DEA.

### 7.1 Header dan navigasi

Tujuan: memberi akses cepat ke konten yang benar-benar ada.

- Logo atau nama perusahaan di sisi awal.
- Pada posisi awal, header berada di atas surface hero tanpa membuat bar terpisah yang memakan tinggi layout.
- Setelah halaman mulai digulir, header memakai surface putih, border bawah, dan tinggi yang lebih ringkas agar navigasi tetap terbaca.
- Navigasi hanya menuju About, Services, Approach, Expertise, dan Contact jika seluruh section tersebut tersedia.
- CTA utama mengarah ke kanal kontak nyata.
- Desktop menggunakan navigasi horizontal yang ringkas.
- Mobile menggunakan tombol berlabel **Menu**, bukan ikon tanpa keterangan.
- Menu bisa ditutup melalui tombol, klik link, klik area luar, dan tombol `Escape`.

### 7.2 Hero

Tujuan: memposisikan DEA sebagai konsultan yang mendampingi pemahaman dampak, kepatuhan, pengelolaan limbah, dan pemantauan melalui pendekatan yang profesional.

Komposisi desktop:

- Layout editorial tiga zona dengan ruang putih yang luas: identitas, visual, dan konteks layanan.
- Nama perusahaan menjadi headline utama; pekerjaan yang ditangani dijelaskan melalui supporting copy dan daftar fokus.
- Nama PT Dinamika Enviro Abadi tetap terlihat jelas pada header dan identitas halaman.
- Navy dipakai pada headline dan struktur tipografi.
- Hero hanya memiliki satu visual utama. Kuning menjadi aksen pendukung, bukan objek yang mendominasi layout.
- Tidak memakai background grid, koordinat, frame kontur, atau ornamen yang membuat hero terasa seperti dashboard teknologi.

Komposisi mobile:

- Satu kolom dengan urutan kategori, headline, deskripsi, dan CTA jika tujuan aktif sudah tersedia.
- Tinggi mengikuti konten, bukan dipaksa `100vh`.
- Motion elemen kuning disederhanakan dan komposisinya ditata ulang untuk layar sempit.

Copy referensi, belum final:

> Solusi Lingkungan Berkelanjutan
>
> **Dinamika Enviro Abadi**
>
> Mendampingi kegiatan usaha dalam memahami dampak, memenuhi kewajiban, dan menjalankan pengelolaan lingkungan melalui pendekatan profesional berbasis sains.

Nama perusahaan menjadi headline agar identitas DEA menjadi focal point yang tidak dapat ditukar dengan brand lain. Pemenggalan tiga baris mengikuti tiga kata pada nama perusahaan, bukan memotong slogan secara artifisial. Dokumen lingkungan tetap menjadi layanan penting, tetapi baru dibahas secara spesifik pada section Services.

CTA referensi: **Lihat Layanan Kami** dan **Konsultasikan Kebutuhan**. Keduanya hanya dipakai jika memiliki tujuan yang aktif.

### 7.3 Konteks Pengelolaan Lingkungan

Tujuan: membuat pemilik usaha mengenali ketegangan antara kebutuhan operasional dan tanggung jawab lingkungan sebelum halaman memperkenalkan DEA.

- Komposisi editorial dua kolom pada wide state dan satu kolom pada compact state.
- Hanya memuat label, heading, body copy, dan supporting copy yang telah disetujui.
- Tidak memusatkan pembuka pada dokumen lingkungan; layanan tersebut dibahas secara spesifik pada section Services.
- Tidak menyebut DEA, layanan, atau solusi karena section berikutnya bertugas menjawab keresahan ini melalui posisi perusahaan.
- Garis kuning pendek menjadi penanda transisi dan tidak berkembang menjadi ornamen tambahan.
- Tidak menggunakan card, statistik, ilustrasi dokumen, atau timeline.
- Motion dibatasi pada reveal satu kali yang mengikuti arah baca.

### 7.4 About Us / Who We Are

Tujuan: membangun pemahaman dan kredibilitas melalui informasi perusahaan, bukan angka buatan.

- Background terang dengan layout editorial.
- Heading biru berukuran kuat dan garis kuning pendek sebagai penanda.
- Ringkasan perusahaan dalam satu atau dua blok teks.
- Prinsip kerja ditampilkan hanya jika berasal dari nilai perusahaan yang nyata.
- Tidak menampilkan jumlah proyek, tahun pengalaman, wilayah kerja, atau angka lain sebelum data terverifikasi tersedia.

### 7.5 Our Services

Tujuan: membuat layanan mudah dipindai dan dipahami.

- Dokumen lingkungan serta kepatuhan dan layanan teknis lingkungan mendapatkan hierarchy paling kuat.
- Pengelolaan limbah dibahas secara konkret di dalam layanan teknis, terutama limbah B3, air limbah, dan emisi sesuai materi yang disetujui.
- Pengelolaan limbah dan pemantauan serta layanan lingkungan pertambangan disusun setelah dua kelompok awal.
- Perizinan, survei, pemetaan, kehutanan, dan konservasi dari materi lama tidak ditampilkan sebagai kelompok utama tanpa konfirmasi baru.
- Kartu tidak wajib seragam jika bobot layanan berbeda.
- Interaksi desktop dapat memakai pergeseran kecil dan perubahan border.
- Mobile menggunakan tap feedback, bukan bergantung pada hover.

Komposisi yang disarankan:

1. Dokumen Lingkungan.
2. Kepatuhan dan Layanan Teknis Lingkungan.
3. Pengelolaan Limbah dan Pemantauan Lingkungan.
4. Layanan Lingkungan Pertambangan.

### 7.6 Our Approach

Tujuan: memperlihatkan bahwa pekerjaan dijalankan melalui proses yang sistematis.

Alur yang ditampilkan harus cukup luas untuk mewakili pekerjaan dokumen lingkungan, kepatuhan teknis, pengelolaan limbah, dan pemantauan. Tahap dapat mencakup konsultasi awal, pengumpulan data, kajian, penyusunan atau perencanaan, dan pendampingan. Nama serta urutan final harus mengikuti proses kerja perusahaan yang sebenarnya.

Jangan memaksakan satu proses generik jika kelompok layanan memiliki alur yang berbeda. Website dapat menampilkan satu kerangka kerja bersama, lalu menjelaskan perbedaan pada detail layanan.

- Desktop menampilkan alur horizontal dengan connector sederhana yang tidak bersaing dengan motif hero.
- Mobile menampilkan alur vertikal yang mengikuti arah scroll.
- Animasi garis menunjukkan progres membaca, bukan mengunci atau mengambil alih scroll.

### 7.7 Expertise / Sectors We Support

Tujuan: menggantikan showcase proyek ketika materi portofolio belum cukup.

- Menampilkan sektor yang benar-benar dilayani.
- Contoh dari diskusi: kehutanan, infrastruktur, dan industri.
- Menggunakan komposisi teks besar bernomor sehingga tidak bergantung pada banyak foto.
- Sektor tidak ditampilkan sebagai klaim jika belum dikonfirmasi.

Section ini bersifat pendukung. Pengunjung harus memahami fokus layanan DEA sebelum membaca sektor yang dilayani.

### 7.8 Contact

Tujuan: memberi jalur komunikasi yang langsung dan jelas.

- Background biru penuh sebagai penutup narasi utama.
- Heading singkat dan spesifik.
- Satu CTA kuning menuju WhatsApp atau email yang aktif.
- Alamat dan detail kontak hanya diisi dengan data nyata.
- Tidak menggunakan form jika tidak ada backend atau proses penerimaan pesan yang jelas.

### 7.9 Footer

- Logo atau nama perusahaan.
- Navigasi singkat ke section yang tersedia.
- Informasi kontak inti.
- Copyright dengan legal name dan tahun yang benar.
- Tidak memakai footer empat kolom jika isinya tidak cukup.

## 8. Section yang Sengaja Tidak Masuk Versi Pertama

- Project Footprint atau peta interaktif.
- Selected Projects jika data proyek dan foto belum tersedia.
- Testimonials jika tidak ada testimoni nyata.
- Statistik perusahaan jika sumber datanya belum tersedia.
- Insights atau artikel jika belum ada strategi publikasi.
- FAQ jika pertanyaan nyata calon klien belum diketahui.
- Form kontak tanpa mekanisme pengiriman yang aktif.
- Profil anggota tim. Kredibilitas dibangun melalui cerita perusahaan, layanan, proses kerja, dan bukti yang telah disetujui.

Section tersebut dapat ditambahkan pada fase berikutnya setelah materi nyata tersedia.

## 9. Strategi Saat Materi Terbatas

| Kondisi | Pendekatan |
| --- | --- |
| Foto proyek minim | Prioritaskan satu foto kegiatan dokumen lingkungan, pemantauan air limbah atau emisi, pengelolaan limbah B3, pertambangan, atau kerja lapangan lain yang relevan dan berizin |
| Tidak ada foto yang layak | Gunakan cutout ilustratif berwajah anonim dengan caption yang menegaskan bahwa visual bukan dokumentasi tim atau proyek DEA |
| Belum ada portofolio | Fokus pada layanan, metode kerja, dan sektor nyata |
| Deskripsi perusahaan singkat | Gunakan layout editorial dan whitespace, bukan menambah copy kosong |
| Tidak ada video | Gunakan CSS motion dan SVG ringan |
| Tidak ada testimoni | Hilangkan section testimonial |
| Konten jarang berubah | Gunakan website statis tanpa CMS |

## 10. Sistem Motion

Motion harus membantu orientasi, urutan baca, dan feedback interaksi.

| Elemen | Desktop | Mobile |
| --- | --- | --- |
| Hero | Text reveal singkat dan elemen kuning tersusun satu kali | Text reveal lebih pendek dan transform lebih ringan |
| Visual hero | Foto atau cutout ilustratif dibuka satu kali melalui mask reveal | Visual tampil statis atau memakai reveal yang lebih pendek |
| Service item | Hover dan focus state | Scroll reveal serta tap feedback |
| Our Approach | Garis horizontal mengikuti urutan | Garis vertikal mengikuti urutan |
| Navigation | Surface header muncul saat halaman mulai digulir | Menu dengan transisi singkat |
| CTA | Hover, active, dan focus state | Tap feedback yang jelas |

Aturan teknis:

- Prioritaskan `transform` dan `opacity`.
- Gunakan `IntersectionObserver` untuk animasi ketika elemen masuk viewport.
- Gunakan CSS untuk motion sederhana. SVG hanya ditambahkan jika visual final memang membutuhkannya.
- Hormati `prefers-reduced-motion`.
- Hindari animasi panjang, loop dekoratif, dan scroll-jacking.
- Motion desktop dan mobile boleh berbeda selama karakter visualnya tetap sama.

## 11. Strategi Responsive

Mobile adalah layout yang dirancang ulang, bukan desktop yang diperkecil.

### State awal

- **Compact:** satu kolom, navigasi menu, tipografi dan spacing mobile.
- **Medium:** satu atau dua kolom sesuai kebutuhan konten.
- **Wide:** komposisi desktop penuh dan ruang horizontal yang lebih ekspresif.

Breakpoint final ditentukan saat konten mulai rusak, bukan berdasarkan daftar model perangkat. Nilai `640px` dan `1024px` boleh dipakai sebagai titik uji awal, lalu disesuaikan berdasarkan perilaku layout.

### Ketentuan mobile

- Tidak ada horizontal overflow.
- Target sentuh minimal 44 x 44 piksel dengan jarak yang cukup.
- Headline menggunakan ukuran fluid seperti `clamp()`.
- Grid layanan dan expertise harus dapat reflow tanpa clipping.
- Sticky header harus ringkas dan tidak mengambil terlalu banyak tinggi layar.
- Interaksi hover memiliki padanan tap.
- Semua konten terakhir tetap dapat diakses dan tidak tertutup navigasi.

## 12. Aksesibilitas

- Gunakan HTML semantik: `header`, `nav`, `main`, `section`, dan `footer`.
- Hanya ada satu `h1` dan urutan heading tidak melompat.
- Semua kontrol dapat digunakan dengan keyboard.
- Focus state terlihat jelas.
- Tombol ikon memiliki nama yang dapat dibaca assistive technology.
- Setiap gambar memiliki `alt` yang sesuai.
- Link dan tombol memiliki state hover, active, focus, dan disabled jika relevan.
- Kontras teks minimal mengikuti WCAG AA.
- Zoom browser tidak boleh dibatasi.
- Animasi non-esensial disederhanakan saat reduced motion aktif.

## 13. Performa

- Tidak memakai framework atau library besar tanpa kebutuhan nyata.
- Hero image, jika ada, menggunakan elemen `<img>` dengan dimensi eksplisit dan `fetchpriority="high"`.
- Media di bawah fold menggunakan lazy loading dan dimensi eksplisit.
- Gunakan WebP atau AVIF dengan fallback sesuai kebutuhan.
- JavaScript dipakai hanya untuk navigasi, state interaksi, dan motion yang tidak dapat diselesaikan dengan CSS.
- Script nonkritis menggunakan `defer`.
- Tidak melaporkan skor performa sebelum benar-benar diukur.
- Target utamanya adalah pengalaman lancar di ponsel kelas menengah, bukan hanya desktop cepat.

## 14. Struktur Teknis

```text
company-website/
├── site/
│   ├── index.html
│   ├── assets/
│   │   ├── css/style.css
│   │   ├── js/main.js
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── vectors/
│   │   └── images/
│   │       ├── hero/
│   │       ├── content/
│   │       └── social/
│   └── favicon.ico
└── docs/
```

Folder `site/` menjadi publish directory agar dokumentasi internal tidak ikut diunggah ke hosting.

Teknologi:

- HTML5 untuk struktur dan semantik.
- CSS3 untuk layout, responsive states, visual system, dan mayoritas motion.
- Vanilla JavaScript untuk menu mobile, active navigation, IntersectionObserver, dan interaksi ringan.

## 15. Urutan Eksekusi

### Fase 0: Validasi materi

- Kumpulkan identitas perusahaan, layanan, proses, sektor, dan kontak.
- Tentukan apakah tersedia logo dan foto yang layak.
- Tandai seluruh placeholder agar tidak dianggap konten final.

### Fase 1: Fondasi

- Buat struktur file.
- Tetapkan design tokens untuk warna, type scale, spacing, radius, dan motion duration.
- Buat HTML semantik seluruh section tanpa dekorasi berat.

### Fase 2: Hero dan navigasi

- Bangun mobile navigation yang berfungsi penuh.
- Bangun hero mobile-first.
- Uji hierarchy, kontras, CTA, dan loading visual utama.

### Fase 3: Konten utama

- Bangun Konteks Pengelolaan Lingkungan, About, Services, Approach, Expertise, Contact, dan Footer.
- Terapkan variasi komposisi sesuai kebutuhan tiap section.
- Pastikan semua link dan CTA memiliki tujuan nyata.

### Fase 4: Identitas dan motion

- Implementasikan komposisi hero editorial dan aksen kuning terpilih.
- Tambahkan motion hanya pada momen yang sudah didefinisikan.
- Tambahkan reduced-motion behavior.

### Fase 5: QA responsive dan aksesibilitas

- Uji compact, medium, dan wide state sepanjang rentang viewport.
- Uji keyboard navigation, focus, kontras, tap target, dan screen reader labels.
- Klik seluruh elemen interaktif dan pastikan tidak ada kontrol mati.

### Fase 6: Optimasi dan audit akhir

- Optimalkan media dan script.
- Periksa console, layout shift, overflow, serta loading behavior.
- Jalankan audit anti-slop mode AFTER.
- Perbaikan audit dilakukan setelah temuan dipilih dan disetujui.

## 16. Definition of Done

Website dianggap siap diserahkan ketika:

- Seluruh section menggunakan konten nyata atau placeholder yang jelas.
- Tidak ada statistik, testimonial, sektor, layanan, atau klaim yang dibuat-buat.
- Semua navigasi dan CTA bekerja.
- Layout stabil pada compact, medium, dan wide viewport.
- Tidak ada horizontal overflow.
- Navigasi keyboard dan focus state bekerja.
- Reduced motion bekerja.
- Tidak ada error pada console.
- Media memiliki dimensi dan strategi loading yang benar.
- Website sudah diuji pada perangkat atau emulasi mobile dan desktop.
- Audit akhir selesai tanpa temuan yang belum ditangani.

## 17. Alasan Keputusan Utama

- **Putih dominan:** menjaga hero bersih, ringan, dan tidak terasa seperti produk teknologi.
- **Navy sebagai struktur:** mempertahankan rasa percaya dan kompetensi tanpa memenuhi halaman dengan bidang gelap.
- **Kuning sebagai aksen:** menciptakan fokus dan menghubungkan identitas dengan bahasa visual survei.
- **Elemen kuning adaptif:** memberi ciri khas yang dapat berubah mengikuti cerita tanpa berubah menjadi dekorasi acak.
- **Fokus dokumen dan limbah:** membuat positioning DEA lebih spesifik daripada label konsultan lingkungan yang terlalu luas.
- **Teknis tanpa tampilan tech:** menunjukkan ketelitian melalui struktur, bukti, dan proses, bukan melalui grid atau ornamen dashboard.
- **Layout editorial:** membuat konten terbatas tetap terasa terarah tanpa mengisi halaman dengan materi palsu.
- **Website statis:** kebutuhan utamanya adalah company profile dengan konten jarang berubah, sehingga backend tidak memberi nilai sebanding dengan kompleksitasnya.
- **Vanilla JavaScript:** cukup untuk navigasi dan motion ringan serta menjaga beban halaman rendah.
- **Motion berbeda per viewport:** pengalaman visual tetap konsisten tanpa memaksakan beban dan pola desktop ke ponsel.
- **Tidak ada section bukti sosial tanpa data:** kredibilitas dibangun dari informasi nyata, bukan volume konten.

## 18. Pertanyaan yang Harus Terjawab Sebelum Coding

1. Apa nama resmi perusahaan dan apakah logo final sudah tersedia?
2. Apa satu kalimat positioning perusahaan?
3. Apakah urutan empat kelompok layanan sudah sesuai prioritas komersial perusahaan?
4. Bagaimana urutan proses kerja yang sebenarnya?
5. Sektor apa saja yang benar-benar dilayani?
6. Kanal kontak utama apa yang harus menjadi CTA?
7. Apakah tersedia foto asli kegiatan penyusunan dokumen, pengelolaan limbah, pemantauan, pertambangan, atau kerja lapangan yang memiliki izin publikasi?
8. Apakah perusahaan sudah memiliki warna atau typeface resmi?
9. Bahasa website hanya Indonesia atau membutuhkan versi Inggris?
10. Apakah website akan dipasang pada domain dan hosting yang sudah ada?

