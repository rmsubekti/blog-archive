---
layout: post
title: Cara Menambahkan InstallShield di Visual Studio Untuk Membuat Installer
date: '2016-03-19T15:18:00.001-07:00'
tags:
- Visual Studio
- Publishing
modified_time: '2016-03-19T15:18:14.411-07:00'
---

Jika kita menginstall aplikasi di komputer sudah tentu program pertama yang dijalankan adalah Wizard installernya. Installer aplikasi yang sering kita temui dari berbagai aplikasi biasanya menggunakan InstallShield wizard.

Nah untuk teman - teman yang sudah menyelesaikan project aplikasi di Visual Studio dan ingin mempublikasikan aplikasi tersebut, InstallShield juga tersedia untuk Visual Studio dengan edisi Gratisnya yaitu InstallShield Limited Edition.

Untuk menggunakannya kita perlu mengunduh add-on ( mungkin bisa dibilang begitu ) InstallShield untuk visual studio dan menginstallnya dengan langkah - langkah berikut:

### 1. Pastikan komputer terkoneksi dengan internet
Aplikasi Add-on InstallShield wizard tidak langsung tersedia pada saat kita menginstall visual studio, Jadi kita memerlukan koneksi internet untuk mengunduh dan juga mengaktifkan add-on ini.

### 2. Membuka halaman instruksi penginstalan.
Untuk mendapatkan instruksi penginstalan atau lebih tepatnya link ke halaman download, kita bisa membuat solution/project seperti biasa dengan menggunakan template project pada **Other Project Types** > **Setup and Deployment**.Lengkapnya Seperti pada gambar.

![InstallShield](https://3.bp.blogspot.com/-U3zk-ZmERok/Vu2gKNeSQNI/AAAAAAAACMs/ByvgMEFoHoQnXjcZMvzGjH3Mp5ao0xqUw/s1600/installShield.png)

Cukup gunakan nama sesuai keinginan atau biarkan menggunakan nama default seperti pada gambar diatas, Kemudian klik OK. Selanjutnya default browser akan menampilkan halaman instruksi pengnstalan beserta link download.

### 3. Mendaftar untuk mendapatkan link download
Masukkan informasi / data diri ke dalam form yang tersedia, Isikan dengan data diri menurut kehendak masing - masing. Pastikan semua terisi dengan benar, terutama yang bertanda bintang, dan terakhir klik tombol download now. Untuk mendapatkan serial number dan link download.

![registerInstallShield](https://1.bp.blogspot.com/-VfutsZGYneg/Vu2hmQaYzhI/AAAAAAAACM4/XAdLh7NwZI4fPbhIU8GCPin7IUIaR6R4g/s1600/registerInstallShield.png)

### 4. Catat Serial number dan download installernya
Langkah ini perlu di perhatikan, karena dari pengalaman saya sendiri,serial number dan link download hanya dapat digunakan sekali. Sebaiknya bookmark link ke halaman ini atau segera catat serial number dan download installernya.

![downloadInstallShield](https://4.bp.blogspot.com/-jjRyzREpOUs/Vu2kM6P7_DI/AAAAAAAACNM/pMdrfAoElrEYCkS5d6xyjKs2CuKKrnCMA/s1600/downloadInstallShield.png)

### 5. Langsung install.
Besok - besok juga ga papa sih tapi jika ingin langsung digunakan ya langsung saja install. Pada saat penginstallan mungkin kita akan diminta menginstall beberapa library seperti pada gambar.

![installtheShield](https://3.bp.blogspot.com/-aIdcR8p4k5U/Vu2lPkv7TfI/AAAAAAAACNc/sJUFsVQIiKoxELftqDeqHN9S881jpJziw/s1600/installtheShield.png)

### 6. Aktivasi InstallShield
Untuk mengaktifkan installshield atau menggunakan serial number yang tadi sudah didapat, Buat lagi project setup deployment di visual studio (seperti pada langkah 2) dan pastikan komputer masih terhubung ke koneksi internet untuk validasi serial number.

![activateinstallShield](https://3.bp.blogspot.com/-n-ud_75imhU/Vu2muZTS-WI/AAAAAAAACNo/_uNsFGRu-5YuHcNAdnB0vjTuSXN_m4OuA/s1600/activateinstallShield.png)

### 7. Mulai membuat installer untuk mempublikasikan aplikasi

![installShieldisReady](https://3.bp.blogspot.com/-AC0Q6TiDqXw/Vu2oB8L22FI/AAAAAAAACN0/62ZJxvJDx4cIF9uBb9iF4a6avIQsqmkRQ/s1600/installShieldisReady.png)

Nah itulah cara mendapatkan program untuk membuat installer di visual studio. Add - on ini biasanya sering digunakan untuk membuat installer untuk aplikasi berbasis dekstop, untuk aplikasi metro ( windows 8 / 10 ) masih belum tau, akan tatapi jenis aplikasi tersebut lebih disarankan untuk langsung di upload ke Windows store agar lebih aman.

Cukup sekian, semoga tutorial ini bermanfaat dan selamat atas dipublikasikannya aplikasi teman - teman sekalian serta semoga sukses dengan karya - karyanya.
