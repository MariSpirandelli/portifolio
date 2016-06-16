$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 590) {
      $(".navbar").addClass("navbar-fixed-top");

      /*if(winTop >= $("#contact").offset().top){
        $("#li-contact").click();
      }
      else*/ if(winTop >= $("#skills").offset().top - 200){
        $(".active").removeClass("active");
        $("#li-skills").addClass("active");
      }
      else if(winTop >= $("#portifolio").offset().top - 200){
        $(".active").removeClass("active");
        $("#li-portifolio").addClass("active");
      }
      else if(winTop >= $("#about").offset().top - 200){
        $(".active").removeClass("active");
        $("#li-about").addClass("active");
      }
      else{
        $(".active").removeClass("active");
      }


    }
    else{
      $(".navbar").removeClass("navbar-fixed-top"); 
    }
});