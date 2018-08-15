---
layout: post
title: Menghapus History Perintah Pada Terminal Linux
date: '2015-11-13T08:04:00.000-08:00'
categories: Bash
tags:
- Linux
- Bash
modified_time: '2015-12-31T08:05:34.287-08:00'
---
Perintah `history` pada shell / Terminal Linux sangat berguna untuk menjalankan perintah yang telah dijalankan untuk dijalankan kembali tanpa harus menuliskan perintah tersebut berkali - kali dan sangat membantu kita dalam memperbaiki perintah yang telah kita jalankan tanpa harus menuliskan seluruhnya.

* Untuk menampilkan daftar perintah yang telah kita jalankan ketik `history` pada promp shell.
* Untuk menampilkan 10 perintah terakhir pada history ketik `history 10`
* Untuk menjalankan perintah terakhir pada history tanpa menulisnya kembali menggunakan tanda seru (!) diikuti nomor perintah pada history.
* Kita juga bisa menambahkan opsi atau argumen seperti `!694 10`
* Menjalankan perintah terakhir cukup dengan mengetikkan double tanda seru (`!!`)dan masih banyak lagi.

![history](https://1.bp.blogspot.com/-uv4aKNEoE-M/Vkas2kL7WeI/AAAAAAAABwY/akTPxue2fWo/s1600/history.png)

Masalahnya setiap kali kita menjalankan perintah pada shell, perintah tersebut direcord dan disimpan dalam file **~/.bash_history**, sehingga seiring waktu daftar history semakin banyak dan kita sangat sulit untuk menggunakan daftar perintah dari history.

Nah cara untuk menghapus daftar tersebut kita bisa menggunakan perintah

{% highlight bash %}
history -c
{% endhighlight %}

Perintah tersebut akan menghapus daftar perintah history berdasarkan shell yang kita jalankan, jika kita menjalankan shell baru, daftar history lama akan tetap di tampilkan. Untuk meghapus keseluruhan history shell bisa menggunakan perintah.

{% highlight bash %}
history -c && history -w
{% endhighlight %}

Atau kita juga bisa menjalankan custom command pada profile shell kita dengan menambahkan perintah berikut.

{% highlight bash %}
rm -f ~/.bash_history
{% endhighlight %}

tepatnya seperti pada gambar. Letakkan perintah di atas pada input custom command yang disediakan.

![clear  history](https://2.bp.blogspot.com/-YqetzTe92qU/VkayRfeXCUI/AAAAAAAABws/B4TKkG8oH1o/s1600/profile.png)

Cara ini akan menghapus history shell setiap kali kamu login ke shell.

Banyak sekali perintah yang bisa digunakan untuk menghapus history, cara diatas hanya sebagian cara saja yang pernah saya praktekan. Dan cara yang paling simple menurut saya yaitu dengan perintah `history -c && history -w` dan cukup berjalan dengan baik.
