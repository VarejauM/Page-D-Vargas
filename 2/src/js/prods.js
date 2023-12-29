var aClicked = document.querySelectorAll('.prod-a');
var prods = document.querySelectorAll('.prods-geral');
var clickedBt = sessionStorage.getItem("clickedp");

console.log(clickedBt)


const showInfo2 = () => {
    prods[(clickedBt - 1)].classList.add('visible');
};

const abrirProds = (n) => {
    console.log(n)
    sessionStorage.setItem("clickedp", n)
};

showInfo2();

