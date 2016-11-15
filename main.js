$(function(){

    $("#main-panel .selector").on("click",function() // When I click on tab
    {
        var panelToShow=$(this).attr("rel");
        $(".current").removeClass("current");
        $(this).addClass("current");
        togglePanel(panelToShow);
    });

    $("body").on("keydown",function(e) {
      if(e.keyCode == 37) { // left
        var panel=$(".active").data("left")
        togglePanel(panel);
        $(".current").removeClass("current");
        $("[rel="+panel+"]").addClass("current");
      }
      else if(e.keyCode == 39) { // right
        var panel=$(".active").data("right")
        togglePanel(panel);
        $(".current").removeClass("current");
        $("[rel="+panel+"]").addClass("current");
      }
    });

});

function togglePanel(panel)
{
    if(!$("#"+panel).hasClass("active"))
        $(".panel.active").slideUp(0, function(){
            $(this).removeClass("active");
            $("#"+panel).slideDown(0, function(){
                $(this).addClass("active");
            });
        });
}
