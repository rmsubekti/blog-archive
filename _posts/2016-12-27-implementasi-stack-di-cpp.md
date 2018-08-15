---
title:  "Implementasi Stack di C++"
date:   2016-12-29 17:34:26 +0700
categories: cpp
---
Stack adalah tipe data abstrak yang umum digunakan pada seluruh pemrograman komputer.

Stack sendiri sama seperti halnya tumpukan jika di dunia nyata, misalnya tumpukan piring yang telah selesai dicuci, akan ditumpuk dari bawah ke atas, kemudian setelah semua bersih maka diambil satu persatu dari atas ke bawah di masukkan ke lemari atau rak piring.

-----

### Operasi Pada Stack

Operasi utama pada stack yaitu `push` untuk menambahkan data ke dalam stack dan `pop` untuk mengeluarkan atau menghapus data dari stack.

#### 1. Menambahkan Data Ke stack
Proses penambahan data ke dalam stack disebut operasi Push.

Langkah - langkah operasi push diantaranya.

1. Memeriksa apakah tumpukan(stack) penuh

2. Jika tumpukan penuh, maka sudah tidak ada ruang untuk memasukkan data ke tumpukan, jadi cukup tampilkan pesan bahwa tumpukan sudah penuh.

3. Jika masih ada ruang, tambahkan satu nilai pada atas(`top`) tumpukan untuk menunjukkan ke ruang kosong selanjutnya

4. Menambahkan data dimana ruang kosong yang telah ditunjuk oleh `top`.

#### 2. Menghapus Data dari stack
Mengambil data bersamaan dengan menghapus data dari stack disebut dengan operasi pop.

Elemen pada stack tidak benar - benar terhapus hanya saja penunjuk ruang(`top`) di kurangi nilainya dengan satu. Tapi pada implementasi stack sendiri pop akan benar-benar menghapus data tersebut dari tumpukan.

Langkah - langkah operasi pop diantaranya.

1. Memeriksa apakah tumpukan kosong.

2. Jika tumpukan kosong, maka sudah tidak ada lagi data untuk dihapus, maka cukup tampilkan pesan bahwa tumpukan kosong.

3. Jika masih ada data pada tumpukan, maka akses data yang paling atas (`top`)

4. kemudian mengurangi nilai penunjuk `top`.

> **INFO :** Disini kita hanya akan mempelajari dasar program stack di cpp. Jika ingin melihat secara langsung proses tumpukan pada c++ bisa kompile dan jalankan [kode program berikut ini](https://gist.github.com/rmsubekti/92992eca2faf8f5b18e757d7c55fc2cc).
{: .info}

------

### Program Stack

1. Untuk mengimplementasikan program stack di C++ kita membutuhkan tiga method atau fungsi `push()`; untuk menambahkan data ke tumpukan, `pop()`; untuk me ngeluarkan data dari tumpukan dan `printStack()` untuk menampilkan data yang ada di tumpukan.

2. Selain tiga fungsi tersebut, kita akan membuat dua fungsi opsional untuk mengecek apakah tumpukan kosong `isEmpty()` dan tumpukan penuh `isFull()`.

3. Untuk menyimpan data kita bisa menggunakan empty array dengan maksimum array yang nanti akan kita definisikan sebagai maksimum tumpukan.

4. Agar data tumpukannya terstruktur kita bisa menggunakan struct sehingga lebih mudah mengakses data `top` dan array datanya sendiri seperti sebuah object.

5. Karena ini adalah program konsole maka tentu kita juga akan membuat fungsi main().

---

### Kode Program Stack

#### 1. Preprocessor dan Headerfile

```cpp
#include <iostream>
#define MAX 10
using namespace std;
```

Disini kita hanya menggunakan dua baris preprocessor untuk mendefinisikan header file `iostream` untuk standard input/output stream dan `MAX` untuk maksimum data array pada stack/tumpukan.

#### 2. Struct data

```c++
//Deklarasi struct tumpukan
struct Stack {
	int top, data[MAX];
}Tumpukan;
```

Pada `struct` kita mendeklarasikan `top` untuk menunjukkan data teratas pada tumpukan dan array `data[]` dengan jumlah array dari data maksimum yang telah di definisikan sebelumnya yaitu `MAX`.

#### 3. Inisialisasi Nilai top

```cpp
void init(){
	Tumpukan.top = -1;
}
```

Untuk memastikan penunjuk (`top`) berada pada posisi indeks ke `0` pada saat menambahkan data ke tumpukan maka disini kita perlu memberikan nilai awal yaitu `-1`.

#### 4. Memeriksa Tumpukan

```cpp
bool isEmpty() {
  return Tumpukan.top == -1;
}

bool isFull() {
	return Tumpukan.top == MAX-1;
}
```

Kedua fungsi ini akan digunakan untuk memeriksa apakah tumpukan penuh `isFull()` (fungsi pertama) dan tumpukan  kosong `isEmpty()`, keduanya mengembalikan nilai boolean, jadi kita cukup mengembalikan nilai perbandingan pada fungsi masing - masing.

1. Pada fungsi `isEmpty()` akan mengembalikan nilai `true` jika  nilai `Tumpukan.top` sama dengan `-1`, atau `false` jika tidak sama.

2. Pada fungsi `isFull()` akan mengembalikan nilai `true` jika  nilai `Tumpukan.top` sama dengan maksimum data array yang telah ditentukan dikurang satu `MAX-1`, atau `false` jika tidak sama.

#### 5. Menambahkan Data ke Tumpukan

```cpp
void push() {
   if (isFull()) {
		cout << "\nTumpukan penuh"<<endl;
	}
	else {
    Tumpukan.top++;
    cout << "\nMasukkan data = "; cin >> Tumpukan.data[Tumpukan.top];
    cout << "Data " << Tumpukan.data[Tumpukan.top] << " masuk ke stack"<<endl;
	}
}
```

Untuk menginputkan data ke tumpukan hal utama yang perlu kita lakukan adalah memeriksa apakah tumpukan penuh atau tidak, jika penuh, maka kita tidak dapat menambahkan data ke tumpukan karena sudah tidak ada ruang lagi yang tersedia. Jadi cukup tampilkan pesan bahwa Tumpukannya penuh.

Jika masih ada ruang maka tambahkan nilai Tumpukan.top dengan `1`. Kemudian masukkan data ke ruang yang ditunjukkan oleh `top`.

#### 6. Mengambil Data dari Tumpukan

```cpp
void pop() {
	if (isEmpty()) {
		cout << "\nData kosong\n"<<endl;
	}
	else {
    cout << "\nData "<<Tumpukan.data[Tumpukan.top]<<" sudah terambil"<<endl;
    Tumpukan.top--;
	}
}
```

Sebelum mengambil data, kita perlu memeriksa apakah tumpukan kosong atau tidak, karena kita tidak dapat mengambil data yang tidak ada pada tumpukan.

Jika tumpukan kosong maka cukup tampilkan pesan bahwa tidak ada data di tumpukan tersebut.

Jika masih ada data pad tumpukan maka Tampilkan data dengan mengambil data teratas dari tumpukkan dan menghapus data tersebut dengan mengurangi nilai `top`.

#### 7. Menampilkan data pada tumpukan

```cpp
void printStack() {
	if (isEmpty()) {
		cout << "Tumpukan kosong";
	}
	else {
    cout << "\nTumpukan : ";
		for (int i = Tumpukan.top; i >= 0; i--)
			cout << Tumpukan.data[i] << ((i == 0) ? "" : ",");
	}
}
```

Sama halnya pada saat mengambil data dari tumpukan, kita juga perlu memeriksa apakah tumpukan tersebut kosong atau tidak.

Jika tidak ada data di tumpukan maka tampilkan pesan bahwa Tumpukan kosong dan data tidak dapat di tampilkan.

Jika masih ada data maka tampilkan data satu -persatu dari tumpukan dengan menggunakan perulangan.

#### 8. Menampilkan Menu

```cpp
int main() {
	int pilihan;
	init();
	do {
    printStack();
		cout << "\n1. Input (Push)\n"
        <<"2. Hapus (Pop)\n"
        <<"3. Keluar\n"
        <<"Masukkan Pilihan: ";
		cin >> pilihan;
		switch (pilihan)
		{
		case 1:
			push();
			break;
		case 2:
			pop();
			break;
		default:
      cout << "Pilihan tidak tersedia" << endl;
			break;
		}
	} while (pilihan!=3);
}
```

Setelah semua data, variabel dan fungsi selesai kita deklarasikan dan di inisialisasikan, selanjutnya kita bisa membuat menu dengan `do ... while` dengan `switch` di dalamnya.

Sebelum menampilkan menu disini kita menampilkan data yang ada di stack menggunakan `printStack()`, sehingga user dapat melihat data pada tumpukan.

Selanjunya menampilkan pilihan menu, jika user memilih pilihan pertama maka jalankan fungsi `push()` dan pilihan kedua akan menjalankan fungsi `pop()`. Selama pilihan user tidak sama dengan `3` yaitu pilihan ketiga maka fungsi `printStack()` dan menu akan terus ditampilkan. Jika user memilih pilihan ketiga, maka while akan berhenti menampilkan menu dan aplikasi akan ditutup.

---
> **Full Code Demo**
>
> Lihat Full Demo Disini : [cpp stack code demo](https://repl.it/@bekti/cpp-stack)
{: .info }

Sama dengan program `queue` yang telah kita buat [pada post sebelumnya]({{ site.baseurl }}{% post_url 2016-12-21-implementasi-queue-di-cpp %}), Library `stack` juga tersedia di c++, Jadi disini kita hanya belajar apa yang terjadi di dalam sana saat kita menggunakan library tersebut, ya walaupun tidak begitu mirip tapi dasarnya sama.

{:nofollow: target="_blank" rel="nofollow"}
