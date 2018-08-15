---
layout: post
title: Mengaktifkan .NET Framework 3.5 di Windows 8
date: '2014-07-31T15:49:00.000-07:00'
tags:
- ".NET"
- Komputer
modified_time: '2016-06-23T14:44:44.387-07:00'
---
Secara default *Windows 8* memang tidak terinstal .NET Framework 3.5 (termasuk .NET 3.0 dan 2.0). Tetapi untuk menginstal atau mengaktifkan .NET 3.5 di windows 8 khususnya bagi yang baru migrasi dari windows 7 tidak perlu mengunduh .NET 3.5.

![Windows feature](https://2.bp.blogspot.com/-5VhKgMnCxDI/U9q9veN8aoI/AAAAAAAAAGM/AmrBpsENr9U/s1600/Windows++Feature.PNG)

Problem yang biasa ditemui dalam menginstall .NET 3.5 seperti menginstall melalui **Windows Features** kita diharuskan untuk mengunduh .NET 3.5 melalui Windows Update. Jika kamu telah mengunduhnya dan menginstall .NET 3.5 melalui Windows Update maka akan diminta mengunduh lagi dan begitu seterusnya.

Mungkin bisa dibilang .NET 3.5 tidak mungkin bisa diinstal melaui windows update dan download, akan tetapi kamu masih tetap bisa menginstal .NET 3.5 menggunakan DVD atau mount ISO installer windows 8 di File Explorer. Berikut langkah-langkahnya:

1. Masukkan Windows DVD/USB atau mount ISO image di File Explorer. Untuk mount ISO File di windows 8 Tidak memerlukan install software khusus seperti pada windows 7.
    Source File untuk .NET Framework 3.5 berada pada folder **G:\sources\sxs** ( Disini Sebagai contoh DVD drive installer berada di Letter G mungkin berbeda - beda pada masing masing komputer yang mungkin lokasi tersebut telah digunakan oleh media penyimpanan lain)

    ![windows iso](https://4.bp.blogspot.com/-LXqPEd6Lie8/U9rBFyexF7I/AAAAAAAAAGY/9I1vD-3WuK0/s1600/ISO+Windows+8.PNG)

2. Buka **CMD.exe** dengan Administrative Privileges. Atau cukup klik kanan Start pilih Command Promp (Admin)

3. Jalankan Command dengan mengetikkan perintah berikut:

    ```Dism.exe /online /enable-feature /featurename:NetFX3 /All /Source:G:\sources\sxs /LimitAccess```

    Ingat kembali lokasi drive installer windows 8. lalu ketikkan sesui dengan lokasi drive di komputermu.

    ![Enable net 3.5](https://2.bp.blogspot.com/-z9_jVkLDXe0/U9rFZwBhl7I/AAAAAAAAAGw/BMhphJc58Ug/s1600/Enable+.NET+3.5.PNG)

4. Tunggu proses instal selesai. untuk memastikan buka Windows Features terlihat .NET Framework 3.5 telah di Cek.

  ![Enabled](https://4.bp.blogspot.com/-ijwtpmO9x0Q/U9rGY37xqzI/AAAAAAAAAG4/SUhQl6c479Y/s1600/Enable+.NET+FX3.5.PNG)

Sekarang kamu sudah bisa menjalankan aplikasi windows favoritmu yang berjalan di .NET Framework 3.5 di komputer.
