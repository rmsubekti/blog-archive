---
layout: post
title: Cara clone Spesifik Branch
date: '2016-03-23T16:28:00.000-07:00'
categories: Git
tags:
- Branch
---
Di setiap repository bisa terdiri lebih dari satu branch, dan untuk mengclone sebuah repo biasanya menggunakan perintah:

{% highlight bash %}
git clone alamat-repo
{% endhighlight %}

Perintah tersebut hanya meng-clone repository default, umumnya branch `master`.

Kita bisa menggnakan opsi `--branch` atau `-b` untuk menunjukkan branch yang akan di clone, seperti berikut.

{% highlight bash %}
git clone -b nama-branch alamat-repo
{% endhighlight %}

selain branch, opsi ini juga bisa digunakan untuk menyalin repository berdasarkan tag yang kita inginkan dengan menambahkan `nama-tag` yang tersedia pada repository. Keterangan lengkap jalankan perintah:

{% highlight bash %}
git help clone
{% endhighlight %}
