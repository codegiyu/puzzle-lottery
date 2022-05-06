var btn = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


var slideIndex = 1;
showSlides (slideIndex);

function plusSlides (n) {
    showSlides (slideIndex += n);
}

function showSlides (n) {
    var i;
    var x;
    var y;
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

//  For Leaderboard Slides

var lbSlideIndex = 1;
lbShowSlides (lbSlideIndex);

function lbPlusSlides (n) {
    lbShowSlides (lbSlideIndex += n);
}

function lbShowSlides (n) {
    var i;
    var x;
    var y;
    var slides = document.getElementsByClassName("lb-slides");
    var dots = document.getElementsByClassName("lb-dot");

    if (n > slides.length) {
        lbSlideIndex = 1;
    }

    if (n < 1) {
        lbSlideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
    }

    slides[lbSlideIndex - 1].style.display = "block";
    dots[lbSlideIndex - 1].className += " active";
}

function lbCurrentSlide (n) {
    lbShowSlides (lbSlideIndex = n);
}

var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
var bars = document.getElementsByClassName('bars');

function removeActive() {
    slider.classList.remove("active");
    sliderTrigger.classList.remove("change-color");
    for (x = 0; x < bars.length; x++) {
        bars[x].classList.remove("rotate");
    }
}

function addActive() {
    slider.classList.add("active");
    sliderTrigger.classList.add("change-color");
    for (x = 0; x < bars.length; x++) {
        bars[x].classList.add("rotate");
    }
}

sliderTrigger.addEventListener( "click" , function(){
    if(slider.classList.contains("active")){
        removeActive();
    }else{
        addActive();
    }
});


var menuButtons = document.getElementsByClassName("menu-buttons");

for (y = 0; y < menuButtons.length; y++) {
    menuButtons[y].addEventListener( "click" , function(){
        removeActive();
});
}
