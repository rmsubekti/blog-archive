---
layout: post
title: Apa itu .NET Framework?
date: '2014-06-24T09:43:00.000-07:00'
modified_time: '2016-06-23T14:44:44.427-07:00'
---
.NET Framework adalah perangkat lunak yang menyediakan alat bagi developer untuk membuat aplikasi berbasis .NET, selain itu .NET Framework juga berfungsi menjalankan aplikasi dan layanan berbasis web. .NET Framework merupakan bahasa dan platform-independen yang kaya akan class library dikenal sebagai **Framework Class Library** ( FCL ) yang mendukung banyak tugas umum dan menyederhanakan tugas yang sulit dan memungkinkan pengembang (Developer) menggunakan waktunya lebih efektif pada masalah yang akan dia pecahkan melalui aplikasi yang akan dibuatnya dengan cara yang se-efesien mungkin.

.NET Framework dirancang untuk melakukan hal berikut:

- Membantu mengelola instalasi perangkat lunak komputer untuk memastikan tidak mengganggu perangkat lunak lain yang telah di instal sebelumnya.
- Menyediakan eksekusi kode yang aman.
- Menggunakan standar industri untuk semua komunikasi menggunakan kode yang memungkinkan integrasi dengan kode aplikasi non-.NET.
- Memberikan pengalaman pengembang yang konsisten di semua jenis aplikasi yang merupakan bahasa dan platform-independen.
- Menyediakan lingkungan runtime yang meminimalkan atau mengurangi masalah kinerja script atau  bahasa tafsiran.

Untuk melakukan tugasnya .NET Framework memiliki 4 komponen pendukung :

- Common Language Runtime ( CLR )
- Class Library
- Paralel Computing Platform
- Dynamic Language Runtime (DLR)

1. ### Common Language Runtime

    *Common Languange Runtime* (CLR)merupakan inti dari .NET Framework yang menyediakan tipe sistem terpadu (**Unified Type System**) dan mengelola lingkungan runtime.

    Keduanya membentuk dasar untuk pengembangan dan menjalankan aplikasi dengan bahasa dan platform-independen serta membantu menghilangkan, atau mengurangi kesalahan pada pemrograman umum.

    1. #### Common Type System ( CTS )
        Tipe sistem terpadu, Common Type System (CTS), memungkinkan untuk semua bahasa .NET  berbagi jenis ( Type ) definisi yang sama, memungkinkan jenis (type) tersebut untuk dimanipulasi secara konsisten. Ini akan membantu memastikan aplikasi yang ditulis dengan benar, dengan  :

        - Menghapus kemungkinan data yang tidak kompatibel dapat diberikan ke tipe.
        - Memungkinkan setiap bahasa .NET untuk memiliki deskripsi yang sama dari tipe, terlepas dari bahasa apa yang digunakan untuk menentukan jenis itu.
        - Melaksanakan dengan cara yang konsisten di mana bahasa memanipulasi tipe

        Karena Common Type System menentukan definisi bagaimana jenis ( Type ) terlihat dan berperilaku layaknya bahasa-independen, maka harus memperhitungkan perbedaan dalam bahasa-bahasa tersebut.

        Common Type System menyediakan minimal satu set aturan bahasa .NET (dan akibatnya, compiler-nya) yang harus mengikuti, kemudian disebut spesifikasi bahasa umum atau **Common Language Specification** (CLS).

        Definisi umum ini juga memungkinkan gagasan integrasi bahasa, yang memungkinkan untuk menggunakan jenis ( Type ) didefinisikan dalam bahasa lain seolah-olah itu didefinisikan secara native.

    2. #### Common Intermediate Language
        *Common Type System* dan *Common Language Specification* membantu memenuhi tujuan bahasa dan platform-independen, karena tidak baik jika compiler menghasilkan kode objek yang dapat dieksekusi terkait dengan platform hardware.

        Kode Untuk mengatasi masalah ini, sebagian dikompilasi ke dalam bahasa tingkat rendah yang disebut **Common Intermediate Language** (CIL). CIL bisa dikatakan sebagai bahasa assembly yang berdiri sendiri, dengan instruksi tingkat rendah yang mewakili sebuah kode.

        Assembly merupakan bagian dari unit kompilasi, atau paket, yang berisi instruksi CIL dan memberikan batas logis untuk mendefinisikan jenis ( Type ). Karena Assembly sebagian dikompilasi, diantaranya dapat berupa 32 - atau 64-bit, tergantung pada sistem operasi dan perangkat keras.

        Kemampuan ini benar-benar berarti bahwa aplikasi dikelola dalam platform-independen dan pada saat yang sama dapat mengambil keuntungan dari teknologi perangkat keras tanpa mengkompilasi ulang atau menambahkan instruksi khusus.

    3. #### Virtual Execution System ( VES )
        Bagian terpenting dari Common Language Runtime adalah **Managed Runtime Environment** atau disebut **Virtual Execution System** (VES), yang menangani layanan inti tingkat rendah kebutuhan aplikasi. Seperti halnya aplikasi Java yang memerlukan Java Virtual Machine (JVM) untuk menjalankannya, aplikasi yang dikelola dengan menggunakan CLR maka dibutuhkan VES untuk menjalankannya.

        Ketika aplikasi berbasis .NET dimulai, VES bertanggung jawab untuk memuat kode CIL, mengeksekusi kode itu dan pada akhirnya, mengelola alokasi memori yang diperlukan oleh aplikasi. Dalam kata lain, VES menyediakan layanan dan infrastruktur antara platform dan bahasa abstrak.

        Sebagai bagian dari proses loading dan kompilasi, VES melakukan berbagai validasi dan verifikasi cek untuk memastikan bahwa format file, metadata assembly, dan instruksi CIL sendiri tidak mengizinkan akses memori ilegal.

        Hal ini memastikan bahwa aplikasi hanya dapat mengakses memori atau sumber informasi lainnya yang telah secara eksplisit diberikan akses. Lingkungan terbatas ini disebut juga bak pasir ( Sandbox ).

        Salah satu layanan yang disediakan VES adalah **Just-In-Time** (JIT) compiler. Kompilasi Just-In-Time adalah proses mengambil kode CIL yang disusun sebagian dan menghasilkan kode objek executable, atau kode asli, pada saat runtime.

        JIT compiler membantu mengoptimalkan untuk mengkompilasi kode CIL ke dalam kode obyek yang sangat efisien, berjalan pada permintaan, dan cache kode dikompilasi untuk penggunaan selanjutnya.

    4. #### Memory Management and Garbage Collection
        Manajemen memori merupakan masalah klasik dalam banyak bahasa pemrograman dan merupakan sumber yang berpotensi *Error*. Dalam bahasa pemrograman, pengembang bertanggung jawab untuk mengalokasikan (allocating) dan mengembalikan alokasi semula (dealocating) memori pada waktu yang tepat.

        .NET Framework menyelesaikan masalah ini dengan mengendalikan alokasi memori ini dan mengembalikan ke alokasi semula adalah sebagai bagian dari VES.

        Manajemen memori otomatis ini juga dikenal sebagai pengumpulan sampah (Garbage Collection). Pengumpulan sampah membebaskan para developer untuk melepaskan memori yang sudah tidak digunakan.

        Hal ini memungkinkan untuk membuat aplikasi yang lebih stabil dengan mencegah banyak kesalahan-kesalahan pemrograman umum serta memfokuskan waktu pada logika bisnis dan aplikasi  yang dikembangkan.

2. ### Framework Class Library
    Meskipun CLR membentuk inti dari NET Framework, *Framework Class Library* (FCL) benar-benar memberikan substansi. Perpustakaan kelas ini mirip dengan perpustakaan kelas Java, C+ + Standard Template Library (STL), Microsoft Active Template Library (ATL),  Microsoft Foundation Classes (MFC), Object Borland Windows Library (OWL), atau salah satu dari berbagai kelas lain perpustakaan tersedia pada saat ini.

    Sama seperti perpustakaan pada umumnya, FCL adalah sejenis perangkat yang dapat digunakan kembali, memungkinkan untuk mencapai tingkat produktivitas yang tinggi pengembang dengan menyederhanakan banyak tugas pemrograman umum.

    Pada tingkat terendah adalah **Base Class Library** (BCL) yang berfungsi sebagai standar run-time untuk setiap Bahasa .NET dan memberikan jenis yang mewakili jenis intrinsik CLR, koleksi, manipulasi string, akses file dasar dan berbagai operasi lainnya termasuk struktur data.

    Secara total, tersedia 172 type umum di BCL dan 331 jumlah tipe umum dalam  Perpustakaan Standar seperti yang didefinisikan oleh Standar ECMA-335: *Common Language Infrastructure* (CLI), Edisi 4 / Juni 2006.

    Kelas-kelas yang tersedia di FCL difokuskan pada bidang fungsional tertentu, seperti menyediakan akses data, dukungan XML, dukungan globalisasi, diagnostik, konfigurasi, jaringan, komunikasi, dukungan alur kerja bisnis, aplikasi web, dan aplikasi Windows desktop .

    **Namespaces**
    
    Dengan ribuan kelas di .NET Framework Class Library, Perlu ada cara untuk mencegah ambiguitas antara nama type dan menyediakan mekanisme pengelompokan dengan menggunakan hirarki.

    .NET Framework Menggunakan konsep **Namespaces** untuk mencegah hal ini. Namespace hanyalah sebuah koleksi type dan tidak berpengaruh pada aksesibilitas tipe. Namespaces dapat dibagi di beberapa *essembly*.

    .NET Framework Menggunakan sifat hirarkis untuk menyediakan kerangka kerja yang progresif, menciptakan sebuah platform pengembangan yang kuat dan mudah digunakan.

3. ### Parallel Computing Platform
    Menulis aplikasi dapat dikelola baik dengan multithreaded, asynchronous dan kode unmanaged namun sangat sulit untuk menuliskan kode dengan benar. .NET Framework 4.0 menyederhanakan menulis aplikasi ini dengan platform komputasi paralel.

    Ini adalah model pemrograman baru untuk baik managed dan unmanaged code dan meningkatkan tingkat abstraksi sehingga tidak perlu lagi berpikir tentang konsep-tingkat yang lebih rendah seperti tread dan lock.

    Untuk managed code, platform komputasi paralel meliputi implementasi paralel untuk perulangan umum, implementasi paralel LINQ untuk Objects, serta lock-free dan thread-safe collections. Platform komputasi paralel menyederhanakan mekanisme menulis kode secara efektif mengambil keuntungan dari beberapa prosesor.

4. ### Dynamic Language Runtime
    Dynamic Language Runtime (DLR) diperkenalkan di .NET Framework 4.0 dan lingkungan runtime tambahan menyediakan layanan bahasa dan dukungan untuk bahasa dinamis.

    DLR dibangun di atas Common Language Runtime berarti bahasa dinamis  ini dapat mengintegrasikan dengan  Bahasa .NET lainnya. DLR juga memungkinkan fitur dinamis untuk bahasa yang ada statis diketik seperti C #, yang memungkinkan untuk mendukung ekspresi konsisten ketika bekerja dengan objek yang dinamis dari sumber manapun.

    Dengan masuknya DLR, dukungan untuk bahasa dinamis, dan memungkinkan fitur dinamis dalam bahasa statis, pengembang sekarang bebas untuk memilih bahasa terbaik mungkin untuk menyelesaikan tugas dan yakin bahwa pengembang lain dan bahasa lainnya NET. Dapat dengan mudah menggunakan kode dinamis yang mereka buat.
