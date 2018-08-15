---
layout: post
title: Cara Membuat Repository di Git
date: '2015-12-30T18:25:00.001-08:00'
categories: Git
tags:
- Shell
modified_time: '2016-01-12T01:46:52.468-08:00'
---

Secara umum repository merupakan sekumpulan file source kode baik berupa executable file, ataupun file yang masih berupa project. Di git kita bisa membuat git repository dengan menggunakan perintah `git init`.

Selain untuk membuat git repository baru, perintah `git init` juga dapat mengkonvert project yang telah ada atau belum di versioning dan juga menginisialisasi repository baru yang masih kosong.

Perintah `git init` merupakan perintah pertama di setiap project yang akan dibuat dan memungkinkan kita untuk menggunakan perintah lain di git. Jadi jika kita menjalankan perintah lain pada project yang belum di inisialisasi, maka semua perintah pada git tidak akan berjalan dan hanya menampilkan promp berikut:

{% highlight bash %}
fatal: Not a git repository (or any of the parent directories): .git
{% endhighlight %}

Dengan menjalankan perintah `git init` maka git akan membuat folder **.git** pada direktori utama project yang akan kita kerjakan. Dimana folder tersebut berisi metadata untuk suatu repository.

### 1. Penggunaan

A. Untuk menginisialisasi sebuah folder / project folder kita bisa menggunakan perintah berikut pada folder project saat ini. cukup jalankan `cd <folder-project>` yang akan diinisialisasi, kemudian jalankan perintah:

{% highlight bash %}
git init
{% endhighlight %}

B. Untuk membuat git repository baru yang masih kosong untuk menyimpan source kode suatu project, jalankan perintah berikut. Dan folder baru akan dibuat tanpa ada file didalamnya melainkan hanya folder **.git**.

{% highlight bash %}
git init <nama-folder>
{% endhighlight %}

C. Untuk membuat shared repository baru yang masih kosong dengan menggunakan perintah berikut:

{% highlight bash %}
git init --bare <nama-folder.git>
{% endhighlight %}

Membuat repository menggunakan flag `--bare` secara umum foldernya diakhiri dengan **.git**. Folder / repository tersebut biasanya disebut dengan central repository atau bare repository yang memungkinkan kita untuk mengedit file dan melakukan commit pada repository tersebut.

| ![tutorial git](https://4.bp.blogspot.com/-hN1Z58lapwU/VoSOsGJ8t2I/AAAAAAAABjY/YkWzbAp1-7o/s1600/git-tutorial.png)|
| :------------- |
| http://www.slideshare.net/psquy/git-tutorial-50870667 |

Mudahnya flag `--bare` ini digunakan untuk menandai sebuah repository sebagai sebuah fasilitas penyimpanan. Dan bisa disimpulkan bahwa hampir semua alur kerja pada git, central repository itu adalah bare, sedangkan salinan lokal yang dibuat oleh developer disebut **non-bare**.

Jika kita menggunakan github, maka bare repository kita ada pada `http://github.com/<username-kita>/<nama-repository>.git`. dan project salinan yang ada di komputer kita adalah non-bare `<user>/home/<nama-repository>`.

Developer biasanya lebih sering menggunakan perintah `git clone` sebagai cara paling mudah untuk menyalin source code ke penyimpanan lokal di komputer. Sedangkan penggunaan `git init` biasanya lebih sering digunakan hanya untuk membuat sebuah central repository oleh sebuah organisasi.
