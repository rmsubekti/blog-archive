---
layout: post
title: Cara Instal XAMPP di PC/Laptop
date: '2014-06-29T02:01:00.000-07:00'
categories: PHP
modified_time: '2016-06-23T14:44:44.416-07:00'
---
Untuk kamu yang suka menulis kode php dan sedang belajar membuat web dengan menggunakan bahasa PHP, ada baiknya kamu menginstal XAMPP di komputermu daripada kamu harus menjalankan script PHP secara online d hostingan kamu.

Xampp adalah software gratis yang dapat berjalan di berbagai sistem operasi. Xampp merupakan kompilasi dari beberapa program, untuk Xampp untuk windows sendiri program yang tersedia didalamnya adalah

1.  Apache 2.4.4
2. MySQL 5.6.11
3. PHP 5.5.0
4. phpMyAdmin 4.0.4
5. FileZilla FTP Server 0.9.41
6. Tomcat 7.0.41 (with mod_proxy_ajp as connector)
7. Strawberry Perl 5.16.3.1 Portable
8. XAMPP Control Panel 3.2.1 (from hackattack142)

Sebenarnya kamu bisa saja mendownload software tersebut masing-masing dengan penginstalannya sendiri-sendiri, tapi mungkin akan lebih ribet dibandingkan untuk menginstal Xampp. Fungsi dari XAMPP sendiri dalah sebagai server yang berdiri sendiri. Sama dengan server web hosting di internet, Dengan XAMPP kamu juga bisa membuat website dengan PHP, membuat dan mengelola database, menginstal CMS seperti joomla, wordpress, drupal dan masih banyak lainnya.

Untuk menjalankan CMS atau kode PHP yang kamu buat sendiri kamu harus membuatkan folder baru di folder HTDOCS yang berada di instalan XAMPP. Kode atau file php yang kamu tidak bisa dibaca melalui browser jika tidak didalam foler HTDOCS, karena untuk menerjemahkan kode php kamu harus mengakses file tersebut melalui domain **local server XAMPP** ( http://localhost ).

Nah untuk menginginkan server kamu sendiri di komputer kamu, ada beberapa langkah yang kamu harus perhatikan, sebenarnya tidak bermasalah jika kamu menginstal seperti software - software windows lainnya, akan tetapi untuk munkin akan berpengaruh dengan kerja komputer saat kamu tidak menggunakan software ini. Berikut ini ada beberapa langkah yang mungkin bisa membantu kamu menginstalnya.

1. Kamu harus memiliki penginstal XAMPP yang bisa kamu unduh melalui website resmi [Apache Friends](http://www.apachefriends.org/en/xampp.html){:target="_blank"}. jika kamu sudah memiliki penginstal XAMPP kamu buka penginstalnya sama seperti kamu ingin menginstal software di komputermu.

2. Pilih salah satu bahasa yang tersedia yang bisa kamu mengerti disini saya pilih  (default : English)

3. Peringatan untuk kamu yang menginstal Xampp di windows vista, sebaiknya kamu tidak menginstalnya di folder Program Files. jika kamu menginstalnya di folder tersebut maka besar kemungkinan server tidak akan berfungsi karena file instalan XAMPP beberapa mungkin tidak dapat di ekstrak ke folder tersebut.

    ![img](https://3.bp.blogspot.com/-ZF-kRDMbWkE/VGCDCZnS3cI/AAAAAAAAATs/TMsPvo3Vl7g/s1600/2.JPG)

    Ini disebabkan karena User Account Control di windows Vista dan xampp tidak banyak memiliki izin untuk menulis di folder tersebut, jika kamu tetap ingin menginstalnya di folder C:\Program Files, kamu bisa menonaktifkan User Account Control ( UAC ) di komputermu.

4. Pada Dialog Setup Wizard klik next

5. Pilih lokasi drive untuk menginstal untuk defaultnya penginstalan di C:\xampp.

    ![img](https://2.bp.blogspot.com/-jUaOAhQe7Eo/VGCDMD5ZmWI/AAAAAAAAAT0/pGSPWTUXcv4/s1600/4.JPG)

    Kamu bisa menginstal di folder mana saja, saya sendiri lebih memilih menginstalnya di drive D:\ xampp, karena beberapa waktu yang lalu saya instal ulang windows dan saya kehilangan file project php yang berada di folder htdocs xampp.

    Karena saya tidak mau kehilangan beberapa file project saya makanya dari saat itu saya menginstalnya di drive D:\ untuk jaga - jaga kalau komputer saya error lagi.

6. Pada langkah ini sebaiknya perlu kamu perhatikan dengan baik. Biarkan Service section pada Apache, MysQl dan FileZilla tidak di centang dan lebih baik kamu tidak mencentangnya. jika ada sebaiknya hapus tanda centang tersebut seperti gambar disamping. Kemudian Klik install.

    ![install](https://1.bp.blogspot.com/-qkTE4rhbBbI/VGCDWHPpkaI/AAAAAAAAAT8/uK0Mshkm1ok/s1600/5.JPG)

    Jika kamu menginstal service tersebut maka Apache, MySql dan File zilla akan terus  menjalankan proses dari saat menghidupkan pc (Start Up) dan prosesnya tidak dapat dihentikan. Salah satu akibatnya akan mengurangi performa komputer menjadi sedikit lamban. jadi sebaiknya kamu tidak menginstal servisnya.

7. Tunggu sampai proses instalasi Xampp di komputer selesai. kira -kira selesai dalam waktu antara 3-8menit

8. Setelah instalasi selesai akan muncul dialog hitam (Command Promp) tunggu hingga dialog tersebut menghilang dengan sendirinya.

9. Setelah penginstalan selesai kemudian klik Finish kemudian tekan yes untuk membuka Control Panel Xampp

    ![img](https://3.bp.blogspot.com/-cez1rNmQFJo/VGCDgX6PqjI/AAAAAAAAAUE/5RrmUv1h5Ak/s1600/7.JPG)

10. Sekarang cek Xampp apakah sudah berjalan dengan baik. Klik tombol start pada modul Apache dan MysQl sampai terlihat seperti gambar disamping. Terlihat ada tulisan Running pada modul Apache dan MySql.

    ![img](https://3.bp.blogspot.com/-dzIFX_l2jpY/VGCDyqS4vdI/AAAAAAAAAUM/Trj69yN3rCI/s1600/9.JPG)

11. Buka Salah satu browser disini saya menggunakan Google Crome, lalu ketikkan **localhost/** pada address bar. kemudian pilih bahasa yang kamu mengerti. Jika muncul halaman seperti di gambar, berarti penginstalan telah sukses.

    ![imag](https://4.bp.blogspot.com/-ixe8iFIvKn4/VGCD7ooATTI/AAAAAAAAAUU/U0UX_512NKY/s1600/10.JPG)

Dengan langkah diatas, untuk menghidupkan modul dan mematikan modul Apache dan MySql di kontrol panel. Jika kamu lupa mematikannya tidak menjadi masalah karena pada saat komputer dimatikan maka proses modul akan dihentikan sendiri oleh Sistem operasi dan modul tidak akan melakukan proses pada saat komputer di hidupkan. Agar kamu  bisa kembali  mengakses localhost aktifkan kembali modul melalui control panel Xampp.
