---
layout: post
title: Menambahkan Sidebar dan Header Menu Menggunakan functions.php
date: '2015-03-24T15:30:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.085-07:00'
---
Di wordpress untuk mengatur beberapa bagian dapat menggunakan bantuan dari functions.php. Sebenarnya kita bisa saja membuatnya langsung tanpa bantuan function.php. tapi nanti jika suatu saat kita akan menambahkan bagian tertentu seperti menambahkan widget pada sidebar, maka kita harus menambahkan kode lagi langsung dengan mengedit templatenya. Berbeda jika menggunakan bantuan function maka menambahkan widget hanya melalui menu widget yang langsung dapat di akses dari dasbor wordpress seperti berikut ini:

#### 1. Menambahkan Sidebar Widget
![widget](https://4.bp.blogspot.com/-wVqkFUNOIoU/VRTlzmKzd-I/AAAAAAAAA4w/4MEiRmXkMko/s1600/widget-not%2Bfound.png)

Ok, karena template yang kita buat belum mendukung widget, jadi langsung saja buat saja dengan membuat file **functions.php** dulu di folder template kita kemudian buka file di theme editor untuk menambahkan fungsi berikut ini untuk menambahkan widget.

{% highlight php %}
<?php
/**
* Menambahkan Widget Area
*/
function basictheme_widgets_init(){
  register_sidebar( array(
    'name' => __( 'Widget Area', 'basictheme' ),
    'id' => 'sidebar',
    'description' => __( 'Tambahkan widget di sini untuk ditampilkan di sidebar.', 'basictheme' ),
    'before_widget' => '<aside id=”%1$s” class=”widget %2$s”>',
    'after_widget' => '</aside>',
    'before_title' => '<h2 class=”widget-title”>',
    'after_title' => '</h2>',
  ) );
}
add_action( 'widgets_init','basictheme_widgets_init');
{% endhighlight %}

Nama fungsi bisa dinamai sesukanya yang penting mudah untuk dibaca dan tidak membingunkan, tapi karena nantinya kita membutuhkan lebih dari satu fungsi jadi usahakan setiap fungsi di beri nama dengan nama unik.

Disini juga kamu menemukan yang namanya text domain seperti pada bagian `'name' => __( 'Widget Area', 'basictheme' ) dan 'description' => __( 'Tambahkan widget di sini untuk ditampilkan di sidebar.', 'basictheme' )`. Text Domain ini digunakan untuk mentranslate bahasa template ke bahasa lain yang nantinya teks yang kita tulis bisa diganti ke bahasa lain tanpa harus mencari dan mengeditnya langsung dari template. Pada template wordpress umumnya, file biasanya berada pada folder /languanges pada folder template tersebut.

![widget](https://1.bp.blogspot.com/-d3ih_Zz0fyw/VRTmR8l_diI/AAAAAAAAA44/dy8npPAq0S8/s1600/widget.png)

Kembali ke pembuatan widget untuk sidebar, sekarang kamu sudah bisa menambahkan widget melalui menu tampilan atau juga bisa melalui customizer.

#### 2. Menambahkan Header Menu
Untuk membuat header menu, langkah pertama yaitu membuat fungsi theme setup di file **functions.php**, kemudian mendaftarkan menu melalui fungsi setup theme tersebut seperti berikut ini.

{% highlight php %}
if ( ! function_exists( 'bekti_setup' ) ) :
function basictheme_setup(){
  // Menggunakan fungsi wp_nav_menu() untuk menampilkan navigasi dengan lokasi 'primary'
  register_nav_menus( array(
    'primary' => __( 'Menu Utama', 'basictheme' ),
  ) );
}
endif;
add_action( 'after_setup_theme', 'basictheme_setup' );
{% endhighlight %}

Fungsi theme setup ini digunakan agar template yang dibuat bisa mendukung fitur wordpress yang tersedia. Nah untuk menampilkan menu navigasinya cukup dengan memanggil fungsi `wp_nav_menu()` dimanapun tempat ingin di tampilkan. Disini saya mencoba untuk menampilkannya sebagai header menu untuk template ini tepatnya di header template. kodenya seperti berikut ini:

{% highlight php %}
<?php if ( has_nav_menu( 'primary' ) ) : ?>
<nav id=”site-navigation” class=”main-navigation nav” role=”navigation”>
  <?php
  // Primary navigation menu.
  wp_nav_menu( array(
    'menu_class' => 'nav-menu',
    'theme_location' => 'primary',
    'container'=>'false',
  ) );
  ?>
</nav><!– .main-navigation –>
{% endhighlight %}

Pastikan theme location adalah primary seperti yang telah didaftarkan pada file **function.php**. Kamu juga bisa membuat lebih dari satu menu navigasi, cukup mendaftarkan lagi dengan menambahkan array menu pada theme setup seperti berikut ini:

{% highlight php %}
register_nav_menus( array(
  'primary' => __( 'Menu Utama', 'basictheme' ),
  'tambahan'=> __( 'Menu Tambahan', 'basictheme' ),
  ) );
{% endhighlight %}

dengan begitu kamu bisa memanggilnya menurut lokasinya dengan menambahkannya ke array `theme_location` pada fungsi `wp_nav_menu()` di bagian template yang kamu inginkan.

Ok, template ini sekarang sudah hampir sempurna, untuk menyempurnakan tampilannya ubah stylesheet css menjadi seperti berikut ini:

{% highlight css %}
/*
Theme Name  :Basic Theme
Author      : Rahmat Subekti
Author URI  : http://rmsubekti.github.io
Theme URI   : http://rmsubekti.github.io
Description : Basic theme is template created by author
Version     : 0.1
License     : GNU General Public License v2 or later
License URI : http://www.gnu.org/licenses/gpl-2.0.html
Text Domain : basictheme
Tags        : white, Brown, Semi responsif
*/

a:link {
  text-decoration:none;
}
a:visited {
  color:#000;
  text-decoration:none;
}
a:hover {
  color:#555;
  text-decoration:none;
}
a img {
  border-width:0;
}
body {
  margin:auto !important;
}
.container, .nav-menu {
  margin:0 auto;
  width: 1050px;
}

/* Header Style
———————————————–*/
.site-header {
  background-color: #f5f5f5;
  width:100%;
}
.site-title {
  margin:0 ;
  font-size: 2.5em;
  line-height: 78px;
  letter-spacing: -1px;
}
.site-description{
  margin:0;
}

/*NAV Menu
———————————————–*/
.nav {
  line-height:0;
  background: #f9f9f9;
  border-bottom: 2px solid #0fa1e0;
}
.nav ul,
.nav li,
.nav span,
.nav a {
  padding: 0;
  position: relative;
}
.nav :after,
.nav ul:after {
  content:'';
  display: block;
  clear: both;
}
.nav a {
  background: #f9f9f9;
  color: #777;
  display: block;
  padding: 19px 20px;
  text-decoration: none;
}
.nav ul {
  list-style: none;
}
.nav > ul > li {
  display: inline-block;
  float: left;
  margin: 0 ;
}
.nav .align-center {
  text-align: center;
}
.nav .align-center > ul > li {
  float: none;
}
.nav .align-center ul ul {
  text-align: left;
}
.nav .align-right > ul {
  float: right;
}
.nav .align-right ul ul {
  text-align: right;
}
.nav > ul > li:hover:after, .current-menu-item :after, .current_page_item :after{
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  bottom: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #0fa1e0;
  margin-left: -7px;
}
.nav .align-right > ul > li:first-child > a,
.nav .align-center > ul > li:first-child > a {
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.nav .align-right > ul > li:last-child > a {
  border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
}
.nav > ul > li:hover > a {
  color: #070707;
  background: #eee;
}

/* Content Style
———————————————–*/
.content-area {
  width: 70%;
  float: left;
}
.site-content {
  padding-right:1.6%;
}

/* Sidebar Style
———————————————–*/
.sidebar {
  width: 29.6%;
  min-width: 310px;
  float: right;
  margin-left:-29.6%;
}
.widget-title {
  margin-bottom: 0;
}
.widget ul {
  padding: 0;
  list-style: none;
}

/* Footer Style
———————————————–*/
.site-footer {
  padding: 16px 0 16px 0px;
  border-top: 1px solid #ebebeb;
  clear: both;
  line-height: 1.6em;
  letter-spacing: .1em;
}
{% endhighlight %}

Nah, ini dia hasil setelah stylesheet diubah, mungkin kamu juga bisa memodifikasinya agar tampilannya lebih baik dari ini.

![theme](https://1.bp.blogspot.com/-nS3rwK0wyVY/VRTnxbwAOfI/AAAAAAAAA5E/Fs0TCQ4cLTo/s1600/the%2Btheme.png)

Masih dalam topik pembuatan template selanjutnya kita akan melengkapi template ini dengan menambahkan [Content template dan membuat halaman arsip, halaman search dan pos](./membuat-custom-content-dan-halaman-pada.html).
