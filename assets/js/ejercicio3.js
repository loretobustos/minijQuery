$( document ).ready(function() {

    $("#pasa").mouseenter(function(){
      $( "li" ).even().addClass("conMousePar");
      $( "li" ).odd().addClass("conMouseImpar");
    });
  
    $("#pasa").mouseleave(function(){
      $( "li" ).even().removeClass("conMousePar");
      $( "li" ).odd().removeClass("conMouseImpar");
    });  
  });
  