$(function () {
  // Init the image gallery
  var $gallery = $('.gallery').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'fitRows'
  });

  // Layout Isotope after each image loads
  $gallery.imagesLoaded().progress(function () {
    $gallery.isotope('layout');
  });

  $('.gallery-nav').on('click', 'a', function (e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({filter: filterValue});
    $('.gallery-nav a').removeClass('active');
    $(this).addClass('active');
  });

  // Magnific Pop up
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
  });
});