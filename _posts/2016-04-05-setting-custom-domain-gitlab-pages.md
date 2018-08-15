---
layout: post
title: Setting Custom Domain Gitlab Pages
date: '2016-04-05T02:44:00.004-07:00'
tags:
- Blog
- Publishing
- Git
modified_time: '2016-04-05T02:44:58.949-07:00'
---

Setelah [membuat dan mendeploy halaman di gitlab pages]({{ site.baseurl }}{% post_url 2016-04-04-membuat-blog-atau-website-di-gitlab %}), hal selanjutnya jika teman - teman punya TLD sendiri dan ingin mensetting domain tersebut untuk gitlab pages maka langkah - langkah dibawah ini bisa membantu.

### 1. Buka project Setting

![project setting](https://2.bp.blogspot.com/-xaa1y4vFmjI/VwN5y6P5DYI/AAAAAAAACTY/C4qJGUfM0SYvWtMrjRGSOU4KimRk59Zdg/s1600/projectsetting.png)

Buka repository / project yang akan di tambahkan custom domain, kemudian buka pilihan setting di tab sebelah kiri bawah layar atau di menu setting di pojok kanan atas halaman project ( Edit Project ).

### 2. Buka Page Setting

![Domain info](https://3.bp.blogspot.com/-fqYn1CrTlkU/VwN7dxBaizI/AAAAAAAACTk/NKeM_QEXuLMxfX3WR8_8StJpTegKSNgmQ/s1600/domaininfo.png)

Selanjutnya buka tab **page setting** yang terdapat di menu tab sebelah kiri layar. Maka tampilan akan telihat seperti pada gambar. Dan selanjutnya klik tombol **+ New Domain** untuk menambahkan custom domain.

### 3. Tambahkan Domain
![Add domain](https://2.bp.blogspot.com/-nhI1PCgs6FU/VwN-cpcBC1I/AAAAAAAACT4/5vJNetaDZLEth6IMrnVXe_PXZD-KtY71g/s1600/adddomain.png)

Tambahkan domain yang akan digunakan untuk halaman gitlab pages kita. Contoh disini menggunakan subdomain untuk digunakan pada gitlab pages. Tapi jika temen - temen ingin menggunakan top level domain juga langsung ditulis asalkan belum di gunakan untuk blog atau website lain milik temen - temen sendiri.

Untuk kolom Sertifikat dan Kunci **bisa dikosongkan** lalu klik tombol **Create new Domain**.

### 4. Membuat Setting DNS Record

![Detail domain](https://1.bp.blogspot.com/-L_PvRqx15G4/VwOAGd3UM5I/AAAAAAAACUM/YJVtH4haKFYGh0aUKyb-K_XXDf3r_P1lg/s1600/detaildomain.png)

Setelah menambahkan domain maka domain akan muncul di list nama domain yang digunakan ( bagian bawah sendiri) seperti pada gambar diatas. Klik tombol detail untuk petunjuk setting DNS seperti gambar dibawah ini.

![setting dns](https://2.bp.blogspot.com/-d18IX32RA2E/VwOBVrliccI/AAAAAAAACUY/BIimzHynNmgRB4yjI4I9zUOO4GtxaifyA/s1600/setdns.png)

### 5. Menambahkan DNS Record
Setelah mendapatkan petunjuk settingan dns, selanjutnya kita tinggal menambahkan dns record yang ditampiklan tadi ke pengaturan DNS tempat kita mendaftarkan domain. Lalu pada DNS manager - nya tambahkan record **cname**, kemudian **name** diisi dengan **sub.domainkamu.com** atau **domainkamu.com** dan pada  **domain name** tambahkan **usernamekamu.gitlab.io**.

![Dns Record](https://1.bp.blogspot.com/-FYhJHXQiINk/VwOGdi9eS7I/AAAAAAAACVA/Qe366BKhEXYjwvZnIa1B3HAC2VV6FFKyQ/s1600/clo.png)

Silakan blog website dengan nama domain / subdomain baru untuk memastikan. Jika masih menampilkan halaman error, tunggu **propagasi domain** selama 1 - 24 jam jika domain / subdomain tersebut pernah digunakan untuk website lain.

Jika domain / sub domain belum pernah digunakan atau propagasi sudah melebihi waktu maksimal, seharusnya sudah dapat menampilkan halaman yang dimaksud. Tapi jika mash juga error coba cek settingan dari langkah ke 3 sampai 5.
