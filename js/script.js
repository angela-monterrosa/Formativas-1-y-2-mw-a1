//Activador de jQuery
$(document).ready(function(){
    // Menú Responsive
    $('aside#menu-movil').css('left','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        $('header, main, footer').animate({
            left: 290,
            opacity: 0.15
        },300,'easeOutExpo');

        event.preventDefault();
    });

    $('#cerrar, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        $('header, main, footer').animate({
            left: 0,
            opacity: 1
        },300,'easeOutExpo');

        event.preventDefault();
    });



    /*  Función para detectar Scroll Down */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
            $('header').removeClass('transparente');
            $('header').addClass('negro');

            $('a#abrir').removeClass('rosado');
            $('a#abrir').addClass('blanco');

        } else {
            $('header').removeClass('negro');
            $('header').addClass('transparente');

            $('a#abrir').removeClass('blanco');
            $('a#abrir').addClass('rosado');

        }
    });


    
    /* Activador de Slick Slider */
    $('.slick-inicio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        fade: true,
        infinite: true
    });
});