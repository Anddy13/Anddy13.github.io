$(function() {
    var nav = $("#navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            if (!nav.hasClass("scrolled")){
                nav.addClass("scrolled");
            }
        } 
        else {
            if (nav.hasClass("scrolled")){
                nav.removeClass("scrolled");
            }
        }
    });
});

