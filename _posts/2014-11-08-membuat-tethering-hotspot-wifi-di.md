---
layout: post
title: Membuat Tethering / Hotspot Wifi di Windows 8.1
date: '2014-11-07T14:53:00.000-08:00'
tags:
- Komputer
modified_time: '2016-06-23T14:44:44.346-07:00'
---
Hampir semua orang memerlukan akses internet, dari anak - anak, pelajar sampai orang tua dan pengusaha terutama bagi mereka yang suka ngeblog. Internet bahkan tidak hanya bisa diakses menggunakan komputer PC atau laptop, tapi saat ini handphone juga bisa digunakan untuk mengakses internet. Apalagi bagi mereka yang memiliki handphone yang punya fitur wifi internet, internet bukan lagi hal yang sulit untuk mereka dapatkan dengan membayar murah bahkan gratis.

Nah untuk kamu yang ingin berbagi internet gratis untuk mengisi kegiatan saat berkumpul dengan teman - teman kamu, kamu bisa mensetting komputer kamu untuk berbagi akses internet dengan langkah mudah berikut:

1. Pastikan punya modem dan komputer windows 8, mungkin cara ini bisa bekerja di versi windows apasaja, tapi disini saya menggunkan windows 8.1.

2. Aktifkan wifi komputer kamu.

3. Klik kanan tombol start atau tekan tombol `start + x` di Keyboard

4. Cek Driver Koneksi apakah berjalan dan support untuk hosted network atau tidak. Ketikkan `netsh wlan show driver` di command prompt lalu tekan enter.

    ![wlan driver](https://1.bp.blogspot.com/-Izcn4s6XyYU/VF0yDDVcBsI/AAAAAAAAAQ8/LzeVs7o2iU0/s1600/wifi%2Bon.png)

    Jika command prompt di komputermu menunjukan hasil yang sama seperti gambar diatas (**Hosted network supported : Yes**) berarti driver komputermu bisa digunakan untuk membuat tethering hostpot.

5. Ketikkan `netsh wlan set hostednetwork mode=allow ssid=<nama network> key=<passwords>` Lalu tekan Enter.

    ![st](https://2.bp.blogspot.com/-gDbSgB_U0vs/VF0t7eSXd8I/AAAAAAAAAQw/N36hmULdV4c/s1600/sethostednetwork.PNG)

    Pada contoh gambar di atas `ssid=guntingkertas` dan `key=rahasiadong`. kamu bisa membuat ssid dan pasword wifi kamu sesuka kamu. usahakan panjang karakter pasword atau key tidak kurang dari 8 karakter.

6. Aktifkan hosted network dengan mengetikkan `netsh wlan start hostednetwork` di command prompt dan tekan enter.

    Sekarang kamu sudah bisa menggunakan hotspot wifi yng telah kamu buat tapi kamu belum bisa menggununakan hostpot ini untuk akses internet. Untuk itu kamu butuh modem untuk dibagikan datanya akses internetnya dengan menggunkan tethering hotspot ini.

7. Untuk membagi data melalui hotspot kamu, pasangkan modem dan sambungkan ke jaringan.

8. klik kanan pada tray icon sinyal di taksbar lalu pilih Open Network and Sharing Center. Lalu pilih Change adapter setting.

    ![Share](https://1.bp.blogspot.com/-Myb1gLyRU-s/VF040G1mDaI/AAAAAAAAARc/HuoNpjb37Uc/s1600/network.png)

9. Di jendela Network Connnection kamu bisa melihat ada beberapa adapter yang terinstal di komputer, yang jumlahnya setiap komputer mungkin berbeda. Tetapi mudah saja menemukan adapter dari modem kamu.

    ![setting](https://4.bp.blogspot.com/-Srepanum2r4/VF09SW5tYaI/AAAAAAAAARo/XbqMpDf62Uw/s1600/network.png)

    Contoh disini saya memakai **modem Huawei XL** dengan nama adapter **Mobile Broadband 2**. Klik kanan pada adapter tersebut lalu pilih **properties**. Maka akan muncul jendela seperti gambar. lalu pilih tab **Sharing** untuk membagikan akses internet melalui adapter hotspot yang tadi kamu buat tadi.

    Di Tab **Sharing** beri tanda centang pada **"Allow other network users to connect through the computer's connection."** dan pilih pada **"Home networking Connection"** adapter hotspot yang telah kamu buat tadi, disini adapter saya adalah **Local Area Connection* 12** , Seperti yang bisa kamu lihat SSID saya tertampang disana.

    Sekarang Kamu coba login hotspot kamu dengan komputer lain atau hp kamu. Jika belum bisa browsing lewat hotspot itu coba matikan hotspot di komputer yang kamu setting tadi lalu hidupkan lagi. Caranya ketikkan di Command Prompt:

    - `netsh wlan stop hostednetwork` Untuk menonaktifkan hotspot
    - `netsh wlan start hostednetwork` Untuk mengaktifkan kembali

Sekarang coba kembali login di hotspot tersebut.

------------

#### Masalah yang mugkin kamu ditemui

Saya sendiri pernah mengalami ketika saya mengaktifkan hotspot saya tapi command promp menampilkan pesan **"the hosted network couldnt be started. the group or resource is not in the correct state to perform the requested operation."**.

![err](https://4.bp.blogspot.com/-YlJ1XdTk9KI/VF1GKjsrYeI/AAAAAAAAAR4/poDgNVwpOQU/s1600/cannotbestatrted.PNG)

Jika kamu menemui hal yang sama coba kamu cek apakah wifi komputer kamu sudah kamu nyalakan. jika sudah dinyalakan tetapi tetap tidak bisa mungkin masalah adapter, Coba cek adapter hotspot kamu di Network Connection Caranya  klik kanan  tombol start lalu pilih Network connection.

<small>**Related :** [Cara Mengatasi Tidak Bisa Browsing Di Windows 8]({{ site.baseurl }}{% post_url 2015-01-07-cara-mengatasi-tidak-bisa-browsing-di %})</small>

Ya memang kita tidak bisa melihat adapter hotspot kita karena mamang belum dinyalakan, untuk itu coba ikuti langkah ini:

![dm](https://3.bp.blogspot.com/-HSpuwAXBprc/VF1KLXGDD_I/AAAAAAAAASE/zBbY_CzyT9M/s1600/device%2Bmanager.png)

1. Klik kanan tombol start
2. Pilih Device Manager
3. Klik View pada Menubar
4. Pilih show hidden device
5. Expand di bagian Network adapter Lalu klik kanan pada Microsoft Hosted network Virtual Adapter
6. Pilih Enable

Setelah kamu lakukan cara diatas tetap tidak bisa coba ulangi lagi dengan membuat adapter yang baru. Semoga berhasil.
