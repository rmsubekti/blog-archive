---
layout: post
title: Mempersiapkan Markup dan Stylesheet Template Wordpress
date: '2015-03-22T15:30:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.106-07:00'
---
Seperti yang kita ketahui saat ini banyak sekali template wordpress gratis yang bisa dipilih dan diterapkan langsung melalui theme adder. Tapi untuk memilih dan mencari template yang pas untuk blog kita terkadang sedikit sulit, apalagi jika kamu ingin membuat tampilan blog tersebut berbeda dan memiliki ciri tersendiri. Membuat template sendiri mungkin adalah pilihan terbaik untuk menyesuaikan template sesuai dengan keinginan. Dan karena itulah artikel ini dibuat.

Sebenarnya template yang akan dibahas disini adalah salah satu keisengan saya untuk mencoba membuat template yang pernah saya buat bisa digunakan di wordpress. Ini adalah pengalaman pertama saya membuat template wordpress jadi mungkin banyak sekali kekurangan dari sini. Tapi semoga tetap bermanfaat untuk kalian yang juga ingin memulai membuat template wordpress.

### Persiapan Alat Dan Bahan

Untuk langkah awal ini, alat dan bahan untuk membuat template wordpress hanya cukup membuat dua file kosong masing-masing file css dan php sebagai bahan, CMS wordpress dan xampp serta text editor sebagai alat editornya.

#### Menempatkan Template Folder
Untuk menempatkan dua file kosong yang dibuat tadi, buat folder baru pada folder themes pada instalan wordpress, di sini folder tersebut letaknya di *D:\xampp\htdocs\wordpress\wp-content\themes*. Usahakan folder template yang dibuat di beri nama sesuai dengan nama template agar lebih mudah mengetahui template yang ada di folder tersebut. Sebagai contoh disini saya beri nama Basic Theme jadi cukup beri nama folder basic-theme seperti pada gambar.

![Template Folder](https://4.bp.blogspot.com/-PvJXw6PBGE0/VRTee-ZfnMI/AAAAAAAAA3w/fgNma_znk5g/s1600/template-folder.png)

Selanjutnya agar file template yang sudah dibuat dapat dibaca oleh editor wordpress, Edit file css untuk menambahkan komentar yang berisi informasi template. Cukup isi sesuai keinginan kamu dengan format dibawah ini:

{% highlight css %}
/*
Theme Name  : Basic Theme
Theme URI   : http://rmsubekti.blogspot.com
Author      : Rahmat Subekti
Author URI  : http://rmsubekti.blogspot.com
Description : Bla, bla,.. bla… ngono kae.
Version     : 0.1
License     : GNU General Public License v2 or later
License URI : http://www.gnu.org/licenses/gpl-2.0.html
Text Domain : basic
Tags        : White, Brown, Semi responsif
*/
{% endhighlight %}

Setelah selesai ditambahkan, simpan file tersebut dan cek pada theme manager di wordpress.

![Theme manager](https://3.bp.blogspot.com/-PThiNpuSOhg/VRTfP598_TI/AAAAAAAAA34/9cpHbhClWb8/s1600/theme-manager.png)

Sekarang file template kita sudah dapat dibaca oleh theme manager, tapi template kita belum bisa digunakan sepenuhnya karena jika diterapkan maka tampilannya blog akan tampak kosong. Nah selanjutnya kita perlu menambahkan markup pada template file php dan sedikit memolesnya dengan stylesheet.

### Markup HTML dan Stylesheet Dasar
Sebelum menulis kode template aslinya perlu kita menggambar bagian - bagian dari template menggunakan markup html dan menempatkan bagian tersebut menggunkan stylesheet. Nah untuk markupnya bisa seperti dibawah ini:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title> Basic Theme</title>
  </head>
  <body>
    <header id="masthead" class="site-header" role="banner">
      <div class="clear container">
        <hgroup class="site-branding">
          <h1 class="site-title">Basic Theme</h1>
          <h2 class="site-description">Just Another WordPress Theme</h2>
        </hgroup>
      </div>
    </header>
    <!-- .site-header -->
    <main id="main" class="site-main">
      <div class="clear container">
        <div id="content" class="site-content" role="main">
          <article>
            <header class="entry-header">
              <h2 class="entry-title"> Judul Postingan Boongan</h2>
            </header>
            <section class="entry-content">
              <p> Isi Artikel Post berada disini</p>
            </section>
            <footer class="entry-meta"> 0 komentar</footer>
          </article>
        </div>
        <!-- .site-content -->
        <div class="secondary sidebar" id="secondary">
          <aside>
            <h2> Judul Widget</h2>
            <p> Konten widget </p>
          </aside>
        </div>
        <!-- .sidebar -->
      </div>
    </main>
    <footer id="colophon" class="site-footer" role="contentinfo">
      <div class="clear container">
        <p> &copy; 2015 Basic Theme</p>
      </div>
    </footer>
    <!-- .site-footer -->
  </body>
</html>
{% endhighlight %}

Setelah markup sudah ada hal selanjunya yaitu memoles bagian -- bagian template awal ini dengan menggunkan stylesheet. Kembali dulu ke markup html yang sudah dibuat tadi tambahkan code html ini pada bagian head html tepatnya setelah element penutup `</title>`.

{% highlight html %}
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" />
{% endhighlight %}

Kode tersebut akan memanggil file css untuk digunakan pada markup html tadi, jadi sekarang kita akan lebih mudah menyesuaikan stylenya setiap karena akan langsung di gunakan. Untuk style awalnya sebaiknya buat sesederhana mungkin karena nanti setelah menambahkan kode wordpress tetap akan dirubah stylenya, style dasar ini hanya untuk membantu kita melihat bagian -- bagiannya saja jadi usahakan gunakan background dengan warna berbeda di setiap elemen seperti header, content, sidebar, dan footernya, sebagai contohnya seperti ini:

{% highlight css %}
/*
Theme Name  :Basic Theme
Author      : Rahmat Subekti
Author URI  : http://rmsubekti.blogspot.com
Theme URI   : http://rmsubekti.blogspot.com
Description : Basic theme is template created by author
Version     : 0.1
License     : GNU General Public License v2 or later
License URI : http://www.gnu.org/licenses/gpl-2.0.html
Text Domain : basic
Tags        : white, Brown, Semi responsif
*/

body {
  margin:auto !important;
}
.container {
  margin:0 auto;
  width: 1050px;
}
/* Header Style
———————————————--*/
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
/* Content Style
———————————————--*/
.content-area {
  width: 70%;
  float: left;
  background:#dedede;
}
.site-content {
  padding-right:1.6%;
}
/* Sidebar Style
———————————————--*/
.sidebar {
  width: 30%;
  min-width: 310px;
  background:#ccc;
  float: right;
  margin-left:-30%;
}
/* Footer Style
———————————————--*/
.site-footer {
  background:#acacac;
  clear: both;
}
{% endhighlight %}

Oke Sekarang template awal yang tadi dibuat, berdasarkan markup dan style diatas tampilannya sepeti gambar dibawah ini.

![Markup dan Stylesheet Dasar](https://2.bp.blogspot.com/-Lb6Afx3iiws/VRTgDDC89TI/AAAAAAAAA4E/0PZu72rodk4/s1600/markup-display.png)

Ya memang tampilannya memang bukan seperti template wordpress dan aah.. yo ueislah, biarin. Biar keliatan sedikit mirip dengan template wordpress selanjutnya perlu ditambahkan kode template wordpressnya.

### Melengkapi Markup Dengan Kode
Seperti yang dilihat sebelumnya template yang dibuat tidak menampilkan judul blog, postingan dan sidebar yang asli. Untuk menampilkan seperti halnya template wordpress kita perlu memodifikasi markup tadi dengan kode yang disediakan oleh wordpress untuk menampilkan bagian -- bagian tersebut, jadinya seperti ini:

{% highlight php %}
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <title> <?php bloginfo('name'); ?><?php wp_title(); ?></title>
  <meta http-equiv="Content-Type" content="text/html; charset="<?php bloginfo('charset'); ?>" />
  <meta name="generator" content="WordPress <?php bloginfo('version'); ?>" />
  <meta name="description" content="<?php bloginfo('description'); ?>" />
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" />
  <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
  <link rel="alternate" type="application/atom+xml" title="Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
  <?php wp_head(); ?>
</head>
<body<?php body_class(); ?>>
  <header id="masthead" class="site-header" role="banner">
    <div class="clear container">
      <hgroup class="site-branding">
        <h1 class="site-title">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
            <?php bloginfo( 'name' ); ?>
          </a>
        </h1>
        <h2 class="site-description">
          <?php bloginfo( 'description' ); ?>
        </h2>
      </hgroup>
    </div>
  </header>
  <!-- .site-header -->
  <main id="main" class="site-main">
    <div class="clear container">
      <div id="primary" class="content-area">
        <div id="content" class="site-content" role="main">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" class="<?php post_class(); ?>">
          <header class="entry-header">
            <h2 class="entry-title">
              <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a>
            </h2>
            Posted on <?php the_date(); ?> by <?php the_author(); ?>
          </header>
          <section class="entry-content">
            <?php the_content(); ?>
          </section>
          <footer class="entry-meta">
            <span class="cat-links">
              Categories: <?php the_category(', '); ?>
            </span>
            <span class="post-details-right">
              <?php edit_post_link('Edit', '<span class="comment-count"> ' , '</span>'); ?><span class="comment-count"><?php comments_popup_link('Leave a comment', '1 Comment', '% Comments'); ?></span>
            </span>
          </footer><!-- .entry-meta -->
        </article>
        <?php comments_template(); ?>
        <?php endwhile; ?>
        <div class="navigation">
          <div class="alignleft">
            <?php posts_nav_link(); ?>
          </div>
          <div class="clear"><!-- --></div>
        </div><!-- .navigation -->
        <?php else: ?>
          <h2>Not Found</h2>
          <p>The posts you were looking for could not be found.</p>
        <?php endif; ?>
      </div>
      <!-- .site-content -->
    </div>
    <div class="secondary sidebar" id="secondary">
      <?php if ( is_active_sidebar( 'sidebar' ) ) : ?>
      <div id="widget-area" class="widget-area" role="complementary">
        <?php dynamic_sidebar( 'sidebar' ); ?>
      </div><!-- .widget-area -->
      <?php endif; ?>
    </div>
    <!-- .sidebar -->
  </div>
</main>
<footer id="colophon" class="site-footer" role="contentinfo">
  <div class="clear container">
    <p>&copy; <?php echo date('Y '); bloginfo('name'); ?></p>
  </div>
</footer>
  <!-- .site-footer -->
<?php wp_footer(); ?>
</body>
</html>
{% endhighlight %}

Ok, akhirnya template kita sudah jadi, tapi disini kita belum bisa menampilkan sidebarnya seperti ini :

![Template sederhana](http://4.bp.blogspot.com/-MOhU8ZbrZG8/VRThucou39I/AAAAAAAAA4Q/CcwqQuUbWSU/s1600/wordpress-template.png)

Sekarang template ini baru bisa menampilkan post dan judul blog saja, tapi nanti akan modifikasi lagi agar tampilannya lebih lengkap, tapi sebelumnya akan lebih memudahkan jika template dibagi terpisah dengan membuat [template header, sidebar dan footer](./membuat-template-header-sidebar-dan.html) agar lebih mudah dan tidak terlalu sulit memahami kode yang semrawut karenna campur aduk.
