//let spin=document.querySelector('.spin');
let intro = document.querySelector('.intro');

// spin.addEventListener('click',function(){
//     intro.style.display="none";
//     showSlides();
// })

var slideshow;
var slides = document.querySelectorAll(".text");

function startSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].classList.add('fade-in');
    //slides[slideIndex].style.display = "block";
    console.log(slideIndex);
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0
    }
    slideshow = setTimeout(startSlides, 2000); // Change image every 2 seconds
}

function stopSlides() {
    clearTimeout(slideshow);
    for (var a = 0; a < slides.length; a++) {
        slides[a].style.display = "none";
    }
    var s;
    if (slideIndex == 0) {
        s = slideIndex;
    } else {
        s = slideIndex - 1;
    }
    slides[s].style.display = "block";
    slideIndex = s;
    console.log(slideIndex)
}

function showText() {
    for (var b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    console.log(slideIndex)
}