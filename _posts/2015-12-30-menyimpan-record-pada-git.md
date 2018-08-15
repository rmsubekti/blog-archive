---
layout: post
title: Menyimpan Record Pada Git
date: '2015-12-30T23:21:00.004-08:00'
tags:
- Linux
modified_time: '2016-01-01T09:44:09.917-08:00'
---

Ketika kita melakukan perubahan pada salah satu atau lebih dalam repository lokal kita, git akan melacak baik itu perubah berupa penambahan ataupun penghapusan suatu baris kode. Akan tetapi tidak langsung menyimpannya sebagai project history sebelum kita memintanya.

|![diagram](https://3.bp.blogspot.com/-Oht_FLU-rjc/VoTXLx9HiEI/AAAAAAAABjw/eFeMtLtEvg8/s1600/Githubdiagram.png) |
| :------------- |
| [Eclipse + Github 사용법](http://embedded.kookmin.ac.kr/lectureMobile/index.php/Eclipse_%2B_Github_%EC%82%AC%EC%9A%A9%EB%B2%95) |

Untuk menyimpan suatu perubahan ada 2 tingkatan yaitu perintah `git add` untuk menyimpan perubahan dalam repository lokal kita ke staging area dan perintah `git commit` untuk melakukan commit dari staged snapshoot ke history project.

Perintah git add digunakan untuk mengatakan pada git kalau kita ingin menambahkan update pada file untuk diproses pada commit selanjutnya. Pada tahap ini perubahan tidak langsung di rekam sampai kita menjalankan perintah `git commit`.

## 1. git add
Untuk menambahkan semua perubahan yang telah dilakukan pada file atau folder dengan perintah berikut. Akan tetapi untuk menambahkan perubahan bisa sangat rumit karena kita lupa mana saja file yang telah kita rubah. Dengan menggunakan perintah `git status` kita bisa melihat file mana saja yang telah dirubah, kemudian menjalankan perintah

{% highlight bash %}
{% raw %}
git add <file / folder>
{% endraw %}
{% endhighlight %}

Selain itu kita juga bisa menggunakan interactive staging session untuk memilih bagian mana saja yang akan kita tambahkan ke staging area. dengan menggunakan perintah ini kita akan berkenalan dengan chunk of changes dimana promp ditampilkan untuk memudahkan kita memilih bagian mana saja yang akan kita tambahkan.

Gunakan `y` untuk menambahkan chunk ke staging area,`n` untuk mengabaikan, `s` untuk membagi ke chunk yang lebih kecil, dan `q` untuk keluar dari interactive staging session. Untuk mennggunakan interactive staging kita bisa menggunakan perintah

{% highlight bash %}
git add -p
{% endhighlight %}

Selain menambahkan file atau folder satu persatu ke staging area dan melakukan commit pada setiap file tersebut, kita juga bisa menambahkan seluruh perubahan langsung ke staging area dengan perintah

{% highlight bash %}
git add --all
{% endhighlight %}

### 2. git commit
Setelah kita merasa semua perubahan yang kita buat siap selanjutnya kita bisa meminta git merekam history project dengan melakukan commit. Perubahan yang sudah di commit bisa dikatakan sebagai versi aman dan git tidak akan mengubahnya hingga kita meminta untuk mengubahnya lagi. perintah untuk melakukan commit :

{% highlight bash %}
git commit
{% endhighlight %}


Setelah menjalankan perintah diatas biasanya akan muncul promp meminta kita untuk menambahkan pesan commit. Atau kita juga bisa langsung menambahkan pesan pada baris perintah git commit seperti berikut :

{% highlight bash %}
{% raw %}
git commit -m <pesan commit>
{% endraw %}
{% endhighlight %}

Pesan commit bisa diisi sesuai dengan apa yang kita rubah pada file project kita, contoh `"Add a new file"`, `"Initial commit"`, `"Update"` dan lainnya atau bisa juga menggunakan bahasa kita sendiri misal `" Hapus file "`, `"Nambahin fungsi"`, dan lain sebagainya.
