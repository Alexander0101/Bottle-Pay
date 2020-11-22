$(document).ready(function () {
    //open submenu
    $('.submenu').hide();
    $('.nav-item:has(".submenu")').hover(
        function(){
        $(this).find('.submenu').stop().fadeToggle(100);}
    );

    //button to Top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('.to-top').fadeIn();
            } else {
                $('.to-top').fadeOut();
            }
        });

        $('.to-top').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });
    });

    //change header bg
    let scrollPos = 0;
    $(document).scroll(function() { 
        scrollPos = $(this).scrollTop();
        if(scrollPos > 10) {
            $('.header').css('background', 'white');
        } else {
            $('.header').css('background', 'transparent');
        }
    });
});