
var detalhesBt = document.querySelectorAll('.det-bt');
var gameDetails = document.querySelectorAll('.game-details');
var clickedBt = sessionStorage.getItem("clicked");


const showInfo = () => {
    gameDetails[(clickedBt - 1)].classList.add('visible-detalhe');
}

const abrirDetalhes = (n) => {
    sessionStorage.setItem("clicked", n)
    window.location = 'src/pages/detalhes.html';

};

showInfo();

