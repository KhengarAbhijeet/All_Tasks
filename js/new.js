$(document).ready(function(){
    $('.carouselServ,.carouselAbout,.carouselWork').owlCarousel({
      loop:true,
      margin:30,
      center:true,
      slideTransition:'linear',
      // nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });

    $('.ts1').owlCarousel({
      loop:true,
      margin:30,
      items:1,
      center:true,
      slideTransition:'linear'
    });
  $('#home').on('activate.bs.scrollspy', function () {
    $('.divhome').removeClass("fadeInUp");
    setTimeout(function(){
      $('.divhome').addClass("fadeInUp");
    },500);
  });

  $('#aboutme').on('activate.bs.scrollspy',function () {
    $('.about').addClass("fadeInUp");
  })
});