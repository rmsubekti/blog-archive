---
title:  "Implementasi Queue di C++"
date:   2016-12-21 17:34:26 +0700
categories: cpp
---
Queue atau antrian merupakan suatu kumpulan data yang memiliki head/front dimana data dikeluarkan (dequeue) dan tail/rear dimana data dimasukkan (enqueue) ke antrian.

-----

### Proses QUEUE

Seperti halnya pada antrian yang biasa kita lakukan sehari-hari, di manapun. Antrian dimulai dari depan ke belakang, jika didepan belum pergi meninggalkan antrian maka antrian terus bertambah dari belakang dan antrian paling belakang disini dinamakan rear/tail.

Jadi selama antrian terus bertambah (enqueue) maka antrian yang paling akhir adalah tail/rear.

|**front**|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**1**|2|3|4|5|6|**7**|
|||||||**rear**|

Jika ada yang keluar dari antrian (dequeue) maka data tersebut adalah yang paling depan (head/front), dan data berikutnya setelah data yang keluar berubah menjadi yang paling depan (head/front).

|**front**|
|:---:|:---:|:---:|:---:|:---:|:---:|
|**2**|3|4|5|6|**7**|
||||||**rear**|

Queue menggunakan metode FIFO, dimana yang masuk pertama kali akan keluar pertama kali juga.

*[FIFO]: First In First Out

----

### Program QUEUE

1. Untuk mengimplementasikan program queue di C++ kita membutuhkan tiga method atau fungsi `enqueue();` untuk menambahkan data ke antrian,  `dequeue();` untuk me ngeluarkan data dari antrian dan `printQueue()` untuk menampilkan queue.

2. Selain tiga fungsi tersebut, kita akan membuat dua fungsi opsional untuk mengecek apakah antrian kosong `isEmpty()` dan antrian penuh `isFull()`.

3. Untuk menyimpan data kita bisa menggunakan **empty array** dengan maksimum array yang nanti akan kita definisikan sebagai maksimum antrian, jadi kita bisa mengetahui indeks pertama adalah **front** dan data indeks yang kosong untuk menambahkan data sebagai **rear**-nya.

4. Untuk data antriannya terstruktur kita bisa menggunakan `struct` sehingga lebih mudah mengakses data **front**, **rear** dan **array** datanya sendiri seperti sebuah object.

5. Karena ini adalah program konsole maka tentu kita juga akan membuat fungsi `main()`.

---

### Kode Program QUEUE

#### 1. Preprocessor dan Header File
```c++
#include <iostream>
#define MAX 20 //maksimum data queue
using namespace std;
```
{: data-filename="queue.cpp" }

Disini kita hanya menggunakan dua baris preprocessor untuk mendefinisikan header file `iostream` untuk standard input/output stream dan `MAX` untuk maksimum data array pada queue/antrian.

#### 2. Struct data

```c++
//Deklarasi struct antrian
struct Queue {
	int front, rear, data[MAX];
}Q;
```

Pada `struct` kita mendeklarasikan `front`, `rear` dan array `data[]` dengan jumlah array dari data maksimum yang telah di definisikan sebelumnya yaitu `MAX`.

Deklarasi variabel pada `struct` sama halnya dengan pendeklarasian variabel pada umumnya, karena disini kita hanya memiliki tipe data yang sama, jadi kita bisa menghemat baris dengan menyebariskan tiga variabel bertipe **integer**.

> **INFO :** Disini kita hanya membuat program untuk mengetahui dasar implementasi queue di c++, Sebenarnya kita juga bisa menggunakan variabel `data` dengan tipe data lain selain integer, atau  sebagai data `struct` seperti pada [program sederhana ini](https://gist.github.com/rmsubekti/be078fbeefad3346ea8f5924685a1437#file-sirm-cpp-L9L31){:nofollow}.
{: .info }

#### 3. Memeriksa antrian

```c++
//cek apakah antrian penuh
bool isFull() {
	return Q.rear == MAX;
}

//cek apakah antrian kosong
bool isEmpty() {
	return Q.rear == 0;
}
```

Kedua fungsi ini akan digunakan untuk memeriksa apakah antrian penuh `isFull()` (fungsi pertama) dan antrian  kosong `isEmpty()`, keduanya mengembalikan nilai boolean, jadi kita cukup mengembalikan nilai perbandingan pada fungsi masing - masing.

1. Pada fungsi `isFull()` akan mengembalikan nilai `true` jika  nilai `Q.rear` sama dengan maksimum data array yang telah ditentukan `MAX`, atau `false` jika tidak sama.

2. Pada fungsi `isEmpty()` akan mengembalikan nilai `true` jika  nilai `Q.rear` sama dengan `0`, atau `false` jika tidak sama.

#### 4. Menampilkan Antrian

```c++
//Menampilkan Queue
void printQueue() {
	if (isEmpty()) {
    cout << "Antrian kosong"<<endl;
	}
	else {
		cout << "QUEUE : ";
		for (int i = Q.front; i < Q.rear; i++)
		//menambahkan koma jika data tidak terdapat di antrian pertama
			cout << Q.data[i] << ((Q.rear-1 == i) ? "" : ",");
		cout << endl;
  }
}
```

Untuk menampilkan antrian, kita perlu memeriksa apakah antriannya kosong. Jika kosong maka tidak ada data untuk ditampilkan, jadi cukup tampilkan pesan. Tapi jika antrian berisi data atau ada antrian disana maka tampilkan data yang ada di antrian menggunakan `for` loop.

Disini kode di dalam perulangan/loop hanyalah elemen setiap data yang telah dimasukkan dengan menggunakan koma kecuali data terakhir.

> **Info :** Mungkin kalian bertanya kenapa kita tidak memulai membuat fungsi yang utama dari program yang kita tulis yaitu `enqueue()`,  `dequeue()` dan fungsi dan kode lain setelahnya.
>
> Ini dikarenakan kompiler pada c++ membaca kode yang kita tulis dari baris atas ke bawah. Kompiler tidak akan mengkompile program jika ada variabel atau fungsi yang tidak di definisikan atau di deklarasikan. Kompiler juga tidak akan mengkompile program dengan variabel atau fungsi yang di didefinisikan di baris paling bawah, tapi di panggil pada baris kode di atasnya.
{: .info }

#### 5. Input Data ke antrian

```c++
//manambahkan data ke antrian
void enqueue() {
	if (isFull())
	{
		cout << "Antrian penuh!"<<endl;
	}
	else {
		int data;
		//menambahkan data ke antrian
		cout << "Masukkan Data : ";cin >> data;
		Q.data[Q.rear] = data;
		//menempatkan tail pada elemen data terakhir yang ditambahkan
		Q.rear++;
		cout << "Data ditambahkan\n";
		printQueue();
	}
}
```

Untuk menginputkan data ke antrian hal utama yang perlu kita lakukan adalah memeriksa apakah antrian penuh atau tidak, jika penuh, maka kita tidak dapat menambahkan data ke antrian karena sudah tidak ada ruang lagi yang tersedia.

Jika masih ada ruang maka inputkan data ke antrian dan tambahkan satu nilai ke `Q.rear` dimana data tersebut berada pada antrian paling belakang.

Disini kita juga memanggil fungsi `printQueue()` yang telah didefinisikan pada baris kode sebelumnya, secara langsung setelah data ditambahkan. Jadi user bisa melihat data ada di dalam antrian.


#### 6. Mengambil Data antrian

```c++
// mengambil data dari antrian
void dequeue() {
	if (isEmpty())
	{
		cout << "Antrian masih kosong"<<endl;
	}
	else{
		cout << "Mengambil data \"" << Q.data[Q.front] << "\"..." << endl;
		//menggeser antrian data ke head
		for (int i = Q.front; i < Q.rear; i++)
			Q.data[i] = Q.data[i + 1];
		//menempatkan tail pada data terakhir yang digeser
		Q.rear--;
		printQueue();
	}
}
```

Sama halnya dengan menampilkan antrian, untuk mengambil data dari dalam antrian atau mengeluarkannya (dequeue), pertama kali kita perlu memeriksa apakah ada data dalam antrian. Karena kita tidak dapat menghapus data yang tidak ada pada antrian.

Jika ada data pada antrian, maka geser data ke antrian palng depan atau `Q.front`, disini kita akan menimpa data yang keluar dari antrian yang paling depan dan kemudian mengurangi satu nilai `Q.rear`.

#### 7. Menampilkan Menu

```c++
int main() {
	int choose;
	do
	{
		//Tampilan menu
		cout << "-------------------\n"
			<< "   Menu Pilihan\n"
			<< "-------------------\n"
			<< " [1] Enqueue \n"
			<< " [2] Dequeue\n"
			<< " [3] Keluar \n\n"
			<< "-------------------\n"
			<< "Masukkan pilihan : "; cin >> choose;
		switch (choose)
		{
		case 1:
			enqueue();
			break;
		case 2:
			dequeue();
			break;
		default:
			cout << "Pilihan tidak tersedia";
			break;
		}
	} while (choose !=3);
	return 0;
}
```

Setelah semua fungsi dan variabel yang kita butuhkan telah tersedia, langkah terakhir adalah menggunakan fungsi-fungsi dan variabel tersebut menjadi sebuah program yang kita inginkan (program queue) dengan memanggilnya dan memolesnya menjadi sebuah menu pada fungsi main. Disini kita hanya perlu menggunakan perulangan `while` dan `switch` untuk menentukan pilihan user.

`switch` akan memeriksa pilihan user (disini adalah nilai variabel `choose` dengan tipe data integer). Disini hanya ada dua pilihan. pilihan pertama jika user ingin menambahkan data ke antrian dan  pilihan kedua jika user ingin menghapus atau mengeluarkan data dari antrian. Selain dari kedua pilihan tersebut maka tampilkan pesan `pilihan tidak tersedia`.

Sedangkan `while` sendiri akan mengulang pilihan pada `switch`, selama user tidak memilih pilihan dengan nilai 3 atau `choose == 3`.

---

> **Full Code Demo**
>
> Lihat Full Demo Disini : [cpp queue code demo](https://repl.it/@bekti/cpp-queue)
{: .info }

Sebenarnya di C++ sudah ada library untuk membuat queue, jadi untuk membuat queue kita cukup menambahkan header file `queue` pada awal baris dan selanjutnya kita bisa menggunakan method dan fungsi yang telah disediakan untuk membuat antrian seperti `empty`, `size`, `front`, `back`, `push_back`, `pop_front` dan lainnya.

Program kita disini hanya untuk mempelajari dasar dari queue itu sendiri, jadi mungkin banyak sekali perbedaan dengan yang ada di library. Nah, jangan sungkan untuk menyalin, memodifikasi dan mempelajari program yang telah kita buat diatas, dan mohon gunakan untuk kebaikan ya. 😺😺😺

{:nofollow: target="_blank" rel="nofollow"}
