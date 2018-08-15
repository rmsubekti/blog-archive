---
title:  "Mengenal Service Worker"
date:   2016-05-09 02:34:26 +0700
categories: Javascript
description: "Cara Menggunakan Service Worker"
---
Perkembangan teknologi web saat ini sudah semakin maju, ratusan bahkan ribuan website dibuat setiap harinya dan kesempatan untuk mendapatkan pengunjung juga semakin kecil. Tantangan bagi pengembang web saat ini yaitu membuat aplikasi web yang tidak hanya menarik akan tetapi juga lebih mudah diakses oleh penggunanya.

Hal yang sudah sejak lama pengunjung sebuah website adalah ketika mereka berada pada koneksi jaringan yang lambat atau bahkan ketika koneksi terputus. Aplikasi Web terbaik di seluruh duniapun akan terkesan memberikan pengalaman pengguna yang buruk jika halamannya pun tidak dapat dimuat.

Sebenarnya sudah banyak sekali teknologi untuk memecahkan masalah tersebut, dan hanya beberapa bagian dari masalah tersebut telah dipecahkan dengan mengunduh aset yang paling banyak digunakan untuk mengurangi permintaan ke jaringan untuk mengirimkan resource dari server kembali ke browser pengguna.

Service Worker sendiri merupakan salah satu dari teknologi tersebut dengan mekanisme untuk mengontrol asset yang akan di cache serta menyediakan custom permintaan ke jaringan sehingga dapat memberikan pengalaman akses secara offline bagi pengguna.


### Lalu Apa Itu Service Worker ?

Service worker adalah script yang berjalan di belakang browser pengguna. Service worker tidak membutuhkan sebuah halaman ataupun interaksi dari pengguna untuk menjalankan tugasnya, dengan begitu service worker akan terus berjalan walaupun halaman webnya tidak terbuka.

Service worker juga menyediakan fitur notifikasi serta geofetching. Pada artikel ini hanya akan membahas dasar bagaimana mendaftarkan service worker, dan mendemonstrasikan bagaimana fitur intersep jaringan pada service worker bekerja, membuat halaman statis dapat diakses ketika pengguna sedang offline. Teman - teman bisa mencoba contoh [di sini](https://rmsubekti.github.io/ngitung/)

Beberapa hal yang harus diperhatikan agar service worker bisa dijalankan:

1. **Pastikan website di jalankan di protokol HTTPS**. Jika teman - teman ingin mencoba, Github atau Gitlab pages adalah alternatif terbaik untuk bereksperimen, selama keduanya menyajikan halaman melalui HTTPS.

2. **Patikan lokasi file pada service worker ditulis dengan benar**, ditulis secara relatif pada origin bukan pada root aplikasi. Pada contoh disini worker berada di ``https://rmsubekti.github.io/ngitung/sw.js``, dan aplikasi root ``https://rmsubekti.github.io/ngitung/``, maka harus di tulis ``/ngitung/sw.js``, bukan ``/sw.js`` kecuali jika ingin menginstall service worker pada root website.

3. **Service worker tidak dapat ditujukan ke origin yang berbeda**. Jika service worker berada di ``https://rmsubekti.github.io/ngitung/`` maka tidak dapat ditujukan ke aplikasi yang berada di path origin ``https://rmsubekti.github.io/ngilang/`` atau bahkan ke origin website yang berbeda.

4. **LocalStorage tidak di izinkan untuk digunakan di service worker**, Walaupun LocalStorage gunanya sama dengan cache pada service worker, tapi LocalStorage hanya dapat digunakan secara syncronous sehingga tidak diperbolehkan.


### Mendaftarkan Service Worker
Karena spesifikasi untuk teknologi ini masih belum stabil (lihat :zap:[status](https://jakearchibald.github.io/isserviceworkerready/)), mungkin teman - teman juga membutuhkan [cache polyfill](https://github.com/dominiccooney/cache-polyfill) untuk digunakan di service worker file (``sw.js``). Tapi sebelumnya kita lihat dulu kode untuk mendaftarkan service worker pada ``app.js`` berikut:

{% highlight Javascript %}
if ('serviceWorker' in navigator) {   //cek browser support serviceWorker
    navigator.serviceWorker.register('/ngitung/sw.js',
      {scope:'/ngitung/'}).then(function(reg){
        //Berhasil terdaftar
        console.log('Terdaftar pada scope' + reg.scope)
    }).catch(function(error){
        //Gagal Terdaftar
        console.log('Gagal :' + error)
    });
};
{% endhighlight %}

1. Pada baris pertama kita mendeteksi apakah fitur ``serviceWorker`` di browser pengguna tersedia.

2. Jika browser mendukung service worker, maka kita bisa menggunakan fungsi ``navigator.serviceWorker.register()`` untuk mendaftarkan service worker.

3. Parameter ``scope`` bisa digunakan untuk menentukan subset konten untuk dikontrol oleh service worker. Pada contoh kita menentukan agar service worker mengontrol konten yang berada di folder origin aplikasi (``/ngitung/``). Jika diabaikan maka defaultnya akan sama seperti yang ditulis. Contoh disini hanya untuk ilustrasi.

4. Fungsi promise ``.then()`` digunakan untuk menyambung jika sukses pada tahapan struktur promise kita. Jika promise terselesaikan maka kode didalamnya akan dijalankan.

5. Terakhir disambung dengan fungsi ``.catch()`` yang akan dijalankan jika promise ditolak.

Sekarang file service worker (``sw.js``) telah terdaftar, selanjutnya kita bisa menambahkan kode di dalam file service worker untuk dijalankan. Didalam file service worker ini kita hanya menjalankan sebatas konteks workernya saja untuk mengatur pemuatan konten/asset aplikasi saja jadi kita tidak dapat mengakses DOM.

Sebuah service worker bisa mengontrol lebih dari satu halaman, setiap halaman web yang berada di scope yang telah ditentukan tadi dimuat, maka service worker akan terinstall dan beroperasi, tapi bukan berarti setiap halaman menggunakan service worker yang berbeda.

### Instalasi & Aktivasi

Setelah service worker (``file sw.js``) berhasil didaftarkan, browser akan langsung menginstall dan menaktifkan service worker. event ``install`` akan dijalankan setelah proses install telah sukses. Biasanya digunakan untuk mengumpulkan offline cache pada browser.

Disini kita akan menggunakan API penyimpanan terbaru yang disediakan oleh service worker yaitu ``cache``. Berbeda dengan cache browser standar, API penyimpanan service worker lebih spesifik kepada domain kita, dan kita tetap memiliki kontrol penuh.

Untuk menambahkan asset ke dalam cache kita gunakan event install seperti berikut:

{% highlight Javascript %}
this.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('v1').then(function(cache){
            return cache.addAll([
                '/ngitung/',
                '/ngitung/index.html',
                '/ngitung/style.css',
                '/ngitung/app.js'
            ]);
        })
    );
})
{% endhighlight %}

1. Disini kita menambahkan event ``install`` di service worker kemudian disambung dengan method ``ExtendableEvent.waitUntil()`` untuk memastikan service worker tidak diinstall sampai kode didalam ``waitUntil()`` telah selesai diproses.

2. Di dalam ``waitUntil()`` kita menggunakan method ``caches.open()`` untuk membuat cache baru dengan nama ``v1`` yang merupakan versi pertama dari resource aplikasi kita. disini promise akan dikembalikan untuk setiap cache yang dibuat, setelah selesai maka akan dipanggil sebuah fungsi untuk memanggil ``addAll()`` pada cache yang telah dibuat.

### ⚓ Custom Response.

Setelah aset dari aplikasi web kita telah di cache, selanjutnya memerintahkan pada service worker untuk memproses konten tersebut.

{% highlight Javascript %}
this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(caches.match(event.request).catch(function() {
        return fetch(event.request);
    }).then(function(r) {
            response = r;
            caches.open('v1').then(function(cache) {
                cache.put(event.request, response);
    });
        return response.clone();
  }).catch(function() {
    return caches.match('/ngitung/index.html');
  }));
});
{% endhighlight %}

1. Disini kita bisa menambahkan event ``fetch`` di service worker, dan memanggil method `` respondWith()`` pada event untuk memotong response dari HTTP dan merespon dengan aset website yang ada di cache dengan fungsi ``caches.match(event.request)``, yang setiap urlnya cocok dengan yang di minta.

2. Jika ada beberapa resource yang tidak cocok, promise akan di tolak, dan fungsi ``catch()`` akan mengembalikan permintaan ke jaringan dengan perintah ``return fetch(event.request)``, yang mengembalikan promise.

3. Ketika promise telah diselesaikan, selanjutnya direspon dengan fungsi untuk membuka cache ``caches.open('v1')`` yang juga mengembalikan promise.

4. Ketika promise telah diselesaikan ``cache.put()`` akan menambahkan resource ke cache yang diambil dari ``event.request``.

5. Selanjutnya respon akan di salin dengan ``response.clone()`` dan dimasukkan ke cache dan respon yang asli dari jaringan akan di kembalikan ke browser untuk ditampilkan. Respon memang seharusnya melewati service worker dahulu untuk di salin sebelum di tampilkan di browser karena request dan respon dari stream hanya perlu di lakukan sekali. Jadi semua resource dari stream masing - masing dibaca sekali.

6. Terakhir, jika respon tidak ada yang cocok dengan yang ada di cache dan jaringan tidak tersedia (terputus / offline), Maka request akan selalu gagal. Setidaknya ada yang ditampilkan dan solusinya adalah memberikan default fallback, yang berupa file yang ada di cache. Pada contoh adalah halaman index aplikasi.

Untuk default fallback kita juga bisa menambahkan custom halaman offline (contoh /ngitung/offline.html) yang dari awal kita tambahkan ke dalam cache pada saat instalasi service worker. Untuk contoh ini memang sengaja tidak ditambahkan karena tidak ada anchor link ke halaman lain.

### Mengupdate Service Worker

Untuk mengupdate service worker atau asset caranya bisa dengan mengganti versi pada cache, ke ``versi atau nama penyimpanan baru``. Jika mengupdate service worker pastikan juga untuk menghapus cache lama untuk menghindari penuhnya penggunaan hardisk, selain itu juga setiap browser memiliki hard limit untuk setiap penyimpanan cache.

### Menghapus Cache Lama

Kita bisa menggunakan event ``activate`` untuk menghapus cache dengan meletakkan promise di ``waitUntil()`` untuk memastikan event lain berjalan sehingga kita bisa menyelesaikan proses pembersihan sebelum menjalankan event ``fetch`` untuk cache baru.

{% highlight Javascript %}
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
{% endhighlight %}

#### 🔖 Sumber Artikel Tentang Service Worker

1. [Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) HTML5Rocks
2. [Menggunakan Service Worker](https://developer.mozilla.org/id/docs/Web/API/Service_Worker_API/Using_Service_Workers) MDN
3. [Get started with Service Worker](https://developers.google.com/web/fundamentals/getting-started/push-notifications/step-03?hl=en) Google
4. [Getting Started with Service Workers](http://www.sitepoint.com/getting-started-with-service-workers/) Sitepoint

#### 👷 Tempat Keren Terkait Service Worker

1. [Service Worker Cookbook](https://serviceworke.rs/) Resep
2. [Service Worker API](https://developer.mozilla.org/id/docs/Web/API/Service_Worker_API) MDN
3. [Web Platform Samples](https://www.chromestatus.com/samples) Chrome Status
