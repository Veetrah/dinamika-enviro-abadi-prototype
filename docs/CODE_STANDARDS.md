# Code Standards

Standar ini berlaku ketika implementasi dimulai.

## 1. Struktur Awal

```text
site/
├── index.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── fonts/
    ├── icons/
    ├── vectors/
    └── images/
        ├── hero/
        ├── content/
        └── social/
```

Lokasi lengkap dan deployment boundary dijelaskan pada `docs/SITE_STRUCTURE.md`.

Pecah JavaScript menjadi modul hanya jika `main.js` mulai memuat beberapa tanggung jawab yang dapat dipisahkan. Jangan menambah build tool hanya untuk memecah file.

## 2. HTML

- Gunakan `<!doctype html>` dan `lang="id"` jika halaman berbahasa Indonesia.
- Gunakan `header`, `nav`, `main`, `section`, dan `footer` sesuai fungsi.
- Gunakan satu `h1`. Heading berikutnya mengikuti hierarchy tanpa melompat.
- Gunakan `<a>` untuk navigasi dan `<button>` untuk aksi.
- Setiap field memiliki label terlihat jika form suatu saat ditambahkan.
- Setiap gambar memiliki `alt`. Gambar dekoratif memakai `alt=""`.
- Tambahkan `width` dan `height` atau aspect ratio pada media.
- Jangan memasukkan konten melalui CSS jika konten tersebut perlu dibaca screen reader.

## 3. CSS Architecture

Urutan isi `style.css`:

1. Tokens
2. Reset dan base
3. Typography
4. Global layout
5. Components
6. Page sections
7. State dan interaction
8. Responsive rules
9. Reduced motion dan print jika dibutuhkan

### Naming

- Gunakan nama berbasis fungsi: `.site-header`, `.hero`, `.service-card`, `.approach-step`.
- Element dapat memakai pola `.component__element`.
- Variant dapat memakai pola `.component--variant`.
- State JavaScript menggunakan `.is-open`, `.is-active`, atau atribut ARIA.
- Hook JavaScript menggunakan `data-*`, bukan class styling.
- Hindari class visual seperti `.blue-box` atau `.big-text`.

### Tokens

Semua keputusan berulang disimpan sebagai custom properties:

```css
:root {
  --color-navy: #081d35;
  --color-blue: #123f70;
  --color-yellow: #f4c430;
  --color-surface: #f7f9fc;
  --color-text: #14202b;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
}
```

Nilai di atas adalah titik awal. Token final mengikuti keputusan visual yang sudah diuji.

## 4. Responsive Layout

- Base styles ditulis untuk compact state.
- Tambahkan breakpoint ketika konten mulai tidak nyaman, bukan karena nama perangkat.
- Gunakan grid dan flex yang dapat reflow.
- Gunakan `min-width: 0` pada child yang perlu menyusut.
- Gunakan `clamp()` untuk type atau spacing yang memang perlu fluid.
- Jangan memakai fixed width yang menyebabkan overflow.
- Hindari `100vh` untuk hero mobile. Gunakan tinggi berbasis konten atau `dvh` jika benar-benar diperlukan.
- Target sentuh minimum 44 x 44 piksel.
- Interaksi hover harus memiliki padanan keyboard dan touch.

## 5. JavaScript

- Gunakan `const` secara default dan `let` hanya untuk nilai yang berubah.
- Hindari global mutable state.
- Inisialisasi fitur melalui fungsi kecil dengan satu tanggung jawab.
- Periksa keberadaan elemen sebelum memasang event listener.
- Sinkronkan state visual dengan atribut ARIA yang sesuai.
- Gunakan event delegation ketika daftar elemen dinamis membuatnya masuk akal.
- Gunakan `IntersectionObserver` untuk visibility behavior, bukan listener scroll terus-menerus.
- Jangan memodifikasi source atau CSS melalui script patch.
- Jangan menyimpan secret, API key, atau credential dalam client code.

## 6. Motion

- Gunakan `transform` dan `opacity` untuk motion sederhana.
- Jangan menganimasikan layout property berulang jika dapat dihindari.
- Motion memiliki durasi singkat dan kondisi akhir yang stabil.
- Tidak ada loop dekoratif tanpa kontrol pengguna.
- Sediakan fallback pada `prefers-reduced-motion: reduce`.
- Jangan menyembunyikan konten utama jika JavaScript gagal berjalan.

## 7. Client-Side Security

- Jangan menaruh secret, token, API key, credential, atau private endpoint pada frontend.
- Jangan memakai `innerHTML` atau HTML injection untuk data dari URL, storage, API, atau sumber yang tidak sepenuhnya dikontrol.
- Gunakan `textContent` untuk text dinamis.
- Hindari inline script dan inline event handler agar CSP dapat tetap ketat.
- Jangan memakai `eval()`, `new Function()`, atau dynamic script injection.
- External link dengan `target="_blank"` memakai `rel="noopener noreferrer"`.
- Jangan menambah third-party script tanpa mencatat data flow, risiko, dan approval.
- Jangan membuka CORS atau mengubah CSP hanya untuk menghilangkan error tanpa memahami penyebabnya.

## 8. Accessibility

- Focus indicator harus terlihat pada setiap kontrol.
- Urutan Tab mengikuti urutan visual dan DOM.
- Menu dapat ditutup dengan `Escape`.
- Kontras normal text minimal 4.5:1 dan large text minimal 3:1.
- Jangan memakai warna sebagai satu-satunya penanda state.
- ARIA hanya digunakan ketika semantic HTML belum cukup.
- Jangan memakai `outline: none` tanpa focus style pengganti.
- Jangan menonaktifkan zoom browser.

## 9. Performance

- Hero image adalah elemen HTML dengan `fetchpriority="high"` dan tidak lazy-loaded.
- Media di bawah fold boleh menggunakan lazy loading.
- Script nonkritis menggunakan `defer`.
- Hindari third-party script yang memblokir render.
- Gunakan AVIF atau WebP jika sesuai dan sediakan fallback bila dibutuhkan.
- Jangan melaporkan nilai Lighthouse atau Web Vitals yang belum diukur.

## 10. Content Integrity

- Copy source berasal dari `docs/CONTENT.md` dengan status APPROVED.
- Asset source berasal dari `docs/ASSETS.md` dengan status APPROVED atau OPTIMIZED.
- Placeholder selalu tampak sebagai placeholder.
- Jangan mengarang statistik, kutipan, nama, alamat, sertifikasi, atau klaim performa.

## 11. Comment Policy

- Komentar menjelaskan alasan atau batasan yang tidak terlihat dari code.
- Jangan menulis komentar yang hanya mengulang baris code.
- Hapus TODO yang sudah selesai.
- TODO yang tersisa harus menyebut kebutuhan konkret dan tidak boleh menyembunyikan kontrol yang mati.

