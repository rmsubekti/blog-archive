// Caption
$('.post-content').each(function(i){
  $(this).find('img').each(function(){
    if ($(this).parent().hasClass('fancybox')) return;

    var alt = this.alt;
    //if (alt) $(this).after('<span class="caption">' + alt + '</span>');

    $(this).wrap('<a href="' + this.src + '" data-caption="' + alt + '" data-fancybox="gallery"></a>');
  });
});

/*$('[data-fancybox]').fancybox({
	protect: true
});
*/
