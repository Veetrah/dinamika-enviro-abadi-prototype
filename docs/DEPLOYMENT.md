# Deployment and Operations

Dokumen ini mengatur pemilihan hosting, konfigurasi domain, deployment, rollback, dan pemeriksaan setelah website tayang. Nilai provider-specific baru ditambahkan setelah provider dipilih.

Publish directory proyek adalah `site/`. Provider tidak boleh diarahkan ke root project.

## 1. Deployment Goals

- Selama fase development aktif, seluruh eksekusi dan QA dilakukan melalui local HTTP server.
- GitHub menyimpan riwayat versi; GitHub Pages boleh digunakan sebagai preview prototype publik untuk review teknis, bukan production.
- Deployment dapat diulang tanpa langkah manual yang tidak terdokumentasi.
- Setiap release dapat ditelusuri ke revision source tertentu.
- Website dapat dikembalikan ke revision sebelumnya dengan cepat.
- HTTPS, security headers, caching, dan indexing dapat dikonfigurasi secara eksplisit.
- Akun domain, DNS, repository, dan hosting memiliki owner serta jalur recovery yang jelas.

## 2. Provider Requirements

Provider production harus mendukung:

- Static site hosting.
- Custom domain dan automatic TLS renewal.
- Redirect HTTP ke HTTPS.
- Custom response headers, termasuk CSP.
- Preview atau staging deployment.
- Atomic deployment atau rollback revision.
- Deployment log.
- Cache policy per path atau jenis file.
- Custom 404 response.
- MFA untuk akun pemilik.

Fitur seperti serverless function, database, CMS, dan edge compute tidak menjadi alasan memilih provider karena versi pertama tidak membutuhkannya.

## 3. Provider Decision

| Field | Value | Status |
| --- | --- | --- |
| Provider production | `[NEEDED]` | NEEDED |
| Provider preview prototype | GitHub Pages | APPROVED |
| Account owner | `[NEEDED]` | NEEDED |
| Backup owner | `[NEEDED]` | NEEDED |
| Production domain | `[NEEDED]` | NEEDED |
| Preview domain | `https://veetrah.github.io/dinamika-enviro-abadi-prototype/` | ACTIVE |
| DNS provider | `[NEEDED]` | NEEDED |
| Deployment method | GitHub Actions; artifact hanya dari `site/` | APPROVED FOR PREVIEW |
| Rollback method | `[NEEDED]` | NEEDED |
| Log retention | `[NEEDED]` | NEEDED |

Keputusan provider dan alasan pemilihannya dicatat pada `docs/DECISIONS.md`.

## 4. Environments

### Local

- Menjadi satu-satunya environment eksekusi selama fase development aktif.
- Digunakan untuk development dan QA awal.
- Tidak menerima data production.
- Dijalankan melalui local HTTP server, bukan membuka file HTML langsung jika behavior URL perlu diuji.
- Commit dan push ke GitHub hanya membuat checkpoint source; keduanya tidak memicu deployment.

### Preview / Staging

- Digunakan untuk review sebelum production.
- Prototype publik menggunakan GitHub Pages dan workflow `.github/workflows/deploy-pages.yml`.
- Artifact deployment hanya berisi isi `site/`; root repository dan folder `docs/` tidak dipublish sebagai website.
- Tidak boleh terindeks search engine.
- Gunakan access control provider jika tersedia.
- Jika preview dapat diakses publik, tambahkan `X-Robots-Tag: noindex, nofollow` atau meta robots setara.
- Jangan mengandalkan `robots.txt` untuk menyembunyikan preview.

Action resmi GitHub yang dipakai oleh workflow preview:

| Action | Versi |
| --- | --- |
| `actions/checkout` | `v6` |
| `actions/configure-pages` | `v5` |
| `actions/upload-pages-artifact` | `v4` |
| `actions/deploy-pages` | `v4` |

### Production

- Satu-satunya environment yang boleh diindeks.
- Menggunakan domain canonical final.
- Mengaktifkan HTTPS, security headers, cache policy, sitemap, dan `robots.txt` production.

## 5. Domain and DNS

Sebelum perubahan DNS:

- [ ] Owner registrar dan DNS sudah ditentukan.
- [ ] MFA, recovery method, auto-renew, dan registrar lock sudah aktif.
- [ ] Record lama didokumentasikan.
- [ ] Target hosting sudah diverifikasi.
- [ ] Publish directory diarahkan ke `site/`.
- [ ] TTL diturunkan lebih awal jika migrasi membutuhkan cutover cepat.
- [ ] Subdomain yang tidak digunakan dihapus atau diamankan.

Setelah perubahan DNS:

- [ ] Apex domain dan `www` mengikuti keputusan canonical.
- [ ] Versi non-canonical melakukan permanent redirect ke canonical.
- [ ] HTTP melakukan redirect ke HTTPS pada host yang sama.
- [ ] Certificate valid dan renewal otomatis aktif.
- [ ] Email domain tidak terganggu oleh perubahan DNS.

## 6. URL Policy

| Concern | Decision |
| --- | --- |
| Preferred protocol | HTTPS |
| Preferred hostname | `[NEEDED: apex atau www]` |
| Trailing slash | `[NEEDED]` |
| Canonical homepage | `[NEEDED]` |
| Preview indexing | Noindex |
| Production indexing | Index setelah release approval |

Seluruh redirect, canonical URL, sitemap, Open Graph URL, dan structured data harus memakai format URL yang sama.

## 7. Response Headers

Baseline security header berada di `docs/SECURITY_CHECKLIST.md`. Deployment config harus menerapkannya pada response, bukan hanya melalui meta tag HTML.

Minimum verification:

- `Content-Security-Policy`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `X-Frame-Options`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- `Cross-Origin-Resource-Policy`
- `Strict-Transport-Security` setelah HTTPS tervalidasi

Header harus diuji melalui browser network inspector dan pemeriksaan HTTP response production.

## 8. Cache Policy

Policy awal:

| Resource | Policy |
| --- | --- |
| HTML | Revalidate agar perubahan konten cepat terlihat |
| `robots.txt` dan `sitemap.xml` | Cache pendek dan revalidate |
| Versioned CSS, JS, font, image | Cache panjang hanya jika nama file berubah saat isi berubah |
| Unversioned asset | Cache konservatif |

Jangan memakai `immutable` pada file yang dapat berubah tanpa perubahan nama. Long-lived cache baru aman jika asset memakai fingerprint atau versioned filename.

## 9. Deployment Flow

1. Pastikan content dan asset yang digunakan berstatus APPROVED.
2. Jalankan seluruh pemeriksaan lokal yang relevan.
3. Buat preview deployment dari revision yang akan dirilis.
4. Jalankan QA, security, SEO, dan click-through pada preview.
5. Catat blocker dan hentikan release jika ada pemeriksaan gagal.
6. Promosikan revision yang sama ke production.
7. Verifikasi DNS, HTTPS, response headers, asset, contact link, canonical, robots, sitemap, dan structured data.
8. Simpan release record.

Deployment artifact hanya boleh berisi isi `site/`. Dokumen perencanaan dan keamanan di root project tidak boleh ikut terpublikasi.

Jangan memperbaiki production secara manual jika perubahan tidak masuk kembali ke source repository.

## 10. Rollback

Rollback dijalankan jika production mengalami:

- Halaman atau asset gagal dimuat.
- Contact link salah.
- Security header merusak fungsi penting.
- Redirect loop atau canonical salah.
- Konten yang belum disetujui ikut tayang.
- Error JavaScript yang mengganggu navigasi.

Prosedur:

1. Identifikasi revision terakhir yang sudah terverifikasi.
2. Gunakan fitur rollback provider ke revision tersebut.
3. Verifikasi homepage, navigasi, contact link, HTTPS, dan response headers.
4. Catat waktu, revision, penyebab, dan hasil rollback.
5. Perbaiki source melalui alur normal sebelum deployment berikutnya.

Rollback harus diuji sebelum release pertama, bukan pertama kali dicoba saat website rusak.

## 11. Post-Deploy Verification

- [ ] Production URL mengembalikan status sukses.
- [ ] HTTP dan hostname alternatif redirect sekali ke canonical HTTPS.
- [ ] Tidak ada mixed content.
- [ ] Console bersih dari error.
- [ ] Seluruh asset termuat dari origin yang disetujui.
- [ ] Seluruh CTA dan contact link membuka tujuan yang benar.
- [ ] Security headers aktif sesuai checklist.
- [ ] CSP tidak menghasilkan violation yang tidak dijelaskan.
- [ ] Canonical mengarah ke production URL.
- [ ] Preview tetap noindex.
- [ ] `robots.txt` dan `sitemap.xml` dapat diakses.
- [ ] Structured data lolos validator yang relevan.
- [ ] Custom 404 tidak mengembalikan halaman palsu dengan status sukses.
- [ ] Rollback target masih tersedia.

## 12. Release Record

| Field | Value |
| --- | --- |
| Version | `prototype-preview-002` |
| Revision | `7ed25010307a96a566ff6fbb785ce45ac5246189` |
| Preview URL | `https://veetrah.github.io/dinamika-enviro-abadi-prototype/` |
| Production URL | Belum ditetapkan; preview ini bukan production |
| Deployed at | `2026-11-06 15:34 WIB` |
| Deployed by | GitHub Actions |
| Previous revision | `cb248ae89bcb553485f59eab75ae58ffd685ba06` |
| Rollback target | `cb248ae89bcb553485f59eab75ae58ffd685ba06` — belum diuji |
| Status | `READY FOR TECHNICAL REVIEW` |
| Notes | Workflow run `42188551649`; homepage mengembalikan HTTP 200; email dan `mailto:` baru tampil; alamat lama tidak lagi berada pada HTML publik; preview tetap `noindex, nofollow` |

## 13. Maintenance Cadence

Setelah website live:

- Bulanan: cek contact link, certificate status, domain expiry, dan broken asset.
- Setelah perubahan: ulangi QA, security, SEO, dan deployment verification yang terdampak.
- Sebelum domain atau certificate renewal: verifikasi owner, payment method, dan recovery contact.
- Saat provider atau DNS berubah: perbarui threat model dan decision log.

