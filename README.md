# UTS Latihan - Pemrograman Web Service

Proyek UTS Latihan Mata Kuliah Pemrograman Web Service yang telah diorganisasi ke dalam arsitektur **Backend** (Laravel Web Service API) dan **Frontend** (Client Web Interface).

---

## 👩‍💻 Identitas Mahasiswa
- **Nama** : Zalwa Nadia
- **NIM** : 24010110168
- **Kelas** : C2
- **Program Studi** : Teknik Informatika / Ilmu Komputer
- **Universitas** : Universitas Bumigora Mataram
- **Mata Kuliah** : Pemrograman Web Service

---

## 📁 Struktur Repositori

```text
uts_latihan/
├── Backend/                 # Proyek Laravel Web Service API
│   ├── app/                 # Controllers, Models, Providers
│   ├── bootstrap/           # Bootstrapping & Routing Configuration
│   ├── config/              # Konfigurasi aplikasi
│   ├── database/            # Migrations, Seeders, Factories
│   ├── public/              # Public asset & index.php
│   ├── resources/           # Blade Views & resource assets
│   ├── routes/              # web.php, console.php, settings.php
│   ├── storage/             # Log dan temporary files
│   ├── artisan              # Laravel CLI
│   ├── composer.json        # PHP dependencies
│   └── .env.example         # Template konfigurasi environment
│
├── Frontend/                # Client Web Interface (HTML, CSS, JS)
│   ├── css/
│   │   └── style.css        # Custom styling responsif
│   ├── js/
│   │   └── app.js           # Fetch API & interaksi client-side
│   ├── index.html           # Halaman utama antarmuka frontend
│   └── README.md            # Dokumentasi frontend
│
├── .gitignore               # Konfigurasi file yang diabaikan Git
└── README.md                # Dokumentasi utama proyek
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Menjalankan Backend (Laravel)

1. Buka terminal dan masuk ke folder `Backend`:
   ```bash
   cd Backend
   ```
2. Pastikan dependensi terinstall:
   ```bash
   composer install
   ```
3. Salin konfigurasi environment dan buat app key:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Jalankan server Laravel:
   ```bash
   php artisan serve
   ```
   Server backend akan aktif di `http://127.0.0.1:8000`.

### 2. Menjalankan Frontend

1. Masuk ke folder `Frontend`:
   ```bash
   cd Frontend
   ```
2. Buka file `index.html` langsung di browser, atau gunakan ekstensi **Live Server** di VS Code.
3. Anda dapat menguji koneksi langsung ke backend yang sedang berjalan melalui tombol **"Uji Koneksi Backend"** di halaman frontend.

---

## 📡 Daftar Endpoint Backend

| Method | Endpoint | Deskripsi | Respons |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Halaman selamat datang (Welcome Blade) | HTML |
| `GET` | `/api/status` | Status kesehatan API Web Service | JSON |
| `GET` | `/bagusimutsekali` | Halaman tampilan Master Layouts | HTML |
| `GET` | `/up` | Health check Laravel application | JSON/Plain |

---

## 📝 Catatan Komit
- **Nama Komit** : Zalwa Nadia
- **Author** : Zalwa Nadia (`zalwanadia487@gmail.com`)
