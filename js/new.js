$(document).ready(function(){
  
  // $(".divhome").click(function() {
  //   $(".divhome").css({"animation":"1s ease-out 0s 1 slideUp"});  
  // })
  $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    $('.newnav').css({"border-bottom ":"1px solid white"});
  });
});