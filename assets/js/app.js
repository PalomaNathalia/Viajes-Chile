//Bienvenida
/*
var nombre= prompt("Hola, ¿Cuál es tu nombre?", "Nombre");
alert("Bienvenido a Viajes Chile " + nombre);

*/

//Tooltip para iconos en footer
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $("#tarjeta1").on("click",function(){
    $("#target1").toggle();
  });

  $("#tarjeta2").on("click",function(){
    $("#target2").toggle();
  });

  $("#tarjeta3").on("click",function(){
    $("#target3").toggle();
  });

  $("#tarjeta4").on("click",function(){
    $("#target4").toggle();
  });