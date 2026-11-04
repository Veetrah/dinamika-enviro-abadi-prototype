# Security Checklist

Checklist ini digunakan sebelum deployment dan diulang setelah perubahan hosting, domain, script, atau integrasi pihak ketiga.

## 1. Repository and Source

- [ ] Repository memiliki owner yang jelas.
- [ ] Akun owner dan maintainer memakai MFA.
- [ ] Branch release dilindungi atau membutuhkan review.
- [ ] Workflow deployment hanya dapat diubah oleh owner yang berwenang.
- [ ] Tidak ada secret, token, API key, credential, atau file akun dalam repository.
- [ ] Tidak ada secret pada HTML, CSS, JavaScript, comment, source map, atau asset metadata.
- [ ] Semua dependency dan third-party asset tercatat beserta versi dan sumbernya.
- [ ] Tidak ada dependency runtime jika kebutuhan dapat diselesaikan dengan platform web.
- [ ] Diff release sudah diperiksa sebelum deployment.
- [ ] Hosting hanya mempublikasikan `site/`, bukan root project atau folder `docs/`.

## 2. Client-Side Code

- [ ] Tidak ada `innerHTML`, `insertAdjacentHTML`, atau DOM HTML injection dari data yang tidak sepenuhnya dikontrol.
- [ ] Data dari URL, hash, query string, storage, atau API tidak pernah dianggap aman secara otomatis.
- [ ] Text dinamis menggunakan `textContent` bila markup tidak diperlukan.
- [ ] External link yang membuka tab baru memakai `rel="noopener noreferrer"`.
- [ ] Tidak ada inline event handler seperti `onclick`.
- [ ] JavaScript disimpan pada file origin sendiri.
- [ ] Tidak ada `eval()`, `new Function()`, atau dynamic script injection.
- [ ] Tidak ada data sensitif pada browser storage.

## 3. Third-Party Resources

- [ ] Font, ikon, dan script disimpan pada origin sendiri jika lisensi mengizinkan.
- [ ] Tidak ada tag manager, analytics, chat widget, map embed, atau marketing script secara default.
- [ ] Setiap third-party script yang diusulkan memiliki alasan, owner, data-flow review, dan approval.
- [ ] Resource statis pihak ketiga memakai Subresource Integrity jika provider mendukung file berversi dan stabil.
- [ ] CSP hanya mengizinkan origin yang benar-benar dibutuhkan.
- [ ] Integrasi pihak ketiga dapat dimatikan tanpa merusak konten utama.

## 4. Proposed Content Security Policy

Baseline untuk website yang seluruh asset-nya first-party:

```http
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; manifest-src 'self'; upgrade-insecure-requests
```

Aturan penerapan:

- [ ] Uji policy melalui `Content-Security-Policy-Report-Only` lebih dulu.
- [ ] Periksa violation dan hapus kebutuhan yang tidak sah.
- [ ] Pindahkan ke enforced `Content-Security-Policy` setelah semua resource valid.
- [ ] Kirim CSP sebagai HTTP response header, bukan hanya meta tag, jika hosting mendukungnya.
- [ ] Jangan menambahkan `'unsafe-inline'` atau `'unsafe-eval'` hanya untuk membuat error hilang.
- [ ] Ubah `form-action 'none'` hanya jika form nyata ditambahkan dan targetnya sudah ditinjau.
- [ ] Hapus `data:` dari `img-src` jika tidak ada data URI yang benar-benar dipakai.

## 5. Proposed Security Headers

Nilai final harus diuji pada hosting produksi.

```http
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=(), usb=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```

- [ ] Setiap response memiliki MIME type yang benar.
- [ ] Header `Server` dibuat minimal jika provider memungkinkan.
- [ ] Header `X-Powered-By` dihapus jika ada.
- [ ] CORS tidak dibuka dengan `Access-Control-Allow-Origin: *` tanpa kebutuhan nyata.
- [ ] COOP dan CORP diuji terhadap seluruh external navigation dan asset.
- [ ] `X-XSS-Protection` tidak digunakan sebagai pengganti CSP. Jika provider menambahkannya, gunakan nilai `0` sesuai rekomendasi modern.

## 6. HTTPS and HSTS

- [ ] Domain produksi menggunakan certificate yang valid.
- [ ] Certificate diperbarui otomatis.
- [ ] Semua HTTP dialihkan ke HTTPS pada host yang sama.
- [ ] Tidak ada mixed content.
- [ ] HSTS baru diaktifkan setelah HTTPS stabil pada domain dan subdomain yang tercakup.
- [ ] Mulai dengan durasi konservatif saat validasi operasional.
- [ ] Tingkatkan durasi setelah renewal dan subdomain diverifikasi.
- [ ] Jangan menambahkan `preload` sebelum seluruh syarat dan konsekuensinya dipahami.

Target setelah validasi penuh:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## 7. Domain, DNS, and Accounts

- [ ] Registrar memakai password unik dan MFA.
- [ ] Domain auto-renew aktif dan metode pembayaran diperbarui.
- [ ] Registrar lock aktif.
- [ ] Perubahan DNS dibatasi pada owner yang ditentukan.
- [ ] Akun DNS dan hosting memakai MFA.
- [ ] Recovery email dan nomor recovery masih dikuasai organisasi.
- [ ] Daftar subdomain dan record DNS ditinjau sebelum release.
- [ ] Subdomain atau target hosting yang tidak digunakan dihapus untuk mengurangi takeover risk.
- [ ] CAA record dipertimbangkan setelah certificate authority dipilih.

## 8. Deployment and Recovery

- [ ] Deployment revision dapat diidentifikasi.
- [ ] Deployment log dapat dibaca owner.
- [ ] Rollback ke revision sebelumnya sudah diuji.
- [ ] Backup source berada di version control dan tidak bergantung pada satu laptop.
- [ ] Credential deployment dapat dicabut tanpa memindahkan domain.
- [ ] Perubahan header atau hosting dicatat pada decision log.
- [ ] Website diperiksa ulang setelah deployment, bukan hanya sebelum upload.

## 9. Privacy

- [ ] Website tidak mengumpulkan data tanpa kebutuhan dan pemberitahuan yang jelas.
- [ ] Tidak ada analytics default.
- [ ] Tidak ada fingerprinting, tracking pixel, atau cross-site identifier.
- [ ] External font tidak membocorkan request pengunjung karena font di-self-host.
- [ ] Metadata sensitif pada foto dan dokumen sudah dihapus.
- [ ] Privacy policy ditambahkan jika fitur baru mulai mengumpulkan data.

## 10. Vulnerability Disclosure

- [ ] Email keamanan nyata sudah ditentukan.
- [ ] Owner inbox dan backup owner sudah ditentukan.
- [ ] Scope laporan dan proses respons terdokumentasi.
- [ ] `/.well-known/security.txt` dibuat sesuai RFC 9116.
- [ ] File memakai HTTPS dan `Content-Type: text/plain; charset=utf-8`.
- [ ] Field `Expires` valid dan memiliki reminder pembaruan.
- [ ] Isi tidak menjanjikan bounty atau SLA yang belum disetujui.

## 11. Verification Record

| Tanggal | Environment | Revision | Pemeriksa | Status | Catatan |
| --- | --- | --- | --- | --- | --- |
| `[YYYY-MM-DD]` | `[STAGING / PRODUCTION]` | `[REVISION]` | `[NAME]` | `[PASS / BLOCKED]` | `[NOTE]` |

## References

- OWASP HTTP Security Response Headers Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- OWASP Content Security Policy Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
- OWASP Third Party JavaScript Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html
- OWASP Secrets Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- MDN Content Security Policy implementation: https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/CSP
- RFC 9116 security.txt: https://www.rfc-editor.org/rfc/rfc9116

