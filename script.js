
let botao = window.document.querySelector("input")
botao.addEventListener('click',clicou)

function clicou(){
    let nome = window.prompt("Qual é o seu nome?")
    alert(`Olá ${nome}, ! É um prazer te conhecer!`)
}