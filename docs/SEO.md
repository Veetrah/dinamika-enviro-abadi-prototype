# SEO and Search Appearance

Dokumen ini mengatur metadata, crawling, indexing, social preview, dan structured data untuk website PT Dinamika Enviro Abadi dengan konsep visual Blue Terrain. SEO tidak boleh mengubah website menjadi kumpulan keyword atau klaim yang tidak didukung konten nyata.

## 1. Goals

- Search engine memahami nama organisasi, jenis layanan, dan wilayah yang benar-benar dilayani.
- Hasil pencarian menampilkan title dan description yang akurat.
- Semua URL memiliki canonical yang konsisten.
- Preview link di platform sosial memiliki judul, deskripsi, dan gambar yang sesuai.
- Preview atau staging tidak masuk search index.

Peringkat tertentu, rich result, sitelink, dan knowledge panel tidak pernah dijanjikan karena search engine menentukan hasil akhirnya.

## 2. Source of Truth

- Nama, deskripsi, layanan, sektor, alamat, dan kontak berasal dari `docs/CONTENT.md` dengan status APPROVED.
- Logo dan social image berasal dari `docs/ASSETS.md` dengan status APPROVED atau OPTIMIZED.
- Production URL berasal dari `docs/DEPLOYMENT.md`.
- Structured data tidak boleh memuat fakta yang tidak terlihat atau tidak dapat dibuktikan pada halaman.

## 3. Search Intent

Search intent final baru ditetapkan setelah nama perusahaan, layanan, dan wilayah kerja tersedia.

| Intent | Query pattern | Landing content | Status |
| --- | --- | --- | --- |
| Brand | `[NAMA PERUSAHAAN]` | Hero dan About | NEEDED |
| Service | `[LAYANAN] konsultan lingkungan` | Services | NEEDED |
| Location | `konsultan lingkungan [WILAYAH]` | About atau Contact, hanya jika wilayah nyata | NEEDED |
| Problem | `[KEBUTUHAN NYATA CALON KLIEN]` | Services atau Approach | NEEDED |

Query pattern adalah bahan riset, bukan teks yang harus diulang paksa pada halaman.

## 4. Homepage Metadata

| Field | Value | Status |
| --- | --- | --- |
| `<title>` | `[NEEDED]` | NEEDED |
| Meta description | `[NEEDED]` | NEEDED |
| Canonical URL | `[NEEDED]` | NEEDED |
| `og:title` | `[NEEDED]` | NEEDED |
| `og:description` | `[NEEDED]` | NEEDED |
| `og:type` | `website` | DRAFT |
| `og:url` | `[NEEDED]` | NEEDED |
| `og:image` | `[NEEDED]` | NEEDED |
| `og:image:alt` | `[NEEDED]` | NEEDED |
| Twitter card | `summary_large_image` | DRAFT |
| Robots | `index, follow` untuk production | DRAFT |

Aturan title:

- Menjelaskan isi halaman dengan ringkas.
- Memakai bahasa yang sama dengan konten utama.
- Tidak memakai keyword stuffing.
- Menjaga nama halaman, H1, dan `og:title` tetap konsisten secara makna.

Aturan meta description:

- Merangkum isi halaman dalam satu atau dua kalimat.
- Menyebut layanan atau manfaat nyata, bukan slogan kosong.
- Tidak memuat statistik atau klaim yang tidak tersedia pada halaman.
- Tidak dianggap jaminan snippet karena search engine dapat memilih bagian lain dari halaman.

## 5. Canonical and Redirects

- Homepage memiliki self-referencing canonical ke production HTTPS URL.
- HTTP redirect ke HTTPS.
- Hostname alternatif redirect ke hostname canonical.
- Format trailing slash konsisten.
- Sitemap hanya memuat canonical URL.
- Open Graph URL dan structured data memakai canonical yang sama.
- Preview URL tidak pernah menjadi canonical production.

## 6. Crawling and Indexing

### Production

- `robots.txt` mengizinkan crawling resource yang dibutuhkan untuk merender halaman.
- `robots.txt` mencantumkan lokasi sitemap.
- Halaman production tidak memakai `noindex` setelah release approval.
- Custom 404 mengembalikan status HTTP 404.

### Preview / Staging

- Gunakan authentication atau access control provider jika tersedia.
- Tambahkan `X-Robots-Tag: noindex, nofollow` atau meta robots setara.
- Jangan mengandalkan `robots.txt` untuk mencegah indexing karena URL yang diblokir masih dapat ditemukan melalui link eksternal.
- Jangan menaruh preview URL dalam sitemap atau canonical.

## 7. robots.txt

Template production setelah domain tersedia:

```text
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Ganti domain placeholder sebelum deployment. Jangan menambahkan aturan `Disallow` tanpa path dan alasan yang jelas.

## 8. sitemap.xml

Untuk versi satu halaman, sitemap hanya memuat canonical homepage. Anchor seperti `#services` bukan URL halaman terpisah dan tidak masuk sitemap.

Ketentuan:

- Gunakan absolute HTTPS URL.
- Masukkan hanya URL canonical yang boleh diindeks.
- Jangan mengisi `lastmod` dengan tanggal palsu. Isi hanya jika proses deployment dapat mempertahankannya secara akurat.
- Submit sitemap melalui Search Console setelah production dapat diakses.

## 9. Structured Data

Baseline menggunakan JSON-LD `Organization` pada homepage setelah data perusahaan tersedia.

Candidate properties:

| Property | Source | Status |
| --- | --- | --- |
| `name` | Nama resmi perusahaan | NEEDED |
| `alternateName` | Nama pendek jika digunakan | NEEDED |
| `url` | Canonical production URL | NEEDED |
| `logo` | Logo production URL | NEEDED |
| `description` | Deskripsi approved | NEEDED |
| `email` | Email publik | NEEDED |
| `telephone` | Nomor publik | NEEDED |
| `address` | Alamat perusahaan | NEEDED |
| `sameAs` | Profil resmi yang benar-benar dimiliki | NEEDED |

Aturan:

- Jangan mengisi property yang tidak berlaku hanya agar markup terlihat lengkap.
- Jangan menambahkan `aggregateRating`, review, award, founding date, sertifikasi, atau identifier tanpa bukti.
- Gunakan subtype yang lebih spesifik hanya jika benar-benar sesuai dengan status dan operasi perusahaan.
- Structured data harus konsisten dengan konten yang terlihat pada halaman.
- Validasi syntax dan periksa bagaimana crawler melihat production URL.

## 10. Social Preview

Open Graph minimum:

- `og:title`
- `og:type`
- `og:image`
- `og:url`

Tambahkan `og:description` dan `og:image:alt` untuk konteks yang lebih baik.

Social image:

- Berasal dari asset approved.
- Memuat identitas PT Dinamika Enviro Abadi tanpa membuat klaim baru.
- Tetap terbaca saat dipotong platform.
- Memiliki dimensi eksplisit dan format web yang sesuai.
- Tidak memakai screenshot placeholder sebagai gambar final.

## 11. On-Page Requirements

- Satu H1 yang menjelaskan kategori dan nilai utama perusahaan.
- Heading section menggambarkan isi, bukan label generik yang tidak informatif.
- Copy penting tersedia sebagai text HTML, bukan hanya di dalam gambar atau animasi.
- Link menggunakan anchor text yang menjelaskan tujuan.
- Image alt menjelaskan informasi gambar tanpa menjejalkan keyword.
- Alamat dan kontak konsisten antara halaman, structured data, dan profil resmi perusahaan.

## 12. Search Console Setup

Setelah production live:

- [ ] Verifikasi property domain atau URL-prefix sesuai ownership yang tersedia.
- [ ] Submit sitemap.
- [ ] Inspect canonical homepage.
- [ ] Periksa rendered HTML dan resource yang gagal dimuat.
- [ ] Pantau indexing issue dan manual action.
- [ ] Simpan ownership pada akun organisasi, bukan hanya akun personal tunggal.

## 13. Verification

- [ ] Title unik, deskriptif, dan sesuai bahasa halaman.
- [ ] Meta description akurat terhadap konten.
- [ ] H1 dan title konsisten secara makna.
- [ ] Canonical memakai production HTTPS URL.
- [ ] Redirect tidak membuat chain atau loop.
- [ ] Preview environment noindex.
- [ ] Production tidak noindex setelah approval.
- [ ] `robots.txt` dapat diakses dan tidak memblokir resource penting.
- [ ] Sitemap hanya memuat canonical URL.
- [ ] Open Graph image dan metadata dapat diambil dari production.
- [ ] Structured data memakai data approved dan lolos validator.
- [ ] Tidak ada klaim ranking, rich result, atau search appearance yang tidak dapat dijamin.

## 14. References

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google title links: https://developers.google.com/search/docs/appearance/title-link
- Google snippets and meta descriptions: https://developers.google.com/search/docs/appearance/snippet
- Google canonicalization: https://developers.google.com/search/docs/crawling-indexing/canonicalization
- Google robots.txt: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Open Graph protocol: https://ogp.me/

