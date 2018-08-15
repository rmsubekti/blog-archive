---
title:  "8 Tempat Hosting Gratis Untuk Website Statis"
categories: Hexo
---
Hampir seluruh website pasti menggunakan konten statis, diantaranya yang paling umum adalah file Javascript dan Stylesheet CSS. Dan tidak jarang file statis tersebut di hosting pada alamat dan hosting yang berbeda dari Alamat dan hosting Website utamanya. Untuk menghosting konten statis ini biasanya mereka menggunakan CDN dimana hampir seluruh pengguna di dunia dapat mengakses kontennya karena server CDN terbagi di setiap wilayah di dunia atau negara.

Disini kita akan membahas hosting gratis yang nantinya bisa kita gunakan sebagai CDN kita sendiri, ya walaupun tidak sebagus fitur CDN professional, tapi paling tidak bisa mengurangi bandwith server hosting website kita.

Selain sebagai CDN kita juga bisa menggunakannya sebagai hosting website statis, karena pada dasarnya website yang ditampilkan di web Browser adalah web statis, Hanya saja website dinamis yang perlu script khusus di server untuk membuat halaman - halaman statis tersebut seperti php, jsp, node dan masih banyak lagi untuk di tampilkan di browser.

Website statis saat ini tidak kalah dengan Web Dinamis, karena semakin majunya teknologi front-end Seperti HTML5, CSS3 dan Javascript ES2015 untuk saat ini dan terus diperbarui. Untuk membuat website statis sendiri kita bisa menggunakan Alat generator web statis Seperti Jekyll, Hexo, Hugo, Middleman, Wintersmith, Metalsmith, [dan masih banyak lagi](https://www.staticgen.com/){:nofollow}. Dimana nantinya kita bisa gunakan untuk membuat halaman web statis dan disimpan di server. Tidak banyak proses di server bisa berarti website kita dapat mengoptimalkan performa server dengan hasil akses ke website kita jauh lebih cepat.

Untuk menghosting konten statis tersebut, ada banyak sekali pilihan. Tapi terkadang kita perlu menggunakan perintah - perintah tertentu yang terkadang dirasa sulit untuk yang belum pernah menggunakan terminal atau cmd untuk alatnya. Beberapa hosting gratis tersebut diantaraya:

1. [Firebase Hosting](https://firebase.google.com){:nofollow}

   Firebase di dibangun oleh Goole sebagai Platform untuk membuat aplikasi mobile seperti Aplikasi android, Aplikasi berbasis web App dan semacamnya. Dari sekian fitur, Salah satunya yaitu Firebase hosting, yang dapat digunakan sebagai hosting atau menyimpan dan menyajikan konten web statis. Firebase hosting dapat digunakan dengan gratis dengan fitur hosting mendukung:

   1. Custom domain untuk menggunakan custom domain kamu sendiri.
   2. SSL Gratis, Jadi kita bisa menggunakan HTTPS.
   3. Support http2
   4. Custom halaman 404.html
   5. Juga bisa mengubah konfigurasi file dari `firebase.json`. File ini sama seperti file `.htaccess` pada apache server yang dapat digunakan untuk konfigurasi pegalihan (redirect), rewrite, dan custom header Content.
   6. Penyimpanan hosting 1GB dan bandwith 10GB/bulan yang cukup lumayan kalau untuk hosting website kecil.

   Untuk menghosting konten statis di firebase hosting, kita perlu menginstall [firebase-tool](https://firebase.google.com/docs/cli/){:nofollow} yang bisa diunduh di NPM.

2. [Netlify](https://www.netlify.com){:nofollow}

   Netlify adalah CDN sekaligus Alat Continous Deployment untuk Front-end Developer. Hampir sama dengan Firebase hosting untuk mendeploy website ke Netlify kita juga perlu menginstall [Netlify CLI di NPM](https://www.netlify.com/docs/){:nofollow}.

   Untuk fitur hostingnya sendiri hampir sama dengan Firebase Hosting, Di Netlify kita juga bisa mendapatkan:

   1. Custom domain untuk menggunakan custom domain kamu sendiri.
   2. SSL Gratis, Tapi setelah dibaca - baca hanya untuk 1 tahun.
   3. Support http2
   4. Custom halaman 404.html
   5. Konfigurasi perilaku hostingnya dapat dibuat dengan masing- masing file `_redirect`, `_header`,dan `_rewrite`
   6. Penyimpanan dan bandwith [lebih besar](https://www.netlify.com/tos/#quota-limits){:nofollow} dan masih bisa berubah sewaktu - waktu.

   Jika kamu tahu Git, Netlify sangat cocok untuk mendeploy website lewat Github, Gitlab atau Bitbucket.

3. [Github Pages](https://pages.github.com/){:nofollow}

   Github pages adalah salah satu fitur Github yang disediakan untuk pengguna github untuk menghosting halaman website personal, website organisasi dan halaman Website project. Semua file yang dapat di sajikan sebagai web/blog adalah halaman statis, website dinamis yang menggunakan script pemrograman sisi server tidak dapat digunakan.

   Walaupun begitu Github pages dapat mengenali Script jekyll untuk membuat halaman web statis. Github pages sangat cocok untuk menghosting situs jekyll, tapi tidak untuk generator web statis yang lain. Waupun begitu anda tetap bisa menghosting hasil website statis dari selain Generator Jekyll dengan menggunakan Continous Deployment yang sering di gunakan yaitu Travis-ci.

   Github pages menyediakan penyimpanan 1GB dengan bandwith 100GB setiap bulan dengan custom domain dengan ssl jika menggunakan subdomain yang disediakan, SSL tidak dapat digunakan untuk custom domain. Walaupun begitu kita bisa menggunakan Cloudflare, walaupun tidak sepenuhnya mengamankan halaan github pages, karena koneksi Cloudflare ke Server github masih bisa dibilang belum aman.

4. [Gitlab Pages](http://pages.gitlab.io/){:nofollow}

   Sama dengan Github pages, Gitlab pages juga disediakan gratis untuk halaman statis personal, organisasi dan project. Perbedaannya Gitlab menggunakan Continous Deploymentnya sendiri yaitu Gitlab CI. Hampir Semua Generator web statis dapat disajikan menggunakan Gitlab CI ke Gitlab Pages.

   Kelebihan Gitlab pages dari Github Pages Adalah Bisa menggunakan SSL, tapi dengan pengaturan sendiri. Gitlab Tidak menyediakan Gratis SSL untuk setiap Custom Domain. Kalau kamu Tertarik untuk menggunakan SSL di gitlab pages, maka kamu perlu membuat sertifikat sendiri dan memperbaharui sertifikat sendiri setiap bulan dengan menggantinya.

   Selain itu Gitlab Menyediakan Privat repo untuk penggunanya tanpa batas.

5. [Bitbucket Pages](https://pages.bitbucket.io/){:nofollow}

   Sama halnya dengan Github dan gitlab yang menyediakan hosting konten statis. Bedanya di Bitbucket pages kita tidak dapat membuat custom domain untuk website statis yang kita buat dan tidak ada CI atau generator yang dapat digunakan di gitlab pages.

6. [Surge](http://surge.sh/){:nofollow}

   Surge Adalah Hosting web statis yang disediakan untuk Front-end Developer, Hampir sama sekali tidak mendaftar. Semuanya dilakukan melalui perintah CLI. Publish website unlimited dengan SSL dan custom - domain. Alat untuk menyajikan website ke surge bisa di [install melalui npm](http://surge.sh){:nofollow}.

7. [Forge](https://getforge.com/){:nofollow}

   Forge menyediakan satu hosting situs gratis dengan menggunakan Global CDN. Bandwith yang disediakan yaitu 1GB/bulan. Untuk menyajikan konten website statis di Forge dapat dilakukan melalui dropbox, repository Github atau langsung dengan CLI.Forge juga menyedikan fitur `.htaccess` untuk rewrite, redirect pada server forge.

8. [UpDog](https://updog.co){:nofollow}

   Satu lagi layanan webhosting yang cukup simple yaitu UpDog, sama dengan forge, Updog hanya menyediakan satu web hosting statis tanpa custom domain. Untuk menyajikan web statis di Updog kita bisa menggunakan Dropbox atau Google Drive.

Nah itulah beberapa hosting web statis yang bisa digunakan secara gratis, Semua fitur hosting yang di sebutkan masing - masing hosting hanyalah fitur gratisnya, Masih banyak fitur lain yang dapat digunakan pada hosting diatas tentunya dengan harga yang ditentukan masing - masing hosting.

{:nofollow: target="_blank" rel="nofollow"}
