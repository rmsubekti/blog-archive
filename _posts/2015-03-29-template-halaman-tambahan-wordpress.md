---
layout: post
title: Template Halaman Tambahan WordPress
date: '2015-03-29T02:18:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.046-07:00'
---
Selamat, setelah kamu menyelesaikan tutorial terakhir kemarin, kamu sudah berhasil membuat template wordpress dengan sempurna. Pada bagian ini saya hanya akan berbagi sedikit bagaimana cara membuat template halaman tambahan dan template komentar yang sebenarnya secara otomatis sudah ada. Custom halaman ini diperlukan jika kamu ingin membuat variasi pada halaman tertentu dari bagian terkecil templatenya.

Disini kita akan membuat 2 template halaman untuk error page (404.php) dan halaman untuk menampilkan post berdasarkan penulis atau authornya (author.php) serta juga template bagian halaman post/page yaitu comments.php. silakan menambahkan 3 file tersebut di folder template untuk menambahkan kode di bawah ini.

### 1. 404.php
Halaman ini dipanggil ketika pengunjung mengunjungi link yang rusak / salah dalam penulisan atau halaman yang ditunjukan oleh link tersebut sudah dihapus. Disini saya hanya menunjukkan contohnya saja dengan menambahkan form pencarian , jadi jika kamu ingin membuatnya tinggal mengeditnya dengan tampilan kalian sendiri apakah mau di tambah dengan list post berdasarkan kategori atau yang lainnya terserah kalian nanti. Jadi ini dia contohnya.

{% highlight php %}
<?php get_header(); ?>
<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">
    <section class="error-404 not-found">
      <header class="page-header">
        <h1 class="page-title"><?php _e( 'Oops! Halaman yang kamu maksud tidak ada.', 'basictheme' ); ?></h1>
      </header><!-- .page-header -->
      <div class="page-content">
        <p><?php _e( 'Sepertinya tidak ada halaman yang cocok dengan yang kamu maksudkan. Munkin bisa ditemukan menggunakan pencarian.', 'basictheme' ); ?></p>
        <?php get_search_form(); ?>
      </div><!-- .page-content -->
    </section><!-- .error-404 -->
  </main><!-- .site-main -->
</div><!-- .content-area -->
<?php get-sidebar();?>
<?php get_footer(); ?>
{% endhighlight %}

###2. author.php
Pada halaman ini jika pengunjung mengunjungi link penulis, Setiap penulis/author memiliki halaman yang berbeda jadi ini hanya sekedar templatenya saja dengan menampilkan daftar postlist yang di tulis oleh masing-masing author. Link untuk halaman ini biasanya seperti ini `http://example.com/author/username` atau `http://example.com/?author=1` , `2`, `3` dan seterusnya. Contoh kodenya seperti ini:

{% highlight php %}
<?php get_header(); ?>
<section id="primary" class="content-area">
  <div id="content" class="site-content" role="main">
  <?php if ( have_posts() ) : ?>
    <header class="archive-header">
      <h1 class="archive-title">
      <?php
        the_post();
          printf( __( 'Semua artikel oleh %s'), get_the_author() );
      ?>
      </h1>
      <?php if ( get_the_author_meta( 'description' ) ) : ?>
        <div class="author-description"><?php the_author_meta( 'description' ); ?></div>
      <?php endif; ?>
    </header><!-- .archive-header -->
    <?php
      rewind_posts();
        // Start the Loop.
        while ( have_posts() ) : the_post();
          get_template_part('content');
    ?>
  <?php endwhile;
  // Previous/next page navigation.
  ?>
  <div class="navigation">
    <div class="alignleft"><?php posts_nav_link(); ?></div>
    <div class="clear"><!-- --></div>
  </div><!-- .navigation -->
  <?php
    else :
      // jika belum punya konten yang di publish
      printf( __( 'Belum ada artikel%s', 'basictheme'));
    endif;
  ?>
</div><!-- #content -->
</section><!-- #primary -->
<?php get-sidebar();?>
<?phpget_footer();?>
{% endhighlight %}

3. comments.php
Yang ini bukan halaman, tapi bagian dari halaman. Bagian ini biasanya di panggil pada halaman full content seperti pada post artikel dan page. Comment form dan comment list biasanya secara otomatis di panggil ketika menambahkan fungsi `comments_template();`. Tapi jika kamu ingin menvariasi bagiannya berikut ini kodenya :

{% highlight php %}
<?php
  if ( post_password_required() ) {
    return; }?>
  <div id="comments" class="comments-area">
  <?php if ( have_comments() ) : ?>
    <h2 class="comments-title">
    <?php
      printf( _nx( 'Satu Komentar pada &ldquo;%2$s&rdquo;', '%1$s komentar pada &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', 'basictheme' ),
      number_format_i18n( get_comments_number() ), get_the_title() );
    ?>
    </h2>
    <?php basictheme_comment_nav(); ?>
    <ol class="comment-list">
    <?php
      wp_list_comments( array(
        'style' => 'ol',
        'short_ping' => true,
        'avatar_size' => 56,
      ) );?>
    </ol><!-- .comment-list -->
    <?php basictheme_comment_nav(); ?>
    <?php endif; // have_comments() ?>
    <?php
      if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
    ?>
    <p class="no-comments"><?php _e( 'Komentar Ditutup.', 'basictheme' ); ?></p>
  <?php endif; ?>
  <?php comment_form(); ?>
</div><!-- .comments-area -->
{% endhighlight %}

Untuk jaga-jaga jika pada halaman tersebut memiliki banyak komentar, maka kita perlu menambahkan navigasi untuk meilihat komentar lama dan yang terbaru. untuk menambahkan navigasinya cukup buat fungsi pada functions.php seperti berikut ini:

{% highlight php %}
if ( ! function_exists( 'basictheme_comment_nav' ) ) :
  function basictheme_comment_nav() {
    // jika komentar melebihi satu halaman
    if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :?>

    <nav class="navigation comment-navigation" role="navigation">
      <h2 class="screen-reader-text"><?php _e( 'Comment navigation', 'basictheme' ); ?></h2>
      <div class="nav-links">
      <?php
        if ( $prev_link = get_previous_comments_link( __( 'Komentar lama', 'basictheme' ) ) ) :
          printf( '<div class="nav-previous">%s</div>', $prev_link );
        endif;
        if ( $next_link = get_next_comments_link( __( 'Komentar Terbaru', 'basictheme' ) ) ) :
          printf( '<div class="nav-next">%s</div>', $next_link );
        endif;
      ?>
    </div><!-- .nav-links -->
  </nav><!-- .comment-navigation -->
<?php
  endif;
  }
  endif;
{% endhighlight %}

Ok, sekarang halaman -- halaman blog semua disediakan menggunakan template yang kita sehingga kita bisa mengubah dan menambah bagian -- bagiannya langsung melalui template. Pada artikel selanjutnya akan menjadi penutup dari tutorial ini, ada sedikit [tambahan kode](./melengkapi-wordpress-template.html) disana jika kamu ingin menggunakannya.
