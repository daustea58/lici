# 🎉 CARA DOWNLOAD & DEPLOY WEBSITE

## 📥 Step 1: Download Project

File project sudah dikemas dalam format ZIP: `lixie-birthday-website.zip`

**Cara download:**
1. Dari platform Emergent, download file ZIP yang sudah dibuat
2. Extract file ZIP di komputer kamu
3. Buka folder `lixie-birthday-website/`

## 🎵 Step 2: Upload File Musik

Sebelum deploy, kamu HARUS upload file MP3 ke folder `public/music/`.

**File yang diperlukan:**

```
public/music/
├── menerima-luka.mp3
├── bersenja-gurau.mp3
├── dirimu-yang-dulu.mp3
├── mistletoe.mp3
├── 18.mp3
├── trouble.mp3
├── payphone.mp3
├── perfect.mp3
├── where-we-are.mp3
├── kota-ini.mp3
├── masa-ini.mp3
└── 8-letters.mp3
```

**Tips download MP3:**
- Dari YouTube: gunakan youtube-to-mp3 converter
- Dari Spotify: gunakan spotify downloader (jika allowed)
- Quality: 128kbps - 320kbps (jangan terlalu besar)

## 🚀 Step 3: Deploy ke Netlify

### Option A: Via GitHub (RECOMMENDED)

#### 1. Upload ke GitHub

**Via Web Browser:**
1. Login ke https://github.com
2. Klik "New repository" (tombol hijau)
3. Nama: `lixie-birthday` (atau terserah)
4. Visibility: Public atau Private
5. **JANGAN** centang "Add README"
6. Klik "Create repository"
7. Klik "uploading an existing file"
8. Drag & drop semua file dari folder `lixie-birthday-website/`
9. Commit changes

**Via Git Command Line:**
```bash
cd lixie-birthday-website
git init
git add .
git commit -m "Initial commit: Website ulang tahun Lixie 💙"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

#### 2. Deploy dari GitHub ke Netlify

1. Login ke https://www.netlify.com (bisa pakai akun GitHub)
2. Klik "Add new site" → "Import an existing project"
3. Pilih "Deploy with GitHub"
4. Authorize Netlify untuk akses GitHub (kalau belum)
5. Pilih repository `lixie-birthday`
6. **Build settings:**
   ```
   Build command: yarn build
   Publish directory: build
   ```
7. Klik "Deploy site"
8. Tunggu 2-5 menit (check status di dashboard)
9. Selesai! URL akan muncul: `https://random-name-12345.netlify.app`

#### 3. Custom Domain (Optional)

1. Di Netlify dashboard → "Site settings" → "Domain management"
2. Klik "Options" → "Edit site name"
3. Ganti jadi nama yang lebih cantik, contoh:
   - `lixie-birthday.netlify.app`
   - `happy-bday-lixie.netlify.app`
   - `ryzen-for-lixie.netlify.app`

### Option B: Drag & Drop Manual

**Lebih cepat tapi tidak auto-update**

#### 1. Install Dependencies & Build

Buka terminal/command prompt di folder project:

```bash
# Install dependencies
yarn install

# Build for production
yarn build
```

Folder `build/` akan dibuat.

#### 2. Upload ke Netlify

1. Buka https://app.netlify.com/drop
2. Drag & drop folder `build/` ke halaman
3. Wait ~30 detik
4. Done! Website langsung live

**Catatan:** Kalau ada update, harus build & upload lagi manual.

## ✅ Step 4: Test Website

Setelah deploy, test di berbagai device:

### Testing Checklist

- [ ] Buka URL di browser
- [ ] Test password: `22122024`
- [ ] Pilih musik dari tiap kategori (Sedih, Mood, Semangat, Favorit)
- [ ] Check musik tetap play saat pindah halaman
- [ ] Scroll timeline, pastikan semua card muncul
- [ ] Test game "Kamu sayang aku ga?" (klik NO 5x)
- [ ] Baca ucapan ulang tahun
- [ ] Check halaman penutup
- [ ] Test di mobile Android (paling penting!)
- [ ] Test di tablet (optional)
- [ ] Test di desktop (optional)

## 🔧 Troubleshooting

### Problem: Musik tidak play

**Penyebab:**
- File MP3 belum diupload ke folder `public/music/`
- Nama file tidak sesuai
- Browser block autoplay (normal behavior)

**Solusi:**
1. Pastikan semua file MP3 ada di folder `public/music/`
2. Nama file harus EXACT seperti di list (case-sensitive)
3. User harus klik tombol play (browser policy)
4. Rebuild & redeploy

### Problem: Halaman blank setelah deploy

**Penyebab:**
- Error saat build
- Dependencies tidak terinstall
- Port atau env variable issue

**Solusi:**
1. Check build logs di Netlify
2. Pastikan `yarn install` berhasil
3. Check console error di browser (F12)
4. Redeploy dengan "Clear cache and retry deploy"

### Problem: 404 saat refresh page

**Penyebab:**
- Netlify routing tidak configured

**Solusi:**
File `public/_redirects` sudah ada di project. Kalau masih error:
1. Tambahkan file `public/_redirects` dengan isi:
   ```
   /* /index.html 200
   ```
2. Rebuild & redeploy

### Problem: Password tidak work

**Cek:**
- Password: `22122024` (tanpa spasi)
- Case-sensitive? No
- Special character? No

**Ganti password:**
Edit file `src/pages/LockScreen.js` line 36:
```javascript
if (password === '22122024') {  // Ganti password disini
```

## 🎨 Customization (Optional)

### Ganti Warna

Edit file `design_guidelines.json` atau langsung di component:
- Primary blue: `#1e3a8a`
- Gold accent: `#fbbf24`
- Background: gradient blue-dark

### Ganti Text

- Lock screen: `src/pages/LockScreen.js`
- Timeline: `src/pages/Timeline.js`
- Ucapan: `src/pages/Wishes.js`
- Closing: `src/pages/Closing.js`

### Tambah Lagu

Edit `src/pages/MusicSelector.js`:
1. Tambah entry di `musicData`
2. Upload MP3 ke `public/music/`
3. Rebuild

## 📱 Share Link

Setelah deploy berhasil, share link ke Lixie:

**Template Message:**

```
Hi bb! 💙

Aku bikin sesuatu buat ulang tahunmu.
Buka link ini di HP ya:

🎂 https://lixie-birthday.netlify.app

Password: tanggal kita jadian 😉

I love you! ✨

- Ryzen
```

## 🎁 Bonus Tips

1. **Screenshot homepage** sebelum share, jaga-jaga kalau ada error
2. **Test di incognito mode** untuk pastikan loading pertama kali smooth
3. **Share di waktu spesial** (midnight or birthday morning)
4. **Record reaction** pakai video call kalau dia buka website 😊

---

## 🆘 Need Help?

Kalau ada masalah:
1. Check console error (F12 di browser)
2. Check build logs di Netlify
3. Google error message
4. Ask di Emergent community

---

**Made with 💙 by Ryzen for Lixie**

🎉 Happy Birthday bb! Semoga suka ya~ 💙🎂✨
