---
layout: post
title: Cara Menggunakan Git Control di Visual Studio Code
date: '2016-01-13T12:58:00.000-08:00'
categories: Git
tags:
- Editor
modified_time: '2016-01-13T13:04:41.105-08:00'
---

Jika kita pertama kali menggunakan git untuk mengontrol repository, menggunakan perintah di terminal terkadang sangat sulit, karena terkadang kita bisa lupa apa perintah untuk menambahkan file ke staging area, melakukan commit, push repo dan sebagainya. Memang untuk belajar sangat di sarankan menjalankan perintahnya secara langsung, tapi jika kamu ingin yang lebih mudah disini kamu bisa menggunakan code editor Visual Studio Code.

Visual Studio code sendiri terintegrasi dengan git, hampir semua perintah yang umum digunakan pada git bisa kita jalankan langsung di Visual Studio Code. Kontrol git pada visual studio tidak berfungsi jika kita belum menginstall software git di sistem operasi kita. Jadi pastikan selain menginstal VS code, kita juga sudah menginstal git.

### 1. Inisialisasi git Repo
Ketika kita memulai project baru yang belum di inisialisasi, kita bisa melakukan inisialisasi langsung menggunakan VS code. sama halnya dengan menggunakan perintah `git init`, pada VS Code kita hanya perlu membuka tab ikon yang berlogo git, kemudian klik **initialize git repository**.

![gitinit](https://2.bp.blogspot.com/-fqTEv5-s5AE/VpaRm028L-I/AAAAAAAACDE/uOwvXgtKBWk/s1600/gitinit.png)

### 2. Menambahkan File ke Staging Area
Ketika kita telah merubah beberapa file pada project kita, secara otomatis git akan melacak perubahanya dan menampilkan status counter jumlah file yang dirubah pada ikon git tersebut ( `git status` ). Klik pada tab tersebut maka kita bisa memilah file mana saja yang akan ditambahkan ke staging area.

Sama halnya dengan menggunakan perintah git add, di VS Code kita cukup mengarahkan pointer mouse pada sebelah kanan file dan klik tanda '`+`' pada file yang akan ditambahkan ke staging area.

![gitadd](https://1.bp.blogspot.com/-nGwr75lDVXY/VpaWStlt_KI/AAAAAAAACDc/5und7QjHAZU/s1600/gitadd.png)

### 3. Melakukan Commit
Melakukan commit pada VS code bisa dilakukan pada saat file sudah ditambahkan ke staging area di mana perintah git yang dijalankan adalah `git commit` , dan bisa juga pada saat file masih berstatus **unstaged** atau belum di tambahkan ke staging area, dimana perintah yang dijalankan adalah `git commit -a`.

![gitcommit](https://2.bp.blogspot.com/-7AS6oOmV2Lw/VpaaB9W7lvI/AAAAAAAACDs/MNRdfDPlXIw/s1600/gitcommit.png)

Dengan perintah `git commit -a`, semua perubahan pada file akan di commit. Untuk melakukan proses commit di VS Code cukup tambahkan pesan commit pada kolom message diatas, kita juga bisa menambahkan deskripsi dengan menekan enter lalu diikuti deskripsi commit. Dan terkhir tekan `CTRL + ENTER` untuk menambahkan snapshoot ke repository.

### 4. Membatalkan Commit
Jika kita lupa menambahkan file pada commit sebelumnya atau salah menuliskan pesan commit, kita bisa mengulanginya dengan menggunakan perintah `git commit --amend` atau di VS Code cukup klik tanda (`...`) di kanan atas kemudian pilih **Undo Last Commit**.

Setelah semua file kembali, sekarang kita bisa menyertakan file yang tadi lupa dan mengulangi commit.

### 5. Melihat Diff
Melihat perbedaan code pada file versi sebelumnya dan setelah diubah, kita bisa menggunakan perintah `git diff` atau di VS Code cukup klik salah satu file pada `git status`.

![gitdiff](https://4.bp.blogspot.com/-yVbOKMT8gJc/VpahCr5micI/AAAAAAAACEA/ve1uvrPcIFM/s1600/gitdiff.png)

### 6. Membuat branch
Dengan git, kita bisa memiliki versi file yang berbeda di dalam folder project yang sama. Hal ini sangat membantu dalam pengembangan project kita, karena kita tidak ingin mengubah secara langsung versi project yang sudah stabil.

Sama halnya dengan menggunakan perintah git di command line, di VS Code tekan `CTRL + E`, kemudian ketikkan `git branch <nama-branch-baru>`. Contoh disini nama branch-nya `develv`. tekan enter untuk menjalankan perintah.

![gitbranch](https://4.bp.blogspot.com/-Lm7Mu_u5Di8/VpalZIA1N5I/AAAAAAAACEQ/_3UBodEcPp0/s1600/gitbranch.png)

Sekarang kita sudah memiliki 2 branch dan kita bisa menambahkan kode dengan aman tanpa khawatir project utama di branch master juga berubah. Ketika project pada branch develv dirasa sudah siap, maka kita bisa menggabungkan kembali ke branch master.

### 7. Menggabungkan history commit
Setelah beberapa commit di branch develv dan dirasa sudah cukup stabil untuk digunakan, kita bisa menggabungkan kembali history commit pada branch develv ke branch master dimana branch utama yang kita fork sebelumnya di branch develv.

Untuk melakukan merge kita harus pindah dulu ke branch tujuan untuk menyimpan history snapshoot / commit. disini pada branch master dengan menjalankan perintah `git checkout <nama-branch>` atau di VS Code tampak pada gambar.

![gitcheckout](https://3.bp.blogspot.com/-UndsKM4Sx4E/Vpapc_I2c-I/AAAAAAAACEg/cBaTlhKHCaM/s1600/gitcheckout.png)

Selanjutnya baru kita bisa melakukan merge dari branch asal dengan menjalankan perintah `git merge` pada terminal. Control git yang ini tidak ada di VS Code, tapi kita dapat dengan mudah menggunakan terminal dengan klik kanan pada working direktory kemudian pilih Open in terminal ( ubuntu ). lalu jalankan perintah `git merge` seperti berikut.

![gitmerge](https://3.bp.blogspot.com/-AECITD7WZW8/VpavPTc4KRI/AAAAAAAACE0/e1Dkav-Vlmw/s1600/gitmerge.png)

### 8. Mempublish branch ke remote
Fitur ini akan muncul ketika kita sudah menambahkan remote di repository project kita untuk pertama kali. Sama halya dengan perintah git push. Di VS Code kita cukup klik pada icon awan tepatnya disebelah tampilan branch master.

![gitpush](https://1.bp.blogspot.com/-RxdtKq7dQac/Vpay8H1HImI/AAAAAAAACFE/TTCn8xkdtIU/s1600/gitpush.png)

Jika kita melakukan perubahan pada repositori yang sudah di publish maka icon tersebut berubah menjadi ikon sinkronisasi. dan penggunaanya sama untuk menyingkronkan branch saat ini ke remote.

![gitpush2](https://3.bp.blogspot.com/-nMfVfPo6kgo/Vpa3axshwLI/AAAAAAAACFU/I9FR6Rq53_E/s1600/gitpush2.png)

Fungsi Sinkronisasi juga bisa di temukan pada git status VS Code, tepatnya pada menu ( `...` ) bersama dengan fungsi pull, pull rebase, clean dan lainnya silakan cek sendiri.

Ini baru salah satu dari fitur yang diberikan oleh VS Code yaitu git control. Dan tentu sangat membantu tanpa harus mengetikkan manual perintah git. Tools yang memudahkan seperti ini banyak digunakan oleh developer karena sangat membantu produktivitas mereka dengan cara sedikit menghemat waktu dan fokus pada project yang di kerjakan.
