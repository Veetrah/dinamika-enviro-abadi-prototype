# Security Policy

Dokumen ini menjelaskan baseline keamanan Blue Terrain sebelum website masuk tahap implementasi dan deployment.

## Current Status

Project masih berada pada tahap pre-execution dan belum memiliki release publik. Belum ada versi yang menerima security update.

## Security Goals

- Menjaga domain dan website dari pengambilalihan atau perubahan tanpa izin.
- Mencegah eksekusi script yang tidak disetujui pada browser pengunjung.
- Mencegah secret, credential, dan data operasional masuk ke client code atau repository.
- Mengurangi ketergantungan pihak ketiga dan risiko supply chain.
- Menjaga informasi pengunjung seminimal mungkin karena versi pertama tidak membutuhkan akun, cookie, form, atau analytics.
- Menyediakan konfigurasi hosting yang aman dan dapat diverifikasi.

## Scope Versi Pertama

Versi pertama adalah website statis dengan HTML, CSS, vanilla JavaScript, gambar, ikon, dan font yang disimpan pada origin sendiri.

Website tidak memiliki:

- Login atau session.
- Database.
- Backend aplikasi.
- API privat.
- Form pengumpulan data.
- Pembayaran.
- Upload file.
- Dashboard admin.
- Cookie aplikasi.

Jika salah satu fitur tersebut ditambahkan, threat model dan checklist keamanan wajib diperbarui sebelum implementasi.

## Vulnerability Reporting

Kanal pelaporan kerentanan belum ditentukan karena domain dan alamat email keamanan belum tersedia.

Sebelum deployment publik:

1. Tentukan alamat email pelaporan yang dipantau.
2. Tentukan domain produksi.
3. Buat `/.well-known/security.txt` sesuai RFC 9116.
4. Tetapkan tanggal kedaluwarsa dan proses pembaruan file.
5. Jangan menjanjikan bug bounty atau response time yang belum dapat dipenuhi.

Jangan membuat alamat kontak atau vulnerability disclosure policy fiktif untuk sekadar melengkapi file.

## Security Ownership

| Area | Owner | Backup | Status |
| --- | --- | --- | --- |
| Domain dan registrar | `[NEEDED]` | `[NEEDED]` | NEEDED |
| DNS | `[NEEDED]` | `[NEEDED]` | NEEDED |
| Hosting | `[NEEDED]` | `[NEEDED]` | NEEDED |
| Repository | `[NEEDED]` | `[NEEDED]` | NEEDED |
| Deployment | `[NEEDED]` | `[NEEDED]` | NEEDED |
| Vulnerability report | `[NEEDED]` | `[NEEDED]` | NEEDED |

## Incident Minimum Response

Jika website, domain, atau deployment account diduga diambil alih:

1. Hentikan deployment otomatis yang masih aktif.
2. Amankan akun registrar, DNS, repository, dan hosting.
3. Rotasi credential yang terdampak.
4. Kembalikan website dari revision yang sudah diverifikasi.
5. Periksa perubahan DNS, deployment log, access log, dan repository history.
6. Dokumentasikan waktu, dampak, tindakan, dan bukti.
7. Beri tahu pihak yang terdampak jika insiden menyentuh data atau komunikasi pengunjung.

## Related Documents

- `docs/THREAT_MODEL.md`
- `docs/SECURITY_CHECKLIST.md`
- `docs/QA_CHECKLIST.md`
- `docs/DECISIONS.md`

