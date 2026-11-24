# CleanMate

Frontend aplikasi mobile CleanMate yang diimplementasikan dari desain Figma. Proyek menggunakan React, TypeScript, Vite, Tailwind CSS v4, dan React Router.

## Menjalankan secara lokal

Persyaratan:

- Node.js 22
- pnpm 10

```bash
pnpm install
pnpm dev
```

Buka URL yang ditampilkan Vite. Untuk memeriksa production build:

```bash
pnpm check
pnpm preview
```

## Struktur utama

- `src/app/` — konfigurasi aplikasi dan routing.
- `src/components/` — komponen UI reusable.
- `src/pages/` — halaman pelanggan, akun, dan cleaner.
- `public/assets/` — aset gambar dan ikon lokal dari desain.
- `src/index.css` — token, font, responsive layout, dan styling halaman.

## Alur aplikasi

Alur pelanggan dimulai dari `/`, lalu onboarding, login, home, pemilihan layanan, pemesanan, pembayaran, pelacakan, dan profil. Aplikasi cleaner tersedia mulai `/cleaner/login`.

## GitHub

1. Buat repository kosong di GitHub.
2. Hubungkan repository lokal:

   ```bash
   git remote add origin https://github.com/USERNAME/cleanmate.git
   git branch -M main
   git push -u origin main
   ```

3. Jangan commit file `.env`; pola tersebut sudah dikecualikan melalui `.gitignore`.

## Deployment ke Vercel

Konfigurasi `vercel.json` menyediakan SPA fallback agar URL React Router dapat dibuka langsung.

1. Import repository GitHub di Vercel.
2. Framework preset: **Vite**.
3. Build command: `pnpm build`.
4. Output directory: `dist`.
5. Deploy.

Setelah deployment, periksa URL langsung seperti `/home`, `/profil`, dan `/cleaner` untuk memastikan rewrite aktif.

## Catatan

- Aplikasi tidak membutuhkan API key atau secret.
- Data pada implementasi ini merupakan state frontend demonstrasi dan belum menggunakan backend.
- Status bar perangkat pada frame Figma tidak dirender karena halaman menggunakan viewport browser asli.
