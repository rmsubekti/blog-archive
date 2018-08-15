---
title: "Cara Menggunakan AppCache di jekyll"
date: 2016-06-14 06:34:26 +0700
categories: HTML5
---
AppCache merupakan fitur yang dibawa oleh HTML5, memungkinkan pengembang menentukan file mana saja yang akan di cache oleh browser dan dapat diakses oleh pengguna secara offline.

Tapi perlu di ketahui bahwa fitur ini telah dihilangkan dari web standard namun beberapa browser lama dan saat ini Google chrome juga masih mendukung AppCache baik untuk dekstop maupun di android.

Disini kita akan menggunakan AppCache di blog jekyll dimana sangat menguntungkan karena semua halaman yang di hasilkan adalah halaman statis.

## Konfigurasi

Untuk konfigurasinya sendiri teman - teman tidak perlu memiliki kemampuan programming, cukup menambahkan sebuah file yang berisi daftar file source yang harus di cache browser untuk akses offline.

Untuk di jekyll sendiri kita bisa membuat file dengan nama terserah disini contoh file manifestnya bernama `cache.manifest` di folder root blog jekyll kita. Dimana kita menuliskan daftar file yang akan dicache.

Pastikan mencache file yang sering digunakan di blog seperti stylesheet, javascript, logo, homepage dan sebagai tambahan saja disini kita tambahan beberapa postingan terbaru di blog tersebut.

{% highlight manifest %}
{% raw %}
---
---
CACHE MANIFEST
# {{ site.time | date: '%Y%m%d%H%M%S'}}

# Main page
/

# Posts
{% for post in site.posts limit:14 %}
{{ post.url | prepend: site.baseurl | remove_first:'/' }}
{% endfor %}

# Pages
blog/

# CSS
assets/style/main.css

# Other resources
assets/images/avatar.png

favicon.ico

NETWORK:
*
{% endraw %}
{% endhighlight %}

Setiap tema jekyll memiliki struktur direktori yang berbeda, teman - teman bisa mengubah path / direktori diatas sesuai tema yang digunakan. Untuk teks yang diawali tanda pagar/hastag (#) merupakan komentar yang tidak memiliki makna apapun di AppCache namun beberapa juga digunakan untuk menentukan versi manifest atau file tertentu yang berada di daftar.

Selanjutnya untuk mengaktifkan cache pada blog, perlu menambahkan atribut `manifest` pada dokumen tepatnya di tag `html` seperti berikut.

{% highlight html %}
{% raw %}
<html lang="id" manifest="/cache.manifest">

 ...

</html>
{% endraw %}
{% endhighlight %}

Di template jekyll kita bisa mereferensikan file manifest file tersebut pada file `_layouts/default.html`. Dan Konfigurasi telah selesai sekarang halaman bisa di muat secara offline (pada browser tertentu).

Menggunakan fitur AppCache disini untuk pengetahuan saja tentang teknologi web yang pernah ada. Nantinya AppCache akan digantikan dengan dengan `service worker`. Jadi jika teman - teman ingin menggunakan fitur offline chaching sebaiknya coba [menggunakan Service Worker](./mengenal-service-worker).

#### 🔖 Sumber Artikel Tentang AppCache

1. [Using the application cache](https://developer.mozilla.org/id/docs/Web/HTML/Using_the_application_cache) MDN
2. [A Beginner’s Guide to Using the Application Cache](http://www.html5rocks.com/en/tutorials/appcache/beginner/) HTML5Rocks
3. [Application Cache API (AppCache)](https://goo.gl/dCzZhs) MSDN

#### 👷 Artikel Terkait AppCache

1. [Don’t Wait for ServiceWorker](https://davidwalsh.name/dont-wait-serviceworker-adding-offline-support-oneline) DWB
2. [Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag)
3. [The Application Cache is no longer a Douchebag](http://flailingmonkey.com/application-cache-not-a-douchebag/)
