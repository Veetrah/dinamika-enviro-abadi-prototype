# Threat Model

Threat model ini berlaku untuk website PT Dinamika Enviro Abadi versi pertama dengan konsep visual Blue Terrain sebagai website statis tanpa backend, akun, form, atau database.

## 1. System Overview

```text
Local workspace
      |
      v
Source repository / GitHub Actions deployment pipeline
      |
      v
GitHub Pages preview + TLS
      |
      v
Visitor browser -----> External email / WhatsApp link
```

Setiap panah adalah trust boundary. Credential deployment, konfigurasi DNS, dan perubahan source tidak boleh berpindah melewati boundary tanpa kontrol akses dan audit.

## 2. Assets to Protect

| Asset | Dampak jika terganggu |
| --- | --- |
| Domain dan DNS | Pengunjung dapat diarahkan ke website palsu atau malware |
| Source code | Script berbahaya atau perubahan konten dapat masuk ke website |
| Deployment credential | Penyerang dapat mengganti website tanpa mengubah repository |
| Brand dan informasi kontak | Pengunjung dapat diarahkan ke email atau nomor palsu |
| Visitor privacy | Third-party script dapat melacak atau mengambil data browser |
| Availability | Website tidak dapat diakses calon klien |
| Asset rights | Foto atau font tanpa izin dapat menimbulkan risiko hukum dan reputasi |

## 3. Threat Actors

- Penyerang oportunistis yang memindai website publik.
- Pelaku phishing yang ingin mengganti kanal kontak perusahaan.
- Penyerang yang mengambil alih akun registrar, repository, atau hosting.
- Pihak ketiga yang script atau CDN-nya dikompromikan.
- Kontributor internal yang salah konfigurasi atau memasukkan credential.
- Ekstensi browser atau perangkat pengunjung yang sudah terkompromi. Risiko terakhir berada di luar kontrol penuh website.

## 4. Assumptions

- Website hanya menampilkan informasi publik.
- Semua asset utama dapat disimpan pada origin sendiri.
- Tidak ada user-generated content.
- Tidak ada data sensitif yang perlu disimpan pada browser.
- HTTPS dan custom response headers didukung provider hosting yang dipilih.

Jika asumsi berubah, threat model harus ditinjau ulang.

## 5. Risk Register

Skala: `HIGH`, `MEDIUM`, `LOW` berdasarkan gabungan kemungkinan dan dampak untuk scope versi pertama.

| ID | Threat | Risiko | Kontrol utama | Residual risk |
| --- | --- | --- | --- | --- |
| T-01 | Domain atau DNS diambil alih | HIGH | MFA, registrar lock, auto-renew, akses terbatas, audit DNS | MEDIUM |
| T-02 | Deployment account diambil alih | HIGH | MFA, least privilege, credential terpisah, revoke cepat | MEDIUM |
| T-03 | Script pihak ketiga dikompromikan | HIGH | Tidak memakai third-party JS secara default, CSP, SRI bila terpaksa | LOW |
| T-04 | Secret masuk ke repository atau client code | HIGH | Tidak ada secret di frontend, secret scanning, review diff | LOW |
| T-05 | DOM XSS dari URL atau data eksternal | MEDIUM | Hindari HTML injection, gunakan textContent, CSP ketat | LOW |
| T-06 | Website di-embed untuk clickjacking | MEDIUM | CSP `frame-ancestors 'none'`, X-Frame-Options fallback | LOW |
| T-07 | External link mengambil alih opener | LOW | `rel="noopener noreferrer"` untuk tab baru | LOW |
| T-08 | Data pengunjung bocor ke analytics, font, atau tag manager | MEDIUM | Self-host asset, tanpa analytics default, referrer policy | LOW |
| T-09 | Mixed content atau koneksi HTTP | MEDIUM | HTTPS redirect, CSP upgrade, HSTS setelah validasi | LOW |
| T-10 | Contact link diganti ke pihak lain | HIGH | Review konten, automated link check, protected deployment | LOW |
| T-11 | Asset mengandung metadata sensitif | MEDIUM | Hapus EXIF dan metadata sebelum publish | LOW |
| T-12 | Header hosting salah konfigurasi | MEDIUM | Config-as-code jika tersedia, header verification setelah deploy | LOW |
| T-13 | Dependency usang atau berbahaya | MEDIUM | Tanpa dependency runtime default, inventaris dan pin jika ditambah | LOW |
| T-14 | Repository atau deployment rusak tanpa recovery | MEDIUM | Version control, backup, protected branch, rollback test | LOW |
| T-15 | Spam atau abuse melalui form | LOW | Tidak ada form pada v1 | LOW |
| T-16 | Workflow preview diubah untuk mempublish file di luar `site/` | HIGH | Workflow dibatasi ke artifact `site/`, perubahan workflow ditinjau, permissions minimum | LOW |

## 6. Controls by Boundary

### Workspace to repository

- Review seluruh diff sebelum commit.
- Jangan menyimpan `.env`, token, key, credential, atau file konfigurasi akun.
- Gunakan protected branch atau review sebelum perubahan masuk ke release branch.
- Batasi siapa yang dapat mengubah workflow deployment.

### Repository to hosting

- Deployment credential memiliki hak minimum.
- Pisahkan credential development dan production.
- Aktifkan MFA pada repository dan hosting.
- Simpan deployment log dan revision yang sedang tayang.
- Pastikan rollback ke revision sebelumnya pernah diuji.
- Workflow GitHub Pages hanya mengunggah `site/` dan memakai permission `contents: read`, `pages: write`, serta `id-token: write`.
- GitHub Pages diperlakukan sebagai preview prototype, bukan production, sampai domain, header, owner, dan release approval lengkap.

### Hosting to browser

- Paksa HTTPS.
- Terapkan CSP dan security headers dari `docs/SECURITY_CHECKLIST.md`.
- Sajikan MIME type yang benar.
- Jangan memuat script dari domain yang tidak diperlukan.
- Jangan menaruh sensitive data di HTML, JavaScript, source map, atau comment.

### Browser to external service

- Kanal email dan WhatsApp diverifikasi sebelum release.
- External tab menggunakan `noopener`.
- Referrer policy membatasi informasi yang dikirim ke origin lain.
- Jangan menambahkan analytics, chat widget, map embed, atau tag manager tanpa threat review baru.

## 7. Out of Scope for Version One

Risiko berikut tidak berlaku selama scope tidak berubah:

- SQL injection karena tidak ada database.
- Authentication dan session attacks karena tidak ada akun.
- CSRF karena tidak ada authenticated state atau state-changing request.
- File upload attacks karena tidak ada upload.
- Server-side request forgery karena tidak ada server-side request.

Menuliskan risiko sebagai out of scope bukan berarti aman selamanya. Fitur baru dapat membuatnya relevan.

## 8. Review Triggers

Threat model wajib ditinjau ulang jika project menambahkan:

- Form kontak atau newsletter.
- Analytics, tag manager, chat widget, map, video embed, atau script pihak ketiga.
- CMS, API, backend, database, login, atau dashboard.
- Cookie atau local storage.
- Multi-language routing atau content injection.
- Upload file.
- Deployment provider atau domain baru.

