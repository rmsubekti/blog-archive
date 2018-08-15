---
title:  "Install HEXO di Windows"
categories: Hexo
---
Hexo adalah blog framework yang dibuat menggunakan Node Javascript, seperti halnya Jekyll, Hexo juga dapat menghasilkan file web statis dengan lebih kompleks dan bisa dibilang wordpressnya Nodejs.

Instalasi Hexo sendiri sangat mudah cukup install Nodejs, dan opsional Git untuk upload/push file Hexo ke repository GitHub, gitlab atau Bitbucket jika diperlukan. Jadi Jika di komputer kamu belum terinstall nodejs serta package managernya (NPM) [Bisa Di download disini](https://nodejs.org/en/){:nofollow} atau untuk linux bisa di install dengan menjalankan perintah berikut.

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

Setelah Nodejs dan NPM terinstall, Selanjutnya install Hexo-cli dengan NPM untuk membuat folder project blog/website. Untuk menginstallnya cukup tulis perintah berikut di terminal atau CMD.

```
npm install -g hexo-cli
```

Sekarang kita sudah bisa membuat blog dengan menggunakan Hexo dengan perintah berikut.

```
hexo init <nama-folder-blog>
cd <nama-folder-blog>
npm install
```

Setelah blog dibuat hexo, kita tinggal mengedit konfigurasi untuk blog baru kita pada file `_config.yml`. Jika semua proses install dan konfigurasi telah selesai dilakukan, Hexo siap kita gunakan untuk ngeblog. Buat artikel baru dengan menggunakan perintah hexo `hexo new [layout] <judul-post>` dan untuk mempublikasikan post `hexo publish [layout] <judul-post>`.

Layout hexo pada setiap template bisa berbeda - beda sesuai kegunaan templatenya. Adapun yang paling umum ada 3 yaitu draft, page dan post seperti yang bisa di lihat di folder `scaffold`.

Setelah semua konten dan blog selesai dibuat kita langsung menjalankan hexo di komputer lokal dengan menjalankan perintah `hexo serve`. Jika puas dengan hasilnya bisa langsung di hosting di [hostingan konten statis]({% post_url 2017-02-21-tempat-hosting-gratis-untuk-konten-statis%}) dengan bantuan git.

{:nofollow: target="_blank" rel="nofollow"}
