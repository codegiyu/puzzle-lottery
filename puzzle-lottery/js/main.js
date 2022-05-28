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


var slideIndex = 1;
showSlides (slideIndex);

function plusSlides (n) {
    showSlides (slideIndex += n);
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("calendar-slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function currentSlide (n) {
    showSlides (slideIndex = n);
}