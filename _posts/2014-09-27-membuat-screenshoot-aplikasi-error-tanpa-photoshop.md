---
layout: post
title: Membuat Screenshoot Aplikasi Error Nyeleneh Tanpa Photoshop
date: '2014-09-26T11:53:00.000-07:00'
tags:
- Komputer
modified_time: '2016-06-23T14:44:44.367-07:00'
categories: VBScript
---
Mungkin kamu pernah melihat di dunia maya ini banyak sekali screenshoot pesan error komputer yang nyeleneh bahkan lucu. Tidak semua screenshoot tersebut asli, tetapi banyak yang bohongan ( Fake ).

Sebagai contoh seperti gambar dibawah ini. Mungkin orang awam akan melihatnya dengan heran kenapa IDM muncul pesan seperti itu lalu menyimpan gambar dibawah ini lalu bertanya pada para master dan suhuya, Tapi untuk yang sudah tahu mungkin tidak heran.

![pecel](https://3.bp.blogspot.com/-9E8tlSYlftc/VCWIdrLu4TI/AAAAAAAAAIM/_4BKVQTl4cI/s1600/pcels.PNG)

Walaupun kelihatannya gak penting dan dengan sebenar - benarnya tidak sama sekali penting, tapi cukup lumayan untuk sekedar lucu - lucuan. Mungkin kamu berminat membuat album pesan pop-up komputer Error, kamu bisa buat sendiri.

Ada dua pilihan membuatnya yaitu dengan Photoshop atau dengan notepad. Tapi kalau pake Photoshop mungkin agak sedikit rumit dari desain dialog box, tombol dan mencocokan font. Karena saya nggak jago photoshop saya pilih notepad sama aplikasi snipping tool. Dan saya berani menebak pasti kamu yang sering otak - atik komputer pasti pada "Ooohh,..."

Pertama - tama siapkan alat dan bahannya. Untuk alatnya cukup komputer sederhana dengan spesifikasi yang kamu punya, sedangkan bahan silahkan gunakan notepad dan snipping tool. Jika kamu tidak punya snipping tool di komputer bisa pake tombol PrintScreen + paint. Untuk langkah - langkahnya seperti berikut.

1. Buka notepad ( + R lalu ketik notepad.exe )
2. Ketikkan Di Notepad  kode ini `X=Msgbox("Isi pesan error",0+16,"Judul Message box")`
3. Simpan dengan eksistensi file **VBScript** (`*.vbs`)
4. Cari file yang kamu simpan tadi dan double klik file tersebut utuk memunculkan pesan error, kemudian gunakan snipping tool atau print screen untuk mengambil gambar.

Cukup simpel kan membuat screenshoot aplikasi error yang nyeleneh. Tinggal cari kata katanya saja untk pesan error dan judulya. Untuk lebih detilnya seperti dijelaskan dibawah ini untuk penulisan kodenya:

{% highlight vbs %}
X=Msgbox("Isi pesan error",0+16,"Judul Message box")
{% endhighlight %}

1. Untuk "isi pesan" tulikan pesan error yang akan dimunculkan di dialog box,

2. kode angka( nomor ) bisa ditulis dengan bilangan angka 0-5 fungsinya untuk menambahkan tombol. Tombol button yang tersedia yaitu:

    - 0 untuk tombol OK saja
    - 1 untuk tombol OK dan cancel
    - 2 untuk tombol abort, retry, dan cancel
    - 3 untuk tombol yes, no , dan cancel
    - 4 untuk tombol yes dan no
    - 5 untuk tombol retry dan cancel

    Sedangkan nomor yang kedua untuk menampilkan ikon. Ikon yang bisa digunakan diantaranya:

    - 32 ikon warning query
    - 48 ikon warning message
    - 64 ikon information message
    - 16 ikon critical message

    Kode nomor yang lain:

    - 0 normal message box
    - 4906 always stays on top of desktop


3. Untuk "Judul Message Box" Bisa diganti judul sesuai keinginan.

Nah kalau kamu sudah tau nomor - nomornya tinggal tulis saja seperti ini:

{% highlight vbs %}
X=Msgbox("Isi pesan error",2,"Judul Message box")
{% endhighlight %}

Untuk menambahkan ikon tinggal tulis saja nomor iconnya tapi didahului dengan tanda plus (+) seperti ini:

{% highlight vbs %}
X=Msgbox("Isi pesan error",2+16,"Judul Message box")
{% endhighlight %}

Sekarang tinggal bagaimana kreasi kamu untuk membuatnya lebih Ok lagi.
