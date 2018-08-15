---
layout: post
title: Program Console Edit, Hapus, Cari Di C#
date: '2015-01-05T18:38:00.000-08:00'
Categories : CSharp
modified_time: '2016-06-23T14:44:44.267-07:00'
---
Sebenarnya ini adalah Latihan dari salah satu mata kuliah pemrograman. Kode yang sebenarnya adalah kode C++, tapi karena bahasa pemrograman C# belum diajarkan dan karena saya penasaran dengan bahasa c# makanya sengaja saya mengkode ulang kode tersebut ke bahasa C#. Source Kode yang asli bisa di [unduh disini](https://gist.github.com/rmsubekti/a1d08ea9202670911cf91978bfc5194b){:target="_blank"}.

Untuk penyimpanan sementara pada program ini menggunakan array, hanya satu deklarasi array satu dimensi bertipe integer. Program ini sangat sederhana, disini hanya menggunakan perulangan fungsi operator dan fungsi if else. Tapi karena program ini ditulis dengan bahasa c# maka disini ditambahkan fungsi konversi tipe data. Oke langsung saja buka Aplikasi editor kesukaanmu atau yang punya visual studio langsung saja buat project console C# namanya terserah.

Untuk tahap pertama membuat input data untuk mengisi data. Deklarasikan terlebih dahulu variable yang akan kita gunakan pada program awal di main method.

{% highlight cs %}
//Deklarasi Variabel
int jumlah;
int[] B=new int[10];
{% endhighlight %}

Pada program awal yaitu memasukkan data ke array, deklarasi variable jumlah untuk memberikan opsi pilihan data kepada user berapa banyak data yang ingin di masukkan. Deklarasi variable array B dengan jumlah indeks maksimal yaitu 10.Selanjutnya kita minta ke pada user untuk memasukkan jumlah data yang ingin dimasukkan dengan input keyboard. Ketikkan code berikut ini setelah deklarasi variabel.

{% highlight cs %}
//input jumlah indeks data
Console.WriteLine("Masukkan Jumlah Data");
jumlah = Console.ReadLine();
{% endhighlight %}

Mungkin kamu akan menemui error pada kode tersebut. Coba arahkan pada kode yang bergaris bawah merah. Disitu terdapat pesan error **“Cannot implicitly convert type ‘String’ to ‘Int’”**. Ini dikarenakan input keyboard dari user akan selalu dibaca oleh sistem sebagai data bertipe ‘String’ dan tidak mungkin bisa di tampung di variabel jumlah yang memiliki tipe data integer.

Untuk mengatasi masalah tersebut kita harus mengkonversikan data masukkan user ke data bertipe integer terlebih dahulu sebelum data di massukkan ke variabel jumlah. C# telah menyediakan fungsi konversi data yang memungkinkan kita mengubah tipe data tersebut yaitu dengan menggunakan namespace Convert. Disana disediakan beberapa fungsi untuk mengkonversikan tipe data salah satunya yaitu tipe data integer. Nah untuk mengkonversikan data tersebut kita menggunakan fungsi `ToInt32();`. Sekarang ganti kode sebelumnya dengan kode berikut ini:

{% highlight cs %}
//input jumlah indeks data
Console.WriteLine("Masukkan Jumlah Data");
jumlah = Convert.ToInt32(Console.ReadLine());
{% endhighlight %}

Setelah user memasukkan jumlah data, selanjutnya user akan memasukkan data satu persatu. Agar user memasukkan data langsung ke indeks array, maka digunakan perulangan for sesuai dengan jumlah data yang sebelumnya dimasukkan dan seperti biasa, karena disini data yang dimasukkan harus tipe data integer maka kita harus menconvertnya terlebih dahulu. Tulis kode Berikut Setelah kode sebelumnya.

{% highlight cs %}
//input data
for (int i = 0; i < jumlah; i++){
   Console.Write("Masukkan data ke {0} = ",i+1);
   B[i] = Convert.ToInt32(Console.ReadLine());
}
{% endhighlight %}

Selanjutnya agar user dapat melihat hasil data yang telah dimasukkan maka tulislah satu persatu data tersebut. Gunakan perulangan for untuk menampilakan data yang telah diinputkan user. Tulis kode berikut ini setelah kode sebelumnya.

{% highlight cs %}
//menampilkan data
for (int j = 0; j < jumlah; j++){
  Console.WriteLine("B[{0}]={1}",j,B[j]);
}
{% endhighlight %}

Sekarang coba jalankan kode tersebut tekan CTRL+F5 pada keyboard. Coba masukkan jumlah data dan kemudian di ikuti dengan memasukkan data satu persatu kemudian lihat hasilnya. Program berjalan dengan sempurna selama user tidak memasukkan jumlah indeks data lebih dari sepuluh.

Nah, jika tadi kamu memasukka jumlah indeks data dengan benar coba jalankan lagi program, dan coba masukkan jumlah data lebih dari 10, lalu lihat yang terjadi. Program akan terhenti pada saat memasukkan data yang ke 11, dan muncul pesan error System.IndexOutOfRangeException yang menyatakan bahwa index berada di luar jangkauan array.

Error tersebut dikarenakan variable array B di deklarasikan untuk memuat hanya 10 indeks data saja dan pengguna program tidak akan tahu berapa maksimal jumlah data yang bisa dimuat di program ini. Bisa saja mereka memasukkan jumlah data lebih dari 10.

Nah, tugas kita sebagai pembuat program adalah mencegah terjadi error tersebut. Salah satu cara yang bisa digunakan yaitu dengan fungsi if else serta menambahkan beberapa petunjuk agar user tidak bingung. Sekarang modifikasi seluruh kode yang telah kita tulis tadi menjadi seperti ini:

{% highlight cs %}
atas:
  //input jumlah indeks data
  Console.WriteLine("Masukkan Jumlah Data");
  jumlah = Console.ReadLine();

  if (jumlah > 10){
    //Kode yang di eksekusi jika indeks >10
    Console.WriteLine("Maaf jumlah maksimal 10 data\n");
    goto atas;
  }

  else{

    //input data
    for (int i = 0; i < jumlah; i++){
      Console.Write("Masukkan data ke {0} = ", i + 1)
      B[i] = Convert.ToInt32(Console.ReadLine());
    }

    Console.WriteLine("\n\nOK, Luangkan waktu sejenak, Berikut adalah hasilnya");

    //menampilkan data
    for (int j = 0; j < jumlah; j++){
      Console.WriteLine("B[{0}]={1}", j, B[j]);
    }
  }
{% endhighlight %}

Jalankan kode tersebut, dan coba masukkan jumlah indeks data lebih dari 10. Sekarang program tersebut lebih baik daripada sebelumnya. Seperti yang kamu lihat dari mencoba program tersebut, ketika user memasukkan indeks data lebih dari 10, maka program menampilkan pesan bahwa jumlah maksimal data hanya 10 dan meminta kepada user untuk mengulangi memasukkan data lagi.

Dari program diatas kita sudah mendapatkan data yang di masukkan pengguna serta menampilkannya kembali dalam bentuk elemen array. Tapi terkadang pengguna juga bisa salah atau data yang dimasukkan berubah dan perlu untuk diedit. Agar pengguna dapat mengedit data yang telah dimasukkan, kita perlu menambahkan beberapa blok kode agar pengguna bisa berinteraksi.

Disini kita akan menggunakan 3 cara agar pengguna bisa berinteraksi dengan data mereka yaitu edit, hapus, cari. Agar pengguna dengan mudah menentukan pilihan mereka maka perlu ada menu pilihan apakah ingin mengedit, menghapus, mencari atau keluar jika data tidak perlu di rubah.

Sebelum membuat menu dan statement edit, hapus dan cari, lengkapi dulu pendeklarasian variabel yang sebelumnya telah dibuat menjadi seperti di bawah ini atau kamu cukup mengganti deklarasi variabel sebelumnya dengan yang ini.

{% highlight cs %}
//Deklarasi variabel
int jumlah, ganti, hapus, cari;
int[] B=new int[10];
int ketemu = 0, posisi = 0;
char pilih;
{% endhighlight %}

Selanjutnya untuk membuat menu pilihan, disini kita akan menggunakan fungsi if else if dan juga fungsi goto agar pengguna bisa kembali mengakses menu setelah program menerima masukkan pengguna. Untuk kerangka menunya silakan kalian tuliskan kode berikut ini:

{% highlight cs %}
menu:
  Console.WriteLine("\n\n[E] Edit Data \t[H] Hapus Data \t[C] Cari Data \t[X] Selesai");
  pilih = Convert.ToChar(Console.ReadLine().ToLower());

    if (pilih == 'e'){
      //Kode untuk mengedit disini
      goto menu;
    }
    else if (pilih == 'h'){
      //Kode Untuk menghapus disini
      goto menu;
    }
    else if (pilih == 'c'){
      //kode untuk mencari disini
      goto menu;
    }
    else Console.WriteLine("Terimakasih\n\n");

    Console.WriteLine();
{% endhighlight %}

Agar user segera melakukan tidakan selanjutnya setelah memilih menu tadi, kita perlu melengkapi kerangka menu tersebut dengan menambahkan statemen untuk mengedit, menghapus dan mencari data yang telah dimasukkan user sebelumnya. Agar lebih mudah memasukkan kodenya, lihat komentar pada kode dan masukkan kode sesuai komentar kode tersebut. Disini akan saya buat lebih cepat karena artikel tutorial ini jadi semakin panjang jika di jelaskan secara detil dan memang sayanya yang udah malas nulis lebih panjang. heheehe,..

Pertama kode untuk mengedit. Kode ini akan di panggil jika user mengetikkan "e" untuk mengedit pada pilihan menu. Tulislah kode ini untuk melengkapi kerangka menu yang sebelumnya telah dibuat.

{% highlight cs %}
//Kode untuk mengedit
Console.Write("\n\nMasukkan Data yang akan Diedit = ");
ganti = Convert.ToInt32(Console.ReadLine());
for (int g = 0; g < jumlah; g++){
  if (B[g] == ganti){
    Console.Write("Masukkan Data Baru = ");
    B[g] = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("\n\nData Setelah Diedit = ");

    for (int h = 0; h < jumlah; h++){
      Console.WriteLine("B[{0}] = {1}", h, B[h]);
    }
  }
}
{% endhighlight %}

Selanjutnya kode untuk menghapus yang dipanggil jika pengguna/user mengetikkan "h" sebagai pilihan pada menu.

{% highlight cs %}
/Kode Untuk menghapus
Console.Write("\n\nMasukkan index data yang akan dihapus = ");
hapus = Convert.ToInt32(Console.ReadLine());                 
for (int p = hapus; p < jumlah; p++){
  B[p] = B[p + 1];
  }

Console.Write("Data Baru = \n");
for (int p = 0; p < jumlah - 1; p++){
  Console.WriteLine("B[{0}] = {1}", p, B[p]);
}
{% endhighlight %}

Terakhir kode untuk mencari yang dipanggil ketika user mengetikkan "c" sebagia pilihan di menu.

{% highlight cs %}
//kode untuk mencari
Console.Write("\n\nData Yang akan dicari = ");
cari = Convert.ToInt32(Console.ReadLine());

for (int n = 0; n < jumlah; n++){
  if (cari == B[n]){
    ketemu = 1;
    posisi = n;

    Console.WriteLine("Data {0} Ditemukan Di Posisi {1}", cari, n);
  }
}

if (ketemu == 0){
  Console.WriteLine("Maaf Data yang kamu cari tidak ada.");
}
{% endhighlight %}

Ok, sekarang program console Edit, Hapus, Cari dengan menggunakan kode c# kita sudah jadi. Tekan CTRL+F5 untuk mencoba program tersebut. Semoga bisa bermanfaat dan membantu untuk kalian yang sedang belajar bahasa pemrograman C#. Jika kamu ingin mempelajari saat kamu offline, kamu bisa menyimpan artikel ini dengan menekan CTRL+P di keyboard untuk bahan bacaan offline.

Untuk project lengkap dari artikel ini bisa kamu [unduh disini](https://gist.github.com/rmsubekti/c214adbb980324edb9ef57bc1be456a3){:target="_blank"}, tapi jika kalian bertujuan ingin belajar sebaiknya tuliskan kode seperti yang telah dsampaikan di artikel ini agar sedikit lebih mengerti kode tersebut.
