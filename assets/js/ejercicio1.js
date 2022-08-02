$( document ).ready(function() {
    $("#hazClick").click(function(){
      $("#cambiame")
      .css({"background": "aqua"})
      .animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px",
        background: "#00FFFF"
      }, 1500 );
    });
  });
  