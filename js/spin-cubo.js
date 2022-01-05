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
    
    rotateY--;

    // if (rotateX >= 40 || rotateX <= -40) {
    //     inc = inc * -1;
    // }
    // rotateX = rotateX + inc;
    // console.log(rotateX)

    console.log(inc)

    if (rotateY > 360) {
        rotateY = rotateY - 360;
    } else if (rotateY < -360) {
        rotateY = rotateY + 360;
    }
    //cubo.style.transform = "rotateY(" + rotateY + "deg)";
    rotateCubo();
    rotateYinicial = rotateY;
    getSlideIndex();
    showText();
    timeoutspin = setTimeout(spinCubo, 20);
    // console.log('função spinCubo() está a ser chamada');
    //console.log(rotateY);
    
    console.log(getSlideIndex());
}

function stopSpinning() {
    rotateYinicial = rotateY;
    clearTimeout(timeoutspin);
    //cubo.style.removeProperty("transform");
}