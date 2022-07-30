let slideIndex = 1;
let slides = document.getElementsByClassName("question-slides");
let questionTimer;
let timeLoaded;
let clickTime;
let bonusTime;
let pointsAchieved = 0;
let answerOne;
let answerTwo;
let answerThree;
let answerFour;
let answerFive;
let secondsCountdownOne;
let secondsCountdownTwo;
let secondsCountdownThree;
let secondsCountdownFour;
let secondsCountdownFive;
let millisecondsCountdownOne;
let millisecondsCountdownTwo;
let millisecondsCountdownThree;
let millisecondsCountdownFour;
let millisecondsCountdownFive;
let secondsOne = 10;
let secondsTwo = 10;
let secondsThree = 10;
let secondsFour = 10;
let secondsFive = 10;
let millisecondsOne = 1000;
let millisecondsTwo = 1000;
let millisecondsThree = 1000;
let millisecondsFour = 1000;
let millisecondsFive = 1000;
let countdownCircle = document.querySelectorAll(".countdown-wrap");
let countdownText = document.querySelectorAll(".timer");
let secondsText = document.querySelectorAll(".timer-seconds");
let millisecondsText = document.querySelectorAll(".timer-milliseconds");
let trackOne = document.querySelectorAll(".question-track-1");
let trackTwo = document.querySelectorAll(".question-track-2");
let trackThree = document.querySelectorAll(".question-track-3");
let trackFour = document.querySelectorAll(".question-track-4");
let trackFive = document.querySelectorAll(".question-track-5");
answerOne = "Madrid";
answerTwo = "Black Widow";
answerThree = "Femur";
answerFour = "Netherlands";
answerFive = "1995";

window.addEventListener("load", () => {
    showSlides(slideIndex);
    questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
})

function showSlides() {
    let i;
    
    if (slideIndex == slides.length +1) {
        clearInterval(questionTimer);
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slides[slideIndex-1].style.display = "block";
        timeLoaded = new Date();
        console.log(slideIndex);
    }
    
    setTimeout( () => {
        if (slideIndex == 1) {
            secondsCountdownOne = setInterval(function() {
                countdownCircle[0].classList.replace("grey-border", "green-border");
                countdownText[0].classList.replace("text-white", "text-green");
                secondsOne--;
                if (secondsOne == 0) {
                    clearInterval(secondsCountdownOne);
                }
                if (secondsOne == 4) {
                    countdownCircle[0].classList.replace("green-border", "red-border");
                    countdownText[0].classList.replace("text-green", "text-red");
                }
                secondsText[0].innerHTML = secondsOne;
            }, 1000);
        } else if (slideIndex == 2) {
            secondsCountdownTwo = setInterval(function() {
                countdownCircle[1].classList.replace("grey-border", "green-border");
                countdownText[1].classList.replace("text-white", "text-green");
                secondsTwo--;
                if (secondsTwo == 0) {
                    clearInterval(secondsCountdownTwo);
                }
                if (secondsTwo == 4) {
                    countdownCircle[1].classList.replace("green-border", "red-border");
                    countdownText[1].classList.replace("text-green", "text-red");
                }
                secondsText[1].innerHTML = secondsTwo;
            }, 1000);
        } else if (slideIndex == 3) {
            secondsCountdownThree = setInterval(function() {
                countdownCircle[2].classList.replace("grey-border", "green-border");
                countdownText[2].classList.replace("text-white", "text-green");
                secondsThree--;
                if (secondsThree == 0) {
                    clearInterval(secondsCountdownThree);
                }
                if (secondsThree == 4) {
                    countdownCircle[2].classList.replace("green-border", "red-border");
                    countdownText[2].classList.replace("text-green", "text-red");
                }
                secondsText[2].innerHTML = secondsThree;
            }, 1000);
        } else if (slideIndex == 4) {
            secondsCountdownFour = setInterval(function() {
                countdownCircle[3].classList.replace("grey-border", "green-border");
                countdownText[3].classList.replace("text-white", "text-green");
                secondsFour--;
                if (secondsFour == 0) {
                    clearInterval(secondsCountdownFour);
                }
                if (secondsFour == 4) {
                    countdownCircle[3].classList.replace("green-border", "red-border");
                    countdownText[3].classList.replace("text-green", "text-red");
                }
                secondsText[3].innerHTML = secondsFour;
            }, 1000);
        } else if (slideIndex == 5) {
            secondsCountdownFive = setInterval(function() {
                countdownCircle[4].classList.replace("grey-border", "green-border");
                countdownText[4].classList.replace("text-white", "text-green");
                secondsFive--;
                if (secondsFive == 0) {
                    clearInterval(secondsCountdownFive);
                }
                if (secondsFive == 4) {
                    countdownCircle[4].classList.replace("green-border", "red-border");
                    countdownText[4].classList.replace("text-green", "text-red");
                }
                secondsText[4].innerHTML = secondsFive;
            }, 1000);
        }
    }, 3000);
}

function showAnswer(n) {
    console.log(`slideIndex is ${slideIndex}`)
    let allOptions = document.querySelectorAll(`.q${n}-options`);
    allOptions.forEach(option => {
        option.checked = true;
        option.parentElement.classList.replace("dark-grey-border", "red-border");
        option.previousElementSibling.classList.replace("text-grey-2", "text-red");
        option.style.backgroundImage = "url('img/redx-1.png')";
    })
    if (n == 1) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerOne}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackOne.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 2) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerTwo}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackTwo.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 3) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerThree}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackThree.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 4) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerFour}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackFour.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    } else if (n == 5) {
        let correctOption = document.querySelector(`.q${n}-options[value='${answerFive}']`);
        correctOption.parentElement.classList.replace("red-border", "green-border");
        correctOption.previousElementSibling.classList.replace("text-red", "text-green");
        correctOption.checked = true;
        correctOption.style.backgroundImage = "url('img/green-tick.png')";
        trackFive.forEach(track => {
            track.classList.replace("bg-white", "bg-red");
            track.classList.replace("bg-neutral-1", "bg-red");
        })
    }
    clearInterval(questionTimer);
    questionTimer = setInterval(function() { nextQuestion(2)}, 2000);
}

function nextQuestion(n) {
    clearInterval(questionTimer);
    
    if (slideIndex != slides.length + 1) {
        showSlides(slideIndex += 1);

        questionTimer = setInterval(function() { showAnswer(slideIndex)}, 13000);
    }
}

let radios = document.querySelectorAll('input[type="checkbox"]');

radios.forEach(radio => {
    radio.addEventListener("click", () => {
        let radioName = radio.getAttribute("class");
        let radioQuestion = radioName.charAt(1);

        if (radioQuestion == 1) {
            clearInterval(secondsCountdownOne);
        } else if (radioQuestion == 2) {
            clearInterval(secondsCountdownTwo);
        } else if (radioQuestion == 3) {
            clearInterval(secondsCountdownThree);
        } else if (radioQuestion == 4) {
            clearInterval(secondsCountdownFour);
        } else if (radioQuestion == 5) {
            clearInterval(secondsCountdownFive);
        }
        
        radio.parentElement.classList.replace("dark-grey-border", "blue-border");
        radio.previousElementSibling.classList.replace("text-grey-2", "text-blue");

        let radioGroup = document.getElementsByClassName(radioName);

        for (let i = 0; i < radioGroup.length; i++) {
            radioGroup[i].disabled = true;
        }

        clickTime = new Date();
        bonusTime = clickTime - timeLoaded;

        if (bonusTime - 3000 < 0) {
            pointsAchieved += 100;
        } else {
            pointsAchieved += Math.floor((10000 - (bonusTime - 3000)) / 100);
        }

        console.log(bonusTime);
        console.log(pointsAchieved);
        clearInterval(questionTimer);
        questionTimer = setInterval(function() { nextQuestion(2)}, 3000);

        setTimeout( () => {
            if (radioQuestion == 1) {
                if (radio.value == answerOne) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackOne.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerOne}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackOne.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }
            } else if (radioQuestion == 2) {
                if (radio.value == answerTwo) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackTwo.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerTwo}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackTwo.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 3) {
                if (radio.value == answerThree) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackThree.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerThree}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackThree.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 4) {
                if (radio.value == answerFour) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackFour.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerFour}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackFour.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            } else if (radioQuestion == 5) {
                if (radio.value == answerFive) {
                    radio.parentElement.classList.replace("blue-border", "green-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-green");
                    radio.style.backgroundImage = "url('img/green-tick.png')";
                    pointsAchieved += 100;
                    trackFive.forEach(track => {
                        track.classList.replace("bg-white", "bg-green");
                        track.classList.replace("bg-neutral-1", "bg-green");
                    })
                } else {
                    radio.parentElement.classList.replace("blue-border", "red-border");
                    radio.previousElementSibling.classList.replace("text-blue", "text-red");
                    radio.style.backgroundImage = "url('img/redx-1.png')";
                    
                    let correctOption = document.querySelector(`.${radioName}[value='${answerFive}']`);
                    correctOption.parentElement.classList.replace("dark-grey-border", "green-border");
                    correctOption.previousElementSibling.classList.replace("text-grey-2", "text-green");
                    correctOption.checked = true;
                    correctOption.style.backgroundImage = "url('img/green-tick.png')";
                    trackFive.forEach(track => {
                        track.classList.replace("bg-white", "bg-red");
                        track.classList.replace("bg-neutral-1", "bg-red");
                    })
                }            
            }
        }, 1000)
    })
})