---
layout: post
title: Menambahkan Fitur Header Logo WordPress Template
date: '2015-03-28T04:29:00.000-07:00'
categories: Wordpress
tags:
- Theme
modified_time: '2016-06-23T14:44:44.056-07:00'
---
Biasanya template wordpress template seperti  twenty fifteen, twenty fourteen dan template default wordpress lainnya hanya menyediakan fitur header image untuk kostumisasi header dan tidak memungkinkan untuk pengguna mengupload logo untuk blog mereka untuk menggantikan teks judul header blog. Jadi mari kita buat template kita berbeda agar dapat mengupload gambar sebagai logo blog kita melalui customizer.

Langsung saja buat fungsi pada functions.php untuk menambahkan fitur pengupload logo pada customizer template seperti di bawah ini:

{% highlight php %}
/*
 * Custom header Logo
*/
function basictheme_customizer( $wp_customize ) {
  $wp_customize->add_section( 'basictheme_logo_section', array(
    'title' => __( 'Header Logo', 'basictheme' ),
    'priority' => 30,
    'description' => __( 'Upload logo untuk menggantikan default nama dan deskripsi blog dengan gambar', 'basictheme' ),
  ));

  $wp_customize->add_setting( 'basictheme_logo' );
  $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'basictheme_logo', array(
    'label' => __( 'Logo', 'basictheme' ),
    'section' => 'basictheme_logo_section',
    'settings' => 'basictheme_logo',
  ) ) );
}
add_action('customize_register','basictheme_customizer');
{% endhighlight %}

Setelah membuat customizernya, tinggal menambahkan kode agar ditampilkan, disini kita akan mengganti teks judul blog pada header jika logo di upload, jadi mari kita tambahkan dan memodifikasi template **header.php** tepatnya pada tag heading group `<hgroup>` menjdi seperti ini:

{% highlight php %}
<?php if ( get_theme_mod( 'basictheme_logo' ) ) : ?>
<div class="site-logo">
  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"
  title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
    <img src="<?php echo esc_url( get_theme_mod( 'basictheme_logo' ) ); ?>"
    alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>
</div>
<?php else : ?>
<hgroup class=”site-branding”>
  <h1 class=”site-title”>
    <a href=”<?php echo esc_url( home_url( '/' ) ); ?>” rel=”home”
    title=”<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>”>
      <?php bloginfo( "name" ); ?>
    </a>
  </h1>
  <h2 class=”site-description”><?php bloginfo( 'description' ); ?></h2>
</hgroup>
<?php endif;?>
{% endhighlight %}

Sekarang kita coba menambahkan gambar pada header logo customizer sebagai logo blog. Pada dasboard wordpress pilih menu Tampilan/Appearance > Customize dan upload gambar sebagai logo pada Pilihan Header Logo Setting seperti gambar dibawah ini.

![Header logo](https://4.bp.blogspot.com/-6ju0EwYAeCs/VRaQOuo1EtI/AAAAAAAAA50/E46GsksE5i0/s1600/header%2Blogo.png)

Oke, sepertinya template yang kita sudah bisa di gunakan. Pada artikel selanjutnya akan kita tambahkan [template halaman tambahan](./template-halaman-tambahan-wordpress.html) jika kamu ingin memodifikasinya, tapi jika tidak terlalu di butuhkan cukup lewati saja karena sampai disini template sudah bisa digunakan.
