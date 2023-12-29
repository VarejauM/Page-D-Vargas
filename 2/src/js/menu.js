var menuBt = document.querySelector('.menu-mob-bt');
var menuBlock = document.querySelector('.menu-mob-block')
var closeBlock = document.querySelectorAll('.close-block')
var mobOverlay = document.querySelector('.overlay-mob')
var verify = false;

menuBt.addEventListener('click', function () {

    if (verify) {
        anime({
            targets: menuBlock,
            right: '-170px',
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        mobOverlay.classList.remove('visible');
        verify = !verify;
    } else {
        anime({
            targets: menuBlock,
            right: '0px',
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        mobOverlay.classList.add('visible');
        verify = !verify;
    }
})

for (i = 0; i < closeBlock.length; i++) {
    closeBlock[i].addEventListener('click', function () {
        anime({
            targets: menuBlock,
            right: '-170px',
            easing: 'cubicBezier(0,1.01,.32,1)',
        });
        mobOverlay.classList.remove('visible');
        verify = false;
    });
};

const abrirHome = () => {
    window.location = '../../index.html';
};