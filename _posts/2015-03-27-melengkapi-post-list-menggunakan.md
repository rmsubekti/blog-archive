---
layout: post
title: Melengkapi Post List Menggunakan Thumbnail
date: '2015-03-27T04:24:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.065-07:00'
---
Menggunakan Except mungkin membuat post bisa di scan dengan mudah, tapi kadang pembaca juga terlalu cepat untuk membaca postlist sehingga tidak tau apa yang dibahas. Dengan menggunakan Thumbnail pembaca akan lebih mudah melihat topik yang dibahas dengan  gambar, atau setidaknya mereka punya kesan pertama untuk membaca artikel tersebut asalkan thumbnailnya sesuai dengan pembahasan di judul artikelnya.

### 1. Menambahkan Thumbnail Saat Memposting Post
Thumbnail atau featured image di wordpress biasanya mengharuskan kita menambahkanya saat selesai menulis artikel dan tidak ada cara lain selain menggunakan plungin . Tapi disini kita akan membuat agar thumbnail dibuat secara otomatis ketika kita menekan tombol publish atau update tentu jika di dalam post artikel tersebut terdapat media gambarnya. OK, untuk memodifikasi tombol tersebut agar juga berfungsi membuatkan featured image cukup menambahkan kode ini pada **function.php**

{% highlight php %}
/*
 Auto Thumbnail
*/
!defined( 'ABSPATH' ) and exit;
  if ( !function_exists( 'featured_image' ) ) {
    //fungsi featured image
    function featured_image() {
      if ( !isset( $GLOBALS['post']->ID ) )
        return NULL;
      if ( has_post_thumbnail( get_the_ID() ) )
        return NULL;
      $args = array(
        'numberposts' => 1,
        'order' => 'ASC', // DESC for the last image
        'post_mime_type' => 'image',
        'post_parent' => get_the_ID(),
        'post_status' => NULL,
        'post_type' => 'attachment'
      );
    $attached_image = get_children( $args );
    if ( $attached_image ) {
      foreach ( $attached_image as $attachment_id => $attachment )
        set_post_thumbnail( get_the_ID(), $attachment_id );
      }
    }

//memanggil fungsi diatas ketika menyimpan post/publish/update
add_action( 'save_post', 'featured_image' );
}

// mengatur lebar 125 piksel X panjang 125 piksel, dipotong dari tengah
set_post_thumbnail_size( 125, 125, array( 'center', 'center') );
{% endhighlight %}

Ada banyak pilihan untuk mengatur tinggi dan lebar gambar untuk thumbnail di wordpress dengan mendaftarkan sendiri dan membaginya menjadi  berbagai macam ukuran  gambar, tapi dengan begitu akan menambah penyimpanan hosting karena satu gambar dengan uran yang berbeda akan disimpan disana. Jadi disini cukup menggunakan fungsi `set_post_thumbnail_size();` agar tidak terlalu banyak menyimpan gambar yang sama dalam berbagai ukuran.

Untuk mengatur ukuran gambar dengan fungsi  ini ada beberapa cara salah satunya dengan cropping gambar agar sesuai dengan ukuran yang diinginkan. Pilihan cropping gambar bisa dilihat di developer documentation pada referensi fungsi [`set_post_thumbnail_size();`](http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size){:target="_blank"}

Setelah menambahkan tumbnail setelah posting di publish selanjutnya menampilkan thumbnail tersebut pada listpost yang bersangkutan. Caranya cukup tambahkan fungsi `the_post_thumbnail();` pada custom content tepatnya pada content.php karena disini kita cukup menampilkan thumbnail di postlistnya saja, tidak pada full post.

### 2. Menampilkan Thumbnail
Tempatkan fungsi dibagian yang kamu inginkan untuk menampilkannya, disini saya ingin menampilkannya di bawah header tepatnya sebelah kiri excerpt dan menambahkan link ke post agar ketika thumbnail di klik maka post akan terbuka seperti ini:

##### content.php
{% highlight php %}
...
......
  </header>
  <?php if ( has_post_thumbnail() ) : ?>
    <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
    <?php the_post_thumbnail( 'post-thumbnail', array(
      'alt' => get_the_title(),
      'class' => 'post-thumb') ); ?>
    </a>
  <?php endif; ?>
  <section class="entry-content">
......
...
{% endhighlight %}

### 3. Menambahkan Stylesheet untuk thumbnail
Setelah thumbnail berhasil ditambahkan selanjutnya mengatur penempatannya agar lebih rapi, disini saya ingin menempatkannya di sebelah kiri excerpt dengan border. Cukup tambahkan pada **style.css** seperti berikut ini:

{% highlight css %}
.post-thumb {
  float: left;
  border: 1px solid #ddd;
  -moz-box-shadow: 1px 1px 5px rgba(1,1,1,.1);
  -webkit-box-shadow: 1px 1px 5px rgba(1,1,1,.1);
  box-shadow: 1px 1px 5px rgba(1,1,1,.1);
  margin: 10px 12px 10px 0;
  padding: 4px;
  overflow: hidden;
  position: relative;
}
{% endhighlight %}

### 4. Menambahkan Link Readmore
Sebelumnya kita sudah menambahkan excerpt tapi tidak menampilkan link readmore tapi hanya tanda `[…]`, disini kita akan mengganti tanda tersebut dengan readmore link. Cukup tambahkan kode berikut ini pada **functions.php**

{% highlight php %}
function new_excerpt_more( $more ) {
  return '<a class="read-more" href="'. get_permalink( get_the_ID() ) . '">' . __('Selengkapnya', 'basictheme') . '</a>';
}
add_filter('excerpt_more', 'new_excerpt_more' );
{% endhighlight %}

jika kamu ingin hanya menghilangkan tanda […] saja cukup beri nilai return tanda spasi atau kosongkan seperti ini:

{% highlight php %}
function new_excerpt_more( $more ) {
  return '';
}
add_filter( 'excerpt_more', 'new_excerpt_more' );
{% endhighlight %}

Selanjutnya mengatur jumlah kata yang ingin ditampilkan oleh excerpt, secara default excerpt menampilkan 55 kata, jika kamu ingin menyesuaikan jumlah katanya cukup tambahkan code berikut ini setelah kode diatas. Ubah nilai return sesuai jumlah kata yang ingin di tampilkan.
{% highlight php %}
function custom_excerpt_length( $length ) {
  return 20;
}
add_filter( 'excerpt_length','custom_excerpt_length', 999 );
{% endhighlight %}
Sekarang template yang telah kita buat sudah bisa menampilkan thumbnail, ini dia hasilnya.

![thumbnail](https://1.bp.blogspot.com/-sDQ1P0AYcQg/VRaO1GXeCYI/AAAAAAAAA5o/Mkt1EwrwHZI/s1600/thumb.png)

Ok, emang stylenya terlalu sederhana, tapi ga papa lah,. yang penting jadi dulu. Selanjutnya kita akan [menambahkan header logo](./menambahkan-fitur-header-logo-wordpress.html) agar tampilannya lebih menarik.
