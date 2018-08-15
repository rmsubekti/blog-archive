---
title:  "Request XML Object Menggunakan Fetch API"
date:   2016-10-15 17:34:26 +0700
categories: Javascript
---
Seperti yang telah kita ketahui bahwa fungsi `fetch()` bisa digunakan untuk membuat network request sama halnya dengan XMLHttpRequest (XHR). Bedanya Fetch API menggunakan Promise, Menggunakan API yang lebih simple dan sederhana dibandingkan dengan API XMLHttpRequest yang terlalu kompleks untuk diingat.

Yang paling menarik dari Fetch API yaitu kita bisa menambahkan opsi request kita sendiri, membuat header object kita sendiri via Header() constructor dan masih banyak lagi, silakan baca  [Using Fetch](https://developer.mozilla.org/id/docs/Web/API/Fetch_API/Using_Fetch){:nofollow}.

Disini saya mencoba membuat request XML object dari network, kemudian menampilkannya di konsole.

{% highlight javascript%}
var request = new Request('https://bekti.net/feed.xml', {
	method: 'GET',
	mode: 'cors'
});
fetch(request).then(function(response) {
  return response.text();
}).then(function(data) {
  var parser =  new DOMParser();
  var xml = parser.parseFromString(data, "application/xml");

  //Lakukan sesuatu pada xml object
    console.log(xml);

}).catch(function(error) {
  console.error("Uups!", error);
});

{% endhighlight %}

Jika dilihat akan lebih mudah jika membuat request JSON object, plain text atau menggunkan body mixin lain, namun jika kamu ingin mencoba menggunakan object XML tak ada salahnya menggunakan cara diatas.

Disitu saya menggunakan method `Body.text()` dan kemudian memparse ke `XML` menggunakan `DOMParser()`. Kalo dilihat agak sedikit ribet sih, karena tidak ada pilihan untuk XML object pada body mixin. Tapi seenggaknya saya sudah bisa menampilkan xml object di Console dan bisa memproses object tersebut lebih lanjut.
{:nofollow: target="_blank" rel="nofollow"}
