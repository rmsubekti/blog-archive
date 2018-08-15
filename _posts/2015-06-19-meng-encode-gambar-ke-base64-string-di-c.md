---
layout: post
title: Meng-Encode Gambar Ke base64 String di C#
date: '2015-06-19T04:23:00.000-07:00'
categories: CSharp
tags:
- ".NET"
modified_time: '2016-06-23T14:44:43.955-07:00'
---

Image Base64 string biasanya digunakan oleh pendesain web untuk menambahkan icon gambar ke dalam stylesheet tanpa menggunakan source gambar external. Untuk membuat gambar b64 string ini banyak sekali yang menyediakan tools-nya secara online.

Nah, untuk kamu yang coba-coba ingin membuat image decoder sendiri menggunakan c#, kamu bisa menggunakan fungsi/method `ToBase64String();` yang berada di class `System.Convert;`. Ini dia demo kode untuk meng-encode gambar ke teks string base64.

{% highlight cs %}
//method untuk mengkonvert Gambar ke base64 string
public string ImageToBase64String(string lokasi)
{
    using (Image gambar = Image.FromFile(lokasi))
    {
       using (MemoryStream ms = new MemoryStream())
       {
         gambar.Save(ms, image.RawFormat);
         //Parse gambar ke byte array
         byte[] imageBytes = m.ToArray();
         // Convert byte[] gambar ke Base64 String
         return Convert.ToBase64String(imageBytes);
       }
    }
}
{% endhighlight %}

Untuk mengkonvert gambar gunakan Parameter lokasi pada method untuk menambahkan lokasi gambar yang berada di drive. Sebaliknya jika kamu ingin mendekode string gambar atau base64 string kamu bisa menggunakan method `FromBase64String();`, Seperti berikut ini demo kodenya:

{% highlight cs %}
//Convert Base64 String ke format gambar biasa
public Image ImageFromBase64String(string base64)
{
    using (MemoryStream stream = new MemoryStream(Convert.FromBase64String(base64)))
    using (Image sourceImage = Image.FromStream(stream))
    {
       return new Bitmap(sourceImage);
    }
}
{% endhighlight %}

Oke, itulah demo method yang bisa digunakan untuk meng-encode gambar ke base64 dan method kedua untuk mengembalikan base64 string atau gambar yang telah di encoded ke format gambar biasa.
