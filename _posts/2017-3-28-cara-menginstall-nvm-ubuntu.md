---
title:  "Cara Menginstal nvm di Ubuntu"
categories: Nodejs
---
Sebenarnya saya masih belajar menggunakan nodejs, terutama belajar menggunakan Framework expressjs dan sekaligus coba - coba menggunakan HEXO di komputer lokal ( Ubuntu 16.04 ).

Karena pada tutorial yang diikuti terkadang menggunakan versi nodejs yang berbeda, dan sempat juga mendengar/membaca tentang alat untuk mengatur versi nodejs dalam satu sistem, dari situ saya coba install sekalian, daripada bolak - balik reinstall versi nodejs untuk setiap tutorial yang saya ikuti.

NVM sendiri sebenarnya script bash yang mampu mengatur beberapa versi nodejs sekaligus dengan kemampuannya dari penginstalan versi node yang berbeda, menjalankan perintah dengan versi node spesfik, setting variabel PATH, dan masih banyak lagi.

Kalo temen-temen juga mau coba menginstall nvm juga silakan login root, kemudian install nvm dengan langkah - langkah berikut:

----

### 1. Menginstall Kompiler C++
Pada umumnya paket build-essential merupakan paket bawaan yang sudah terinstall di hampir distribusi, terutama ubuntu. tapi disini kita pastikan saja dengan menambahkannya di langkah instalasi dengan menjalankan perintah berikut

```
apt-get update
apt-get install build-essential libssl-dev
```

----

### 2. Menginstall NVM
Untuk menginstall dan mengupdate NVM kita bisa menggunakan script instalasi yang bisa kita download dari repo di github menggunakan cURL atau Wget silakan pilih salah satu saja.

Untuk mendapatkan install script menggunakan cURL silakan jalankan perintah berikut.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

Sedangkan dengan menggunakan Wget perintahnya seperti ini:

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

Setelah nvm selesai diinstall silakan jalankan perintah berikut, biasanya muncul juga pada kata penutup setelah instalasi selesai.

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

Setelah instalasi nvm selesai, sekarang kita bisa memeriksa / cek nvm sudah bisa dijalankan dengan menggunakan perintah:

```
nvm --version
```

Setelah menjalankan perintah tersebut seharusnya tampil versi nvm yang tadi kita install, kalo ga tampil silakan coba tutup dan buka lagi terminalnya dan kembali jalankan perintah tersebut.

----

### 3. Menginstall Node.js Menggunakan NVM
Untuk menginstall node.js kita perlu mengetahui versi yang ingin kita install, atau jalankan perintah berikut untuk melihat versi node yang tersedia.

```
nvm ls-remote
```

Pilih salah satu versi nodejs, dan jalankan perintah berikut:

```
nvm install v7.7.4
```

Pada contoh diatas `v7.7.4` adalah versi node yang dipilih dari versi node yang tersedia. Setiap kali menginstall versi node baru ke komputer kita, maka akan di gunakan secara default.

Untuk menampilkan versi nodejs yang telah terinstall silakan jalankan perintah:

```
nvm ls
```

Sedangkan untuk mengubah versi node yang ingin digunakan dengan perintah :

```
nvm use v6.2.2
```

Disini contoh pindah dari versi `v7.7.4` ke `v6.2.2`, dan terakhir untuk memastikan versi node yang kita gunakan sesuai keinginan dengan menjalankan perintah

```
node --version
```