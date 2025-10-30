//Seleciona os elemento das luzes 
const luzVermelha = document.getElementById("Vermelho");
const luzAmarela = document.getElementById("Amarelo");
const luzVerde = document.getElementById("Verde");
//botões
const btnVermelho = document.getElementById("btnVermelho");
const btnAmarelo = document.getElementById("btnAmarelo");
const btnVerde = document.getElementById("btnVerde");
const btnAuto = document.getElementById("btnAuto");
const btnParar = document.getElementById("btnParar");
//variavel para o modo automatico
let intervalo;

function limpar(){
    luzVermelha.className = 'Luz';
    luzAmarela.className = 'Luz';
    luzVerde.className = 'Luz';

}

function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa", "vermelha");

}

function acenderAmarelo(){
    limpar();
    luzAmarela.classList.add("acesa", "Amarelo");

}

function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa", "verde");

}

function modoAutomatico(){
    limpar;
    let estado =0
    intervalo = setInterval(()=>{})
}