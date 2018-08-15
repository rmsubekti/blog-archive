---
layout: post
title: Membuat Blog Atau Website di Gitlab Pages
date: '2016-04-04T23:18:00.002-07:00'
tags:
- Blog
- Git
modified_time: '2016-04-05T00:18:24.404-07:00'
---
Seperti halnya Github pages, Dengan menggunakan gitlab pages kita juga bisa menghosting halaman website statis untuk user, grup/organisasi dan halaman project. Bedanya di gitlab kita bisa menggunakan gitlab ci dan Gitlab runner untuk mendeploy halaman statis kita. Selain itu kita juga bisa menggunakan berbagai macam generator halaman statis dengan menambahkan file konfigurasi `.gitlab-ci.yml`.

Beberapa generator halaman statis yang bisa digunakan diantaranya (Klik link untuk demo halaman):

* [Plain HTML](https://gitlab.com/pages/plain-html){:nofollow}
* [Jekyll](https://gitlab.com/pages/jekyll){:nofollow}
* [Hugo](https://gitlab.com/pages/hugo){:nofollow}
* [Middleman](https://gitlab.com/pages/middleman){:nofollow}
* [Hexo](https://gitlab.com/pages/hexo){:nofollow}
* [Brunch](https://gitlab.com/pages/brunch){:nofollow}
* [Metalsmith](https://gitlab.com/pages/metalsmith){:nofollow}
* [Harp](https://gitlab.com/pages/harp){:nofollow}

Fitur Gitlab pages ini pertama kali diluncurkan pada release Gitlab EE 8.3. Entah apa sudah tersedia untuk pengguna gratis atau tidak, tapi setelah saya coba menggunakan akun gratis tanpa subcribtion ataupun plan fitur ini bisa digunakan.

Nah, untuk teman - teman yang juga tertarik untuk mencoba berikut langkah - langkahnya. Disini saya menggunakan Generator halaman statis Jekyll.

### 1. Pertama login ke akun [Gitlab.com](http://gitlab.com/){:nofollow}
Jika belum memiliki akun silakan buat dulu.

### 2. Membuat Repository
Setelah login kemudian buat project / repo baru untuk website yang akan kita buat.

![Create repo](https://2.bp.blogspot.com/-qzK2REUWTFw/VwNJFyP6FNI/AAAAAAAACRc/Htmg9mrc3qscTk0CW889m2AU2FcA5TXFQ/s1600/createRepo.png)

Halaman bisa di buat untuk user, grup dan halaman untuk project. untuk membuat halaman user dan grup nama project / repository menggunakan format `<username-user/group>.gitlab.io` contoh pada gambar. Sedangkan untuk halaman project kita perlu membuat branch baru untuk menyimpan kode generator halamannya. Pada contoh disini membuat halaman untuk grup dan sama halnya dengan halaman user.

Cukup masukkan nama repository, Tambahkan Deskripsi (boleh kosong) dan pilih Visibiliti level untuk reponya. Kita bisa memilih private (gratis) agar reponya bisa terlihat untuk kita sendiri sedangkan halaman statis yang di deploy tetap bisa di akses secara pulik. Setelah selesai klik tombol Create Project.

### 3. Membuat project jekyll
Setelah selesai membuat repo, selanjutnya kita buat project jekyll di lokal komputer (komputer kita), untuk selanjutnya bisa kita push ke repository yang tadi kita buat di akun gitlab.

![Jekyll new](https://1.bp.blogspot.com/-C89vPc__utU/VwNNneS113I/AAAAAAAACR0/xjVImmKkpaIVh7wmDl7K34x9XUdF1iR3w/s400/jeyllnew.png)

Menginstall jekyll di komputer lokal sangat membatu dan berguna untuk mempreview website sebelum di publikasikan dengan men-deploy-nya langsung di komputer. Jika teman-teman belum atau ingin mencoba menginstall jekyll di komputer silakan baca di artikel [Cara Install dan Konfigurasi Jekyll Di Ubuntu Linux]({{ site.baseurl }}{% post_url 2016-01-05-install-dan-konfigurasi-jekyll-di-ubuntu %})

### 4. Mengkonfigurasi Jekyll.
Jika di github kita bisa menggunakan beberapa plungin jekyll yang telah disediakan, di gitlab kita hanya bisa menggunakan settingan default jekyll tanpa tambahan plungin. Tapi cukup lumayan lah untuk hanya sekedar untuk membuat blog statis atau halaman statis biasa.

![Site setting](https://1.bp.blogspot.com/-uAPAx8GA2IU/VwNRaQUcUBI/AAAAAAAACSI/YFxyW9OiIegUhnj1aLcTn6usNRB2Z-yBA/s1600/siteSetting.png)

Untuk settingan jekyllnya seperti pada gambar disesuaikan dengan halaman / website yang akan kamu buat.

### 5. Menambahkan file konfigurasi Gitlab pages.
![Gitlab-ci](https://1.bp.blogspot.com/-7wDID9rxy6w/VwNT1lJiHPI/AAAAAAAACSU/Fg9M8eIgs5MUtugh0IkaF19CWN2YFCv5g/s1600/gitlab-ci.png)

Agar halaman statis kita bisa di deploy di server gitlab, maka tambahkan file pengaturan `.gitlab-ci.yml` di root folder project jekyll kita tadi. lalu isi file tersebut dengan kode untuk mendeploy jekyll, kodenya bisa dicopy [dari link ini](https://gitlab.com/pages/jekyll/raw/master/.gitlab-ci.yml){:nofollow"} Atau ketikkan seperti pada gambar.

### 6. Push ke repository gitlab yang tadi sudah kita buat.

![Push](https://4.bp.blogspot.com/-gSjTk-Yj5UU/VwNVVo6DZcI/AAAAAAAACSo/kb2rg9oVUI8peuurCN5-ujnIBEG_e4Z3A/s1600/push.png)

### 7. Mengunjugi halaman / blog yang telah di deploy
Cek halaman yang kita buat tadi dengan menuliskan nama repo yang kita buat tadi seperti contoh gambar.

![deployed](https://4.bp.blogspot.com/-c8u4A-1spf0/VwNWgiEeeXI/AAAAAAAACSw/SB642MhkyoAN6ioYor_Y9LrmQBwrPtIXQ/s1600/deployed.png)

Jika tidak tidak tampil atau error coba cek lagi di status buildnya di repo gitlab, jika `failed` coba cari kesalahannya untuk diperbaiki dan klik manual tombol `retry` untuk mencoba mengulang mem-build artifacts-nya.

![Build status](https://4.bp.blogspot.com/-KZJDpa544OY/VwNXii5QzII/AAAAAAAACTA/0K-v3jW-Fr0Fqkm2I2sjZ2uvauxF5M3PQ/s1600/buildstatus.png)

Nah, Itulah cara membuat blog dengan menggunakan fasilitas gitlab page. Semoga sukses dengan praktiknya.
{:nofollow: target="_blank" rel="nofollow"}
