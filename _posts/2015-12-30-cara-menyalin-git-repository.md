---
layout: post
title: 'Cara Menyalin Git Repository'
date: '2015-12-30T20:04:00.002-08:00'
categories: Git
tags:
- Shell
modified_time: '2015-12-30T20:04:45.561-08:00'
---

Untuk menyalin Git repository yang sudah ada, kita bisa menggunakan perintah `git clone`. Perintah ini sering sekali digunakan untuk menyalin repository yang telah kita buat di github, bitbucket ataupun web penginang lain yang menggunakan sistem pengontrol versi git.

Kemudahan dengan melakukan cloning ini, secara otomatis git akan membuatkan kita remote connection atau disebut juga origin point back ke repository asalnya. Sehingga kita dapat dengan mudah berinteraksi dengan central repository.

Sama halnya dengan perintah `git init`, cloning dapat dilakukan satu kali, setelah kita mendapatkan sebuah salinan, semua operasi version control dan kolaborasi secara otomatis telah di atur langsung melalui repository lokal.

Untuk menyalin repository menggunakan perintah dibawah. repository asal biasanya terdapat pada local filesystem atau juga bisa terdapat pada remote machine yang dapat diakses melalui http ataupun ssh.

{% highlight bash %}
git clone <repository>
{% endhighlight %}

Contoh penggunaan git clone untuk menyalin repository yang telah dibuat di github sebagai berikut:

**A. Akses via http**
{% highlight bash %}
git clone https://github.com/<username>/<repository>.git
{% endhighlight %}

**B. Akses via ssh**
{% highlight bash %}
git clone ssh://git@github.com:<username&>/<repository>.git
{% endhighlight %}
Kita juga bisa menentukan nama folder salinan repository tersebut di komputer kita dengan menambahkan nama folder setelah perintah diatas sebagai berikut.
{% highlight bash %}
git clone <repository> <nama-folder>
{% endhighlight %}
Cara tersebut sangat membantu jika nama repository dari remote machine terlalu panjang dan memudahkan kita untuk mentransfer commit dari komputer kita ke remote machine dimana kita menyalin repository awal.
