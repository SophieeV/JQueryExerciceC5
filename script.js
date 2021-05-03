$(document).ready(function(){
    $("#div").css({"position":"relative"});
    $("#input").focus(function(){
    $(document).keydown(function(move){
        switch (move.which){
        case 37:    // flèche gauche
            $("#div").animate({
                left: "-=10"
            });
            break;
        case 38:    // flèche haut
            $("#div").animate({
                top: "-=10"
            });
            break;
        case 39:    // flèche droite
            $("#div").animate({
                left: "+=10"
            });
            break;
        case 40:    // flèche du bas
            $("#div").animate({
                top: "+=10"
            });
            break;
        }
    });
  });
});
