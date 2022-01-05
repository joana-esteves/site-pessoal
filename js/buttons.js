let botaospin = document.querySelector('.spin');
let botaohandle = document.querySelector('.handle');
let buttonsclicked = false;
let active = {
    spin: false,
    handle: false
};

// AÇÕES DOS BOTÕES (ESTILO + FUNCIONALIDADE)

botaospin.addEventListener('click', function() {
    buttonsclicked = true;
    if (buttonsclicked) {
        intro.style.display='none';
    }
    if (!active.spin) {
        spinCubo(); 
    }
    active.spin = true;
    active.handle = false;
    if (active.spin) {
        botaospin.classList.add('btn-clicked');
        botaohandle.classList.remove('btn-clicked');
        active.handle = false;   
    }
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
        stopSpinning();
        showText();
    }
})