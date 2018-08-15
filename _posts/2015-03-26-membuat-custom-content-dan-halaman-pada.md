---
layout: post
title: Membuat Custom Content dan Halaman Pada WordPress Template
date: '2015-03-25T17:30:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.075-07:00'
---
Secara keseluruhan template yang sudah dibuat hingga artikel terakhir yang lalu, template tersebut sudah bisa diterapkan karena secara otomatis wordpress sudah menambahkan halaman search, single post, halaman dan arsip secara otomatis sesuai dengan template yang diibuat. Akan tetapi disini saya ingin menampilkan post list pada halaman depan, halaman search dan arsip dengan post artikel yang lebih pendek atau seperti content readmore sedangkan pada sigle post dan page menampilkan artikel secara keseluruhan.

Oke, sebelum membuat halamannya satu persatu, kita siapkan dulu template atau custom contentnya, disini kita akan membuat 3 custom content masing -- masing

1. **content-page.php** untuk konten halaman page contohnya seperti pada sample page
2. content-single.php untuk single post yang menampilkan isi artikel secara keseluruhan
3. **content.php** untuk halaman depan, arsip dan search page yang menampilkan konten readmore

Oke langsung saja buat 3 file tersebut pada folder template dan mengisinya dengan menyalin kode yang sudah ada dari template yang telah dibuat sebelumnya pada index.php. Salin pada isi looping contentnya saja jadi tidak keseluruhannya. Kemudian mengedit bagian - bagian mana saja yang ingin ditampilkan sesuai dengan halaman yang akan memakai custom content masing-masing. Untuk lebih jelasnya kode yang sudah diedit seperti dibawah ini:

### 1. content-page.php

Pada custom content ini nantinya akan digunakan pada template page yang umumnya tidak menampilkan informasi autor, tanggal posting dan link comment juga dihilangkan karena comment form sudah langsung ditampilkan disini. Jadi kodenya seperti dibawah ini:
{% highlight php %}
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <h2 class="entry-title">
      <a href="<?php the_permalink() ?>" rel="bookmark"
      title="Permanent link to <?php the_title_attribute(); ?>">
        <?php the_title(); ?>
      </a>
    </h2>
  </header>
  <section class="entry-content">
    <?php the_content(); ?>
  </section>
  <?php edit_post_link( __( 'Edit', 'basictheme' ),
  '<footer class="entry-footer"><span class="edit-link">',
  '</span></footer><!-- .entry-footer -->'
  ); ?>
</article>
{% endhighlight %}

### 2. content-single.php
Untuk custom content ini akan digunakan pada halaman post ketika pengunjung mengklik post dari halaman awal. Disini hanya menghapus comment link karena disini juga comment form akan ditampilkan.

{% highlight php %}
<article id="post-<?php the_ID(); ?>" class="<?php post_class(); ?>">
  <header class="entry-header">
    <h2 class="entry-title">
      <a href="<?php the_permalink()?>" rel="bookmark"
      title="Permanent link to <?php the_title_attribute(); ?>">
        <?php the_title(); ?>
      </a>
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
      <?php edit_post_link( __( 'Edit', 'basictheme' ),
      '<span class="edit-link">', '</span>' ); ?>
    </span>
  </footer><!-- .entry-meta -->
</article>
{% endhighlight %}

### 3. content.php
Karena akan digunakan pada halaman depan, halaman search dan arsip, maka disini hanya diubah pada fungsi the_content(); menjadi the_excerpt();  sehingga hanya akan menampilkan sebagian artikelnya saja.

{% highlight php %}
<article id="post-<?php the_ID(); ?>" class="<?php post_class(); ?>">
  <header class="entry-header">
    <h2 class="entry-title">
      <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a>
    </h2>
    Posted on <?php the_date(); ?> by <?php the_author(); ?>
  </header>
  <section class="entry-content">
    <?php the_excerpt(); ?>
  </section>
  <footer class="entry-meta">
    <span class="cat-links">
      Categories: <?php the_category(', '); ?>
    </span>
    <span class="post-details-right">
      <?php edit_post_link( __( 'Edit', 'basictheme' ), '<span class="edit-link">', '</span>' ); ?>
    </span>
  </footer><!-- .entry-meta -->
</article>
{% endhighlight %}

Setelah ketiga custom content dibuat, sekarang akan lebih mudah dan cepat membuat halaman yang dibutuhkan. Langsung saja buat 4 file di  template folder diantaranya:

1. **page.php** untuk Template Page
2. **search.php** untuk halaman search
3. **archive.php** untuk halaman arsip
4. **single.php** untuk halaman single post

sedangkan untuk halaman depannya atau homepage tetap menggunakan index.php, jika sudah selesai isi file tersebut untuk menampilkan custom content yang telah dibuat tadi.

### 1. page.php

{% highlight php %}
<?php
  //memanggil header.php
  get_header();?>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
    <?php if (have_posts()):
      while (have_posts()) : the_post();

        //memanggil content-page.php untuk di gunakan
        get_template_part('content', 'page');

        // jika komentar dibuka atau memiliki minimal 1 komentar maka template komentar akan ditampilkan
        if ( comments_open() || get_comments_number() ) :
          comments_template();
        endif;
      endwhile; ?>
    </div>
    <!-- .site-content -->
  </div>
<?php
  //memanggil footer.php
  get_footer();?>
{% endhighlight %}

### 2. single.php

{% highlight php %}
<?php
  //memanggil header.php
  get_header();?>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
    <?php if (have_posts()):
      while (have_posts()) : the_post();

        //memanggil content-single.php untuk di gunakan
        get_template_part('content', 'single');

        // jika komentar dibuka atau memiliki minimal 1 komentar maka template komentar akan ditampilkan
        if ( comments_open() || get_comments_number() ) :
          comments_template();
        endif;
      endwhile; ?>
    </div>
    <!-- .site-content -->
  </div>
<?php
  //memanggil footer.php
  get_footer();?>
{% endhighlight %}

### 3. index.php, archive.php, dan search.php

{% highlight php %}
<?php
  //memanggil header.php
  get_header();?>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
    <?php if (have_posts()):
      while (have_posts()) : the_post();

        //memanggil content.php untuk di gunakan
        get_template_part('content');
      endwhile; ?>
    <div class="navigation">
      <div class="alignleft"><?php posts_nav_link(); ?></div>
      <div class="clear"><!-- --></div>
    </div><!-- .navigation -->
  <?php else: ?>
  <h2>Not Found</h2>
    <p>The posts you were looking for could not be found.</p>
  <?php endif; ?>
  </div>
  <!-- .site-content -->
</div>
<?php
  //memanggil sidebar.php
  get_sidebar();?>
<?php
  //memanggil footer.php
  get_footer();?>
{% endhighlight %}

Sekarang template kita tampilannnya lebih mudah untuk pembaca menscan content kita dan memilih salah satu yang ingin mereka baca dari halaman depan dan membacanya dengan full content di halaman single post.

![excerp](https://4.bp.blogspot.com/-0vHbWzB0qV4/VRTzpHkmBZI/AAAAAAAAA5U/HGWImi3jE0Q/s1600/excerpt.png)

Tampilannya sudah sangat lumayan tapi mungkin jika ditambah dengan thumbnail akan lebih bagus lagi. Oke, selanjutnya kita coba untuk menambahkan [thumbnailnya dan tampilan excerp](./melengkapi-post-list-menggunakan.html)-nya juga belum sempurna karena teksnya terlalu panjang menurut saya, juga perlu menghilangkan tanda [...] di akhir excerpt-nya.
