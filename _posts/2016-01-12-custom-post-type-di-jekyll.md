---
layout: post
title: Custom Post Type di Jekyll
date: '2016-01-12T22:47:00.002-08:00'
categories: Jekyll
tags:
- Blog
modified_time: '2016-01-13T07:24:14.566-08:00'
---

Seperti halnya platform blog lain, secara default semua list post ditampilkan di satu tempat biasanya di halaman awal, walaupun post tersebut menggunakan tag atau kategori yang berbeda. Disini post type memungkinkan kita membuat halaman post tersendiri yang berbeda, sehingga tidak tercampur dengan post yang lain.

Custom post type biasanya digunakan untuk menampilkan galeri produk, portfolio, ataupun galery project. Jika kamu pernah menggunakan wordpress pasti tau apa itu custom post type. Nah, di jekyll kita bisa membuat custom post type dengan menggunakan Collection.

Untuk membuat collection kita bisa memulai dengan membuat folder misalnya `_projects`, `_gelery`, `_products` dan apapun sesuai keinginan. pada contoh disini kita akan membuat koleksi project. jadi cukup tambahkan folder `_projects` pada root folder blog kita.

Folder `_projects` ini nantinya diisi dengan konten post, jadi kita sekarang punya 2 folder untuk menambahkan post. Satu pada folder `_posts` dimana default artikel post untuk postingan blog dan satu folder `_projects` dimana kita menambahkan post hasil kerja kita atau koleksi project yang sudah kita selesaikan.

Setelah folder `_projects` ditambahkan, selanjutnya kita tambahkan pengaturan post type di file `config.yml`.

{% highlight yaml %}
collections:
  projects:
    output: true
    permalink: /projects/:title
{% endhighlight %}

Untuk permalink kamu bisa ubah sesuai keinginan. Kemudian untuk mengetest kita bisa menambahakan file postingan baru di folder `_projects`. Untuk membukanya gunakan link seperti yang telah disetting. jika pada konfigurasi kita membuat permalinknya seperti pada contoh, maka postingan kamu akan ditampilkan di `http://alamat.blog/projects/judul-postingan`.

Tentu postinganya tidak ditampilkan di halaman post, karena kita menginginkan post di tampilkan di halaman tersendiri. Utuk menampilkan list project kita bisa memanfaatkan pengaturan permalink tadi. jadi buat file baru di root blog jekyll kita bernama project.md sama halnya seperti membuat halaman page di jekyll dan set permalinknya menjadi `/projects/`.

Collection pada dasarnya memiliki atribut yang sama dengan post pada umumnya, jadi kita bisa menaggunakan code untuk menampilkan post pada umumnya dan mengubah sedikit kodenya.

{% highlight liquid %}
{% raw %}
{% for post in paginator.posts %}
<div class="post">
  <p class="post-meta">{{ post.date | date: site.date_format }}</p>
  <a href="{{ post.url | prepend: site.baseurl }}" class="post-link">
    <h3 class="post-title">{{ post.title }}</h3>
  </a>
  <p class="post-summary">
  {% if post.summary %}
    {{ post.summary }}
  {% else %}
    {{ post.excerpt }}
  {% endif %}
  </p>
</div>
{% endfor %}
{% endraw %}
{% endhighlight %}

Kode diatas adalah kode untuk menampilkan post pada umumnya, jika kita ingin menggunakannya untuk menampilkan list project kita, cukup ganti baris pertama sesuai dengan nama folder custom post type yang kita buat tadi. jadi kode baris pertama diganti seperti ini:


{% highlight liquid %}
{% raw %}
{% for post in paginator.projects %}
{% endraw %}
{% endhighlight %}

Nah sekarang semuanya sudah selesai, kita bisa menggunakan post type tersebut untuk menampilkan post project terbaru kita. Link ke halaman ini akan secara otomatis di tambahkan di menu navigasi jadi kita tidak perlu menambahkan kode lain lagi.
