var bttBtn = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        bttBtn.addClass('show');
    } else {
        bttBtn.removeClass('show');
    }
});

bttBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

// Featured Puzzles Infinite Carousel
new Splide( '.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    arrows: false,
    pagination: false,
    autoWidth: true,
} ).mount( window.splide.Extensions );