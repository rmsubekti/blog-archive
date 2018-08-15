---
title:  "Install Firefox Developer Edition di Ubuntu"
date:   2016-09-15 06:24:06 +0700
categories: Ubuntu
---
Download [Firefox edisi Developer](https://www.mozilla.org/en-US/firefox/developer/)
Pastikan kode berikut di jalankan di direktori tempat file hasil download tadi berada.
{% highlight bash %}
#Ekstrak file yang di download
tar xjf firefox-*.tar.bz2
#Pindahkan ke folder /opt/firefox_dev
sudo mv /firefox /opt/firefox_dev
#Jalankan browser
/opt/firefox_dev/firefox
{% endhighlight %}

Untuk lebih mudah mengakses aplikasi firefox jalankan perintah berikut
{% highlight bash %}
sudo gedit ~/.local/share/applications/firefox_dev.desktop
{% endhighlight %}

Kemudian pastekan kode berikut dan simpan.
{% highlight txt %}
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Name=Firefox Developer Edition
Icon=firefox.png
Path=/opt/firefox_dev
Exec=/opt/firefox_dev/firefox
StartupNotify=false
StartupWMClass=Firefox
OnlyShowIn=Unity;
X-UnityGenerated=true
{% endhighlight %}

Jika muncul pesan error seperti dibawah ini
{% highlight txt %}
Your Firefox profile can not be loaded. Possible missing or inaccessible.
{% endhighlight %}

Jalankan kode berikut
{% highlight bash %}
sudo rm -rf ~/.mozilla
sudo rm -rf ~/.cache/mozilla
{% endhighlight %}

Setelah itu koneksikan komputer ke internet dan jalankan browser firefox.