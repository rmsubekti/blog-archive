---
layout: post
title: Cara Menggunakan Developer Tool di Chrome Untuk Menulis dan Test Javascript
date: '2016-01-06T11:14:00.000-08:00'
categories: Javascript
tags:
- Chrome
- Editor
modified_time: '2016-01-12T23:05:16.972-08:00'
---

Untuk memulai belajar javascript, kita tidak memerlukan alat khusus ataupun mewah. Hanya dengan menggunakan teks editor biasa, kita sudah bisa mulai menulis javascript dan menjalankanya di browser. Nah, kali ini saya akan berbag bagaimana cara menggunakan browser google chrome untuk membuat file, mengedit dan menjalankan script javascript.

**1. Buat folder project** dimanapun di hardisk komputer kemudian isi di dalamnya dengan file bernama index.html, contoh seperti pada gambar.

![1buatproject](https://2.bp.blogspot.com/-OVyz-HdY7BE/Vo1mDxheTQI/AAAAAAAABl8/GXiaHCecnLM/s1600/1buatproject.png)

**2. Buka file `index.html`** yang tadi dibuat mengunakan google chrome, atau buka dulu google chrome kemudian tekan **CTRL+O** untuk membuka file.

**3. Buka Developer Tool** (*CTRL+SHIFT+I*) setelah file berhasil dimuat di chrome.

**4.** Pada tab sources akan terlihat folder project kita, agar dev tool bisa mengedit serta menyimpan file disana maka foldernya harus ditambahkan ke workspace. Klik kanan pada folder project kita, kemudian pilih **Add folder to workspace**. Pada dialog open, klik open dan allow pada browser.

![4devtool](https://4.bp.blogspot.com/-vBqRGDIZLFI/Vo1my1YCwyI/AAAAAAAABmE/yg5W-qoxQuc/s1600/4devtool.png)

**5.** Sekarang chrome dev tool sudah menambahkan folder kita di workspace letaknya persis dibawah folder file yang kita buka sebelumnya. **Edit file `index.html`** pada workspace dengan menambahkan markup didalamnya.

![5devtool](https://3.bp.blogspot.com/-8did9CXjniY/Vo1m8tQPNKI/AAAAAAAABmM/DeLh8ATxnFI/s1600/5devtool.png)

**6. Buat file main.js**, klik kanan pada folder yang berada di workspace lalu pilih New file. Beri nama file baru tersebut dengan nama main.js. Kemudian tulis kode javascript di file tersebut. Sebagai contoh saja seperti pada gambar.

![6mainjs](https://3.bp.blogspot.com/-Uzu0P8AICYY/Vo1nDfEbGUI/AAAAAAAABmU/42oKLyX0HIo/s1600/6mainjs.png)

**7.** Untuk melihat hasilnya, **simpan kedua file yang sudah diedit tadi** dengan menekan tombol *CTRL+SHIFT+S*. Kemudian muat ulang halaman dengan menekan tombol *F5*.

![7testjs](https://2.bp.blogspot.com/-HggL38SfsQs/Vo1nUzSF7PI/AAAAAAAABmc/X0aJz_DxFWg/s1600/7testjs.png)

Bukan hanya javascript saja yang bisa dibuat dan dijalankan tapi juga bisa menambahkan file stylesheet dan file lain sepert gambar untuk membuat halaman web statis.
