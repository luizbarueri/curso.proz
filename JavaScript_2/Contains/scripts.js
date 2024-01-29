const numero = document.querySelector("h1");

const botao = document.querySelector("button");

let contagem = 0;
 
// function adicionarUm(){

//   contagem++;

//   numero.innerText = contagem;

// }
 
botao.addEventListener("click", () => 
{
    contagem++;
     numero.innerText = contagem; 
});