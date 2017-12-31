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
  $(".sidebar .toggle-switch .on").removeClass("hide").removeClass("show");
  $(".sidebar .toggle-switch i").removeClass("f-left");
});
$(".button-off").click(function(){
  $(".sidebar .toggle-switch .on").addClass("hide").removeClass("show");
  $(".sidebar .toggle-switch i").addClass("f-left");
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

//drag-and-dropdop
$( function() {
  $( "#draggable" ).draggable({
    // axis: "x";
    containment: ".drag-drop"
  });
} );
var n=$(".fan-angle .active").length;
$(".fan-angle .button-angle .buttom-dow").click(function(){
  switch($(".fan-angle .active").length) {
    case 0:
     $(".fan-angle .propeller1").addClass("active");
    break;
    case 1:
     $(".fan-angle .propeller2").addClass("active");
    break;
     case 2:
      $(".fan-angle .propeller3").addClass("active");
     break;
     case 3:
      $(".fan-angle .propeller4").addClass("active");
     break;
     case 4:
      $(".fan-angle .propeller5").addClass("active");
     break;
  }
});
$(".fan-angle .button-angle .buttom-up").click(function(){
  switch($(".fan-angle .active").length) {
    case 1:
     $(".fan-angle .propeller1").removeClass("active");
    break;
    case 2:
     $(".fan-angle .propeller2").removeClass("active");
    break;
     case 3:
      $(".fan-angle .propeller3").removeClass("active");
     break;
     case 4:
      $(".fan-angle .propeller4").removeClass("active");
     break;
     case 5:
      $(".fan-angle .propeller5").removeClass("active");
     break;
  }
});
var c=document.getElementById("canvasc");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(104,102.5,90,Math.PI*1.3,Math.PI*1.31,false);
ctx.lineWidth=15;
ctx.strokeStyle="#08dbf9";
ctx.stroke();

var x1 =parseInt($("#number").text());

  $(".plus-icon").click(function(){
    switch(parseInt($("#number").text())) {
      case 17:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.20,Math.PI*1.21,false);
        ctx.stroke();
      break;
      case 18:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.25,Math.PI*1.26,false);
        ctx.stroke();
      break;
      case 19:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.30,Math.PI*1.31,false);
        ctx.stroke();
      break;
      case 20:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.35,Math.PI*1.36,false);
        ctx.stroke();
      break;
      case 21:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.40,Math.PI*1.41,false);
        ctx.stroke();
      break;
      case 22:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.45,Math.PI*1.46,false);
        ctx.stroke();
      break;
      case 22:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.50,Math.PI*1.51,false);
        ctx.stroke();
      break;
    }
    if(x1<10 && x1>=0){
      x1++;
      $(".main-circle #number").html(x1);
      $(".main-circle .tex1").css("margin-left","-12px");
    }
    if(x1<50 && x1>=10){
      x1++;
      $(".main-circle #number").html(x1);
      $(".main-circle .tex1").css("margin-left","-20px");
    }
  });
  $(".minus-icon").click(function(){
    switch(parseInt($("#number").text())) {
      case 23:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.40,Math.PI*1.41,false);
        ctx.stroke();
      break;
      case 22:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.35,Math.PI*1.36,false);
        ctx.stroke();
      break;
      case 21:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.30,Math.PI*1.31,false);
        ctx.stroke();
      break;
      case 20:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.25,Math.PI*1.26,false);
        ctx.stroke();
      break;
      case 19:
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(104,102.5,90,Math.PI*1.20,Math.PI*1.21,false);
        ctx.stroke();
      break;
    }
    if(x1<=50 && x1>10){
      x1--;
      $(".main-circle #number").html(x1);
    }
    if(x1<=10 & x1>0){
      x1--;
      $(".main-circle #number").html(x1);
      $(".main-circle .tex1").css("margin-left","-12px");
    }
  });
  $("#Lod").click(function(){
    $("#draggable").css("left","0px");
  });
  $("#Med").click(function(){
    $("#draggable").css("left","50px");
  });
  $("#Hi").click(function(){
    $("#draggable").css("left","106px");
  });
  $("#Auto").click(function(){
    $("#draggable").css("left","150px");
  });
