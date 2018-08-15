---
title:  "Offline Web Menggunakan Service Worker Library"
date:   2016-11-03 19:44:26 +0700
categories: Javascript
---
Membuat halaman web kita bisa diakses secara offline saat ini sangatlah mudah. Hampir setiap browser yang ada sekarang telah mendukung service worker. Untuk mengimplementasikan / menerapkan fitur service worker, juga mudah karena kodenya mudah sekali dipahami.

Tapi tidak semua situs / web harus di cache menggunakan cara yang sama sehingga dibutuhkan penerapan cara mencache yang lebih kompleks, yang mungkin kita tidak bisa menulis kode tersebut seorang diri, atau cek postinganya mas Jake, [The offline cookbook](https://jakearchibald.com/2014/offline-cookbook/){:nofollow} untuk nyari cara yang pas untuk mencache website kamu.

Kalau kamu tidak mau bingung, kamu bisa menggunakan service worker library yang sudah ada, maturnuwun mbah gugle yang telah menyediakan library-nya. Ini bukan cara males nulis kode, tapi memungkinkan kita menggunakan cara yang lebih baik dan melakukan pen-cache-an yang lebih baik sehingga user / pengunjung situs kita bisa melihat situs kita sempurna pada saat offline, dan semua fitur bisa berjalan dengan baik, seperti membalas chat, ganti nama akun, dan ketika situs kita update, user tidak memuat halaman yang sama.

Service worker Library yang tersedia saat ini:

### 1. sw-precache
Service worker Precache merupalkan modul untuk menghasilkan service worker, yang mem-precache source halaman website kita. Module ini dapat digunakan menggunakan build script berbasis Javascript, seperti salah satunya yang ditulis dengan menggunakan gulp. untuk lebih lengkapnya silakan cek di repository github [GoogleChrome/sw-precache](https://github.com/GoogleChrome/sw-precache){:nofollow}

### 2. sw-toolbox
Service Worker Toolbox memberikan kemudahan untuk kita men-cache konten statis menggunakan pola pen-cache-an yang umum dan pendekatan ekspresif menggunakan strategi untuk runtime request tertentu. Lebih lengkapnya cek repositorynya  [GoogleChrome/sw-toolbox](https://github.com/GoogleChrome/sw-toolbox/){:nofollow}

### 3. sw-offline-google-analytics
Kamu tetap dapat meliat aktifitas user di website kamu saat mereka ofline dengan menggunakan Offline Google Analytics.

Offline google analytics akan menyimpan data tracking website saat offlne di database indexedDB, ketika pengguna kembali ke jaringan internet atau online, maka google offline analytics akan mencoba kembali melakukan request ke google analytics dari data url yang telah disimpan.Lebih lengkapnya silakan cek dokumentasi [sw-helpers](https://googlechrome.github.io/sw-helpers/reference-docs/stable/0.0.17/module-sw-offline-google-analytics.html){:nofollow}.

Paduan untuk menggunakannya bisa dilihat pada link masinf masing repository, jika kamu ingin belajar atau mempraktikannya di project website kamu sendiri, silakan cek di [Web Codelab](https://codelabs.developers.google.com/?cat=Web){:nofollow}.

Selamat mencoba.
{:nofollow: target="_blank" rel="nofollow"}
