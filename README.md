# Landing Page Toko Rahman — v1

Landing page katalog mobil yang dibuat sebagai **proyek individu**.  
Project ini menggunakan arsitektur **frontend dan backend terpisah**, dengan backend API sederhana untuk menampilkan data produk secara dinamis.

---

## 🎯 Tujuan Proyek
- Membuat landing page katalog mobil yang rapi & responsif
- Menerapkan konsep UI/UX dasar (Hero, CTA, struktur konten)
- Menghubungkan frontend statis dengan backend API
- Menjadi fondasi untuk pengembangan backend & database ke depannya

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- Live Server (VS Code Extension)

### Backend
- Node.js
- Express.js
- CORS

---

## 📂 Struktur Folder

```text
landing-page-toko/
├── images/                  # Asset gambar
│   ├── bmw320.webp
│   ├── galant.jpg
│   └── product1.jpg
│
├── frontend/
│   ├── index.html           # Landing page
│   ├── product.html         # Detail produk
│   └── css/
│       └── style.css
│
├── backend/
│   ├── server.js            # Express server
│   ├── data/
│   │   └── products.js      # Dummy data produk
│   ├── package.json
│   └── package-lock.json
│
└── README.md
---

## ▶️ Cara Menjalankan Proyek
1️⃣ Jalankan Backend

Masuk ke folder backend:
bash

cd backend
node server.js

Server akan berjalan di:
arduino 

http://localhost:3000

2️⃣ Jalankan Frontend

> Buka folder frontend di Visual Studio Code
> Klik kanan index.html
> Pilih Open with Live Server

📱 Fitur Utama (v1)

> Hero section dengan CTA
> Section tentang toko
> Katalog produk dinamis dari API
> Halaman detail produk
> Error handling UI (produk kosong / tidak ditemukan)
> Navigasi anchor link
> Footer dengan social link (dummy)
> Desain responsif (desktop & mobile)

📌 Catatan

- Data produk masih menggunakan dummy data
- Backend belum terhubung ke database
- Project ini difokuskan pada struktur dan konsep dasar

🚀 Project Status

Freeze v1 — Stable
Frontend dan backend sudah terhubung dan siap dikembangkan ke tahap berikutnya.

🧭 Rencana Pengembangan

- Integrasi database
- CRUD produk (admin)
- Penilaian kondisi kendaraan
- Estimasi harga & pengiriman
- Integrasi chatbot / AI inquiry

👤 Author
Haffidh Rahman