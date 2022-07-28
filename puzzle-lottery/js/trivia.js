let slideIndex = 1;
let questionTimer;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("question-slides");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {
    slideIndex = slides.length;
}

slides[slideIndex-1].style.display = "block";
}

function nextQuestion(n) {
    clearInterval(questionTimer);

    if(n < 0){
        showSlides(slideIndex += -1);
    } else {
        showSlides(slideIndex += 1);
    }

    if(n === -1){
        questionTimer = setInterval(function() {plusSlides(n+2)}, 5000);
    } else {
        questionTimer = setInterval(function() {plusSlides(n+1)}, 5000);
    }
}

let radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        radio.parentElement.classList.remove("dark-grey-border");
        radio.parentElement.classList.add("blue-border");

        radio.previousElementSibling.classList.remove("text-grey-2");
        radio.previousElementSibling.classList.add("text-blue");
    })
})