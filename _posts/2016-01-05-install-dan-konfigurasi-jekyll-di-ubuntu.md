---
layout: post
title: Install dan Konfigurasi Jekyll Di Ubuntu
date: '2016-01-05T09:54:00.000-08:00'
categories: Jekyll
tags:
- Blog
- Linux
modified_time: '2016-01-13T07:25:16.811-08:00'
---

Tidak seperti platform blog yang lain, Jekyll juga merupakan website generator yang dapat mengubah teks biasa menjadi sebuah halaman web statis berdasarkan markdown. Di jekyll kita tidak membutuhkan database, semua post/artikel ditulis di teks editor menggunakan format markdown.

![jekyll](https://2.bp.blogspot.com/-yZPPaR3k1HY/VowEvo-lm5I/AAAAAAAABk8/tzQJSNWOEqo/s1600/jekyll.png)

Markdown sendiri dibuat sebagai alat untuk para penulis web. Markdown memungkinkan kita untuk menulis teks biasa dengan mudah anpa mengunakan markup menggunakan teks editor seperti gedit, sublime text, ataupun notepad dan hasil tulisanya akan di konvert menjadi halnya halaman html biasa.

Selain menggunakan markdown, jekyll juga menggunakan liquid di templatenya dan tetunya juga kita bisa menggunakan html dan css seperti biasa. Jekyll memang sangat simple, tapi juga sangat powerfull karena kita bisa mengubah source kode blog jekyll ini baik mengedit,menghapus ataupun menambah fitur blog jekyll kita sendiri.

### Instalasi Jekyll
Hal yang kita butuhkan untuk menginstall jekyl diantaranya:

#### 1. Ruby
Untuk menjalankan ruby di komputer, kita perlu menginstall ruby terlebih dahulu. Jika komputer kita sudah terinstall ruby sebelumnya, silakan cek versi ruby dengan perintah `ruby --version` di terminal. Disini kita membutuhan versi **ruby minimal versi 2.0.0** keatas.

Jika komputer kita sebelumnya belum pernah terinstall ruby, kita bisa menginstallnya dengan mengetikkan perintah berikut diterminal:

{% highlight bash %}
sudo apt-get install ruby-full
{% endhighlight %}

#### 2. Bundler
Selanjutnya kita membutuhkan pakage manager untuk versioning ruby software, untuk menginstallnya cukup ketikkan perintah:

{% highlight bash %}
gem install bundler
{% endhighlight %}

#### 3. Jekyll
Hal utama yang kita butuhkan adalah membuat komputer kita berjalan layaknya seperti repository github, jadi langkah selanjutnya untuk menginstall jekyll:

**1. buat file bernama Gemfile** di home folder kita (Ubuntu). Jalankan perintah berikut di terminal.

{% highlight bash %}
cd ~
echo "source 'https://rubygems.org'" >> Gemfile
echo "gem 'github-pages'" >> Gemfile
{% endhighlight %}

**2.** Setelah berhasil membuat gemfile, pada jendela terminal yang sama jalankan perintah `bundle install` dan pastikan perintah ini tidak di jalankan sebagai root, cukup sebagai user biasa, jika ada error cukup jalankan perintah `bundle config build.nokogiri --use-system-libraries` kemudian ulangi perintah `bundle install`.

Sampai disini kita sudah bisa menggunakan jekyll untuk membuat blog dengan menjalankan perintah `jekyll new nama-blog`. Karena ini berada di komputer kamu sendiri kamu bisa membuat blog seberapapun yang kamu mau dengan perintah `jekyll new .`.

### Konfigurasi Jekyll

Setelah kita membuat blog dengan jekyll, hal lain yang perlu kita lakukan adalah mengkonfigurasi blog kita, atau mempersonalisasi blog kita dengan mengubah judul blog, permalink , external link pada template dan lain sebagainya dengan mengedit file `_config.yml` pada root project masing-masing.

### Membuat Blog Post
Berbeda dengan platform blog lainnya, Untuk membuat post cukup tambahkan file post baru pada folder **_posts**, dengan format nama file `Tahun-Bulan-tanggal-judul-postingan-blog.md`, Sebagai contoh saja `2016-01-06-posting-pertama-diblog-jekyll.md`

Jekyll menggunakan **YAML Front Matter** jadi jangan lupa tambahkan front mater pada setiap post yang kita buat, front matter letaknya mulai pada awal baris post, bisa dilihat contoh post yang dibuat oleh jekyll secara otomatis. Umumnya front matter bentuknya seperti berikut.

{% highlight bash %}
{% raw %}
---
layout: post
title: "Welcome to Jekyll!"
date: 2016-01-02 09:35:15 +0700
categories: jekyll update
---
{% endraw %}
{% endhighlight %}

Setelah front matter di buat, baru dibawahnya kita bisa menulis isi artikel kita menggunakan makdown. Memang kelihatanya sangat rumit menulis post di jekyll, akan tetapi juga terasa sangat menyenangkan saat menulis blog menggunkan teks editor favorit kita. Apalagi dengan format teks dari markdown membuat kita lebih mudah mudah pada saat menulis post.

Nah, itulah cara menginstall jekyll di linux dan juga cara meggunakanya untuk ngeblog, untuk mengunjugi atau melihat blognya cukup `cd ke-root-project-kamu` kemudian jalankan perintah `jekyll s` atau perintah `bundle exec jekyll s`. Buka alamat yang tertulis di promp menggunakan browser, biasanya seperti ini **http://127.0.0.1:4000/**.
