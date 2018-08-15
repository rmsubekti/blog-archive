---
layout: post
title: Install dan Konfigurasi Git di Ubuntu
date: '2015-12-30T16:07:00.001-08:00'
tags:
- Shell
- Git
modified_time: '2015-12-30T16:23:08.877-08:00'
---

Git merupakan system version control yang fungsinya untuk mengatur semua source kode yang ada di project yang sedang kita buat. Git dapat melacak semua perubahan yang ada pada project tersebut bahkan disetiap baris kode dalam sebuah file.

![Git](https://3.bp.blogspot.com/-VNLwf2U4K6k/VoRxsVwJsnI/AAAAAAAABjE/jeucORmmx9c/s1600/Git-Logo-2Color.png)

Git sendiri dibuat oleh Linus Torvalds untuk mengembangkan project linux kernel miliknya. Hingga saat ini Git merupakan aplikasi open source, sehingga kita bisa menggunakannya secara gratis. Git sendiri tersedia dan dapat diinstall di berbagai sistem operasi yang ada saat ini dan software git bisa diunduh di [git-scm.com](https://git-scm.com/downloads)

Pada artikel ini sendiri, kita akan membahas secara khusus cara menginstall dan mengkonfigurasi GIT pada sistem operasi Linux, tepatnya pada Linux ubuntu. Jadi langsung saja.

## 1. Instalasi Git
Semua perintah pada aplikasi git ini dilakukan menggunakan command line, jadi kita akan lebih banyak berinteraksi dengan terminal. Untuk menginstall git pada sistem operasi debian / ubuntu kita bisa mengunduh dan menginstallnya langsung menggunakan terminal.

{% highlight bash %}
apt-get install git
{% endhighlight %}

Jalankan perintah terminal diatas untuk mengunduh git dan menginstalnya di ubuntu.

## 2. Konfigurasi Git
Setelah menginstall git, ada beberapa pengaturan yang perlu kita lakukan agar dapat menggunakan aplikasi ini dengan lebih baik. Untuk mengkonfigurasi git, kita bisa menggunakan perintah `git config` pada terminal.

A. Untuk mendefinisikan **nama author** untuk semua commit berdasarkan user saat ini gunakan perintah berikut.

{% highlight bash %}
git config --global user.name <nama-kamu>
{% endhighlight %}

Flag `--global` memungkinkan kita untuk menggunakan username tersebut sebagai default disetiap kita membuat commit. Atau jika kita ingin menggunakan username lain pada suatu project tertentu, kita bisa menghilangkan flag `--global`. Seperti berikut:


{% highlight bash %}
git config user.name <nama-kamu>
{% endhighlight %}

B. Untuk mendefinisikan **email author** untuk digunakan di setiap commit menggunakan perintah berikut.

{% highlight bash %}
git config --global user.email <email-kamu>
{% endhighlight %}

C. Jika kita sulit menghafal semua perintah pada git, kita bisa membuat alias dengan git config untuk mengubah perintah git ke perintah yang lebih mudah kita ingat seperti berikut.

{% highlight bash %}
git config --global alias.<nama-alias> <perintah-git>
{% endhighlight %}

D. Untuk menggunakan **text editor spesifik** untuk mengedit file misalnya sublime text ( `subl` ) , `nano`, atau `vi` editor bisa menggunakan perintah berikut.

{% highlight bash %}
git config --system core.editor <text-editor>
{% endhighlight %}

## 3. Contoh Perintah Keseluruhan
Berikut ini adalah contoh perintah konfigurasi git untuk pertama kali berdasarkan yang telah dijelaskan diatas secara umum.

{% highlight bash %}
git config --global user.name "Bang Bect"
git config --global user.email root@contoh.com
git config --global core.editor subl
{% endhighlight %}

Sedangkan untuk aliasnya contohnya:

{% highlight bash %}
git config --global alias.chk checkout
git config --global alias.brc branch
git config --global alias.up rebase
git config --global alias.com commit
{% endhighlight %}

Itulah cara bagaimana menginstall dan mengkonfigurasi git di ubuntu. Beberapa cara lain khusus untuk mengkonfigurasi git diantaranya melakukan pengeditan secara manual dengan menjalankan perintah :

{% highlight bash %}
git config --global --edit
{% endhighlight %}

Semua konfigurasi git disimpan dalam suatu file text biasa, dan bisa dibilang penggunaan perintah git config hanyalah merupakan cara mudah untuk dilakukan menggunakan command line interface. Git menyimpan file konfigurasi pada 3 file yang berbeda diantaranya :

1. Pada folder **project/repo**, file setting terdapat pada **&lt;repo&gt;/.git/config**.
2. Ketika kita menggunakan flag `--global` maka file setting akan disimpan pada folder home tepatnya pada **~/.gitconfig**.
3. Selain itu git juga menyimpan setting pada sistem pada **(prefix)/etc/gitconfig**.

Kita bisa mengubah file tersebut menggunakan file editor biasa, dan hasilnya sama saja dengan menggunakan perintah `git config`.
