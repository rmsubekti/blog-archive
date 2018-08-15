---
title:  "Deploy Jekyll di Firebase Hosting Menggunakan Travis-ci"
head_script: https://buttons.github.io/buttons.js
categories: Jekyll
---
Jekyll merupakan gem ruby yang dapat di gunakan untuk membuat website/blog statis, atau bisa dibilang static site generator. Kita bisa saja menggunakan generator web statis lain, tapi karena saya lebih terbiasa dengan jekyll dan [rata-rata memang banyak yang menggunakan](https://www.staticgen.com/){:nofollow}, jadi kita coba aja menggunakan jekyll untuk dihosting di firebase.

Untuk mendeploy jekyll sebenarnya tidak serumit ini, kita bisa saja langsung `push` repo jekyll ke github-pages. Tapi yang jadi masalah banyak sekali kekurangan pada github-pages diantaraya:

1. Tidak dapat menggunakan plungin jekyll dari selain yang tersedia di github-pages untuk membuat situs statis
2. HTTPS hanya tersedia untuk subdomain dari github-pages, HTTPS tidak tersedia untuk custom domain.
3. Tidak tersedianya file konfigurasi server, seperti halnya .htaccess

Selain kekurangan diatas github-pages merupakan tempat paling top untuk hosting jekyll, karena sangat simple dan situs dapat langsung di kunjungi setelah kita melakukan `push` ke github repository.

Nah, disini kita juga akan menjalankan jekyll di firebase sama halnya seperti github-pages, jadi kita hanya tinggal `push` jekyll ke repository github, Travis-ci akan menjalankan perintah jekyll dan mengupload file statis jekyll ke Firebase.

>  **local (`push`) > Github > Travis > Firebase Hosting**

Jadi disini kita akan membuat ekstra konfigurasinya untuk travis dan firebase, cukup sekali, setelah itu kita cukup push dari komputer lokal.

---

## Konten
{: .no_toc}
* Table Of Content
{:toc}

---

## 1. Kenapa pake Firebase Hosting ?

Firebase Hosting merupakan salah satu fitur dari Firebase, Kita tidak hanya bisa menyimpan data aplikasi di Firebase Realtime Database, kita juga bisa menghosting file web statis.

Karena firebase hosting hanya menyajikan konten statis maka kode/script untuk sisi server tidak dapat dijalankan, sama halnya dengan github-pages, hanya saja github-pages bisa mengenali jekyll.

Keuntungan dari firebase sendiri:

1. Firebase sama halnya seperti CDN gratis yang dibangun oleh google, dimana bisa meningkatkan performa website kita.
2. Gratis SSL baik untuk domain default dan custom domain, sehingga website kita aman dengan HTTPS.
3. Tersedia file konfigurasi server, yang memudahkan untuk memodifikasi konfigurasi perilaku pada hosting kita, seperti konten header, redirect dan rewrite.
4. Tentunya disini kita bisa bebas menggunakan plungin jekyll yang diinginkan.

---

## 2. Alat dan Bahan Yang Dibutuhkan

Hal utama yang Dibutuhkan adalah akun Github, integrasi github yaitu Travis-ci dan Akun firebase. Adapun Alat yang kita butuhkan di komputer lokal:

1. Nodejs untuk menjalankan firebase CLI, dengan npm sebagai package manager untuk menginstal Firebase CLI.

	Jika belum menginstal ketiganya, kamu bisa menjalankan perintah berikut di terminal:

````bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
npm install -g firebase-tools
````

Untuk windows bisa langsung download binary nodejs di [nodejs.org](https://nodejs.org){:nofollow} kemudian jalankan perintah `npm install -g firebase-tools`.

2. Jekyll untuk membuat konten statis, jekyll adalah rubygems yang bisa kamu install dengan [caranya disini]({% post_url 2016-01-05-install-dan-konfigurasi-jekyll-di-ubuntu %}).

---

## 3. Membuat Firebase project

Pastikan sudah punya akun firebase dan silakan login dan buat project dengan nama yang diinginkan.

![Create Firebase Project](https://2.bp.blogspot.com/-WScI_l81rnc/WKqMUxut8TI/AAAAAAAACy0/kz48WjrVLzYPw3Otz3IHk3aG05RmxWq-ACLcB/s1600/createproject.PNG)

Setelah selesai, kembali ke folder jekyll di komputer kita, dan jalankan perintah interaktif `firebase init` di terminal atau Cmd.

Pada Command promp akan muncul pilihan - pilihan untuk membuat file konfigurasi di jekyll folder.

Silakan pilih **Hosting** untuk menggunakan firebase hosting di project yang kita buat tadi. Dan pilih **Nama project** yang telah dibuat tadi.

Untuk pilihan Asset folder (default: public) isikan `_site` untuk jekyll dan untuk pilihan lainya pilih `No`

![firebase init](https://1.bp.blogspot.com/-ZRmTEryDfZE/WKqQohCBHwI/AAAAAAAACzQ/HjezXS1rWcgzBEMlN2A33HKHPz2CpZJ6QCLcB/s1600/firebase%2Binit.png)

---

## 4. Membuat File Konfigurasi Travis-ci

Ini adalah bagian paling penting agar situs/blog jekyll bisa di sajikan. Untuk pengaturannya kita perlu membuat file `.travis.yml` dan di dalamnya isikan dengan kode berikut:

```
language: node_js
node_js: '4.0'

before_install:
  - rvm install 2.1
  - rvm use 2.1
  - . $HOME/.nvm/nvm.sh && nvm install 6.1 && nvm use 6.1
  - gem install bundler
  - bundle check || bundle install

install:
  - npm install -g firebase-tools

before_script:
	- chmod +x ./script/cibuild

script: ./script/cibuild

after_success:
  - firebase deploy --token $FIREBASE_TOKEN

branches:
  only:
  - master

env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true # speeds up installation of html-proofer

sudo: false # route your build to the container-based infrastructure for a faster
```

Disini kita menggunakan `nodejs` sebagai bahasa utama untuk di operasikan di sistem.

```
language: node_js
node_js: '4.0'
```

Karena travis hanya bisa menjalankan satu bahasa untuk setiap test maka disini kita menggunakan Ruby version manager `rvm` untuk mencari dan menkonfigurasi binary ruby. Setelah itu mengintal bundler dan terakhir menginstall gem yang kita gunakan di jekyll.

```
before_install:
  - rvm install 2.1
  - rvm use 2.1
  - . $HOME/.nvm/nvm.sh && nvm install 6.1 && nvm use 6.1
  - gem install bundler
  - bundle check || bundle install
```

Disini kita juga menginstall firebase-tools seperti di komputer lokal kita untuk mengupload hasil dari `build` jekyll.

```
install:
  - npm install -g firebase-tools
```

Disini travis juga bisa menjalankan shell script, biasanya terdapat pada folder `script` pada project kita. Disini kita juga akan membuat file `cibuild` nanti.

```
before_script:
 - chmod +x ./script/cibuild

script: ./script/cibuild

```

Jika semua perintah berjalan dengan sukses maka hasil `build` di deploy/upload ke firebase hosting. dengan menggunakan perintah `firebase deploy`. firebase token disini digunakan utuk mengetahui project firebase mana yang akan menyajikan situs/blog kita. firebase token bisa di buat menggunakan perintah `firebase login:ci`, saat ini `$FIREBASE_TOKEN` hanyalan sebuah nama variabel yang nanti kita akan isi.

```
after_success:
  - firebase deploy --token $FIREBASE_TOKEN
```

Disini kita memastikan travis mengeksekusi kode pada branch yang kita tentukan.

```
branches:
  only:
  - master
```

Nokogiri digunakan untuk memparse file HTML di situs/blog yang telah dibuat. kita membutuhkannya untuk menjalankan `html-proofer`. karena nokogiri terdiri dari banyak bundle dan harus dikompile setiap kali akan dijalankan maka kita bisa mempercepat penginstalannya dengan menggunakan environment variabel `NOKOGIRI_USE_SYSTEM_LIBRARIES` di set ke `true`.

```
env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true
```

Secara default kita perlu menambahkan perintah `sudo: false` ke travis, agar travis mengunakan kontainer berbasis infrastruktur. Dengan travis berjalan menggunakan [container-based infrastructure](https://docs.travis-ci.com/user/workers/container-based-infrastructure/#Routing-your-build-to-container-based-infrastructure){:nofollow} maka bisa mempercepat test pada project kita. Atau jika project yang akan kita hasilkan perlu menggunakan sudo maka ubah menjadi `sudo: required`.

```
sudo: false
```

---

## 5. Membuat Build Script

Build script disini sama halnya seperti shell script yang biasa di tulis di linux, karena ini memang shell script. Hanya saja disini kita menggunakannya di travis yang mana juga menggunakan ubuntu untuk build sistemnya. 😓 heh.. udah pusing.

Untuk membuat script file untuk travis buat folder `script` dan isi dengan file `cibuild` untuk menyimpan script yang akan tulis. Disini kita tidak akan membuat script yang terlalu kompleks cukup untuk menjalankan `jekyll build` dan cek hasilnya menggunakan `html-proofer`. kira - kira seperti ini.

```bash
#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site
```

> **???** : **html-proofer** digunakan untuk memeriksa link dan gambar dari konten statis yang telah dihasilkan jekyll. Hanya untuk memastikan semua link dan gambar berfungsi dengan baik (tidak error) sebelum disajikan.
{: .info}

Untuk menggunakan html-proofer kita tentu perlu menginstallnya, cukup tambahkan baris baru di `Gemfile` yang tersedia di root folder jekyll dengan `gem "html-proofer"`. jadi ketika travis menjalankan `bundle install` maka akan ikut terinstall.

---

## 6. Menghubungkan Github ke travis

Setelah selesai mengutak - atik file konfigurasi, sekarang silakan simpan dan lakukan [`push`](https://help.github.com/articles/pushing-to-a-remote/){:nofollow} project jekyll yang telah di buat tadi ke github.

Selanjunya buka [travis-ci.org](https://travis-ci.org){:nofollow}, login dengan akun github.

![travis-switch](https://4.bp.blogspot.com/-4eBCtYqYYhw/WKqt8sGMEyI/AAAAAAAACzo/297znG0cN3Q6qx60P8R6fr9-jx5n7xl7ACLcB/s1600/travis-switch.PNG)

Pilih nama repository jekyll yang telah di upload ke github. Dan selesai.

## 7. Menghubungkan Travis ke Firebase Hosting

Kembali ke terminal di folder jekyll di komputer kita, jalankan perintah `firebase login:ci`. Disini kita perlu masuk ke akun google untuk menyelesaikan autentifikasi. Setelah login ke google selanjutnya izinkan Firebase CLI.

![Firebase token](https://4.bp.blogspot.com/-Tpi-i280B-o/WKqysiO7yYI/AAAAAAAAC0E/dCFivBIuTm8j58v3_9qSaaept0YPTx1KgCLcB/s1600/loginci.png)

Kembali ke konsole maka akan didapat FIREBASE_TOKEN untuk kita gunakan untuk mengupload hasil build jekyll dari travis ke Firebase Hosting. Silakan salin token tersebut kemudian tambahkan ke setting environment variabel pada travis.

![FIREBASE_TOKEN](https://3.bp.blogspot.com/-kSBTyutS5So/WKq0D19KNqI/AAAAAAAAC0Q/7qK2QkZLjNMA7E24x8DUwsH3ATh4bZ13ACLcB/s1600/firebase%2Btoken.png)


## 8. Test Deploy Travis-ci.

Buatlah postingan/ halaman atau sedikit modifikasi pada jekyll di komputer, `push` ke github dan kemudian cek travis build dari commit yang kamu buat di situs travis-ci.org. proses mungkin membutuhkan waktu, karena antri dengan pengguna lain.

![build success](https://4.bp.blogspot.com/-sKKFmKU2Ye8/WKq8QP0-VdI/AAAAAAAAC0w/4HsYO5Y9s7g3VcihrA_LmW9OoamUhGw6wCLcB/s1600/success%2Bbuild.PNG)

Jika perintah `firebase deploy` tereksekusi atau pada list repository berwarna hijau maka situs kamu sudah disajikan di firebase hosting. Cara lain melihat test di travis berhasil yaitu dengan melihat list commit di repository github dicentang hijau.

Silakan cek log terakhir untuk melihat url ke website/ blogmu. Atau [setting custom domain](https://firebase.google.com/docs/hosting/custom-domain){:nofollow} untuk situs/blog baru kamu di firebase hosting biar mudah mengingatnya.

Sekarang kamu bebas menambahkan plungin jekyll apapun yang ingin digunakan. Edit template, buat post publish langsung ke github dan situs/blogmu akan secara otomatis di deploy ke firebase hosting.


## 9. Download Contoh Template Jekyll

Jika bingung dengan langkah diatas silakan download dari contoh yang untuk membantu memahami. Jangan lupa juga bagi-bagi bintangnya. hehehe... 🐸

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/rmsubekti/nangka/archive/master.zip" data-icon="octicon-cloud-download" data-style="mega" aria-label="Download rmsubekti/nangka on GitHub">Download</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/rmsubekti/nangka/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/rmsubekti/nangka/network" data-count-api="/repos/rmsubekti/nangka#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork rmsubekti/nangka on GitHub">Fork</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/rmsubekti/nangka" data-icon="octicon-star" data-style="mega" data-count-href="/rmsubekti/nangka/stargazers" data-count-api="/repos/rmsubekti/nangka#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star rmsubekti/nangka on GitHub">Star</a>
{: style="text-align:center"}

{:nofollow: target="_blank" rel="nofollow"}
