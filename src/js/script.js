$(document).ready(function() {

    $('#text-rotating').Morphext({
        animation: "animate__pulse",
        speed: 5000
    });

    const slider = tns({
        container: '.preview__inner',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        speed: 800,
        autoplayTimeout: 8000
    });
    
    $('.prev').on('click', function() {
        slider.goTo('prev');
    });
    
    $('.next').on('click', function() {
        slider.goTo('next');
    });

});