---
layout: post
title: Menggunakan Fungsi FileDialog di c#
date: '2015-06-19T06:27:00.000-07:00'
categories: CSharp
tags:
- ".NET"
- WPF
modified_time: '2016-06-23T14:44:43.944-07:00'
---

Di aplikasi pengeditan file biasanya ditemui aksi untuk membuka dan menyimpan file. Untuk membuka file bisa menggunakan class `Microsoft.Win32.OpenFileDialog();` sedangkan untuk menyimpan file menggunakan class `Microsoft.Win32.SaveFileDialog();` Keduanya bisa berfungsi dengan baik di project WPF yang saya publish di blog ini juga. Nah kali ini saya akan sedikit berbagi bagaimana menggunnakan class ini pada project kamu.

### 1. OpenFileDialog();
Fungsi class ini untuk menampilkan informasi file yang ada di drive penyimpanan di aplikasi kita agar selanjutnya dapat diproses di palikasi tersebut melalui informasi yang sudah didapatkan. Contoh penggunaannya seperti berikut ini.

{% highlight cs %}
OpenFileDialog dOpen = new OpenFileDialog();

//Filter eksistensi file yang akan dibuka
dOpen.Filter = "Image File (*.bmp *.jpg)|*.bmp;*.jpg;";

//Mengganti Title Dialog  Default "Open"
dOpen.Title = "Open Text File";

//Menentukkan lokasi default di aplikasi
dOpen.InitialDirectory = @"C:\";

Nullable <bool> y = dOpen.ShowDialog();
if (y==true)
{
    //menampilkan alamat file di penyimpanan(string)
    string lokasi = dOpen.FileName;

    /* Tambahkan code untuk memproses file dari info
    lokasi yang sudah didapat */
}
{% endhighlight %}

Nah setelah mendapatkan lokasi file sekarang kamu bisa melanjutkan memproses file tersebut, misalnya dengan `StreamWriter` dan `StreamReader` atau cara lainya  tergantung aplikasi yang kamu dibuat.

### 2. SaveFileDialog();
Pada fungsi class ini tidak jauh berbeda dengan `OpenFileDialog();`, kamu juga bisa memfilter, menentukan default title dan yang lainnya. Yang berbeda hanya pada saat aksi menyimpan file di drive. Berikut ini contoh penggunaanya

{% highlight cs %}
SaveFileDialog dSave = new SaveFileDialog();

//Filter eksistensi file yang akan disimpan
dOpen.Filter = "Image File (*.bmp *.jpg)|*.bmp;*.jpg;";

var s = dSave.ShowDialog();
if (s == true)
 {
    //Object file yang akan disimpan
    Image gambar = gambarDariStream();

    //Lokasi yang didapatkan dari SaveFileDialog();
    string lokasi = dSave.FileName;

    gambar.Save(lokasi);
 }
{% endhighlight %}

Nah itulah fungsi yang bisa kamu gunakan untuk menambahkan aksi untuk membuka dan menyimpan file di aplikasi kamu. Semoga bermanfaat..
