$(document).ready(function() {

// Carousel
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

// Hide Navbar
  var verticalScroll = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop - verticalScroll > 50) {
      var navBarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navBarHeight}, 150);
      verticalScroll = scrollTop;
    } else if (verticalScroll - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      verticalScroll = scrollTop;
    }
  });
});
