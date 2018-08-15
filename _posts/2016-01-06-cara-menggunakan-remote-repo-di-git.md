---
layout: post
title: Cara Menggunakan Remote Repo di Git
date: '2016-01-06T11:00:00.000-08:00'
categories: Git
modified_time: '2016-01-06T11:03:38.422-08:00'
---

Ketika kita punya project, tentu kita ingin tetap mempertahankan semua file yang ada didalamnya. Juga tetap bisa mengedit atau menambahkan file baru di project kita tanpa kuatir, dengan melacak perubahan yang kita buat.

Dengan menggunakan git memang sudah sangat membantu, akan tetapi repository-nya disimpan di komputer lokal kita sendiri. Lalu bagai mana jika ada kejadian yang nggak terduga dengan komputer kita, ya mudah - mudahan nggak pernah terjadi. Tapi akan sangat aman jika kita menggunakan hosting untuk project kita, selain aman kita juga bisa mengaksesnya di manapun.

Untuk hosting project kita bisa menggunakan Github atau BitBucket keduanya gratis. Tergantung project private atau project untuk opensource. Di github untuk hosting project yang private mungkin kita perlu mengeluarkan biaya, tapi jika ingin yang gratis bisa menggunakan BitBucket sebagai alternatif.

Untuk menggunakan remote ke bare repository atau tempat project kita di hosting kita perlu membuat repository baru di hostingan project tersebut baik pada github ataupun bitbucket sama saja. Pada contoh disini menggunakan github.

Jadi buat dulu repo di github untuk menyimpan project kita. Beri nama pada repository-nya sesuai nama project yang ingin di upload, kemudian klik buat repository seperti pada gambar.

![Newrepo](https://1.bp.blogspot.com/-VfVf0I9gXk8/VoxfK7ab2iI/AAAAAAAABlU/myL02EDfRwY/s1600/Newrepo.png)

Pada halaman selanjutnya kita akan di beri alamat url dan ssh, juga cara menggunakanya seperti pada gambar dibawah.

![configrepo](https://3.bp.blogspot.com/-CqqgR0-jvQg/VoxgzXZy5_I/AAAAAAAABlg/cvJYfXKpLhQ/s1600/configrepo.png)

### git remote
Sekarang kita sudah punya remote url dan remote ssh dan untuk menggunakannya kita kembali ke terminal dan arahkan ke root folder project. Kemudian tambahkan remote url yang sudah kita dapatkan tadi dengan menjalankan perintah berikut.

{% highlight bash %}
git remote add origin <remote-url-repo>
{% endhighlight %}

Pada perintah diatas `origin` adalah nama dari remote url, kita bisa menamai dengan nama sesuka kita. Dengan menggunakan nama tersebut akan lebih mudah dari pada harus menuliskan url yang panjang berkali - kali di perintah git lain.

Penggunaan lain perintah `git remote`:

**1. Melihat daftar remote koneksi pada repository kita.**

{% highlight bash %}
git remote
{% endhighlight %}

**2. Melihat daftar remote koneksi pada repository dengan urlnya untuk setiap koneksi.**

{% highlight bash %}
git remote -v
{% endhighlight %}

**3.Menghapus remote koneksi**

{% highlight bash %}
git remote rm <nama-koneksi>
{% endhighlight %}

**4. Merename remote konksi**

{% highlight bash %}
git remote rename <nama-saat-ini> <nama-baru>
{% endhighlight %}

### git push
Setelah berhasil menambahkan remote repo ke repository lokal, sekarang kita bisa mengupload commit yang sudah pernah kita buat pada project kita sebelumnya. Untuk menguploadnya menggunakan perintah berikut.

{% highlight bash %}
git push -u origin master
{% endhighlight %}

Pada perintah diatas `origin` merupakan nama remote koneksi yang dibuat tadi, jadi gak repot nulis urlnya bolak - balik, cukup menggunakan namanya saja. Sedangkan `master` adalah nama branch, kita bisa menamainya apa saja, tapi umumnya project menggunakan *branch master* sebagai default branch.

Nah itulah cara menggunakan remote ropository. jika ada eror atau gagal menambahkan remote repo pastikan terlebih dahulu root project telah di inisialisasi menggunakan perintah `git init` dan ulangi menambahkan remotenya.
