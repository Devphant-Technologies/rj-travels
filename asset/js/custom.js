jQuery(document).ready(function() {
  equalizer();
});

jQuery(window).resize(function() {
  equalizer();
});


function equalizer() {
  var max = -1;
  $(".trip_details ul").css('min-height','auto');
  $('.trip_details ul').each(function() {

      var minHeight = $(this).innerHeight();
      max = minHeight > max ? minHeight : max;

  });
  $(".trip_details ul").css('min-height', max);

}



$('.h_testiminoals_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true,
  autoplay: false,
  vertical: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$('.services_slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});