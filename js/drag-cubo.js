let interval = null;
let isDown = false;
let startX, startY;
let rotateX = 0,
    rotateY = 0;
let rotateInicial = 90,
    rotateInicialinv;
let controlo = document.querySelector('.controlo-cubo');
let cubo = document.querySelector('.cubo');
let frente = document.querySelector('.frente');
let tras = document.querySelector('.tras');
let direita = document.querySelector('.direita');
let esquerda = document.querySelector('.esquerda');
let cima = document.querySelector('.cima');
let baixo = document.querySelector('.baixo');
let texto = document.querySelector('.main-container-text')
let popup = document.querySelector('.popup');
let popupText = document.querySelector('.popup>span');

var rotateXinicial = 0,
    rotateYinicial = 0;
let rx = 0;
let touching = false;

var slideIndex = 0;

let rotateXfrente, rotateYfrente;
let rotateXtras, rotateYtras;
let rotateXdireita, rotateYdireita;
let rotateXesquerda, rotateYesquerda;
let rotateXcima, rotateZcima;
let rotateXbaixo, rotateZbaixo;

function getSlideIndex() {
    if ((rotateY >= -45 && rotateY <= 44) || (rotateY >= -360 && rotateY <= -316) || (rotateY >= 316 && rotateY <= 360)) { //frente
        slideIndex = 0;
    } else if ((rotateY >= -135 && rotateY <= -46) || (rotateY >= 226 && rotateY <= 315)) { //direita
        slideIndex = 1;
    } else if ((rotateY >= -225 && rotateY <= -136) || (rotateY >= 136 && rotateY <= 225)) { //tras
        slideIndex = 2;
    } else if ((rotateY >= -315 && rotateY <= -226) || (rotateY >= 45 && rotateY <= 135)) { //esquerda
        slideIndex = 3;
    }
    return slideIndex;
}

function mouseDown(e) {
    isDown = true;
    if (!active.handle) return;
    cubo.classList.add('active');
    texto.classList.add('fade');
    popup.classList.add('fade-in');
    if (!touching) {
        startX = e.pageX;
        startY = e.pageY;
    } else {
        var touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
    }
}

function mouseLeave() {
    isDown = false;
    if (!active.handle) return;
    cubo.classList.remove('active');
    texto.classList.remove('fade');
    popup.classList.remove('fade-in');
    controlo.removeAttribute("style");
    rotateXinicial = rotateX;
    rotateYinicial = rotateY;
}

function mouseUp() {
    isDown = false;
    if (!active.handle) return;
    cubo.classList.remove('active');
    texto.classList.remove('fade');
    popup.classList.remove('fade-in');
    rotateXinicial = rotateX;
    rotateYinicial = rotateY;
    console.log("mouse up");

    slideIndex = getSlideIndex();
    showText();
}

function rotateCubo() {

    //cálculo das variáveis que fazem rodar o cubo consoante o rotateX e o rotateY
    let rotateXc = 90 + rotateX;
    let rotateXcinv = rotateXc - 180;
    let rotateZc = rotateY * -1;
    let rotateZcinv = rotateY - 180;
    let rotateYd = rotateY + 90;
    let rotateYdinv = rotateYd - 180;
    let rotateYinv = rotateY - 180;
    rotateInicialinv = rotateInicial - 180;


    //aplicar as variáveis às seis faces
    frente.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(50px)';
    tras.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateYinv + 'deg) translateZ(50px)';
    direita.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateYd + 'deg) translateZ(50px)';
    esquerda.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateYdinv + 'deg) translateZ(50px)';
    cima.style.transform = 'rotateX(' + rotateXc + 'deg) rotateZ(' + rotateZc + 'deg) translateZ(50px)';
    baixo.style.transform = 'rotateX(' + rotateXcinv + 'deg) rotateZ(' + rotateZcinv + 'deg) translateZ(50px)';
}


function mouseMove(e) {
    if (!isDown) return;
    if (!active.handle) return;
    e.preventDefault();

    var popupTitulo = "";

    if (getSlideIndex() == 0) {
        popupTitulo = "About";
    } else if (getSlideIndex() == 1) {
        popupTitulo = "Interests";
    } else if (getSlideIndex() == 2) {
        popupTitulo = "Projects";
    } else {
        popupTitulo = "Links";
    }
    popupText.innerHTML = popupTitulo;

    var x, y;

    if (!touching) {
        x = e.pageX;
        y = e.pageY;
    } else {
        var touch = e.touches[0];
        x = touch.pageX;
        y = touch.pageY;
    }

    const distX = x - startX;
    const distY = y - startY;

    rotateX = rotateXinicial + distY * -1;
    rotateY = rotateYinicial + distX * 1;

    // meter limite no rotateX 
    // máximo 45 mínimo -45
    var max = 45,
        min = -45;

    if (rotateX > max) {
        rotateX = max;
    } else if (rotateX < min) {
        rotateX = min;
    } else {
        rotateX = rotateXinicial + distY * -1;
        rotateY = rotateYinicial + distX * 1;
    }

    if (rotateY > 360) {
        rotateY = rotateY - 360;
    } else if (rotateY < -360) {
        rotateY = rotateY + 360;
    }

    rotateCubo();
}



controlo.addEventListener('mouseover', () => {
    isDown = false;
    if (!active.handle) return;
    controlo.setAttribute("style", "cursor:grab;");
}, false)

////
controlo.addEventListener('mousedown', (e) => { 
    touching = false;
    console.log('clique')
    mouseDown(e);
}, false)
controlo.addEventListener('touchstart', (e) => {
    touching = true;
    console.log('touch')
    mouseDown(e);
}, false)

////
controlo.addEventListener('mouseleave', () => { 
    mouseLeave();
}, false)

////
controlo.addEventListener('mouseup', () => {
    mouseUp();
}, false)
controlo.addEventListener('touchend', () => {
    touching = false;
    mouseUp();
}, false)

////
controlo.addEventListener('mousemove', (e) => {
    mouseMove(e);
}, false)
controlo.addEventListener('touchmove', (e) => {
    mouseMove(e);
}, false)