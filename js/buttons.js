let botaospin = document.querySelector('.spin');
let botaohandle = document.querySelector('.handle');
let buttonsclicked = false;
let active = {
    spin: false,
    handle: false
};
// let spin = false;
// let handle = false;

botaospin.addEventListener('click', function() {
    buttonsclicked = true;
    if (buttonsclicked) {
        //intro.classList.add('fade');
        intro.style.display='none';
    }
    if (!active.spin) {
        spinCubo();
        
        //startSlides();
    }
    active.spin = true;
    active.handle = false;
    if (active.spin) {
        botaospin.classList.add('btn-clicked');
        botaohandle.classList.remove('btn-clicked');
        active.handle = false;
        console.log(rotateY);
        
    }

    console.log("spin: " + active.spin);
    console.log("handle: " + active.handle);
});

botaohandle.addEventListener('click', function() {
    buttonsclicked = true;
    if (buttonsclicked) {
        intro.style.display = "none";
    }

    active.spin = false;
    active.handle = true;

    if (active.handle) {
        botaohandle.classList.add('btn-clicked');
        botaospin.classList.remove('btn-clicked');
        //stopSlides();
        stopSpinning();
        showText();
        console.log(rotateY);
    }
    console.log("spin: " + active.spin);
    console.log("handle: " + active.handle);
})