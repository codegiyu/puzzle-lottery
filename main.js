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


var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
var barOne = document.getElementsByClassName('bars')[0];
var barTwo = document.getElementsByClassName('bars')[1];    
var barThree = document.getElementsByClassName('bars')[2];

function removeActive() {
    slider.classList.remove("active");
    sliderTrigger.classList.remove("change-color");
    barOne.classList.remove("rotate");
    barTwo.classList.remove("rotate");
    barThree.classList.remove("rotate");
}

function addActive() {
    slider.classList.add("active");
    sliderTrigger.classList.add("change-color");
    barOne.classList.add("rotate");
    barTwo.classList.add("rotate");
    barThree.classList.add("rotate");
}

sliderTrigger.addEventListener( "click" , function(el){
    if(slider.classList.contains("active")){
        removeActive();
    }else{
        addActive();
    }
});


var menuButtonOne = document.getElementsByClassName("menu-buttons")[0];
var menuButtonTwo = document.getElementsByClassName("menu-buttons")[1];
var menuButtonThree = document.getElementsByClassName("menu-buttons")[2];
var menuButtonFour = document.getElementsByClassName("menu-buttons")[3];

menuButtonOne.addEventListener( "click" , function(ra){
    removeActive();
});

menuButtonTwo.addEventListener( "click" , function(ra){
    removeActive();
});

menuButtonThree.addEventListener( "click" , function(ra){
    removeActive();
});

menuButtonFour.addEventListener( "click" , function(ra){
    removeActive();
});
