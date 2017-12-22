'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );

$(".nav-bar .left-control .fa-bars").click(function(){
  $(".nav-bar .left-control .fa-bars").addClass("hide").removeClass("show");
  $(".nav-bar .left-control .fa-close").addClass("show");
  $(".nav-bar").removeClass("flag");
  $(".nav-bar .right-meta").addClass("show");
  $(".nav-bar .nav").addClass("show");
  $(".nav-bar .meta-nav").addClass("show");
  $(".bg-nav").addClass("show").removeClass("hide");
});
$(".nav-bar .left-control .fa-close").click(function(){
  $(".nav-bar .left-control .fa-bars").addClass("show").addClass("hide");
  $(".nav-bar .left-control .fa-close").removeClass("show");
  $(".nav-bar").addClass("flag");
  $(".nav-bar .right-meta").removeClass("show").addClass("hide");
  $(".nav-bar .nav").removeClass("show").addClass("hide");
  $(".nav-bar .meta-nav").removeClass("show").addClass("hide");
  $(".bg-nav").addClass("hide").removeClass("show");
});
$('.ui.dropdown')
  .dropdown()
;
$('#checkbox1').checkToggler({
                labelOn:'On',
                labelOff:'Off'
            });
$('#checkbox2').checkToggler({
        labelOn:'Off',
        labelOff:'Off'
            });
$(".toggle-switch").click(function(){
  $(this).find('.on').toggleClass("hide");
  if($(this).find('.on').hasClass("hide")){
    $(this).find('i').addClass("f-left");
  }else {
    $(this).find('i').removeClass("f-left");
  }
});
$(".button-on").click(function(){
  $(".toggle-switch .on").removeClass("hide").removeClass("show");
  $(".toggle-switch i").removeClass("f-left");
});
$(".button-off").click(function(){
  $(".toggle-switch .on").addClass("hide").removeClass("show");
  $(".toggle-switch i").addClass("f-left");
});
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// });
$(".bg-modal").click(function(){
  $(this).addClass("hide");
  $(".md-modal").addClass("hide");
});
$(".md-modal").click(function(){
  $(this).addClass("hide");
  $(".bg-modal").addClass("hide");
});
