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

function sendToWhatsAppOneWay(e) {
  e.preventDefault();

  const form = e.target;
  const pickup = form.pickup.value.trim();
  const dropoff = form.dropoff.value.trim();
  const datetime = form.datetime.value.trim();
  const mobile = form.mobile.value.trim();

  const message = `🛺 *New One Way Booking Request*

━━━━━━━━━━━━━━━━━
📍 *Pickup Location:* ${pickup}
📍 *Drop-off Location:* ${dropoff}
🗓️ *Date & Time:* ${datetime}
📱 *Customer Mobile:* ${mobile}
━━━━━━━━━━━━━━━━━

✅ Please confirm availability.`;

  const phoneNumber = "919999999999"; // Replace with your WhatsApp number
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

  window.open(url, '_blank');
}


function sendToWhatsAppRound(e) {
  e.preventDefault();

  const form = e.target;
  const pickup = form.pickup.value.trim();
  const dropoff = form.dropoff.value.trim();
  const datetimeRange = form.datetime_range.value.trim();
  const mobile = form.mobile.value.trim();

  const message = `🔁 *New Round Trip Booking Request*

━━━━━━━━━━━━━━━━━
📍 *Pickup Location:* ${pickup}
📍 *Drop-off Location:* ${dropoff}
🗓️ *Trip Duration:* ${datetimeRange}
📱 *Customer Mobile:* ${mobile}
━━━━━━━━━━━━━━━━━

✅ Kindly review and confirm.`;

  const phoneNumber = "919999999999"; // Replace with your WhatsApp number
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

  window.open(url, '_blank');
}
