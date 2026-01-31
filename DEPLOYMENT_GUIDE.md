# 🎂 Panduan Deploy Website Ulang Tahun Lixie ke Netlify

## 📦 Persiapan File Musik

Sebelum deploy, pastikan kamu sudah upload file MP3 ke folder `public/music/` dengan nama:

1. `menerima-luka.mp3`
2. `bersenja-gurau.mp3`
3. `dirimu-yang-dulu.mp3`
4. `mistletoe.mp3`
5. `18.mp3`
6. `trouble.mp3`
7. `payphone.mp3`
8. `perfect.mp3`
9. `where-we-are.mp3`
10. `kota-ini.mp3`
11. `masa-ini.mp3`
12. `8-letters.mp3`

## 🚀 Langkah Deploy ke Netlify

### Opsi 1: Deploy via GitHub (Recommended)

#### Step 1: Upload ke GitHub
1. Buka https://github.com dan login
2. Klik tombol "+" di kanan atas → New repository
3. Beri nama repository (misal: `lixie-birthday`)
4. Buat repository sebagai **Public** atau **Private**
5. **JANGAN** centang "Initialize with README"
6. Klik "Create repository"

#### Step 2: Upload File
Ada 2 cara upload:

**Cara A: Via Web (Mudah)**
1. Di halaman repository yang baru dibuat, klik "uploading an existing file"
2. Drag & drop semua file dari folder `frontend/` (kecuali `node_modules`)
3. Upload file-file berikut:
   - Folder `public/` (termasuk folder `music/` dengan semua MP3)
   - Folder `src/`
   - File `package.json`
   - File `tailwind.config.js`
   - File `postcss.config.js`
4. Commit changes

**Cara B: Via Git Command (Untuk yang familiar dengan Git)**
```bash
# Di folder frontend
git init
git add .
git commit -m "Initial commit - Lixie Birthday Website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

#### Step 3: Deploy ke Netlify
1. Buka https://www.netlify.com dan login (bisa pakai GitHub)
2. Klik "Add new site" → "Import an existing project"
3. Pilih "Deploy with GitHub"
4. Authorize Netlify untuk akses GitHub
5. Pilih repository `lixie-birthday`
6. **Build settings:**
   - Build command: `yarn build`
   - Publish directory: `build`
7. Klik "Deploy site"
8. Tunggu 2-3 menit sampai deploy selesai

#### Step 4: Custom Domain (Optional)
1. Di Netlify dashboard, klik "Domain settings"
2. Klik "Add custom domain" atau gunakan subdomain gratis dari Netlify
3. Bisa rename jadi: `lixie-birthday.netlify.app`

---

### Opsi 2: Deploy Drag & Drop (Lebih Cepat tapi Manual)

#### Step 1: Build Project
Di folder frontend, jalankan:
```bash
yarn install
yarn build
```

#### Step 2: Deploy ke Netlify
1. Buka https://app.netlify.com/drop
2. Drag & drop folder `build/` yang baru dibuat
3. Website langsung live!

**Note:** Cara ini tidak support auto-update. Setiap ada perubahan harus build & upload ulang.

---

## 🎵 Catatan Penting

### File Musik
- Pastikan semua file MP3 sudah di folder `public/music/` sebelum build
- Format nama file harus sesuai dengan yang tercantum di README.md (folder music)
- Ukuran total file jangan terlalu besar (max 100MB untuk free plan)

### Password
- Password default: **22122024**
- Untuk ganti password, edit file `src/pages/LockScreen.js` baris 36

### Troubleshooting

**Problem:** Music tidak play
- **Solution:** Pastikan file MP3 ada di folder `public/music/`
- Browser kadang block autoplay, user harus interaksi dulu (klik play)

**Problem:** Halaman blank setelah deploy
- **Solution:** Check build logs di Netlify, biasanya ada error saat build

**Problem:** Routing tidak work (404 di refresh)
- **Solution:** Tambahkan file `public/_redirects` dengan isi:
  ```
  /* /index.html 200
  ```

---

## ✨ Tips

1. **Preview Dulu:** Sebelum kasih ke Lixie, cek di berbagai device (HP, tablet, laptop)
2. **Test Musik:** Pastikan semua musik bisa play dengan smooth
3. **Screenshot:** Ambil screenshot untuk backup kalau ada yang error
4. **Domain Custom:** Beli domain custom (misal: lixie.com) supaya lebih professional

---

## 📱 Test di Android

Setelah deploy:
1. Buka link Netlify di HP Android
2. Test password: 22122024
3. Test pilih musik dari tiap kategori
4. Cek timeline bisa scroll
5. Test game YES/NO button
6. Pastikan semua halaman load dengan baik

---

## 💖 Selamat!

Website kamu sekarang sudah live dan siap diberikan ke Lixie! 🎉

**URL Website:** `https://your-site-name.netlify.app`

Semoga Lixie suka ya! 💙✨

---

**Made with 💙 by Ryzen**
