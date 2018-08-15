---
layout: post
title: 'Menulis Simple Kode C++ Di Visual Studio '
date: '2014-07-18T13:15:00.000-07:00'
tags:
- ".NET"
modified_time: '2016-06-23T14:44:44.406-07:00'
---

Untuk menulis kode C++ biasanya menggunakan borland atau Dev C++, tapi akan sangat menguntungkan jika menggunakan Visual Studio karena C++ adalah salah satu dari bahasa pemrograman [.NET Framework](/blog/apa-itu-net-framework). Di Visual Studio kamu bisa mengenal apa saja bahasa .NET itu dan mungkin jika kamu tertarik mempelajari bahasa .NET lain tinggal Klik.

Visual Studio Adalah Integrated Development Environtment (IDE)  yang disediakan oleh microsoft untuk mengembangkan aplikasi .Net. Fitur top dari visual studio adalah Code Editor dan Kompiler untuk bahasa C#, C++, F# dan Visual Basic. Fitur di Code editor yang menarik yaitu Intellisense yang dapat membantu menulis kode yang benar dan mempercepat penulisan kode.

![Intellisense Visual Studio 2013](https://1.bp.blogspot.com/-0GCKZO_u93g/U8lgV4jplCI/AAAAAAAAACw/dlCxADwOtUU/s1600/intelisense.png)

Intellisense  akan mucul saat kita menulis kode .NET dan membuat pilihan kode yang akan ditulis. Jika kamu sudah sering menggunakan Visual studio fitur ini lama kelamaan akan menjadi teman kamu, karena nanti dia akan memprediksi kode yang akan ditulis dan memberikan informasi kode yang dipilih.

Untuk kamu yang tertarik menggunakan Visual Studio, versi terakhirnya bisa [diunduh di MSDN](http://msdn.microsoft.com/){:target="_blank"} secara gratis untuk versi Express. Jika kamu mengunduh versi Express pastikan kamu mengunduh **Express for Windows Desktop** karena untuk yang Express for Windows untuk pengembang Windows Store.

Untuk yang sudah punya Visual Studio, biasanya bingung bagaimana menulis kode C++ yang basic seperti contohnya :

{% highlight cpp %}
cout<< "Hello World"<<endl;
{% endhighlight %}

Atau yang biasanya pake `std::`

{% highlight cpp %}
std::cout << "Hello World" <<std::endl;
{% endhighlight %}  

Berikut ini cara menulis simple kode c++ di Visual Studio.

![Buat project](https://2.bp.blogspot.com/-NGk_0sADoKY/U8l04pkCvoI/AAAAAAAAADQ/21ajuAmhJ6A/s1600/C+++Project.PNG)

1. Buka Visual Studio,
2. Di Start Page Buat  Project dengan klik New Project,
3. Pilih Visual C++
4. Pilih Console Application
5. Beri nama Project lalu klik OK
6. Pada Application Wizard jangan langsung Klik Finish tapi Klik Next
7. Pada Additional Option ceklist Empty Project lalu Klik Finish.

![Application Wizard](https://1.bp.blogspot.com/-A2MtFI5HGr0/U8l1EaWprsI/AAAAAAAAADY/wwKgsfysiVw/s1600/Application+Wizard.PNG)

Setelah kita klik finish, tidak bisa langsung menuliskan kode karena projek yang dibuat masih kosong untuk menulis code kita membutuhkan sebuah file kosong. Untuk membuatnya :

![Cpp project](https://3.bp.blogspot.com/--K8Z6E9tTgw/U8l2CyMV_WI/AAAAAAAAADo/9VQKEdBl5cs/s1600/project+C++.png)

1. Klik kanan pada Nama Project atau Folder Source File di Solution Explorer pilih Add - New Item
2. Pada Jendela yang muncul Pilih Visual C++
3. Pilih C++ File
4. Beri nama File dan Klik Add

![cpp item](https://3.bp.blogspot.com/-6fWl29XJH4s/U8l1-yUANWI/AAAAAAAAADk/zIRkxHZ1CvQ/s1600/new+item.PNG)

Setelah sukses menambahkan file coba ketikkan kode c++ sebagai Contoh :

{% highlight cpp %}
#include <iostream>

using namespace std;
int main(){
  cout << "Hello Visual Studio!!"<<endl;
}
{% endhighlight %}

Untuk mencoba menjalankan kode yang ditulis tekan CTRL+F5.

Lakukan langkah yang sama untuk membuat project baru. Memang agak rumit tapi lama - lama pasti terbiasa karenaVisual Studio tampilanya tidak terlalu membingungkan dan lebih mudah dipahami. Cara ini mungkin bisa juga digunakan untuk versi Visual Studio 2012 kebawah karena rata-rata kalau di visual studio untuk membuat Console C++ pasti muncul Application Wizard.
