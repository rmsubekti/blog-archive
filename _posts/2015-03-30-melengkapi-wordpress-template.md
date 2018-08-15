---
layout: post
title: Melengkapi WordPress Template
date: '2015-03-29T16:23:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.025-07:00'
---
Akhirnya pembuatan template ini berakhir disini. Memang tutorial ini dibuat hanya sekedar untuk proses pengenalan saja dengan struktur dan kode dalam setiap template file. Saya sendiri baru di platform wordpress, itu juga karena saya cuma ingin tau bagaimana membuat template wordpress ini. Jadi masih banyak tentang fitur yang dapat di tambahkan pada template wordpress yang belum di uraikan secara detil pada tutorial ini.

Jika kamu ingin mengenal lebih detil dalam pembuatan templatenya bisa langsung mengunjungi Website codex Wordpess pada bagian [Theme Development](http://codex.wordpress.org/Theme_Development){:target="_blank"}, disana banyak sekali kode yang bisa kamu gunakan termasuk menemukan referensi kode untuk digunakan. Selain melalui website pengembang kamu juga bisa mencari tutorial lain dengan searching dari luar blog ini.

Dan sebagai penutup dari tutorial pembuatan template ini, saya akan tambahkan beberapa kode yang bisa kamu gunakan pada template yang sudah kamu buat yang saya ambil dari berbagai referensi untuk sekedar pelengkapnya saja.

### 1. Navigasi post
Navigasi post ini dpat digunakan pada halaman fullpost saja seperti single.php dan page.php. Untuk memanggilnya cukup dengan menambahkan fungsi the_post_navigation(); pada bagian loop content. Fungsi ini juga dapat di kostumisasi bagiannya dengan menggunakan array. berikut ini contoh link navigasi dengan judul posting selanjutnya dan sebelumnya.

{% highlight php %}
the_post_navigation( array(
  'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Selanjutnya : ', 'basictheme' ) . '</span> ' . '<span class="post-title">%title</span>',
  'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Sebelumnya : ', 'basictheme' ) . '</span> ' . '<span class="post-title">%title</span>'
) );
{% endhighlight %}

### 2. Menambahkan default feedlink menggunakan fungsi
Jika kamu ingin membuat broadcast artikel di blog kamu menggunakan rss atau atom feed fungsi ini sangat membantu untuk memberikan link pada feed reader yang tepat. Untuk menambahkannya cukup menggunakan fungsi `add_theme_support( 'fitur-yang-ditambahkan');`.Letakkan fungsi tersebut pada **functions.php** tepatnya pada fungsi theme setup. pada tutorial template ini letaknya pada fungsi `basictheme_setup();`. Berikut kodenya:

{% highlight php %}
add_theme_support( 'automatic-feed-links' );
{% endhighlight %}

Kemudian hapus link rss dan atom feed yang pada awal pembuatan template telah kita hardcoded. Hapus kode ini pada bagian header.php:

{% highlight php %}
<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="Atom Feed" href="<?php bloginfo('atom_url'); ?>" />
{% endhighlight %}

### 3. Manambahkan Title tag menggunakan fungsi
Banyak sekali fitur wordpress yang bisa kita tambahkan menggunakan add_theme_support( ); termasuk juga untuk menambahkan judul blog di bagian header. Lihat lebih detail apa saja yang bisa di tambahkan di referensi Codex WordPress. Untuk menampilkan judul blog cukup tambahkan kode berikut pada theme setup.

{% highlight php %}
add_theme_support( 'title-tag' );
{% endhighlight %}

Setelah di tambahkan, kamu bisa menghapus tag dan kode yang sebelumnya di hardcoded pada header.php.

{% highlight php %}
<title> <?php bloginfo('name'); ?><?php wp_title(); ?></title>
{% endhighlight %}

### 4. Profil penulis pada halaman post
Untuk menambahkan profil kamu di setiap post cukup buat file baru pada template folder bernama author-bio.php kemudian isi dengan kode berikut ini:

{% highlight php %}
<div class="author-info">
  <h2 class="author-heading"><?php _e( 'Published by', 'twentyfifteen' ); ?></h2>
  <div class="author-avatar">
    <?php //ukuran foto
    $author_bio_avatar_size = apply_filters( 'twentyfifteen_author_bio_avatar_size', 56 );
    echo get_avatar( get_the_author_meta( 'user_email' ), $author_bio_avatar_size ); ?>
  </div>
  <!-- .author-avatar -->
  <div class="author-description">
    <h3 class="author-title"><?php echo get_the_author(); ?></h3>
    <p class="author-bio">
      <?php the_author_meta( 'description' ); ?>
      <a class="author-link" rel="author"
      href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
        <?php printf( __( 'Lihat Semua artikel oleh%s', 'basictheme' ), get_the_author() ); ?>
      </a>
    </p>
    <!-- .author-bio -->
  </div>
  <!-- .author-description -->
 </div>
<!-- .author-info -->
{% endhighlight %}

Kemudian untuk memanggilnya cukup tambahkan fungsi `get_template_part('author','bio');` pada custom content tepatnya di content-single.

### 5. Menambahkan screenshot
Untuk yang ini sangat mudah, cukup buat file gambar dengan format `*.png` dan beri nama **screenshoot.png**, Kemudian letakkan gambar tersebut pada folder template.

Mungkin cukup sampai disini tutorial ini, semoga bermanfaat untuk memulai membuat template wordpress milikmu sendiri dan terimakasih juga telah menikmati tutorial ini dari setiap bagian artikel per artikelnya.
