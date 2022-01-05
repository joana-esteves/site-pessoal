let intro = document.querySelector('.intro');
var slideshow;
var slides = document.querySelectorAll(".text");
var timeoutspin;
var inc = 0.5;

function showText() {
    for (var b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    console.log(slideIndex)
}

function spinCubo() {
    //roda o cubo para a esquerda
    rotateY--;

    if (rotateY > 360) {
        rotateY = rotateY - 360;
    } else if (rotateY < -360) {
        rotateY = rotateY + 360;
    }
    rotateCubo();
    rotateYinicial = rotateY;
    getSlideIndex();
    showText(); //mostra o texto consoante a face que está para a frente (calculada pelo getSlideIndex())
    timeoutspin = setTimeout(spinCubo, 20);
}

function stopSpinning() {
    rotateYinicial = rotateY;
    clearTimeout(timeoutspin);
}