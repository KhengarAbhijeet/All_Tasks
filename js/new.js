$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      // nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });
  $('#home').on('activate.bs.scrollspy', function () {
    $('.divhome').removeClass("fadeInUp");
    setTimeout(function(){
      $('.divhome').addClass("fadeInUp");
    },500);
  });
});