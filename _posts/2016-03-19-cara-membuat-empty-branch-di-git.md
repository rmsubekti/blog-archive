---
layout: post
title: Cara Membuat Empty Branch di Git Repository
date: '2016-03-19T16:28:00.000-07:00'
categories: Git
tags:
- Branch
modified_time: '2016-03-19T16:28:17.360-07:00'
---

Setiap kita membuat branch baru dari salah satu repository, maka keseluruhan history commit dari branch utama ( `master` ) akan disalin ke branch baru tersebut. Hal ini sudah memungkinkan kita agar lebih mudah bereksperiment tanpa khawatir file project utama berubah dengan membuat cabang dengan branch, dan jika experiment tersebut berhasil bisa menggabungkan (`merge`) kode pada file project utama.

Tapi ada kalanya kita ingin membuat branch baru dalam sebuah repo yang tidak berkaitan dengan branch utama dan belum memiliki history commit atau benar - benar baru. Untuk membuat empty branch tersebut kita bisa menggunakan cara berikut.

**1. Masuk ke direkori project / repo** yang akan ditambahkan branch kosong dari terminal / Command Promp.

![cd to project](https://2.bp.blogspot.com/-LbphFnzU5dI/Vu3TWyTqkNI/AAAAAAAACOY/FHT-bHC7iXEHrsRBiWl-VI1BTEG8mRhOw/s1600/cdproj.png)

**2. Membuat Branch menggunakan opsi `--orphan`**. Lengkapnya jalankan perintah`git checkout --orphan <Nama_Branch_Baru>`. Contoh seperti pada gambar.

![testBranch](https://4.bp.blogspot.com/-kUQcW3Qd5tA/Vu3W4Mk6qjI/AAAAAAAACOs/F6F_r-pCDs8cbovPzwvjJMFbcElhuZiew/s1600/testBranch.png)


**3. Menghapus semua file.** Karena kita ingin membuat branch baru yang tidak ada hubungannya sama sekali dengan branch yang lain, maka kita bisa menghapus semua file yang ada dengan perintah `git rm -rf .` dengan satu tanda titik. seperti pada gambar.

![gitrm](https://4.bp.blogspot.com/-WZgfLnbGqGs/Vu3YVPfeBNI/AAAAAAAACO4/jELHv6CC3w4mG5gc7gwurOKkGsLaJDySQ/s1600/gitrm.png)

**4. Menambahkan File.** Sekarang tinggal menambahkan file dan melakukan commit ke branch baru kita.

![git add all](https://4.bp.blogspot.com/-y2GquvKutqg/Vu3aUyk8q1I/AAAAAAAACPE/7r63Jltyhaw3LFqv8IEoVNcSGALVw_2ZA/s1600/gitadd.png)

**5. Cek Perbedaan branch.** Sekarang kita memiliki dua branch yang memiliki file dan history yang berbeda. Hanya untuk memastikan berikut ini adalah hasil perbuatan kita selama beberapa menit yang lalu:

**A. Branch Master**

![masterBranch](https://2.bp.blogspot.com/-YcjIw4qssWo/Vu3dmQ-yX0I/AAAAAAAACPg/REl03SuyEjA-zUW7x899jt_egOknWDzeA/s1600/masterBranch.png)

**B. Branch Test**

![branch test](https://3.bp.blogspot.com/-CO9HR14fKbQ/Vu3eB0DGnzI/AAAAAAAACPs/ogxf5TZmafAIh1BKnt6moY-_rM7xhchgw/s1600/testBranch.png)

Oke, Sampai disini praktek saya berhasil dan semoga bisa bermanfaat untuk teman - teman yang ingin mencoba membuat branch baru yang kosong. Semoga sukses.
