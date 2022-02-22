$(function () {
  // Init the image grid
  var $gallery = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // Layout Isotope after each image loads
  $gallery.imagesLoaded().progress(function () {
    $gallery.isotope('layout');
  });

  $('.grid-nav').on('click', 'a', function (e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({filter: filterValue});
    $('.grid-nav a').removeClass('active');
    $(this).addClass('active');
  });

  // Magnific Pop up
  $('.grid').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
  });
});