---
layout: post
title: Membuat Template Header, Sidebar dan Footer Wordpress
date: '2015-03-23T15:30:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.096-07:00'
---
[Pada artikel sebelumnya]({{ site.baseurl }}{% post_url 2015-03-23-mempersiapkan-markup-dan-stylesheet-wordpress-theme %}) kita sudah membuat salah satu template untuk halaman blog di wordpress, Tapi suatu blog biasanya memiliki lebih dari satu halaman. Jadi kita perlu membuat beberapa halaman lagi, akan tetapi jika kita menulis kode yang sama di setiap halaman berulang - ulang tentu akan sangat merepotkan.

Disini kita akan membuat bagian - bagian template halaman seperti header, sidebar dan footer agar jika suatu saat ingin di rubah lagi tidak perlu mengubah bagian - bagian tersebut di setiap halaman yang ada. Tapi sebelum kita membuat halaman -- halaman tersebut, sebaiknya kita mulai memisah bagian -- bagiannya terlebih dahulu dari template yang sudah ada di index.php.

Buat file header.php, sidebar.php dan footer.php pada folder template kita:

![template-folder1](http://4.bp.blogspot.com/-j75ZCPfu8jo/VRTj6lEVjkI/AAAAAAAAA4c/It3jyvZ6260/s1600/template-folder1.png)

Setelah selesai ditambahkan maka file -- file tersebut sekarang sudah bisa langsung di edit melalui Theme Editor, Seperti pada gambar file pada theme editor bertambah 3 yaitu Header Template, Sidebar dan Footer.

![theme-editor](http://2.bp.blogspot.com/-SOWQYLiqXwQ/VRTkLlRIqxI/AAAAAAAAA4k/oyRha8asQfs/s1600/theme-editor.png)

Oke langsung saja kita isi  file yang masih kosong tersebut dengan kode dari **index.php**. langsung saja cut codenya dari **index.php** ke file masing -- masing header.php, sidebar.php, dan footer.php.

#### 1. header.php
{% highlight php %}
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <title> <?php bloginfo('name'); ?><?php wp_title(); ?></title>
  <meta http-equiv="Content-Type" content="text/html" charset="<?php bloginfo('charset'); ?>"/>
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
        <h1 class="site-title"><?php bloginfo('name'); ?><//h1>
        <h2 class="site-description"><?php bloginfo('description'); ?><//h2>
      </hgroup>
    </div>
  </header>
  <!-- .site-header -->
  <main id="main" class="site-main">
    <div class="clear container">
{% endhighlight %}

#### 2. sidebar.php
{% highlight php %}
<div class="secondary sidebar" id="secondary">
<?php if ( is_active_sidebar( 'sidebar' ) ) : ?>
  <div id="widget-area" class="widget-area" role="complementary">
  <?php dynamic_sidebar( 'sidebar' ); ?>
  </div><!-- .widget-area -->
<?php endif; ?>
</div>
<!-- .sidebar -->
{% endhighlight %}

#### 3. footer.php
{% highlight php %}
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
{% endhighlight %}

Setelah semua bagian dipisah, sekarang kita bisa memanggilnya di halaman yang kita inginkan seperti halaman awal, arsip, pencarian, post artikel dan lain sebagainya. Tapi karena hingga saat ini kita masih dan hanya memiliki satu halaman saja yaitu halaman depan ( homepage ) jadi kita paggil saja ketiganya ke halaman tersebut dengan fungsi, masing -- masing fungsi untuk memanggil bagian template berbeda beda seperti berikut ini:

- `<?php get_header();?>` digunakan untuk memanggil file **header.php**
- `<?php get_sidebar();?>` digunakan untuk memanggil file **sidebar.php**
- `<?php get_footer();?>` digunakan untuk memanggil file **footer.php**

Oke, langsung saja panggil ketiganya ke halaman depan (**index.php**), setelah fungsinya di tambahkan maka hasilnya akan seperti ini:

{% highlight php %}
<?php
//memanggil header.php
get_header();?>
<div id="primary" class="content-area">
  <div id="content" class="site-content" role="main">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article>
      <header class="entry-header">
        <h2 id="post-<?php the_ID(); ?>" class="<?php post_class(); ?>">
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

Setelah selesai membagi template untuk dipanggil pada halaman tertentu, pada artikel selanjutnya kita akan [menambahkan sidebar](./menambahkan-sidebar-dan-header-menu) menggunakan fungsi pada template rancangan ini karena belum tampil dengan sempurna dan sekalian membuat navigasi header untuk menu blognya.
